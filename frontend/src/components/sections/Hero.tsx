// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/Hero.tsx

import { useEffect, useState } from "react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("September 1, 2026 00:00:00 WAT"); // WAT = UTC+1

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

  return (
    <section
      className="relative bg-navy text-white py-20 px-6 overflow-hidden"
      style={{
        backgroundColor: "#16233F",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      {/* Eyebrow Tag */}
      <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gold/20">
        <span>Doors Open September 1</span>
        <span className="mx-2">·</span>
        <span>Join the Free Waitlist</span>
        <span className="mx-2">·</span>
        <span>Get 50% Off When Enrollment Opens</span>
      </div>

      {/* Main Headline */}
      <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#FFFFFF"
        }}
      >
        YOU HAVE THE EXPERTISE.<br />
        YOU'RE JUST MISSING THE OFFER.
      </h1>

      {/* Subhead */}
      <p className="mt-4 max-w-xl text-lg text-gray-300 lg:text-xl"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "#A0AEC0",
          maxWidth: "680px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        JOIN THE FREE WAITLIST AND BE FIRST IN LINE WHEN THE 30-DAY CONSULTING OFFER BOOTCAMP OPENS — AT THE LOWEST PRICE IT WILL EVER BE.
      </p>

      {/* Early Bird Access Info */}
      <p className="mt-6 text-base text-gray-300"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "#A0AEC0"
        }}
      >
        Waitlist members get exclusive 48-hour early-bird access on September 1st — $47 USD / � ₦ 26,875 NGN — before the price goes up and before the public even knows doors are open.
      </p>

      {/* Countdown Timer */}
      <div className="mt-10 flex items-center space-x-8 text-center">
        <div>
          <div className="text-5xl font-bold"
            style={{
              color: "#C6A24A",
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-gray-300 uppercase">Days</div>
        </div>
        <div>
          <div className="text-5xl font-bold"
            style={{
              color: "#C6A24A",
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-gray-300 uppercase">Hours</div>
        </div>
        <div>
          <div className="text-5xl font-bold"
            style={{
              color: "#C6A24A",
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-gray-300 uppercase">Minutes</div>
        </div>
        <div>
          <div className="text-5xl font-bold"
            style={{
              color: "#C6A24A",
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-gray-300 uppercase">Seconds</div>
        </div>
      </div>

      {/* CTA Button */}
      <a href="#waitlist-form"
        className="mt-12 inline-block bg-gold-cta hover:bg-gold-cta-dark text-white font-medium py-4 px-8 rounded-lg transition-colors disabled:opacity-50"
        style={{
          backgroundColor: "#FF6B57",
          color: "#FFFFFF",
          fontFamily: "'Inter', sans-serif",
          fontWeight: "600",
          fontSize: "18px",
          padding: "16px 32px",
          borderRadius: "6px",
          textDecoration: "none",
          display: "inline-block",
          minHeight: "56px",
          lineHeight: "1.4"
        }}
      >
        Join the Free Waitlist — Get Early-Bird Access
      </a>

      {/* Micro-copy */}
      <p className="mt-4 text-sm text-gray-300 italic"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "#A0AEC0",
          fontStyle: "italic"
        }}
      >
        It's free to join. No payment required today.
      </p>

      {/* Trust Strip */}
      <div className="mt-12 px-4 bg-navy-lighter py-4"
        style={{
          backgroundColor: "#1E2D4F", /* slightly lighter navy */
          color: "#FFFFFF",
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px"
        }}
      >
        <span>100,000+ Professionals Trained</span>
        <span>|</span>
        <span>���🌍 90+ Countries</span>
        <span>|</span>
        <span>���🏆 95% Land a Client Within 90 Days</span>
      </div>

      {/* Pull Quote */}
      <blockquote className="mt-12 max-w-xl text-center border-l-4 border-gold/50 pl-6 italic"
        style={{
          borderLeftColor: "#C6A24A",
          fontFamily: "'Playfair Display', serif",
          color: "#FFFFFF",
          fontStyle: "italic"
        }}
      >
        <p>“$12,000 client. Week 5.” — Bootcamp Graduate</p>
      </blockquote>
    </section>
  );
}