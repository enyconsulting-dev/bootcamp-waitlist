"""Transactional email integration for waitlist confirmations."""
from typing import Any

import httpx

from app.config import get_settings

RESEND_EMAILS_URL = "https://api.resend.com/emails"


def _sender_address(value: str) -> str:
    """Allow a verified domain in configuration while sending a valid mailbox."""
    sender = value.strip()
    return sender if "@" in sender else f"hello@{sender}"


async def send_waitlist_confirmation(signup_data: dict[str, Any]) -> bool:
    """Send the confirmation email, returning False when delivery is unavailable."""
    settings = get_settings()
    if not settings.RESEND_API_KEY:
        print("[Resend] Skipping email: RESEND_API_KEY is not configured")
        return False

    first_name = signup_data.get("first_name", "there")
    payload = {
        "from": _sender_address(settings.RESEND_FROM_EMAIL),
        "to": [signup_data.get("email", "")],
        "subject": "You're on the 30-Day Consulting Offer Bootcamp waitlist",
        "html": f"""
        <div style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #0B1020; max-width: 600px;\">
          <h1 style=\"color: #9C7C1A;\">Hi, {first_name}.</h1>
          <p>You’re officially on the waitlist!</p>
          <p>Once enrollment opens, we’ll send you an email with the details you need to secure your <b>50% Early Bird Offer.</b></p>
          <p>Keep an eye on your inbox so you don’t miss your chance to join us at the early-bird price!.</p>
          <p>Business Analysis School</p>
        </div>
        """,
    }
    headers = {
        "Authorization": f"Bearer {settings.RESEND_API_KEY}",
        "Content-Type": "application/json",
    }

    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.post(RESEND_EMAILS_URL, headers=headers, json=payload)
        response.raise_for_status()
        print(f"[Resend] Sent confirmation to {signup_data.get('email', '')}")
        return True
    except httpx.HTTPStatusError as exc:
        print(f"[Resend] Email delivery failed with HTTP {exc.response.status_code}: {exc.response.text}")
    except httpx.HTTPError as exc:
        print(f"[Resend] Email delivery failed: {exc}")

    return False