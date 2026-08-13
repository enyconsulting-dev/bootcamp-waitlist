# /home/obed/Documents/bootcamp-waitlist/backend/app/schemas.py
"""
Pydantic schemas — the contract between frontend and backend.
Keep these in sync with frontend/src/types/waitlist.ts.
"""
import uuid
from datetime import datetime

from pydantic import BaseModel, EmailStr, Field, field_validator


class WaitlistCreate(BaseModel):
    """Payload the frontend form submits."""

    first_name: str = Field(min_length=1, max_length=100)
    last_name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    country: str = Field(min_length=1, max_length=100)
    whatsapp_number: str = Field(min_length=6, max_length=30)

    @field_validator("first_name", "last_name", "country")
    def strip_whitespace(cls, v):
        v = v.strip()
        if not v:
            raise ValueError("This field cannot be empty.")
        return v

    @field_validator("whatsapp_number")
    def basic_phone_shape(cls, v):
        # Deliberately loose here — full validation (phonenumbers lib) is a Phase 2 item,
        # see INSTRUCTIONS_FOR_AI_AGENT.md. This just blocks obvious junk input.
        cleaned = v.strip().replace(" ", "")
        digits_only = cleaned.lstrip("+")
        if not digits_only.isdigit():
            raise ValueError("WhatsApp number must contain only digits (and an optional leading +).")
        if len(digits_only) < 7:
            raise ValueError("WhatsApp number looks too short — include your country code.")
        return cleaned

    class Config:
        pass


class WaitlistResponse(BaseModel):
    id: uuid.UUID
    first_name: str
    email: EmailStr
    country: str
    currency_tag: str
    created_at: datetime

    class Config:
        from_attributes = True


class WaitlistStats(BaseModel):
    total_signups: int
    ngn_audience: int
    usd_audience: int

    class Config:
        pass
