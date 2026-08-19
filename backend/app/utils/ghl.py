"""GoHighLevel contact integration for waitlist leads."""
from typing import Any

import httpx

from app.config import get_settings

GHL_CONTACTS_URL = "https://services.leadconnectorhq.com/contacts/"
GHL_API_VERSION = "2021-07-28"


async def create_waitlist_contact(signup_data: dict[str, Any]) -> bool:
    """Create a contact in GHL, returning False when delivery is unavailable."""
    settings = get_settings()
    token = settings.GHL_PRIVATE_INTEGRATION_TOKEN
    location_id = settings.GHL_LOCATION_ID

    if not token or not location_id:
        print("[GHL] Skipping contact: GHL credentials are not configured")
        return False

    payload = {
        "firstName": signup_data.get("first_name", ""),
        "lastName": signup_data.get("last_name", ""),
        "email": signup_data.get("email", ""),
        "phone": signup_data.get("whatsapp_number", ""),
        "country": signup_data.get("country", ""),
        "locationId": location_id,
        "source": "Bootcamp Waitlist",
        "tags": [
            "offer-bootcamp-waitlist",
            signup_data.get("currency_tag", ""),
        ],
    }
    payload["tags"] = [tag for tag in payload["tags"] if tag]

    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
        "Version": GHL_API_VERSION,
    }

    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.post(GHL_CONTACTS_URL, headers=headers, json=payload)
        response.raise_for_status()
        contact_id = response.json().get("contact", {}).get("id", "unknown")
        print(f"[GHL] Created contact {contact_id} for {signup_data.get('email', '')}")
        return True
    except httpx.HTTPStatusError as exc:
        print(f"[GHL] Contact creation failed with HTTP {exc.response.status_code}: {exc.response.text}")
    except (httpx.HTTPError, ValueError) as exc:
        print(f"[GHL] Contact creation failed: {exc}")

    return False