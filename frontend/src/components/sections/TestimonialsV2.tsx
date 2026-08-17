// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/TestimonialsV2.tsx
// Testimonials section inspired by reference design

export default function TestimonialsV2() {
  const testimonials = [
    {
      quote: "I stopped underpricing myself in one week. My first consulting proposal closed at 4x what I used to charge.",
      author: "A. Okafor",
      role: "Ex-Analyst → Independent Consultant"
    },
    {
      quote: "The system is simple and it actually works. I landed my first $15K client before the bootcamp ended.",
      author: "Sarah Chen",
      role: "Transition to Consulting"
    },
    {
      quote: "This bootcamp compressed 10 years of learning into 30 days. Worth every moment of effort.",
      author: "Michael Johnson",
      role: "Former Corporate Manager"
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
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            fontWeight: "700",
            color: "#0F172A",
            lineHeight: "1.3",
            textAlign: "center"
          }}
        >
          Success Stories From Bootcamp Graduates
        </h2>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem"
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              style={{
                padding: "2rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "8px"
              }}
            >
              <p
                style={{
                  margin: "0 0 1.5rem 0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: "#0F172A",
                  lineHeight: "1.8",
                  fontStyle: "italic"
                }}
              >
                "{testimonial.quote}"
              </p>

              <div>
                <p
                  style={{
                    margin: "0",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#0F172A"
                  }}
                >
                  {testimonial.author}
                </p>
                <p
                  style={{
                    margin: "0.25rem 0 0 0",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    color: "#6B7280"
                  }}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
