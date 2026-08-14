// /home/obed/Documents/bootcamp-waitlist/frontend/src/utils/geoLocation.ts
// Geo-location utility to detect user's location and determine pricing

export type PricingRegion = "NGN" | "USD";

export interface PricingInfo {
  region: PricingRegion;
  amount: number;
  currency: string;
  currencySymbol: string;
  label: string;
  paymentUrl: string;
}


// Geo - pricing information for different regions
const PRICES = {
  NGN: {
    amount: 26875,
    currency: "NGN",
    currencySymbol: "₦",
    label: "₦26,875 NGN",
    paymentUrl: import.meta.env.VITE_PAYMENT_URL_NAIRA || "https://paystack.shop/pay/hu7b8rhhk1"
  },
  USD: {
    amount: 47,
    currency: "USD",
    currencySymbol: "$",
    label: "$47 USD",
    paymentUrl: import.meta.env.VITE_PAYMENT_URL_USD || "https://course.businessanalysisschool.com/offers/wcLUdQQX"
  }
};

/**
 * Detect user's location using IP geolocation API
 * Falls back to USD if detection fails or doesn't load in time
 */
export async function getUserRegion(): Promise<PricingRegion> {
  try {
    // Try to detect using IP geolocation (free service)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const response = await fetch("https://ipapi.co/json/", { 
      signal: controller.signal 
    });

    clearTimeout(timeoutId);

    if (!response.ok) throw new Error("Failed to fetch geolocation");
    
    const data = await response.json() as { country_code?: string };
    const countryCode = data.country_code?.toUpperCase();

    return countryCode === "NG" ? "NGN" : "USD";
  } catch (error) {
    console.log("Geolocation detection failed, defaulting to USD", error);
    return "USD";
  }
}

/**
 * Get pricing info for a specific region
 */
export function getPricingInfo(region: PricingRegion): PricingInfo {
  return {
    region,
    ...PRICES[region]
  };
}

/**
 * Get the early-bird pricing text based on region
 */
export function getEarlyBirdText(region: PricingRegion): string {
  const pricing = PRICES[region];
  return `${pricing.label} (Early-bird pricing for waitlist members only)`;
}

/**
 * Get payment URL for a region
 */
export function getPaymentUrl(region: PricingRegion): string {
  return PRICES[region].paymentUrl;
}
