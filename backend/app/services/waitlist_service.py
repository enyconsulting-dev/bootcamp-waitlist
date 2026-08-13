# /home/obed/Documents/bootcamp-waitlist/backend/app/services/waitlist_service.py
"""
Business logic for waitlist signups, kept separate from the route handler
so it's independently testable and reusable (e.g. by a future admin CLI or import script).
"""
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models import WaitlistSignup
from app.schemas import WaitlistCreate, WaitlistStats
from app.utils.country_currency import NGN_AUDIENCE, USD_AUDIENCE, resolve_currency_tag


class DuplicateEmailError(Exception):
    """Raised when an email is already on the waitlist."""
    def __init__(self, email: str):
        self.email = email
        super().__init__(f"Email already on waitlist: {email}")


async def get_by_email(db: AsyncSession, email: str) -> WaitlistSignup | None:
    result = await db.execute(
        select(WaitlistSignup).where(func.lower(WaitlistSignup.email) == email.lower())
    )
    return result.scalar_one_or_none()


async def create_signup(db: AsyncSession, payload: WaitlistCreate) -> WaitlistSignup:
    existing = await get_by_email(db, payload.email)
    if existing is not None:
        raise DuplicateEmailError(payload.email)

    signup = WaitlistSignup(
        first_name=payload.first_name,
        last_name=payload.last_name,
        email=payload.email.lower(),
        country=payload.country,
        whatsapp_number=payload.whatsapp_number,
        currency_tag=resolve_currency_tag(payload.country),
    )
    db.add(signup)
    await db.commit()
    await db.refresh(signup)
    return signup


async def get_stats(db: AsyncSession) -> WaitlistStats:
    total = await db.scalar(select(func.count()).select_from(WaitlistSignup))
    ngn = await db.scalar(
        select(func.count()).select_from(WaitlistSignup).where(WaitlistSignup.currency_tag == NGN_AUDIENCE)
    )
    usd = await db.scalar(
        select(func.count()).select_from(WaitlistSignup).where(WaitlistSignup.currency_tag == USD_AUDIENCE)
    )
    return WaitlistStats(total_signups=total or 0, ngn_audience=ngn or 0, usd_audience=usd or 0)
