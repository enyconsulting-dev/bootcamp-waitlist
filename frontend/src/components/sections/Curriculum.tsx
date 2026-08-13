// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/Curriculum.tsx

export default function Curriculum() {
  return (
    <section className="bg-mist py-20 px-6"
      style={{
        backgroundColor: "#F7F8FA",
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
          The 30-Day Curriculum
        </div>

        {/* Section Headline */}
        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight lg:text-4xl text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1C2536",
            fontWeight: "bold"
          }}
        >
          HERE'S EXACTLY WHAT YOU'LL BUILD, WEEK BY WEEK.
        </p>
        </div>

        {/* Week 1 */}
        <div className="mt-12 space-y-6">
          <div className="border-l-4 border-gold pl-4"
            style={{
              borderLeftColor: "#C6A24A",
              borderLeftWidth: "4px"
            }}
          >
            <h3 className="text-2xl font-bold text-navy mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#16233F",
                fontWeight: "bold",
                fontSize: "24px"
              }}
            >
              WEEK 1: YOUR SENIOR CONSULTING OFFER
            </h3>
            <p className="text-base text-gray-600 mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#5B6472",
                fontSize: "16px",
                lineHeight: "1.7"
              }}
            >
              Days 1–7 · Deliverable: The Senior Offer Suite
            </p>
            <p className="text-lg text-gray-700 font-medium mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#374151",
                fontWeight: "500",
                fontSize: "18px"
              }}
            >
              This week, you stop thinking like an employee and start thinking like a consultant. You'll define the exact expertise you're monetizing, identify the client who has the expensive problem you solve, and package it into a high-ticket offer priced for ROI — not for what feels “safe.”
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 pl-5 list-disc text-gray-700"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#374151",
                fontSize: "18px",
                lineHeight: "1.7"
              }}
            >
              <li>The senior-consultant mindset shift</li>
              <li>Defining your expertise and ideal client with precision</li>
              <li>Identifying the expensive problem you solve — and pricing for it</li>
              <li>Packaging a high-ticket offer that clients can say yes to</li>
              <li>Building your proof portfolio using AI — fast</li>
            </ul>

            <p className="mt-4 text-lg text-gray-700 font-medium"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#374151",
                fontWeight: "500",
                fontSize: "18px"
              }}
            >
              Week 1 Deliverable: Your Senior Offer Suite — a fully packaged consulting offer with positioning, pricing, and proof.
            </p>
          </div>
        </div>

        {/* Week 2 */}
        <div className="mt-12 space-y-6">
          <div className="border-l-4 border-gold pl-4"
            style={{
              borderLeftColor: "#C6A24A",
              borderLeftWidth: "4px"
            }}
          >
            <h3 className="text-2xl font-bold text-navy mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#16233F",
                fontWeight: "bold",
                fontSize: "24px"
              }}
            >
              WEEK 2: AUTHORITY & VISIBILITY
            </h3>
            <p className="text-base text-gray-600 mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#5B6472",
                fontSize: "16px",
                lineHeight: "1.7"
              }}
            >
              Days 8–14 · Deliverable: LinkedIn Overhaul + First Post Published
            </p>
            <p className="text-lg text-gray-700 font-medium mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#374151",
                fontWeight: "500",
                fontSize: "18px"
              }}
            >
              The best offer in the world doesn't matter if no one knows you exist. This week, you build the digital presence that makes decision-makers take you seriously before you ever send a message.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 pl-5 list-disc text-gray-700"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#374151",
                fontSize: "18px",
                lineHeight: "1.7"
              }}
            >
              <li>Personal branding strategy for consultants</li>
              <li>LinkedIn profile mastery — every section, optimized</li>
              <li>AI-assisted thought-leadership content that builds authority fast</li>
              <li>Organic networking with the people who actually write the checks</li>
            </ul>

            <p className="mt-4 text-lg text-gray-700 font-medium"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#374151",
                fontWeight: "500",
                fontSize: "18px"
              }}
            >
              Week 2 Deliverable: Your LinkedIn profile overhauled + your first authority post published.
            </p>
          </div>
        </div>

        {/* Week 3 */}
        <div className="mt-12 space-y-6">
          <div className="border-l-4 border-gold pl-4"
            style={{
              borderLeftColor: "#C6A24A",
              borderLeftWidth: "4px"
            }}
          >
            <h3 className="text-2xl font-bold text-navy mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#16233F",
                fontWeight: "bold",
                fontSize: "24px"
              }}
            >
              WEEK 3: LANDING CLIENTS
            </h3>
            <p className="text-base text-gray-600 mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#5B6472",
                fontSize: "16px",
                lineHeight: "1.7"
              }}
            >
              Days 15–21 · Deliverable: Outreach Sprint — Target List + Custom Pitches
            </p>
            <p className="text-lg text-gray-700 font-medium mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#374151",
                fontWeight: "500",
                fontSize: "18px"
              }}
            >
              This is where most consulting programs stop — at the offer. We don't stop. This week, you build your lead list of real decision-makers and learn how to reach them in a way that feels like value, not spam.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 pl-5 list-disc text-gray-700"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#374151",
                fontSize: "18px",
                lineHeight: "1.7"
              }}
            >
              <li>Building a targeted lead list of the right decision-makers</li>
              <li>Value-first outreach and social selling that doesn't feel desperate</li>
              <li>How to communicate your value in one clear sentence</li>
              <li>Follow-up sequences that keep conversations alive and moving</li>
            </ul>

            <p className="mt-4 text-lg text-gray-700 font-medium"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#374151",
                fontWeight: "500",
                fontSize: "18px"
              }}
            >
              Week 3 Deliverable: Your Outreach Sprint — a live target list and customized pitch messages ready to send.
            </p>
          </div>
        </div>

        {/* Week 4 */}
        <div className="mt-12 space-y-6">
          <div className="border-l-4 border-gold pl-4"
            style={{
              borderLeftColor: "#C6A24A",
              borderLeftWidth: "4px"
            }}
          >
            <h3 className="text-2xl font-bold text-navy mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#16233F",
                fontWeight: "bold",
                fontSize: "24px"
              }}
            >
              WEEK 4: WINNING THE CLIENT
            </h3>
            <p className="text-base text-gray-600 mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#5B6472",
                fontSize: "16px",
                lineHeight: "1.7"
              }}
            >
              Days 22–30 · Deliverable: A Proposal + Live Mock Discovery Call
            </p>
            <p className="text-lg text-gray-700 font-medium mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#374151",
                fontWeight: "500",
                fontSize: "18px"
              }}
            >
              Getting the meeting is one thing. Winning the client is another. This week, you learn the consulting discovery call framework, how to diagnose and present solutions, and how to price your fee with confidence — without flinching.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 pl-5 list-disc text-gray-700"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#374151",
                fontSize: "18px",
                lineHeight: "1.7"
              }}
            >
              <li>The consulting discovery call — structure, psychology, and control</li>
              <li>Diagnosing the problem and presenting your solution</li>
              <li>Moving from discovery to proposal — the exact sequence</li>
              <li>Pricing and presenting your fee without apologizing for it</li>
              <li>Handling objections: “Your rate is too high,” “Let me think about it,” and every other hesitation</li>
            </ul>

            <p className="mt-4 text-lg text-gray-700 font-medium"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#374151",
                fontWeight: "500",
                fontSize: "18px"
              }}
            >
              Week 4 Deliverable: A complete consulting proposal + a live mock discovery call with real-time feedback.
            </p>
          </div>
        </div>

        {/* Capstone */}
        <div className="mt-12 space-y-6">
          <div className="bg-navy text-white rounded-lg p-6"
            style={{
              backgroundColor: "#16233F",
              borderRadius: "8px",
              padding: "1.5rem"
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#FFFFFF",
                fontWeight: "bold",
                fontSize: "24px"
              }}
            >
              CAPSTONE → GRADUATION: SATURDAY, OCTOBER 10
            </h3>
            <p className="text-lg text-gray-200 mb-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E2E8F0",
                fontSize: "18px",
                lineHeight: "1.7"
              }}
            >
              Live Mock Discovery Calls · Pitch a Real Scenario · Direct Feedback
            </p>
            <p className="text-lg text-gray-200 font-medium"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E2E8F0",
                fontWeight: "500",
                fontSize: "18px"
              }}
            >
              You don't just finish. You graduate. The capstone is a live event where you pitch a real-world client scenario, run paired live mock discovery calls with your cohort, and get direct feedback from the coach — before you ever sit across from a real client.
            </p>
            <p className="mt-4 text-lg text-gray-200 font-semibold"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E2E8F0",
                fontWeight: "600",
                fontSize: "18px"
              }}
            >
              Graduation Day: Saturday, October 10, 2026.
            </p>
          </div>
        </div>

        {/* Inline CTA */}
        <div className="mt-12 text-center">
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
            Join the Free Waitlist — Be First to Build This
          </a>

          <p className="mt-4 text-sm text-gray-300 italic"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#5B6472",
              fontStyle: "italic"
            }}
          >
            Waitlist members get 48-hour early access on September 1st at $47 USD / � ₦26,875NGN.
          </p>
        </div>
      </div>
    </section>
  );
}