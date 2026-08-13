# /home/obed/Documents/bootcamp-waitlist/backend/app/config.py
"""
Central app configuration. Loads from environment variables / .env file.
Never hardcode secrets here — this file only defines WHERE to read them from.
"""
from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    # --- App ---
    ENVIRONMENT: str = "development"  # development | production
    APP_NAME: str = "Bootcamp Waitlist API"
    API_PREFIX: str = "/api/v1"

    # --- Database (Supabase Postgres connection string) ---
    # Format: postgresql+asyncpg://postgres:<password>@<host>:5432/postgres
    # Get this from Supabase: Project Settings -> Database -> Connection string -> URI
    # IMPORTANT: swap "postgresql://" for "postgresql+asyncpg://"
    DATABASE_URL: str

    # --- CORS ---
    # Comma-separated list of allowed frontend origins, e.g.:
    # "http://localhost:5173,https://bootcamp-waitlist.vercel.app"
    ALLOWED_ORIGINS: str = "http://localhost:5173"

    # --- Admin (for the stats/export endpoints built later) ---
    ADMIN_API_KEY: str = "change-me-in-production"

    @property
    def allowed_origins_list(self) -> list[str]:
        return [origin.strip() for origin in self.ALLOWED_ORIGINS.split(",") if origin.strip()]

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT.lower() == "production"


@lru_cache
def get_settings() -> Settings:
    """Cached settings instance — import and call this, don't instantiate Settings() directly."""
    return Settings()
