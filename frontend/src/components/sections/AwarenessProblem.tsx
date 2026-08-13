// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/AwarenessProblem.tsx

export default function AwarenessProblem() {
  return (
    <section className="bg-white py-20 px-6"
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem"
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-navy/20 mb-6"
          style={{
            backgroundColor: "#16233F33", /* navy with 20% opacity */
            color: "#16233F",
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
        <div className="space-y-8 max-w-xl mx-auto text-center">
          <p className="text-2xl font-bold leading-tight lg:text-3xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1C2536",
              fontWeight: "bold"
            }}
          >
            YOU'RE THE PERSON EVERYONE CALLS WHEN THEY NEED THE ANSWER.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            Your colleagues ask you. Your boss relies on you. Your friends text you for advice on the exact thing companies are paying consultants $10,000, $25,000, even $50,000 to figure out.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            You've spent years — maybe decades — building expertise that is genuinely valuable.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            And yet.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            You're watching people with less experience, less knowledge, and frankly less credibility than you land consulting contracts, advisory roles, and retainer clients.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            People who couldn't do your job on their best day.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            So what do they have that you don't?
          </p>

          <p className="text-xl font-medium text-gray-800 leading-tight lg:text-2xl text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: "500",
              color: "#1F2937",
              fontSize: "20px"
            }}
          >
            It's a packaged offer.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            They took what they know, wrapped it in a clear promise, put a price on it, and started talking to the right people about it. That's it.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            Meanwhile, your expertise is sitting in one of three places right now:
          </p>

          {/* Three bullet points with gold markers */}
          <div className="mt-8 space-y-6 text-left pl-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-gold-cta rounded-full mt-0.5"
                style={{
                  backgroundColor: "#FF6B57",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%"
                }}
              ></div>
              <div className="ml-3 text-gray-700"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#374151",
                  fontSize: "18px",
                  lineHeight: "1.7"
                }}
              >
                Trapped in a salary — where your company pays you a fraction of the value you actually create
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-gold-cta rounded-full mt-0.5"
                style={{
                  backgroundColor: "#FF6B57",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%"
                }}
              ></div>
              <div className="ml-3 text-gray-700"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#374151",
                  fontSize: "18px",
                  lineHeight: "1.7"
                }}
              >
                Given away for free — in WhatsApp groups, coffee chats, and hallway conversations that never convert into income
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-gold-cta rounded-full mt-0.5"
                style={{
                  backgroundColor: "#FF6B57",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%"
                }}
              ></div>
              <div className="ml-3 text-gray-700"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#374151",
                  fontSize: "18px",
                  lineHeight: "1.7"
                }}
              >
                Hidden inside your head — because no one ever showed you how to turn what you know into something you can sell
              </div>
            </div>
          </div>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            This isn't a skill problem. You have the skills.
          </p>

          <p className="mt-2 text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            This isn't a knowledge problem. You know more than most people already charging for it.
          </p>

          <p className="mt-2 text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            This is a packaging problem. And it's 100% fixable — in 30 days.
          </p>

          <p className="mt-4 text-lg font-medium text-gray-800 leading-tight lg:text-xl text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: "500",
              color: "#1F2937",
              fontSize: "20px"
            }}
          >
            That's exactly what the 30-Day Consulting Offer Bootcamp is designed to do. With daily structure, live coaching, a cohort of peers, and a system that has already helped people in 90+ countries do exactly this.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            Join the waitlist today. When doors open September 1st, you'll be first in line — at the lowest price this program will ever be offered.
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
            Join the Free Waitlist — Secure Your Early-Bird Price
          </a>

          <p className="mt-4 text-sm text-gray-300 italic"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#5B6472",
              fontStyle: "italic"
            }}
          >
            Free to join. No payment today. Doors open September 1st.
          </p>
        </div>
      </div>
    </section>
  );
}