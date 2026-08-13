// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/ThePromise.tsx

export default function ThePromise() {
  return (
    <section className="bg-navy text-white py-20 px-6"
      style={{
        backgroundColor: "#16233F",
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
          One Focus. One Outcome.
        </div>

        {/* Section Headline */}
        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight lg:text-4xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#FFFFFF",
            fontWeight: "bold"
          }}
        >
          IN 30 DAYS, YOU WILL HAVE A CONSULTING OFFER THAT CAN LAND REAL CLIENTS.
        </h2>

        {/* Section Subhead */}
        <p className="mt-4 max-w-xl text-lg text-gray-300"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#A0AEC0",
            fontSize: "18px",
            lineHeight: "1.7"
          }}
        >
          Not a vague idea. Not a mood board. Not a LinkedIn bio refresh.<br />
          A real, packaged consulting offer — with a defined niche, a clear promise, a price built for ROI, proof that supports it, and the outreach system to put it in front of the people who can actually say yes.
        </p>

        {/* Graduation Day Info */}
        <p className="mt-6 text-base text-gray-300"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#A0AEC0",
            fontSize: "16px"
          }}
          >
          By Graduation Day — Saturday, October 10th — you will have:
        </p>

        {/* Checklist */}
        <div className="mt-10 space-y-4 max-w-xl mx-auto text-left pl-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-4 h-4 bg-gold-cta rounded-full mt-0.5 flex items-center justify-center"
              style={{
                backgroundColor: "#FF6B57",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span className="text-xs text-white font-bold"
                style={{ fontSize: "10px" }}
              >��✓</span>
            </div>
            <div className="ml-3 text-gray-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E2E8F0",
                fontSize: "16px",
                lineHeight: "1.7"
              }}
            >
              A consulting offer with a price you're confident saying out loud
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-4 h-4 bg-gold-cta rounded-full mt-0.5 flex items-center justify-center"
              style={{
                backgroundColor: "#FF6B57",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span className="text-xs text-white font-bold"
                style={{ fontSize: "10px" }}
              >��✓</span>
            </div>
            <div className="ml-3 text-gray-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E2E8F0",
                fontSize: "16px",
                lineHeight: "1.7"
              }}
            >
              A LinkedIn presence that positions you as the expert — not just another employee
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-4 h-4 bg-gold-cta rounded-full mt-0.5 flex items-center justify-center"
              style={{
                backgroundColor: "#FF6B57",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span className="text-xs text-white font-bold"
                style={{ fontSize: "10px" }}
              >��✓</span>
            </div>
            <div className="ml-3 text-gray-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E2E8F0",
                fontSize: "16px",
                lineHeight: "1.7"
              }}
            >
              A target list of decision-makers and a proven outreach sequence to reach them
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-4 h-4 bg-gold-cta rounded-full mt-0.5 flex items-center justify-center"
              style={{
                backgroundColor: "#FF6B57",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span className="text-xs text-white font-bold"
                style={{ fontSize: "10px" }}
              >��✓</span>
            </div>
            <div className="ml-3 text-gray-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E2E8F0",
                fontSize: "16px",
                lineHeight: "1.7"
              }}
            >
              A discovery call framework so you can walk into any sales conversation and own the room
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-4 h-4 bg-gold-cta rounded-full mt-0.5 flex items-center justify-center"
              style={{
                backgroundColor: "#FF6B57",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span className="text-xs text-white font-bold"
                style={{ fontSize: "10px" }}
              >��✓</span>
            </div>
            <div className="ml-3 text-gray-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E2E8F0",
                fontSize: "16px",
                lineHeight: "1.7"
              }}
            >
              A proposal ready to send the day after a call
            </div>
          </div>
        </div>

        {/* Closing Text */}
        <p className="mt-12 text-base text-gold-400 italic max-w-xl mx-auto"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#FF6B57",
            fontStyle: "italic",
            fontSize: "18px"
          }}
        >
          This isn't theory. This is a build.
        </p>

        {/* Inline CTA */}
        <a href="#waitlist-form"
          className="mt-8 inline-block bg-gold-cta hover:bg-gold-cta-dark text-white font-medium py-4 px-8 rounded-lg transition-colors disabled:opacity-50"
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
          Join the Free Waitlist Now
        </a>

        <p className="mt-4 text-sm text-gray-300 italic"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#5B6472",
            fontStyle: "italic"
          }}
        >
          Waitlist members get 48-hour early-bird access on September 1st.
        </p>
      </div>
    </section>
  );
}