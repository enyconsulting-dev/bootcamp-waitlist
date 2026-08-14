# Frontend Environment Variables Setup

## Local Development

For local development, the `.env.local` file is already configured with:

```env
VITE_API_URL=http://localhost:8000
VITE_PAYMENT_URL_USD=https://course.businessanalysisschool.com/offers/wcLUdQQX
VITE_PAYMENT_URL_NAIRA=https://paystack.shop/pay/hu7b8rhhk1
```

No additional setup needed for `npm run dev`.

---

## Vercel Production Deployment

To set environment variables in Vercel:

1. Go to **Vercel Dashboard** → **Project** → **Settings**
2. Navigate to **Environment Variables**
3. Add the following variables:

| Variable Name | Value |
|---|---|
| `VITE_API_URL` | `https://your-render-backend-url.onrender.com` |
| `VITE_PAYMENT_URL_USD` | `https://course.businessanalysisschool.com/offers/wcLUdQQX` |
| `VITE_PAYMENT_URL_NAIRA` | `https://paystack.shop/pay/hu7b8rhhk1` |

4. **Important**: Set each variable to all environments (**Production**, **Preview**, **Development**)
5. Click **Save** and redeploy

---

## How It Works

### Geo-Location Based Pricing

- The frontend automatically detects the user's location using a free IP geolocation API
- **If user is in Nigeria (country code = "NG")**:
  - Shows pricing in **Naira (₦26,875 NGN)**
  - Uses `VITE_PAYMENT_URL_NAIRA` for payment link
  
- **If user is outside Nigeria**:
  - Shows pricing in **USD ($47 USD)**
  - Uses `VITE_PAYMENT_URL_USD` for payment link

### Fallback Behavior

- If geolocation detection fails or times out (3 seconds):
  - Defaults to **USD pricing**
  - This ensures the page loads even if the geolocation service is unavailable

### No Hardcoded URLs

- Payment URLs are stored as environment variables, so you can update them without redeploying code
- Simply update the env vars in Vercel and trigger a new deployment

---

## Testing Locally

To test geo-location locally:

1. The default `.env.local` uses the payment URLs
2. Open http://localhost:5173 and check browser console for geo-detection
3. The Hero section will show the detected currency dynamically

---

## Important Notes

✅ All environment variables are read-only in the frontend (prefixed with `VITE_` makes them safe for browser exposure)
✅ Pricing amounts are hardcoded in `src/utils/geoLocation.ts`
✅ Payment URLs are environment-based and can be updated anytime
✅ No sensitive data is stored in environment variables
