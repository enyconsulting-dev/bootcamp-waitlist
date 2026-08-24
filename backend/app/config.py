# /home/obed/Documents/bootcamp-waitlist/backend/app/config.py
"""
Central app configuration. Loads from environment variables / .env file.
Never hardcode secrets here — this file only defines WHERE to read them from.
"""
from functools import lru_cache
from pydantic import AliasChoices, Field
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    model_config = {
        "env_file": ".env",
        "extra": "ignore"
    }

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
    ALLOWED_ORIGIN_REGEX: str = (
        r"https://.*\.vercel\.app$|"
        r"https://(www\.)?businessanalysisschool\.com$"
    )

    # --- Admin (for the stats/export endpoints built later) ---
    ADMIN_API_KEY: str = "change-me-in-production"

    # --- GoHighLevel CRM ---
    # Optional locally; set both values in Render to enable lead delivery.
    GHL_PRIVATE_INTEGRATION_TOKEN: str | None = None
    GHL_LOCATION_ID: str | None = None

    # --- Email (Resend) ---
    RESEND_API_KEY: str | None = Field(
        default=None,
        validation_alias=AliasChoices("RESEND_API_KEY", "Resend_API_KEY"),
    )
    RESEND_FROM_EMAIL: str = Field(
        default="hello@businessanalysisschool.com",
        validation_alias=AliasChoices("RESEND_FROM_EMAIL", "Resend_FROM_EMAIL"),
    )

    @property
    def allowed_origins_list(self) -> list[str]:
        return [origin.strip().rstrip("/") for origin in self.ALLOWED_ORIGINS.split(",") if origin.strip()]

    @property
    def allowed_origin_regex(self) -> str:
        # An empty Render variable must not silently disable production CORS.
        return self.ALLOWED_ORIGIN_REGEX.strip() or (
            r"https://.*\.vercel\.app$|"
            r"https://(www\.)?businessanalysisschool\.com$"
        )

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT.lower() == "production"


@lru_cache
def get_settings() -> Settings:
    """Cached settings instance — import and call this, don't instantiate Settings() directly."""
    return Settings()
