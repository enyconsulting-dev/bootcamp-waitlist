# /home/obed/Documents/bootcamp-waitlist/backend/app/utils/country_currency.py
"""
Segmentation logic from the PDF spec:
"If Country = Nigeria -> tag ngn-audience -> send Paystack link.
 All others -> tag usd-audience -> send Stripe link."
"""

NIGERIA_NAMES = {"nigeria", "ng"}

NGN_AUDIENCE = "ngn-audience"
USD_AUDIENCE = "usd-audience"


def resolve_currency_tag(country: str) -> str:
    """Given a raw country string from the form, return the CRM currency tag."""
    normalized = country.strip().lower()
    return NGN_AUDIENCE if normalized in NIGERIA_NAMES else USD_AUDIENCE
