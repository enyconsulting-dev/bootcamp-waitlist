// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/Curriculum.tsx

export default function Curriculum() {
  const weeks = [
    {
      title: "Week 1: Your Senior Consulting Offer",
      summary: "Days 1–7 · Deliverable: The Senior Offer Suite",
      body:
        "This week, you stop thinking like an employee and start thinking like a consultant. You define your expertise, identify the expensive problem you solve, and package it into a high-ticket offer priced for ROI.",
      bullets: [
        "The senior-consultant mindset shift",
        "Defining your expertise and ideal client with precision",
        "Packaging a high-ticket offer that clients can say yes to",
        "Building proof using AI — fast",
      ],
    },
    {
      title: "Week 2: Authority & Visibility",
      summary: "Days 8–14 · Deliverable: LinkedIn Overhaul + First Post Published",
      body:
        "The best offer in the world means nothing if no one knows you exist. This week, you build the digital presence that makes decision-makers take you seriously before you ever send a message.",
      bullets: [
        "Personal branding strategy for consultants",
        "LinkedIn profile mastery",
        "AI-assisted thought leadership content",
        "Organic networking with the people who write the checks",
      ],
    },
    {
      title: "Week 3: Landing Clients",
      summary: "Days 15–21 · Deliverable: Outreach Sprint — Target List + Custom Pitches",
      body:
        "This is where most programs stop. We do not. You build a real lead list and learn how to reach the right decision-makers in a way that feels value-first, not spammy.",
      bullets: [
        "Targeted lead list building",
        "Value-first outreach and social selling",
        "Clear positioning in one sentence",
        "Follow-up sequences that keep conversations alive",
      ],
    },
    {
      title: "Week 4: Winning the Client",
      summary: "Days 22–30 · Deliverable: Proposal + Live Mock Discovery Call",
      body:
        "You learn the consulting discovery-call framework, how to position solutions, and how to price with confidence while handling objections without flinching.",
      bullets: [
        "Consulting discovery-call structure",
        "Diagnosing the problem and presenting the solution",
        "Moving from discovery to proposal",
        "Handling objections with confidence",
      ],
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#F7F8FA",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 999,
            background: "rgba(22,35,63,0.08)",
            color: "#16233F",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "10px 16px",
            marginBottom: 16,
            fontFamily: "Inter, sans-serif",
          }}
        >
          The 30-Day Curriculum
        </div>

        <h2
          style={{
            margin: "0 auto 30px",
            maxWidth: 760,
            textAlign: "center",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.3rem, 3.5vw, 4rem)",
            lineHeight: 1.08,
            color: "#1C2536",
          }}
        >
          Here&apos;s exactly what you&apos;ll build, week by week.
        </h2>

        <div style={{ display: "grid", gap: 22, marginTop: 30 }}>
          {weeks.map((week) => (
            <div
              key={week.title}
              style={{
                background: "#ffffff",
                borderLeft: "4px solid #C6A24A",
                borderRadius: 18,
                padding: "24px 20px 20px",
                boxShadow: "0 12px 28px rgba(22,35,63,0.06)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: "#16233F",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 2vw, 2.3rem)",
                  lineHeight: 1.2,
                }}
              >
                {week.title}
              </h3>

              <p
                style={{
                  margin: "12px 0 10px",
                  color: "#5B6472",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                }}
              >
                {week.summary}
              </p>

              <p
                style={{
                  margin: "0 0 14px",
                  color: "#374151",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 18,
                  lineHeight: 1.7,
                }}
              >
                {week.body}
              </p>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: 20,
                  color: "#374151",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 17,
                  lineHeight: 1.8,
                }}
              >
                {week.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#16233F",
            color: "#ffffff",
            borderRadius: 18,
            padding: "28px 22px",
            marginTop: 28,
            boxShadow: "0 14px 32px rgba(22,35,63,0.12)",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 2.5vw, 2.6rem)",
              lineHeight: 1.2,
            }}
          >
            Capstone → Graduation: Saturday, October 10
          </h3>
          <p
            style={{
              margin: "12px 0 0",
              color: "rgba(255,255,255,0.82)",
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              lineHeight: 1.7,
            }}
          >
            Live mock discovery calls, direct feedback, and a clear path to a finished consulting offer before you ever pitch a real client.
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a
            href="#waitlist-form"
            style={{
              display: "inline-block",
              minHeight: 56,
              background: "linear-gradient(135deg, #FF6B57 0%, #ff8a73 100%)",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: 14,
              padding: "18px 30px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              boxShadow: "0 18px 28px rgba(255,107,87,0.22)",
            }}
          >
            Join the Free Waitlist — Be First to Build This
          </a>
        </div>
      </div>
    </section>
  );
}