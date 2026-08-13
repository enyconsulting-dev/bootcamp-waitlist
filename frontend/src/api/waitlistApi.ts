// /home/obed/Documents/bootcamp-waitlist/frontend/src/api/waitlistApi.ts
// Thin fetch wrapper around the FastAPI backend. Reads the base URL from
// VITE_API_URL (set in .env.local for dev, and in Vercel env vars for prod).

import type { ApiErrorResponse, WaitlistFormData, WaitlistResponse, WaitlistStats } from "../types/waitlist";

const API_BASE_URL = import.meta.env.VITE_API_URL as string;

if (!API_BASE_URL) {
  // Fails loudly in dev rather than silently hitting a relative "/undefined" URL
  console.error("VITE_API_URL is not set. Check your .env.local file.");
}

export class WaitlistApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = "WaitlistApiError";
  }
}

export async function joinWaitlist(data: WaitlistFormData): Promise<WaitlistResponse> {
  const response = await fetch(`${API_BASE_URL}/api/v1/waitlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorBody = (await response.json().catch(() => null)) as ApiErrorResponse | null;
    const message = errorBody?.detail ?? "Something went wrong. Please try again.";
    throw new WaitlistApiError(message, response.status);
  }

  return response.json() as Promise<WaitlistResponse>;
}

export async function getWaitlistStats(): Promise<WaitlistStats> {
  const response = await fetch(`${API_BASE_URL}/api/v1/waitlist/stats`);
  if (!response.ok) {
    throw new WaitlistApiError("Failed to load waitlist stats.", response.status);
  }
  return response.json() as Promise<WaitlistStats>;
}
