// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/WhatYouGet.tsx

export default function WhatYouGet() {
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
          Everything Inside the Bootcamp
        </div>

        {/* Section Headline */}
        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight lg:text-4xl text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1C2536",
            fontWeight: "bold"
          }}
        >
          THIS ISN'T JUST A COURSE. IT'S A 30-DAY CONSULTING LAUNCH SYSTEM.
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
          Here's what every enrolled student gets — and why each piece matters.
        </p>

        {/* Two-column icon grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Item 1 */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow transition-shadow"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              border: "1px solid #E2E8F0",
              padding: "1.5rem"
            }}
          >
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-flex items-center justify-center"
                style={{
                  backgroundColor: "#FF6B571A", /* gold with 10% opacity */
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl"
                  style={{ color: "#FF6B57" }}
                >  _clock</span>
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
                  30 Days of Daily Training + Daily Tasks
                </h3>
                <p className="text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "16px",
                    lineHeight: "1.7"
                  }}
                >
                  Every day for 30 days, a short focused training lands — and a specific task to complete that day. No fluff. No filler. Each day builds on the last. You don't just learn; you execute.
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow transition-shadow"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              border: "1px solid #E2E8F0",
              padding: "1.5rem"
            }}
          >
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-flex items-center justify-center"
                style={{
                  backgroundColor: "#FF6B571A", /* gold with 10% opacity */
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl"
                  style={{ color: "#FF6B57" }}
                >  _users</span>
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
                  Live Coaching Every Saturday With Your Coach
                </h3>
                <p className="text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "16px",
                    lineHeight: "1.7"
                  }}
                >
                  Every Saturday during the bootcamp, The Coach leads a live session with the full cohort. Ask questions, get unstuck, get feedback on your actual work. This is not a recording. This is live — with your name on it.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow transition-shadow"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              border: "1px solid #E2E8F0",
              padding: "1.5rem"
            }}
          >
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-flex items-center justify-center"
                style={{
                  backgroundColor: "#FF6B571A", /* gold with 10% opacity */
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl"
                  style={{ color: "#FF6B57" }}
                >  _play</span>
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
                  Live Kickoff Call — Saturday, September 5
                </h3>
                <p className="text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "16px",
                    lineHeight: "1.7"
                  }}
                >
                  Before Day 1, you meet your coach and your cohort. You'll know exactly what to expect, who you're building alongside, and how to hit the ground running when classes begin.
                </p>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow transition-shadow"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              border: "1px solid #E2E8F0",
              padding: "1.5rem"
            }}
          >
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-flex items-center justify-center"
                style={{
                  backgroundColor: "#FF6B571A", /* gold with 10% opacity */
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl"
                  style={{ color: "#FF6B57" }}
                >  _clipboard</span>
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
                  Templates, Worksheets, and Weekly Execution Sprints
                </h3>
                <p className="text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "16px",
                    lineHeight: "1.7"
                  }}
                >
                  Every week comes with done-for-you templates and worksheets that cut your execution time in half. The weekly Execution Sprints are structured deliverables that hold you accountable to building — not just watching.
                </p>
              </div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow transition-shadow"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              border: "1px solid #E2E8F0",
              padding: "1.5rem"
            }}
          >
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-flex items-center justify-center"
                style={{
                  backgroundColor: "#FF6B571A", /* gold with 10% opacity */
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl"
                  style={{ color: "#FF6B57" }}
                >  _group</span>
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
                  Cohort Community
                </h3>
                <p className="text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "16px",
                    lineHeight: "1.7"
                  }}
                >
                  You're not doing this alone. Your cohort is a group of professionals at the same stage, building in real time. Accountability partners, feedback on your work, people who get it — because they're in it too.
                </p>
              </div>
            </div>
          </div>

          {/* Item 6 */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow transition-shadow"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              border: "1px solid #E2E8F0",
              padding: "1.5rem"
            }}
          >
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-flex items-center justify-center"
                style={{
                  backgroundColor: "#FF6B571A", /* gold with 10% opacity */
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl"
                  style={{ color: "#FF6B57" }}
                >  _robot</span>
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
                  AI Tools Integration (Claude, ChatGPT, Lovable + More)
                </h3>
                <p className="text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "16px",
                    lineHeight: "1.7"
                  }}
                >
                  You'll use AI tools throughout the bootcamp to build faster — from crafting your offer language to writing outreach messages to building your proof portfolio. No technical background required.
                </p>
              </div>
            </div>
          </div>

          {/* Item 7 */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow transition-shadow"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              border: "1px solid #E2E8F0",
              padding: "1.5rem"
            }}
          >
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-flex items-center justify-center"
                style={{
                  backgroundColor: "#FF6B571A", /* gold with 10% opacity */
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl"
                  style={{ color: "#FF6B57" }}
                >  _microphone</span>
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
                  Capstone: Live Mock Discovery Calls
                </h3>
                <p className="text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "16px",
                    lineHeight: "1.7"
                  }}
                >
                  Week 4 ends with a live capstone — real mock discovery calls, a real-world client scenario, direct feedback from your coach. You'll have practiced before you ever walk into a real client meeting.
                </p>
              </div>
            </div>
          </div>

          {/* Item 8 */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow transition-shadow"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              border: "1px solid #E2E8F0",
              padding: "1.5rem"
            }}
          >
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-flex items-center justify-center"
                style={{
                  backgroundColor: "#FF6B571A", /* gold with 10% opacity */
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span className="text-2xl"
                  style={{ color: "#FF6B57" }}
                >  _graduation-cap</span>
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
                  Graduation — Saturday, October 10
                </h3>
                <p className="text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "16px",
                    lineHeight: "1.7"
                  }}
                >
                  You don't just complete a course. You graduate. With a finished offer, a certificate, and the momentum of a cohort that watched you build it from Day 1.
                </p>
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
            Join the Free Waitlist — Get Early Access September 1st
          </a>

          <p className="mt-4 text-sm text-gray-300 italic"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#5B6472",
              fontStyle: "italic"
            }}
          >
            Free to join today. No payment until September 1st.
          </p>
        </div>
      </div>
    </section>
  );
}