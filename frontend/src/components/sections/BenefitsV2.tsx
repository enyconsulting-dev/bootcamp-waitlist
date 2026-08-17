// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/BenefitsV2.tsx
// Clean benefits section inspired by reference design

export default function BenefitsV2() {
  const benefits = [
    {
      number: "1",
      title: "The Consulting Launch Blueprint",
      description: "The step-by-step framework I used to go from employee to multi-million dollar business owner — and how you can compress that timeline into 30 days."
    },
    {
      number: "2",
      title: "Package Your Expertise Into an Offer People Pay For",
      description: "Stop giving away free advice. Position your skills as a premium consulting service with a price tag that reflects your real value."
    },
    {
      number: "3",
      title: "A Client Acquisition System",
      description: "The exact strategy I used to land high-value clients consistently without a massive following or an ads budget."
    },
    {
      number: "4",
      title: "The #1 Mistake That Keeps You Stuck",
      description: "Most professionals make this error before they even launch. We will fix it before you leave the bootcamp."
    }
  ];

  return (
    <section
      style={{
        backgroundColor: "#F9FAFB",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem"
      }}
    >
      <div style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
        {/* Section Headline */}
        <h2
          style={{
            margin: "0 0 3rem 0",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: "700",
            color: "#0F172A",
            lineHeight: "1.3",
            textAlign: "center"
          }}
        >
          Here Is Exactly What You Will Learn
        </h2>

        {/* Benefits Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem"
          }}
        >
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              style={{
                padding: "2rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "8px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "#F3F4F6",
                  marginBottom: "1.5rem"
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#0F172A"
                  }}
                >
                  {benefit.number}
                </span>
              </div>

              <h3
                style={{
                  margin: "0 0 0.75rem 0",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#0F172A",
                  lineHeight: "1.4"
                }}
              >
                {benefit.title}
              </h3>

              <p
                style={{
                  margin: "0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  color: "#6B7280",
                  lineHeight: "1.7"
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
