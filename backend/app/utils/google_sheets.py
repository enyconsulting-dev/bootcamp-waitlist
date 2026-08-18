# /home/obed/Documents/bootcamp-waitlist/backend/app/utils/google_sheets.py
"""
Google Sheets integration for waitlist lead funnel.
Handles authentication and writing waitlist signups to a Google Sheet.
"""
import os
from typing import Any, Dict

import gspread
from google.oauth2.service_account import Credentials

# Scopes needed for Google Sheets access
SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
]

def get_gsheet_client():
    """
    Authenticates and returns a gspread client using service account credentials.
    Expects GOOGLE_SHEETS_CREDENTIALS_JSON environment variable to contain
    the full JSON credentials string.
    """
    creds_json = os.getenv("GOOGLE_SHEETS_CREDENTIALS_JSON")
    if not creds_json:
        raise ValueError(
            "GOOGLE_SHEETS_CREDENTIALS_JSON environment variable not set. "
            "Please configure it in your Render dashboard."
        )

    # Parse JSON string from env var
    import json
    creds_dict = json.loads(creds_json)
    credentials = Credentials.from_service_account_info(creds_dict, scopes=SCOPES)

    # Authenticate and return client
    return gspread.authorize(credentials)

def append_waitlist_to_sheet(signup_data: Dict[str, Any]) -> bool:
    """
    Appends a waitlist signup to the configured Google Sheet.
    Explicitly finds the next empty row to avoid overwriting issues.

    Args:
        signup_data: Dict containing waitlist signup fields

    Returns:
        True if successful, False otherwise
    """
    try:
        client = get_gsheet_client()

        # Get spreadsheet ID from env var
        spreadsheet_id = os.getenv("GOOGLE_SHEETS_SPREADSHEET_ID")
        if not spreadsheet_id:
            raise ValueError("GOOGLE_SHEETS_SPREADSHEET_ID not set")

        # Open the spreadsheet and select the first worksheet
        spreadsheet = client.open_by_key(spreadsheet_id)
        worksheet = spreadsheet.sheet1  # Gets first worksheet

        # Prepare row data in the same order as your headers (A1:E1)
        # A: First Name, B: Last Name, C: Email Address, D: Country, E: WhatsApp Number
        row = [
            signup_data.get("first_name", ""),     # A: First Name
            signup_data.get("last_name", ""),      # B: Last Name
            signup_data.get("email", ""),          # C: Email Address
            signup_data.get("country", ""),        # D: Country
            signup_data.get("whatsapp_number", ""), # E: WhatsApp Number
        ]

        # Find the next empty row by checking column A (First Name)
        # Start from row 2 (since row 1 is headers)
        col_a_values = worksheet.col_values(1)  # Get all values in column A
        next_row = len([v for v in col_a_values if v != ""]) + 1

        # If the sheet is completely empty (no headers even), start at row 1
        # But we expect headers in row 1, so if row 1 is empty, we still start at row 2
        if next_row < 2:
            next_row = 2

        print(f"[GoogleSheets] Found next empty row: {next_row} (based on column A having {len([v for v in col_a_values if v != ''])} non-empty values)")

        # Update the range starting at the next empty row
        cell_range = f"A{next_row}:E{next_row}"
        worksheet.update(cell_range, [row], value_input_option="USER_ENTERED")
        print(f"[GoogleSheets] Updated range {cell_range} with data: {row}")

        return True

    except Exception as e:
        # In production, you'd want to log this properly
        # Using print for simplicity; consider using logging module in future
        print(f"Error writing to Google Sheets: {str(e)}")
        import traceback
        traceback.print_exc()
        return False