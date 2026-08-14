// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/CoachBio.tsx
// PHASE 6: Premium Coach/Instructor Section with Eno's Bio

export default function CoachBio() {
  return (
    <section
      style={{
        backgroundColor: "#0B1020",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem"
      }}
    >
      <div style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
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
            backgroundColor: "rgba(201, 162, 39, 0.15)",
            color: "#E4C767",
            fontFamily: "'Inter', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "1.5rem"
          }}
        >
          🏆 Your Coach
        </div>

        {/* Main Headline */}
        <h2
          style={{
            marginTop: "0",
            marginBottom: "2rem",
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            lineHeight: "1.2"
          }}
        >
          Built By <span style={{ color: "#C9A227" }}>Eno Eka</span>
          <br />
          For Your Success
        </h2>

        {/* Coach Container - Premium Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "0"
          }}
        >
          {/* Coach Image */}
          <div
            style={{
              position: "relative"
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                aspectRatio: "3 / 4",
                boxShadow: "0 25px 80px -15px rgba(201, 162, 39, 0.3)"
              }}
            >
              <img
                src="/eno_headshot.jpeg"
                alt="Eno Eka - Coach and Founder"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top"
                }}
              />
              
              {/* Gold Accent Bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "6px",
                  background: "linear-gradient(90deg, #C9A227 0%, #E4C767 100%)"
                }}
              />
            </div>

            {/* Credentials Badge */}
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                backgroundColor: "rgba(201, 162, 39, 0.08)",
                border: "1px solid rgba(201, 162, 39, 0.2)",
                borderRadius: "12px",
                textAlign: "center"
              }}
            >
              <p
                style={{
                  margin: "0 0 0.5rem 0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#C9A227"
                }}
              >
                ✓ Featured in Forbes
              </p>
              <p
                style={{
                  margin: "0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  color: "#D1D5DB",
                  lineHeight: "1.6"
                }}
              >
                Canada's Top 100 Most Powerful Women
              </p>
            </div>
          </div>

          {/* Coach Bio */}
          <div style={{ paddingRight: "1rem" }}>
            <h3
              style={{
                margin: "0 0 1rem 0",
                fontFamily: "'Fraunces', serif",
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#E4C767"
              }}
            >
              Eno Eka
            </h3>

            <p
              style={{
                margin: "0 0 1.5rem 0",
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                fontWeight: "600",
                color: "#C9A227",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}
            >
              Founder & CEO • ENY Consulting Inc.
            </p>

            {/* Bio Text */}
            <p
              style={{
                margin: "0 0 1.5rem 0",
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                color: "#D1D5DB",
                lineHeight: "1.8"
              }}
            >
              <strong style={{ color: "#E4C767" }}>Eno Eka is a global business consultant</strong>, entrepreneur, 
              and passionate mentor dedicated to helping professionals build successful careers and consulting businesses. 
              As the Founder and CEO of ENY Consulting and the Founder of Business Analysis School, she has empowered 
              <strong style={{ color: "#E4C767" }}> thousands of individuals worldwide</strong> with practical skills in 
              business analysis, AI, and consulting.
            </p>

            <p
              style={{
                margin: "0 0 2rem 0",
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                color: "#D1D5DB",
                lineHeight: "1.8"
              }}
            >
              Her mission is to equip people with the knowledge and confidence to 
              <strong style={{ color: "#E4C767" }}> solve business problems</strong>, create value, and achieve lasting success.
            </p>

            {/* Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                marginBottom: "2rem"
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "2rem",
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
                    fontSize: "13px",
                    color: "#9CA3AF"
                  }}
                >
                  Professionals Mentored
                </p>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: "#C9A227"
                  }}
                >
                  $6B+
                </div>
                <p
                  style={{
                    margin: "0.5rem 0 0 0",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    color: "#9CA3AF"
                  }}
                >
                  Digital Transformation Led
                </p>
              </div>
            </div>

            {/* LinkedIn CTA */}
            <a
              href="https://www.linkedin.com/in/enoeka-businessanalysis-coach-businessanalyst-businessanalysiscoach-cbap-prosci-ccba-ecba-career/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsHNAPzkLSvWeiiKJqS5rtg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                backgroundColor: "transparent",
                color: "#C9A227",
                fontFamily: "'Inter', sans-serif",
                fontWeight: "600",
                fontSize: "14px",
                textDecoration: "none",
                border: "2px solid #C9A227",
                borderRadius: "8px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C9A227";
                e.currentTarget.style.color = "#0B1020";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#C9A227";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              🔗 Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Divider */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(201, 162, 39, 0.15)"
          }}
        >
          <p
            style={{
              margin: "0",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "#9CA3AF",
              textAlign: "center",
              fontStyle: "italic"
            }}
          >
            The 30-Day Consulting Offer Bootcamp is built on the exact system Eno used to scale ENY Consulting from zero to multi-million dollar company.
          </p>
        </div>
      </div>
    </section>
  );
}
