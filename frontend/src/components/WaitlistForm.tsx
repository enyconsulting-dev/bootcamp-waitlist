// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/WaitlistForm.tsx
// PHASE 5C: Premium Form Styling with Enhanced UX

import { useState, type FormEvent } from "react";
import { joinWaitlist, WaitlistApiError } from "../api/waitlistApi";
import type { WaitlistFormData } from "../types/waitlist";

const initialFormState: WaitlistFormData = {
  first_name: "",
  last_name: "",
  email: "",
  country: "",
  whatsapp_number: "",
};

type SubmitState = "idle" | "submitting" | "success" | "duplicate" | "error";

export default function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>(initialFormState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleChange(field: keyof WaitlistFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    try {
      await joinWaitlist(formData);
      setSubmitState("success");
    } catch (err) {
      if (err instanceof WaitlistApiError && err.status === 409) {
        setSubmitState("duplicate");
      } else {
        setSubmitState("error");
        setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      }
    }
  }

  if (submitState === "success") {
    return (
      <div
        role="status"
        style={{
          padding: "2.5rem",
          backgroundColor: "rgba(201, 162, 39, 0.08)",
          borderRadius: "12px",
          border: "1px solid rgba(201, 162, 39, 0.2)",
          textAlign: "center"
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#C9A227",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
            fontSize: "32px"
          }}
        >
          ✓
        </div>
        <h2
          style={{
            margin: "0 0 0.75rem 0",
            fontFamily: "'Fraunces', serif",
            fontSize: "1.75rem",
            fontWeight: "700",
            color: "#0B1020"
          }}
        >
          You're On The Waitlist!
        </h2>
        <p
          style={{
            margin: "0",
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            color: "#374151",
            lineHeight: "1.7"
          }}
        >
          Check your email and WhatsApp on September 1st for your exclusive early-bird enrollment link.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      {/* Form Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem"
        }}
      >
        {/* First Name */}
        <div>
          <label
            htmlFor="first_name"
            style={{
              display: "block",
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#6B7280",
              marginBottom: "0.75rem"
            }}
          >
            First Name
          </label>
          <input
            id="first_name"
            type="text"
            required
            value={formData.first_name}
            onChange={(e) => handleChange("first_name", e.target.value)}
            placeholder="Your first name"
            style={{
              width: "100%",
              padding: "0.875rem 1rem",
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              border: "1px solid #D1D5DB",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              color: "#0B1020",
              transition: "all 0.2s ease",
              boxSizing: "border-box"
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#C9A227";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201, 162, 39, 0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#D1D5DB";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="last_name"
            style={{
              display: "block",
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#6B7280",
              marginBottom: "0.75rem"
            }}
          >
            Last Name
          </label>
          <input
            id="last_name"
            type="text"
            required
            value={formData.last_name}
            onChange={(e) => handleChange("last_name", e.target.value)}
            placeholder="Your last name"
            style={{
              width: "100%",
              padding: "0.875rem 1rem",
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              border: "1px solid #D1D5DB",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              color: "#0B1020",
              transition: "all 0.2s ease",
              boxSizing: "border-box"
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#C9A227";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201, 162, 39, 0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#D1D5DB";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </div>

        {/* Email - Full Width */}
        <div style={{ gridColumn: "1 / -1" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#6B7280",
              marginBottom: "0.75rem"
            }}
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="you@company.com"
            style={{
              width: "100%",
              padding: "0.875rem 1rem",
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              border: "1px solid #D1D5DB",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              color: "#0B1020",
              transition: "all 0.2s ease",
              boxSizing: "border-box"
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#C9A227";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201, 162, 39, 0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#D1D5DB";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          <p
            style={{
              margin: "0.5rem 0 0 0",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "#6B7280",
              fontStyle: "italic"
            }}
          >
            We'll send your enrollment link here on September 1st.
          </p>
        </div>

        {/* Country - Full Width */}
        <div style={{ gridColumn: "1 / -1" }}>
          <label
            htmlFor="country"
            style={{
              display: "block",
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#6B7280",
              marginBottom: "0.75rem"
            }}
          >
            Country
          </label>
          <select
            id="country"
            required
            value={formData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            style={{
              width: "100%",
              padding: "0.875rem 1rem",
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              border: "1px solid #D1D5DB",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              color: "#0B1020",
              transition: "all 0.2s ease",
              boxSizing: "border-box",
              cursor: "pointer"
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#C9A227";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201, 162, 39, 0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#D1D5DB";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <option value="">Select your country</option>
            <option value="Nigeria">Nigeria</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Ghana">Ghana</option>
            <option value="Kenya">Kenya</option>
            <option value="South Africa">South Africa</option>
            <option value="Other">Other</option>
          </select>
          <p
            style={{
              margin: "0.5rem 0 0 0",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "#6B7280",
              fontStyle: "italic"
            }}
          >
            This ensures you get the right pricing and enrollment timing.
          </p>
        </div>

        {/* WhatsApp - Full Width */}
        <div style={{ gridColumn: "1 / -1" }}>
          <label
            htmlFor="whatsapp_number"
            style={{
              display: "block",
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#6B7280",
              marginBottom: "0.75rem"
            }}
          >
            WhatsApp Number
          </label>
          <input
            id="whatsapp_number"
            type="tel"
            required
            placeholder="+234 800 123 4567"
            value={formData.whatsapp_number}
            onChange={(e) => handleChange("whatsapp_number", e.target.value)}
            style={{
              width: "100%",
              padding: "0.875rem 1rem",
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              border: "1px solid #D1D5DB",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              color: "#0B1020",
              transition: "all 0.2s ease",
              boxSizing: "border-box"
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#C9A227";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201, 162, 39, 0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#D1D5DB";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          <p
            style={{
              margin: "0.5rem 0 0 0",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "#6B7280",
              fontStyle: "italic"
            }}
          >
            Your early-bird reminder will come here on September 1st. No spam.
          </p>
        </div>
      </div>

      {/* Error Messages */}
      {submitState === "duplicate" && (
        <div
          role="alert"
          style={{
            padding: "1rem",
            marginBottom: "1.5rem",
            backgroundColor: "#FEE2E2",
            border: "1px solid #FECACA",
            borderRadius: "8px",
            color: "#991B1B",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px"
          }}
        >
          This email is already on the waitlist. You'll get your early-bird enrollment link on September 1st.
        </div>
      )}
      {submitState === "error" && (
        <div
          role="alert"
          style={{
            padding: "1rem",
            marginBottom: "1.5rem",
            backgroundColor: "#FEE2E2",
            border: "1px solid #FECACA",
            borderRadius: "8px",
            color: "#991B1B",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px"
          }}
        >
          {errorMessage || "Something went wrong. Please try again."}
        </div>
      )}

      {/* CTA Button - Gold Premium */}
      <button
        type="submit"
        disabled={submitState === "submitting"}
        style={{
          width: "100%",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          backgroundColor: "#C9A227",
          color: "#0B1020",
          fontFamily: "'Inter', sans-serif",
          fontWeight: "700",
          fontSize: "16px",
          textDecoration: "none",
          borderRadius: "8px",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          boxShadow: "0 10px 40px -10px rgba(201, 162, 39, 0.45)",
          transition: "all 0.3s ease",
          border: "none",
          cursor: "pointer",
          opacity: submitState === "submitting" ? 0.7 : 1
        }}
        onMouseEnter={(e) => {
          if (submitState !== "submitting") {
            e.currentTarget.style.backgroundColor = "#E4C767";
            e.currentTarget.style.boxShadow = "0 15px 50px -10px rgba(201, 162, 39, 0.55)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#C9A227";
          e.currentTarget.style.boxShadow = "0 10px 40px -10px rgba(201, 162, 39, 0.45)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {submitState === "submitting" ? "🔄 Joining..." : "✓ Join the Waitlist — It's Free"}
      </button>

      {/* Legal Text */}
      <p
        style={{
          marginTop: "1.5rem",
          marginBottom: "0",
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          color: "#6B7280",
          lineHeight: "1.6",
          textAlign: "center"
        }}
      >
        By joining, you agree to receive emails and WhatsApp messages about the 30-Day Consulting Offer Bootcamp.
        <br />
        Your information is safe and will never be sold or shared.
      </p>
    </form>
  );
}
