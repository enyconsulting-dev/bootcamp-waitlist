// /home/obed/Documents/bootcamp-waitlist/frontend/src/types/waitlist.ts
// Keep this in sync with backend/app/schemas.py

export interface WaitlistFormData {
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  whatsapp_number: string;
}

export interface WaitlistResponse {
  id: string;
  first_name: string;
  email: string;
  country: string;
  currency_tag: "ngn-audience" | "usd-audience";
  created_at: string;
}

export interface WaitlistStats {
  total_signups: number;
  ngn_audience: number;
  usd_audience: number;
}

export interface ApiErrorResponse {
  detail: string;
}
