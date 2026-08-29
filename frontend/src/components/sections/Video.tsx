// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/Video.tsx
// PHASE 5B: Enhanced Video Section with Premium Styling

const googleDriveVideoUrl = "https://drive.google.com/file/d/13tuZ-INK7Aq8DZ5VI-4S9RaXz-p-ptW7/preview";
const googleDriveFileUrl = "https://drive.google.com/file/d/13tuZ-INK7Aq8DZ5VI-4S9RaXz-p-ptW7/view?usp=drive_link";

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
          Eno recorded a short message explaining exactly who this bootcamp is for, what you’ll build, and why joining the waitlist is your smartest next move.
        </p>

        <div
          style={{
            marginTop: "2.5rem",
            marginBottom: "0",
            padding: "0.75rem",
            borderRadius: "20px",
            background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(246, 240, 223, 0.85))",
            boxShadow: "0 20px 45px -18px rgba(15, 23, 42, 0.32)",
            border: "1px solid rgba(15, 23, 42, 0.08)"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <iframe
              src={googleDriveVideoUrl}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "800px",
                aspectRatio: "16 / 9",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 20px 60px -10px rgba(11, 16, 32, 0.25)",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                cursor: "pointer",
                border: "none",
                backgroundColor: "#0B1020"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 30px 80px -10px rgba(11, 16, 32, 0.35)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 60px -10px rgba(11, 16, 32, 0.25)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Eno's message about the 30-Day Consulting Offer Bootcamp"
            />
          </div>
        </div>

        <div style={{ marginTop: "1.25rem", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.75rem" }}>
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
          <a
            href={googleDriveFileUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              backgroundColor: "transparent",
              color: "#0B1020",
              border: "1px solid rgba(11, 16, 32, 0.2)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "600",
              fontSize: "14px",
              textDecoration: "none",
              borderRadius: "8px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(11, 16, 32, 0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Open in Google Drive
          </a>
        </div>

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
