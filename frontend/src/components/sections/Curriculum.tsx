// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/Curriculum.tsx

export default function Curriculum() {
  const weeks = [
    {
      week: 1,
      title: "Your Senior Consulting Offer",
      days: "Days 1–7",
      topics: [
        "The senior-consultant mindset shift",
        "Defining your expertise and ideal client with precision",
        "Identifying the expensive problem you solve — and pricing for it",
        "Packaging a high-ticket offer that clients can say yes to",
        "Building your proof portfolio using AI — fast"
      ],
      deliverable: "The Senior Offer Suite — a fully packaged consulting offer with positioning, pricing, and proof."
    },
    {
      week: 2,
      title: "Authority & Visibility",
      days: "Days 8–14",
      topics: [
        "Personal branding strategy for consultants",
        "LinkedIn profile mastery — every section, optimized",
        "AI-assisted thought-leadership content that builds authority fast",
        "Organic networking with the people who actually write the checks"
      ],
      deliverable: "Your LinkedIn profile overhauled + your first authority post published."
    },
    {
      week: 3,
      title: "Landing Clients",
      days: "Days 15–21",
      topics: [
        "Building a targeted lead list of the right decision-makers",
        "Value-first outreach and social selling that doesn't feel desperate",
        "How to communicate your value in one clear sentence",
        "Follow-up sequences that keep conversations alive and moving"
      ],
      deliverable: "Your Outreach Sprint — a live target list and customized pitch messages ready to send."
    },
    {
      week: 4,
      title: "Winning the Client",
      days: "Days 22–30",
      topics: [
        "Discovery call framework — the exact questions to ask",
        "Handling objections like a pro — real client scenarios, real techniques",
        "Proposal writing that converts (templates and examples)",
        "Pricing psychology (why people say yes — and why they don't)"
      ],
      deliverable: "A Proposal + Live Mock Discovery Call — ready to land your first client."
    }
  ];

  return (
    <section className="bg-cream py-20 px-6"
      style={{
        backgroundColor: "#FBF8F1",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem"
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
          style={{
            backgroundColor: "rgba(201, 162, 39, 0.12)",
            color: "#C9A227",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
        >
          The 30-Day Curriculum
        </div>

        {/* Section Headline */}
        <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight lg:text-4xl"
          style={{
            fontFamily: "'Fraunces', serif",
            color: "#0B1020",
            fontWeight: "700",
            fontSize: "clamp(1.75rem, 4vw, 3rem)"
          }}
        >
          HERE'S EXACTLY WHAT YOU'LL BUILD, WEEK BY WEEK.
        </h2>

        {/* Section Subhead */}
        <p className="mt-6 max-w-2xl text-lg text-ink"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#111a33",
            fontSize: "18px",
            lineHeight: "1.8"
          }}
        >
          Every week has a theme, daily training, and a real deliverable you submit. By Day 30, those four deliverables combine into your complete consulting launch package.
        </p>

        {/* Weeks Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-8"
          style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem"
          }}
        >
          {weeks.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-200"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "2rem",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 12px rgba(11, 16, 32, 0.08)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(11, 16, 32, 0.12)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(11, 16, 32, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Week Header */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1rem",
                    marginBottom: "0.5rem"
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "2rem",
                      fontWeight: "700",
                      color: "#C9A227",
                      margin: "0"
                    }}
                  >
                    Week {item.week}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#5B6472",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      margin: "0"
                    }}
                  >
                    {item.days}
                  </p>
                </div>
                <h4
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.375rem",
                    fontWeight: "700",
                    color: "#0B1020",
                    marginTop: "0.5rem",
                    marginBottom: "0"
                  }}
                >
                  {item.title}
                </h4>
              </div>

              {/* Topics List */}
              <div style={{ marginBottom: "1.5rem" }}>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem"
                  }}
                >
                  {item.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem"
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#C9A227",
                          marginTop: "0.6rem",
                          flexShrink: 0
                        }}
                      ></span>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "15px",
                          lineHeight: "1.6",
                          color: "#374151"
                        }}
                      >
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverable */}
              <div
                style={{
                  borderTop: "1px solid #E5E7EB",
                  paddingTop: "1.5rem",
                  marginTop: "1.5rem"
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontStyle: "italic",
                    fontWeight: "600",
                    color: "#C9A227",
                    margin: "0",
                    lineHeight: "1.7"
                  }}
                >
                  <span style={{ fontWeight: "700", fontStyle: "normal" }}>Deliverable:</span> {item.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Message */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            backgroundColor: "#0B1020",
            borderRadius: "12px",
            textAlign: "center"
          }}
        >
          <p
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#E4C767",
              margin: "0 0 1rem 0"
            }}
          >
            This isn't theory. This is a build.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#D1D5DB",
              margin: "0"
            }}
          >
            Four weeks. Four deliverables. One complete consulting launch system ready to land real clients on Day 31.
          </p>
        </div>
      </div>
    </section>
  );
}