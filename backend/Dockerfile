# /home/obed/Documents/bootcamp-waitlist/backend/Dockerfile
FROM python:3.14-slim

WORKDIR /app

# Install system dependencies for building Python packages with Rust extensions
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    rustc \
    cargo \
    libssl-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Create writable directories for Rust/Cargo to avoid read-only file system issues
# Redirect ALL Rust/Cargo directories to writable locations in /tmp
ENV CARGO_HOME=/tmp/cargo-home
ENV RUSTUP_HOME=/tmp/rustup-home
ENV HOME=/tmp/home
RUN mkdir -p /tmp/cargo-home /tmp/rustup-home /tmp/home && \
    chmod -R 777 /tmp/cargo-home /tmp/rustup-home /tmp/home

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip setuptools wheel && \
    pip install --no-cache-dir -r requirements.txt

COPY app ./app

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
