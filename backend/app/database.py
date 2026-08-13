# /home/obed/Documents/bootcamp-waitlist/backend/app/database.py
"""
Async SQLAlchemy engine + session factory for Supabase Postgres.
Provides get_db() dependency for use in FastAPI routes.
"""
from collections.abc import AsyncGenerator

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase

from app.config import get_settings

settings = get_settings()

# pool_pre_ping avoids stale-connection errors against Supabase's pooler
engine = create_async_engine(
    settings.DATABASE_URL,
    echo=not settings.is_production,
    pool_pre_ping=True,
    pool_size=5,
    max_overflow=10,
)

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)


class Base(DeclarativeBase):
    """Base class for all ORM models."""
    pass


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """FastAPI dependency — yields a DB session, always closes it after the request."""
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()
