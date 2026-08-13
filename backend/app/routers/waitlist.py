# /home/obed/Documents/bootcamp-waitlist/backend/app/routers/waitlist.py
"""
Waitlist endpoints.

POST /api/v1/waitlist        -> create a signup (public, called by the form)
GET  /api/v1/waitlist/stats  -> aggregate counts (public — used for social proof numbers later)

Admin-only endpoints (list/export signups) are a Phase 2 item — see
INSTRUCTIONS_FOR_AI_AGENT.md before building those, since they need the
ADMIN_API_KEY auth dependency, not open access.
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_db
from app.schemas import WaitlistCreate, WaitlistResponse, WaitlistStats
from app.services import waitlist_service
from app.services.waitlist_service import DuplicateEmailError

router = APIRouter(prefix="/waitlist", tags=["waitlist"])


@router.post("", response_model=WaitlistResponse, status_code=status.HTTP_201_CREATED)
async def join_waitlist(
    payload: WaitlistCreate,
    db: AsyncSession = Depends(get_db),
) -> WaitlistResponse:
    try:
        signup = await waitlist_service.create_signup(db, payload)
    except DuplicateEmailError:
        # 200-style "already on it" rather than a hard error — better UX for a form
        # that people might double-submit. Frontend should show a friendly message.
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="This email is already on the waitlist.",
        ) from None
    return WaitlistResponse.model_validate(signup)


@router.get("/stats", response_model=WaitlistStats)
async def waitlist_stats(db: AsyncSession = Depends(get_db)) -> WaitlistStats:
    return await waitlist_service.get_stats(db)
