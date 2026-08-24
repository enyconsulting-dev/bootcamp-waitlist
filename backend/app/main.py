# /home/obed/Documents/bootcamp-waitlist/backend/app/main.py
"""
App entrypoint. Run locally with:
    uvicorn app.main:app --reload --port 8000

In production (Render), the start command in render.yaml handles this.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import get_settings
from app.routers import waitlist

settings = get_settings()

app = FastAPI(
    title=settings.APP_NAME,
    description="Backend for the 30-Day Consulting Offer Bootcamp waitlist page.",
    version="0.1.0",
    docs_url="/docs" if not settings.is_production else None,  # hide swagger in prod
    redoc_url=None,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_origin_regex=settings.allowed_origin_regex,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

app.include_router(waitlist.router, prefix=settings.API_PREFIX)


@app.get("/health", tags=["health"])
async def health_check():
    """Render pings this to confirm the service is alive."""
    return {"status": "ok", "environment": settings.ENVIRONMENT}


@app.get("/", tags=["health"])
async def root():
    return {"message": settings.APP_NAME, "docs": "/docs"}
