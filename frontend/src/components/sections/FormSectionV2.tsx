// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/FormSectionV2.tsx
// Clean form section inspired by reference design

import WaitlistForm from "../WaitlistForm";

export default function FormSectionV2() {
  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        borderTop: "1px solid #E5E7EB"
      }}
    >
      <div style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
        {/* Section Headline */}
        <h2
          style={{
            margin: "0 0 1rem 0",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: "700",
            color: "#0F172A",
            lineHeight: "1.3",
            textAlign: "center"
          }}
        >
          Save Your Free Seat
        </h2>

        {/* Subhead */}
        <p
          style={{
            margin: "0 0 2rem 0",
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            color: "#6B7280",
            lineHeight: "1.7",
            textAlign: "center"
          }}
        >
          Seats are limited and this bootcamp is live. Register now and get your instant confirmation with the bootcamp details.
        </p>

        {/* Form */}
        <div style={{ marginBottom: "2rem" }}>
          <WaitlistForm />
        </div>

        {/* Footer Text */}
        <p
          style={{
            margin: "0",
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            color: "#9CA3AF",
            textAlign: "center",
            lineHeight: "1.6"
          }}
        >
          Your information is private and will never be sold or shared.
          <br />
          By joining, you agree to receive emails about the bootcamp.
        </p>
      </div>
    </section>
  );
}
