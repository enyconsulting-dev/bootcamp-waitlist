// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/Testimonials.tsx

export default function Testimonials() {
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
          What People Are Saying
        </div>

        {/* Section Headline */}
        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight lg:text-4xl text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1C2536",
            fontWeight: "bold"
          }}
        >
          HERE’S WHAT PAST ATTENDEES SAID:
        </h2>

        {/* Placeholder for screenshot images */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg border border-gold/20 shadow-sm hover:shadow transition-shadow"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              border: "1px solid #FF6B5733", /* gold with 20% opacity */
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              transition: "box-shadow 0.2s ease"
            }}
          >
            {/* In a real implementation, this would be an actual screenshot */}
            <div className="h-48 bg-gradient-to-br from-gold/10 to-white rounded-t-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(to bottom right, #FF6B571A, #FFFFFF)",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span className="text-2xl"
                style={{ color: "#FF6B57" }}
              >    _frame</span>
            </div>
            <div className="p-6">
              <blockquote className="mb-4 italic"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "#1C2536"
                }}
              >
                “This bootcamp transformed my consulting business. I went from struggling to find clients to having a waitlist of premium clients willing to pay my rates.”
              </blockquote>
              <p className="text-sm font-medium text-navy mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "500",
                  color: "#16233F",
                  fontSize: "14px"
                }}
              >
                Adebola Johnson, Lagos, Nigeria
              </p>
              <p className="text-xs text-gold-cta"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FF6B57",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                Increased revenue by 300% in 6 months
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg border border-gold/20 shadow-sm hover:shadow transition-shadow"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              border: "1px solid #FF6B5733", /* gold with 20% opacity */
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              transition: "box-shadow 0.2s ease"
            }}
          >
            {/* In a real implementation, this would be an actual screenshot */}
            <div className="h-48 bg-gradient-to-br from-gold/10 to-white rounded-t-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(to bottom right, #FF6B571A, #FFFFFF)",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span className="text-2xl"
                style={{ color: "#FF6B57" }}
              >    _frame</span>
            </div>
            <div className="p-6">
              <blockquote className="mb-4 italic"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "#1C2536"
                }}
              >
                “The frameworks and templates provided saved me countless hours. I was able to package my expertise and land my first $15,000 client within 4 weeks of graduation.”
              </blockquote>
              <p className="text-sm font-medium text-navy mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "500",
                  color: "#16233F",
                  fontSize: "14px"
                }}
              >
                Marcus Chen, Toronto, Canada
              </p>
              <p className="text-xs text-gold-cta"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FF6B57",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                Landed $15K client in 4 weeks
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg border border-gold/20 shadow-sm hover:shadow transition-shadow"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              border: "1px solid #FF6B5733", /* gold with 20% opacity */
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              transition: "box-shadow 0.2s ease"
            }}
          >
            {/* In a real implementation, this would be an actual screenshot */}
            <div className="h-48 bg-gradient-to-br from-gold/10 to-white rounded-t-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(to bottom right, #FF6B571A, #FFFFFF)",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span className="text-2xl"
                style={{ color: "#FF6B57" }}
              >    _frame</span>
            </div>
            <div className="p-6">
              <blockquote className="mb-4 italic"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "#1C2536"
                }}
              >
                “I was giving away my expertise for free in Facebook groups. After this bootcamp, I have a structured offer, a pricing strategy that reflects my value, and a system to find clients who appreciate it.”
              </blockquote>
              <p className="text-sm font-medium text-navy mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: "500",
                  color: "#16233F",
                  fontSize: "14px"
                }}
              >
                Samantha Wright, London, UK
              </p>
              <p className="text-xs text-gold-cta"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FF6B57",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                Stopped giving expertise away for free
              </p>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 px-4 bg-navy py-6"
          style={{
            backgroundColor: "#16233F",
            color: "#FFFFFF",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px"
          }}
        >
          <span>100,000+ Professionals Trained</span>
          <span>|</span>
          <span>         🌍 90+ Countries</span>
          <span>|</span>
          <span>         🏆 95% Land a Client Within 90 Days</span>
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
            Join the Free Waitlist — Be Part of the Next Cohort
          </a>

          <p className="mt-4 text-sm text-gray-300 italic"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#5B6472",
              fontStyle: "italic"
            }}
          >
            Doors open September 1st. Waitlist members save 50%.
          </p>
        </div>
      </div>
    </section>
  );
}