// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/WaitlistForm.tsx
// Functional foundation only — no styling yet. Visual design (navy/gold theme,
// Playfair Display headline, gold CTA button etc.) is a Phase 5 item — see
// INSTRUCTIONS_FOR_AI_AGENT.md. Get this working end-to-end first, style second.

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
      <div role="status">
        <h2>You're on the waitlist.</h2>
        <p>Check your email and WhatsApp on September 1st for your early-bird enrollment link.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input
          id="first_name"
          type="text"
          required
          value={formData.first_name}
          onChange={(e) => handleChange("first_name", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="last_name">Last Name</label>
        <input
          id="last_name"
          type="text"
          required
          value={formData.last_name}
          onChange={(e) => handleChange("last_name", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <p>This is where your enrollment link will be sent.</p>
      </div>

      <div>
        <label htmlFor="country">Country</label>
        {/* TODO(Phase 5): replace with a full country dropdown component,
            Nigeria pre-selected / auto-detected per the design spec. */}
        <input
          id="country"
          type="text"
          required
          placeholder="e.g. Nigeria"
          value={formData.country}
          onChange={(e) => handleChange("country", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="whatsapp_number">WhatsApp Number (include country code)</label>
        <input
          id="whatsapp_number"
          type="tel"
          required
          placeholder="+234..."
          value={formData.whatsapp_number}
          onChange={(e) => handleChange("whatsapp_number", e.target.value)}
        />
        <p>We'll send your early-bird reminder here on September 1st. No spam — ever.</p>
      </div>

      {submitState === "duplicate" && <p role="alert">This email is already on the waitlist.</p>}
      {submitState === "error" && <p role="alert">{errorMessage}</p>}

      <button type="submit" disabled={submitState === "submitting"}>
        {submitState === "submitting" ? "Joining..." : "Join the Waitlist — It's Free"}
      </button>

      <p>
        Your information is safe. We will never sell, share, or spam your details. By joining the
        waitlist, you agree to receive emails and WhatsApp messages about the 30-Day Consulting
        Offer Bootcamp from ENY Consulting Inc. / Business Analysis School.
      </p>
    </form>
  );
}
