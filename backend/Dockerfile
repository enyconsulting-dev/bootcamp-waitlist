# /home/obed/Documents/bootcamp-waitlist/backend/Dockerfile
FROM python:3.14-slim

WORKDIR /app

# Install system dependencies for building Python packages including psycopg2-binary
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        build-essential \
        libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# Set environment variable to allow PyO3 to work with newer Python versions
ENV PYO3_USE_ABI3_FORWARD_COMPATIBILITY=1

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip setuptools wheel && \
    pip install --no-cache-dir -r requirements.txt

COPY app ./app

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
