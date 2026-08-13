# /home/obed/Documents/bootcamp-waitlist/backend/app/models.py
"""
ORM models. This must stay in sync with migrations/001_create_waitlist_table.sql —
if you change a column here, write a matching migration file, don't just edit the table
in the Supabase dashboard and forget to update this.
"""
import uuid
from datetime import datetime

from sqlalchemy import DateTime, String, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class WaitlistSignup(Base):
    __tablename__ = "waitlist_signups"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=uuid.uuid4
    )
    first_name: Mapped[str] = mapped_column(String(100), nullable=False)
    last_name: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[str] = mapped_column(String(255), nullable=False, unique=True, index=True)
    country: Mapped[str] = mapped_column(String(100), nullable=False)
    whatsapp_number: Mapped[str] = mapped_column(String(30), nullable=False)

    # Derived at insert time — drives which enrollment link / price gets sent Sept 1
    currency_tag: Mapped[str] = mapped_column(String(20), nullable=False)  # "ngn-audience" | "usd-audience"
    crm_tag: Mapped[str] = mapped_column(String(50), nullable=False, default="offer-bootcamp-waitlist")

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False
    )
