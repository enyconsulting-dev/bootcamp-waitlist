// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/Video.tsx
// PHASE 5B: Enhanced Video Section with Premium Styling

export default function Video() {
  return (
    <section
      style={{
        backgroundColor: "#FBF8F1",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem"
      }}
    >
      <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
        {/* Section Label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            borderRadius: "9999px",
            fontSize: "12px",
            fontWeight: "600",
            backgroundColor: "rgba(201, 162, 39, 0.12)",
            color: "#C9A227",
            fontFamily: "'Inter', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "1.5rem"
          }}
        >
          📹 A Message From Eno
        </div>

        {/* Section Headline */}
        <h2
          style={{
            marginTop: "1rem",
            marginBottom: "0",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "'Fraunces', serif",
            color: "#0B1020",
            fontWeight: "700",
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            lineHeight: "1.2"
          }}
        >
          Before You Scroll—Watch This First.
        </h2>

        {/* Section Subhead */}
        <p
          style={{
            marginTop: "1rem",
            marginBottom: "0",
            maxWidth: "650px",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "'Inter', sans-serif",
            color: "#374151",
            fontSize: "16px",
            lineHeight: "1.8"
          }}
        >
          Eno recorded a short message explaining exactly who this bootcamp is for, what you'll build, and why joining the waitlist is your smartest next move. Watch the 3-minute video below.
        </p>

        {/* Video Container - Enhanced */}
        <div
          style={{
            marginTop: "3rem",
            marginBottom: "0",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              aspectRatio: "16 / 9",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 20px 60px -10px rgba(11, 16, 32, 0.25)",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 30px 80px -10px rgba(11, 16, 32, 0.35)";
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 60px -10px rgba(11, 16, 32, 0.25)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Video Background Gradient */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, #1a2445 0%, #0B1020 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1
              }}
            >
              {/* Play Button Container */}
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.5rem"
                }}
              >
                {/* Animated Play Button - Gold */}
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#C9A227",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 15px 40px rgba(201, 162, 39, 0.4)",
                    animation: "pulse-glow 2.5s ease-in-out infinite",
                    transition: "all 0.3s ease"
                  }}
                >
                  <span
                    style={{
                      color: "#0B1020",
                      fontSize: "44px",
                      marginLeft: "4px",
                      fontWeight: "bold"
                    }}
                  >
                    ▶
                  </span>
                </div>

                {/* Play Text */}
                <p
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: "#FFFFFF",
                    fontSize: "18px",
                    fontWeight: "600",
                    margin: "0",
                    maxWidth: "280px"
                  }}
                >
                  Press Play to Unlock Your Consulting Potential
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Gold */}
        <div style={{ marginTop: "2.5rem", marginBottom: "0" }}>
          <a
            href="#waitlist-form"
            style={{
              display: "inline-block",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              backgroundColor: "#C9A227",
              color: "#0B1020",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "700",
              fontSize: "15px",
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
            Join Free Waitlist — Then Watch
          </a>
        </div>

        {/* Micro-copy */}
        <p
          style={{
            marginTop: "1rem",
            marginBottom: "0",
            fontFamily: "'Inter', sans-serif",
            color: "#6B7280",
            fontSize: "13px",
            fontStyle: "italic"
          }}
        >
          Doors open September 1st • Early-bird pricing for waitlist members only
        </p>
      </div>

      {/* CSS for Pulse Animation */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 15px 40px rgba(201, 162, 39, 0.4);
          }
          50% {
            box-shadow: 0 15px 50px rgba(201, 162, 39, 0.6);
          }
        }
      `}</style>
    </section>
  );
}
