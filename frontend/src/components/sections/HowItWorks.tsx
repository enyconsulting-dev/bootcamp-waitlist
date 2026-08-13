// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/HowItWorks.tsx

export default function HowItWorks() {
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
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 mb-6"
          style={{
            backgroundColor: "#FFFFFF33", /* white with 20% opacity */
            color: "#FFFFFF",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
        >
          The Timeline
        </div>

        {/* Section Headline */}
        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight lg:text-4xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#FFFFFF",
            fontWeight: "bold"
          }}
        >
          HERE'S EXACTLY HOW THE NEXT 40 DAYS UNFOLD.
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
          Join the waitlist today. Here's what happens next — step by step.
        </p>

        {/* Horizontal Timeline */}
        <div className="mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute inset-x-0 top-[50px] h-0.5 bg-gold/50"
            style={{
              left: "0",
              right: "0",
              top: "50px",
              height: "1px",
              backgroundColor: "#FF6B5780" /* gold with 50% opacity */
            }}
          ></div>

          {/* Timeline Nodes */}
          <div className="relative">
            {/* Node 1: Now */}
            <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{
                left: "0%",
                top: "0px",
                transform: "translateX(-50%) translateY(-50%)"
              }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#FFFFFF33", /* white with 20% opacity */
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl"
                  style={{ color: "#FFFFFF" }}
                >��������������</span>
              </div>
              <div className="text-lg font-bold"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                NOW
              </div>
              <div className="text-sm text-gray-300 mt-2 max-w-xs text-center"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#A0AEC0",
                  fontSize: "14px",
                  lineHeight: "1.5"
                }}
              >
                Join the Free Waitlist You secure your spot on the waitlist at no cost.
              </div>
            </div>

            {/* Node 2: Sept 1 */}
            <div className="absolute left-[20%] top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{
                left: "20%",
                top: "0px",
                transform: "translateX(-50%) translateY(-50%)"
              }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#FFFFFF33", /* white with 20% opacity */
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl font-bold"
                  style={{
                    color: "#FF6B57",
                    fontWeight: "bold"
                  }}
                >��������������</span>
              </div>
              <div className="text-lg font-bold"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                Sept 1
              </div>
              <div className="text-sm text-gray-300 mt-2 max-w-xs text-center"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#A0AEC0",
                  fontSize: "14px",
                  lineHeight: "1.5"
                }}
              >
                Doors Open (Waitlist Members Only — First 48 Hours)<br/>
                Enrollment opens. Waitlist members get the exclusive early-bird price: $47 USD / ��� � � ₦ 26,875 NGN. The public doesn't see this price. This is your window.
              </div>
            </div>

            {/* Node 3: Sept 3 */}
            <div className="absolute left-[40%] top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{
                left: "40%",
                top: "0px",
                transform: "translateX(-50%) translateY(-50%)"
              }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#FFFFFF33", /* white with 20% opacity */
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl"
                  style={{ color: "#FFFFFF" }}
                >��������������</span>
              </div>
              <div className="text-lg font-bold"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                Sept 3
              </div>
              <div className="text-sm text-gray-300 mt-2 max-w-xs text-center"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#A0AEC0",
                  fontSize: "14px",
                  lineHeight: "1.5"
                }}
              >
                Early-Bird Closes<br/>
                The early-bird price ends at midnight. After this, enrollment moves to the regular price: $97 USD / ��� � � ₦37,625 NGN. Waitlist members who acted in the 48-hour window saved 50%.
              </div>
            </div>

            {/* Node 4: Sept 5 */}
            <div className="absolute left-[60%] top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{
                left: "60%",
                top: "0px",
                transform: "translateX(-50%) translateY(-50%)"
              }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#FFFFFF33", /* white with 20% opacity */
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl"
                  style={{ color: "#FFFFFF" }}
                >��������������</span>
              </div>
              <div className="text-lg font-bold"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                Sept 5 (Saturday)
              </div>
              <div className="text-sm text-gray-300 mt-2 max-w-xs text-center"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#A0AEC0",
                  fontSize: "14px",
                  lineHeight: "1.5"
                }}
              >
                Live Kickoff Call<br/>
                Meet Coach, meet your cohort, and get your bearings before Day 1. This is where the bootcamp officially begins.
              </div>
            </div>

            {/* Node 5: Sept 7 */}
            <div className="absolute left-[80%] top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{
                left: "80%",
                top: "0px",
                transform: "translateX(-50%) translateY(-50%)"
              }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#FFFFFF33", /* white with 20% opacity */
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl"
                  style={{ color: "#FFFFFF" }}
                >��������������</span>
              </div>
              <div className="text-lg font-bold"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                Sept 7 (Monday)
              </div>
              <div className="text-sm text-gray-300 mt-2 max-w-xs text-center"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#A0AEC0",
                  fontSize: "14px",
                  lineHeight: "1.5"
                }}
              >
                Day 1. Classes Begin.<br/>
                Your first daily training and first daily task land. The build begins.
              </div>
            </div>

            {/* Node 6: Oct 10 */}
            <div className="absolute right-0 top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{
                right: "0",
                top: "0px",
                transform: "translateX(-50%) translateY(-50%)"
              }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#FFFFFF33", /* white with 20% opacity */
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl font-bold"
                  style={{
                    color: "#FF6B57",
                    fontWeight: "bold"
                  }}
                >��������������</span>
              </div>
              <div className="text-lg font-bold"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                Oct 10 (Saturday)
              </div>
              <div className="text-sm text-gray-300 mt-2 max-w-xs text-center"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#A0AEC0",
                  fontSize: "14px",
                  lineHeight: "1.5"
                }}
              >
                Graduation & Demo Day<br/>
                Thirty days later. You cross the finish line with a packaged offer, a proposal, a LinkedIn presence, an outreach system, and a live mock discovery call behind you.
              </div>
            </div>
          </div>
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
            Join the Free Waitlist — Lock In Your Early-Bird Access
          </a>

          <p className="mt-4 text-sm text-gray-300 italic"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#5B6472",
              fontStyle: "italic"
            }}
          >
            No payment today. Your spot on the waitlist is free.
          </p>
        </div>
      </div>
    </section>
  );
}