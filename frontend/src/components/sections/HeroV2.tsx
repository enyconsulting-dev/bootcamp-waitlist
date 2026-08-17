// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/HeroV2.tsx
// Reference-inspired hero with clean, minimalist design

import { useEffect, useState } from "react";
import { getUserRegion, getPricingInfo } from "../../utils/geoLocation";
import type { PricingRegion } from "../../utils/geoLocation";

export default function HeroV2() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [region, setRegion] = useState<PricingRegion>("USD");
  const pricing = getPricingInfo(region);

  useEffect(() => {
    const targetDate = new Date("September 1, 2026 00:00:00 WAT");
    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getUserRegion().then(setRegion).catch(() => setRegion("USD"));
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "4rem",
        paddingBottom: "3rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        borderBottom: "1px solid #E5E7EB"
      }}
    >
      <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
        {/* Eyebrow - Free Event Info */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "1.5rem"
          }}
        >
          <p
            style={{
              margin: "0",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#6B7280"
            }}
          >
            🎯 Free 30-Day Bootcamp • Limited Seats
          </p>
        </div>

        {/* Main Headline - Clean & Bold */}
        <h1
          style={{
            margin: "0 0 1.5rem 0",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            color: "#0F172A",
            lineHeight: "1.15",
            textAlign: "center"
          }}
        >
          How I Went From Employee
          <br />
          To Building a Multi-Million Dollar
          <br />
          Consulting Business
        </h1>

        {/* Subhead */}
        <p
          style={{
            margin: "0 0 2rem 0",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            fontWeight: "400",
            color: "#4B5563",
            lineHeight: "1.8",
            textAlign: "center"
          }}
        >
          In this 30-day bootcamp, I'll hand you the exact system I used to go from zero to 100,000+ professionals trained across 90+ countries. You'll build a complete consulting launch package and land your first high-ticket client.
        </p>

        {/* Trust Strip - Compact */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            textAlign: "center"
          }}
        >
          <div>
            <p
              style={{
                margin: "0",
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#0F172A"
              }}
            >
              100,000+
            </p>
            <p
              style={{
                margin: "0.25rem 0 0 0",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#6B7280"
              }}
            >
              Professionals Trained
            </p>
          </div>
          <div style={{ color: "#D1D5DB" }}>•</div>
          <div>
            <p
              style={{
                margin: "0",
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#0F172A"
              }}
            >
              90+
            </p>
            <p
              style={{
                margin: "0.25rem 0 0 0",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#6B7280"
              }}
            >
              Countries Reached
            </p>
          </div>
          <div style={{ color: "#D1D5DB" }}>•</div>
          <div>
            <p
              style={{
                margin: "0",
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#0F172A"
              }}
            >
              FREE
            </p>
            <p
              style={{
                margin: "0.25rem 0 0 0",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#6B7280"
              }}
            >
              Limited Spots
            </p>
          </div>
        </div>

        {/* Countdown Timer - Clean Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0.75rem",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "2.5rem"
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
                padding: "1rem",
                backgroundColor: "#F9FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                textAlign: "center"
              }}
            >
              <p
                style={{
                  margin: "0",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#0F172A"
                }}
              >
                {item.value.toString().padStart(2, '0')}
              </p>
              <p
                style={{
                  margin: "0.5rem 0 0 0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#9CA3AF"
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Badge */}
        <div
          style={{
            padding: "1rem 1.5rem",
            backgroundColor: "#F3F4F6",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "2rem"
          }}
        >
          <p
            style={{
              margin: "0 0 0.5rem 0",
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: "600",
              color: "#6B7280",
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}
          >
            Early-Bird Pricing
          </p>
          <p
            style={{
              margin: "0",
              fontFamily: "'Playfair Display', serif",
              fontSize: "2rem",
              fontWeight: "700",
              color: "#0F172A"
            }}
          >
            {pricing.currencySymbol}{pricing.amount.toLocaleString()} {pricing.currency}
          </p>
          <p
            style={{
              margin: "0.5rem 0 0 0",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "#6B7280"
            }}
          >
            When doors open September 1st
          </p>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <a
            href="#waitlist-form"
            style={{
              display: "inline-block",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "3rem",
              paddingRight: "3rem",
              backgroundColor: "#0F172A",
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "700",
              fontSize: "16px",
              textDecoration: "none",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1F2937";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0F172A";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Save Your Free Seat
          </a>
        </div>

        {/* Fine Print */}
        <p
          style={{
            margin: "0",
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: "#9CA3AF",
            textAlign: "center",
            fontStyle: "italic"
          }}
        >
          You will receive an instant confirmation email with the bootcamp details. Spots are limited.
        </p>
      </div>
    </section>
  );
}
