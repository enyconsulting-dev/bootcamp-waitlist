// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/WhyJoinWaitlist.tsx

export default function WhyJoinWaitlist() {
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
          Five Reasons to Join the Waitlist Today
        </div>

        {/* Section Headline */}
        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight lg:text-4xl text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1C2536",
            fontWeight: "bold"
          }}
        >
          THE WAITLIST ISN'T JUST A LIST. IT'S AN ADVANTAGE.
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
          Here's exactly what you get by joining today — before doors open.
        </p>

        {/* Reasons */}
        <div className="mt-12 space-y-8">
          {/* Reason 1 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4"
              style={{
                backgroundColor: "#FF6B571A", /* gold with 10% opacity */
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span className="text-2xl font-bold text-gold-cta"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FF6B57",
                  fontWeight: "bold"
                }}
              >1</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-navy mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#16233F",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                First Access — Before the Public
              </h3>
              <p className="text-gray-600"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#5B6472",
                  fontSize: "16px",
                  lineHeight: "1.7"
                }}
              >
                When enrollment opens September 1st, waitlist members get in first. Before the public announcement. Before social media. Before the cohort fills. You're not waiting in line — you're at the front of it.
              </p>
            </div>
          </div>

          {/* Reason 2 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4"
              style={{
                backgroundColor: "#FF6B571A", /* gold with 10% opacity */
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span className="text-2xl font-bold text-gold-cta"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FF6B57",
                  fontWeight: "bold"
                }}
              >2</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-navy mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#16233F",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                The Lowest Price This Program Will Ever Be
              </h3>
              <p className="text-gray-600"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#5B6472",
                  fontSize: "16px",
                  lineHeight: "1.7"
                }}
              >
                The early-bird price — $47 USD /                                                                                     26,875 NGN — is exclusively for waitlist members, and it's only available for 48 hours. After September 3rd, the price goes to $97 USD /                                                                                                   37,625 NGN and stays there. Joining the waitlist today is the only way to lock in this price.
              </p>
            </div>
          </div>

          {/* Reason 3 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4"
              style={{
                backgroundColor: "#FF6B571A", /* gold with 10% opacity */
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span className="text-2xl font-bold text-gold-cta"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FF6B57",
                  fontWeight: "bold"
                }}
              >3</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-navy mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#16233F",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                First Look at the Full Curriculum
              </h3>
              <p className="text-gray-600"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#5B6472",
                  fontSize: "16px",
                  lineHeight: "1.7"
                }}
              >
                As a waitlist member, you'll get a detailed breakdown of exactly what you'll build over 30 days — week by week, deliverable by deliverable — before anyone else sees it. No surprises. You'll know exactly what you're signing up for.
              </p>
            </div>
          </div>

          {/* Reason 4 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4"
              style={{
                backgroundColor: "#FF6B571A", /* gold with 10% opacity */
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span className="text-2xl font-bold text-gold-cta"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FF6B57",
                  fontWeight: "bold"
                }}
              >4</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-navy mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#16233F",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                Priority Notification When Doors Open
              </h3>
              <p className="text-gray-600"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#5B6472",
                  fontSize: "16px",
                  lineHeight: "1.7"
                }}
              >
                You won't miss the window. When enrollment opens September 1st, you'll be the first to know — with your personal early-bird enrollment link, your currency options (USD via Stripe, NGN via Paystack), and everything you need to enroll in under 5 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="mt-16 px-4 py-6 bg-gold/5 rounded-lg"
          style={{
            backgroundColor: "#FFF8E7", /* gold-tinted */
            border: "1px solid #FF6B5733", /* gold border with 20% opacity */
            borderRadius: "8px",
            padding: "1.5rem"
          }}
        >
          <p className="text-lg font-bold text-navy text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#16233F",
              fontWeight: "bold",
              fontSize: "18px",
              textAlign: "center"
            }}
          >
            In short: joining the waitlist today is free, and it saves you up to $50 /                                                                                 10,000 when doors open September 1st.
          </p>

          <p className="mt-2 text-base text-navy text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#16233F",
              fontSize: "16px",
              textAlign: "center"
            }}
          >
            There is no downside to being on this list.
          </p>
        </div>

        {/* Inline CTA */}
        <div className="mt-16 text-center">
          <a href="#waitlist-form"
            className="inline-block bg-gold-cta hover:bg-gold-cta-dark text-white font-medium py-4 px-8 rounded-lg transition-colors disabled:opacity-50"
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
            Yes — Join the Free Waitlist Now
          </a>

          <p className="mt-4 text-sm text-gray-300 italic"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#5B6472",
              fontStyle: "italic"
            }}
          >
            Takes 60 seconds. Bonus delivered immediately.
          </p>
        </div>
      </div>
    </section>
  );
}