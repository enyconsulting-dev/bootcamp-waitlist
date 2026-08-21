// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/AwarenessProblem.tsx

export default function AwarenessProblem() {
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
      <div className="max-w-4xl mx-auto awareness-content">
        {/* Section Label */}
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 awareness-label"
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
          Let's Be Honest For a Second
        </div>

        {/* Section Content */}
        <div className="space-y-8 max-w-3xl mx-auto text-center">
          <p className="text-2xl font-bold leading-tight lg:text-4xl"
            style={{
              fontFamily: "'Fraunces', serif",
              color: "#0B1020",
              fontWeight: "700",
              fontSize: "clamp(1.75rem, 4vw, 3rem)"
            }}
          >
            YOU'RE THE PERSON EVERYONE CALLS WHEN THEY NEED THE ANSWER.
          </p>

          <p className="text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#111a33",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            Your colleagues ask you. Your boss relies on you. Your friends text you for advice on the exact thing companies are paying consultants $10,000, $25,000, even $50,000 to figure out.
          </p>

          <p className="text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#111a33",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            You've spent years — maybe decades — building expertise that is genuinely valuable.
          </p>

          <p className="text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#111a33",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            And yet.
          </p>

          <p className="text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#111a33",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            You're watching people with less experience, less knowledge, and frankly less credibility than you land consulting contracts, advisory roles, and retainer clients.
          </p>

          <p className="text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#111a33",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            People who couldn't do your job on their best day.
          </p>

          <p className="text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#d2d7e4",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            So what do they have that you don't?
          </p>

          <p className="text-2xl font-bold text-ink leading-tight lg:text-3xl text-center"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: "700",
              color: "#d2d7e4",
              fontSize: "1.875rem"
            }}
          >
            It's a packaged offer.
          </p>

          <p className="text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#d2d7e4",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            They took what they know, wrapped it in a clear promise, put a price on it, and started talking to the right people about it. That's it.
          </p>

          <p className="text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#d2d7e4",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            Meanwhile, your expertise is sitting in one of three places right now:
          </p>

          {/* Three bullet points with gold markers */}
          <div className="mt-8 space-y-6 text-left pl-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                style={{
                  backgroundColor: "#C9A227",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  flexShrink: 0
                }}
              ></div>
              <div className="ml-4 text-ink"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#d2d7e4",
                  fontSize: "18px",
                  lineHeight: "1.8"
                }}
              >
                Trapped in a salary — where your company pays you a fraction of the value you actually create
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                style={{
                  backgroundColor: "#C9A227",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  flexShrink: 0
                }}
              ></div>
              <div className="ml-4 text-ink"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#d2d7e4",
                  fontSize: "18px",
                  lineHeight: "1.8"
                }}
              >
                Given away for free — in WhatsApp groups, coffee chats, and hallway conversations that never convert into income
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                style={{
                  backgroundColor: "#C9A227",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  flexShrink: 0
                }}
              ></div>
              <div className="ml-4 text-ink"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#d2d7e4",
                  fontSize: "18px",
                  lineHeight: "1.8"
                }}
              >
                Hidden inside your head — because no one ever showed you how to turn what you know into something you can sell
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#111a33",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            This isn't a skill problem. You have the skills.
          </p>

          <p className="mt-2 text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#111a33",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            This isn't a knowledge problem. You know more than most people already charging for it.
          </p>

          <p className="mt-2 text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#111a33",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            <span style={{ fontWeight: "700" }}>This is a packaging problem. And it's 100% fixable — in 30 days.</span>
          </p>

          <p className="mt-6 text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#111a33",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            That's exactly what the 30-Day Consulting Offer Bootcamp is designed to do. With daily structure, live coaching, a cohort of peers, and a system that has already helped people in 90+ countries do exactly this.
          </p>

          <p className="mt-6 text-lg text-ink leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#111a33",
              fontSize: "18px",
              lineHeight: "1.8"
            }}
          >
            Join the waitlist today. When doors open September 1st, you'll be first in line — at the lowest price this program will ever be offered.
          </p>

          {/* Inline CTA */}
          <div style={{ marginTop: "2rem" }}>
            <a href="#waitlist-form"
              className="inline-block text-white font-medium transition-all awareness-cta"
              style={{
                backgroundColor: "#C9A227",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif",
                fontWeight: "600",
                fontSize: "16px",
                padding: "16px 40px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-block",
                minHeight: "56px",
                lineHeight: "1.4",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 40px -10px rgba(201,162,39,0.45)",
                transition: "all 0.2s ease-in-out"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#9C7C1A";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 15px 50px -10px rgba(201,162,39,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C9A227";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 40px -10px rgba(201,162,39,0.45)";
              }}
            >
              Join the Free Waitlist — Secure Your Early-Bird Price
            </a>
          </div>

          <p className="mt-4 text-sm text-ink italic"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#5B6472",
              fontStyle: "italic",
              opacity: 0.85
            }}
          >
            Free to join. No payment today. Doors open September 1st.
          </p>
        </div>
      </div>
    </section>
  );
}