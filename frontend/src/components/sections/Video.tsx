// /home/obed/bootcamp-waitlist/frontend/src/components/sections/Video.tsx

export default function Video() {
  return (
    <section className="bg-mist py-20 px-6"
      style={{
        backgroundColor: "#F7F8FA",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem"
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Label */}
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gold/20 mb-6"
          style={{
            backgroundColor: "#FF6B5733", /* gold with 20% opacity */
            color: "#FF6B57",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
        >
          A Message From Eno
        </div>

        {/* Section Headline */}
        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight lg:text-4xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1C2536",
            fontWeight: "bold"
          }}
        >
          BEFORE YOU SCROLL — WATCH THIS FIRST.
        </h2>

        {/* Section Subhead */}
        <p className="mt-4 max-w-xl text-lg text-gray-600"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#5B6472",
            fontSize: "18px",
            lineHeight: "1.7"
          }}
        >
          Eno recorded a short message explaining exactly who this bootcamp is for, what you'll build, and why the waitlist is the smartest move you can make right now. It's 3 minutes.
        </p>

        {/* Video Placeholder */}
        <div className="mt-10 relative w-full max-w-2xl mx-auto aspect-video"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            height: "0",
            paddingBottom: "56.25%", /* 16:9 Aspect Ratio */
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#E2E8F0",
            borderRadius: "8px",
            overflow: "hidden"
          }}
        >
          {/* In a real implementation, this would be an actual video embed */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="text-center">
              <div className="text-6xl mb-4"
                style={{ color: "#C6A24A" }}
              >
                � ▶��️
              </div>
              <p className="text-lg font-medium text-gray-600"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "500"
                }}
              >
                Press play. This will change how you see your own expertise.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a href="#waitlist-form"
          className="mt-10 inline-block bg-gold-cta hover:bg-gold-cta-dark text-white font-medium py-4 px-8 rounded-lg transition-colors disabled:opacity-50"
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
          Join the Free Waitlist After You Watch
        </a>

        {/* Micro-copy */}
        <p className="mt-4 text-sm text-gray-300 italic"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#5B6472",
            fontStyle: "italic"
          }}
        >
          Doors open September 1st. Waitlist members save 50%.
        </p>
      </div>
    </section>
  );
}