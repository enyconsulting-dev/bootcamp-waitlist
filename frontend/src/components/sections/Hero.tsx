// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/Hero.tsx
// PHASE 5A: Premium Hero with Enhanced Countdown & Trust Signals
// PHASE 6: Dynamic Geo-location Based Pricing

import { useEffect, useState } from "react";
import { getUserRegion, getPricingInfo, type PricingRegion } from "../../utils/geoLocation";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [region, setRegion] = useState<PricingRegion>("USD");
  const pricing = getPricingInfo(region);

  useEffect(() => {
    const doorsOpenDate = import.meta.env.VITE_DOORS_OPEN_DATE?.trim() || "2026-09-01T00:50:00Z";
    const targetDate = new Date(doorsOpenDate);

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Detect user's region for pricing
  useEffect(() => {
    getUserRegion().then(setRegion).catch(() => setRegion("USD"));
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#0B1020",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "3rem",
        paddingBottom: "4rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: "920px", width: "100%" }}>
        {/* Eyebrow Tag - Enhanced */}
        <div 
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            borderRadius: "9999px",
            fontSize: "12px",
            fontWeight: "600",
            backgroundColor: "rgba(201, 162, 39, 0.15)",
            color: "#E4C767",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "2rem"
          }}
        >
          <span>🚀 DOORS OPEN SEPTEMBER 1</span>
          <span style={{ margin: "0 0.75rem" }}>•</span>
          <span>FREE WAITLIST</span>
          <span style={{ margin: "0 0.75rem" }}>•</span>
          <span>EARLY-BIRD PRICING</span>
        </div>

        {/* Main Headline - Premium */}
        <h1
          style={{
            marginTop: "1rem",
            marginBottom: "0",
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2rem, 7vw, 4rem)",
            fontWeight: "800",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            lineHeight: "1.1"
          }}
        >
          You Have The Expertise.
          <br />
          <span className="hero-gold-text">You're Just Missing The Offer.</span>
        </h1>

        {/* Subhead - Premium */}
        <p 
          style={{
            marginTop: "1.5rem",
            marginBottom: "0",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            fontWeight: "400",
            color: "#A0AEC0",
            lineHeight: "1.8"
          }}
        >
          In 30 days, you'll have a complete consulting launch system—from packaging your expertise to landing your first high-ticket client.
        </p>

        {/* Early Bird Offer Card - Premium */}
        <div 
          style={{
            marginTop: "2.5rem",
            marginBottom: "0",
            padding: "1.5rem",
            borderRadius: "12px",
            backgroundColor: "rgba(201, 162, 39, 0.08)",
            border: "1px solid rgba(201, 162, 39, 0.2)",
            backdropFilter: "blur(10px)"
          }}
        >
          <p style={{
            margin: "0",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#C9A227",
            marginBottom: "0.5rem"
          }}>
            ⏰ Early-Bird Pricing (Waitlist Only)
          </p>
          <p style={{
            margin: "0",
            fontFamily: "'Fraunces', serif",
            fontSize: "2rem",
            fontWeight: "700",
            color: "#E4C767"
          }}>
            {pricing.currencySymbol}{pricing.amount.toLocaleString()} {pricing.currency}
          </p>
          <p style={{
            margin: "0.75rem 0 0 0",
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            color: "#D1D5DB"
          }}>
            48-hour exclusive access when doors open • Price increases after that
          </p>
        </div>

        {/* Countdown Timer - Premium */}
        <div 
          style={{
            marginTop: "3rem",
            marginBottom: "0",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" }
          ].map((item, idx) => (
            <div 
              key={idx}
              style={{
                padding: "1.5rem 1rem",
                backgroundColor: "rgba(201, 162, 39, 0.1)",
                border: "1px solid rgba(201, 162, 39, 0.25)",
                borderRadius: "10px",
                transition: "all 0.3s ease"
              }}
            >
              <div 
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#C9A227",
                  letterSpacing: "-0.02em",
                  lineHeight: "1"
                }}
              >
                {item.value.toString().padStart(2, '0')}
              </div>
              <div 
                style={{
                  marginTop: "0.75rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#9CA3AF"
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - Premium */}
        <div style={{ marginTop: "3rem", marginBottom: "0" }}>
          <a 
            href="#waitlist-form"
            style={{
              display: "inline-block",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
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
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#E4C767";
              e.currentTarget.style.boxShadow = "0 15px 50px -10px rgba(201, 162, 39, 0.55)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C9A227";
              e.currentTarget.style.boxShadow = "0 10px 40px -10px rgba(201, 162, 39, 0.45)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            🔒 Join Free Waitlist — Secure Early-Bird Access
          </a>
        </div>

        {/* Micro-copy */}
        <p 
          style={{
            marginTop: "1rem",
            marginBottom: "0",
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            color: "#9CA3AF",
            fontStyle: "italic"
          }}
        >
          No payment required • Cancel anytime • Your email stays private
        </p>

        {/* Trust Stats - Enhanced */}
        <div 
          style={{
            marginTop: "3.5rem",
            marginBottom: "0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(201, 162, 39, 0.15)"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div 
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#C9A227"
              }}
            >
              100K+
            </div>
            <p 
              style={{
                margin: "0.5rem 0 0 0",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#A0AEC0"
              }}
            >
              Professionals Trained
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div 
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#C9A227"
              }}
            >
              90+
            </div>
            <p 
              style={{
                margin: "0.5rem 0 0 0",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#A0AEC0"
              }}
            >
              Countries Reached
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div 
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#C9A227"
              }}
            >
              95%
            </div>
            <p 
              style={{
                margin: "0.5rem 0 0 0",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#A0AEC0"
              }}
            >
              Land First Client
            </p>
          </div>
        </div>

        {/* Pull Quote - Premium */}
        <div 
          style={{
            marginTop: "3.5rem",
            marginBottom: "0",
            padding: "2rem",
            borderLeft: "4px solid #C9A227",
            borderRadius: "4px",
            backgroundColor: "rgba(201, 162, 39, 0.08)"
          }}
        >
          <p 
            style={{
              margin: "0",
              fontFamily: "'Fraunces', serif",
              fontSize: "1.5rem",
              fontWeight: "600",
              fontStyle: "italic",
              color: "#E4C767",
              lineHeight: "1.6"
            }}
          >
            "I landed a $12,000 client in Week 5. This system works."
          </p>
          <p 
            style={{
              margin: "1rem 0 0 0",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: "600",
              color: "#9CA3AF"
            }}
          >
            — Bootcamp Graduate
          </p>
        </div>
      </div>
    </section>
  );
}
