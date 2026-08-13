// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/Video.tsx

export default function Video() {
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
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Label */}
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
          style={{
            backgroundColor: "#FF6B5733",
            color: "#FF6B57",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
        >
          A Message From Eno
        </div>

        {/* Section Headline */}
        <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight lg:text-4xl mx-auto"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1C2536",
            fontWeight: "bold",
            fontSize: "2.5rem",
            lineHeight: "1.2"
          }}
        >
          BEFORE YOU SCROLL — WATCH THIS FIRST.
        </h2>

        {/* Section Subhead */}
        <p className="mt-6 max-w-2xl text-lg text-gray-600 mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#5B6472",
            fontSize: "18px",
            lineHeight: "1.7",
            marginTop: "1.5rem",
            marginBottom: "0"
          }}
        >
          Eno recorded a short message explaining exactly who this bootcamp is for, what you'll build, and why the waitlist is the smartest move you can make right now. It's 3 minutes.
        </p>

        {/* Video Container */}
        <div className="mt-12 flex justify-center"
          style={{
            marginTop: "3rem"
          }}
        >
          {/* Video Wrapper with Hover Effect */}
          <div 
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              height: "0",
              paddingBottom: "56.25%",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(22, 35, 63, 0.1)",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
              transformStyle: "preserve-3d",
              transform: "translateZ(0)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(22, 35, 63, 0.16)";
              e.currentTarget.style.transform = "translateY(-4px) translateZ(0)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(22, 35, 63, 0.1)";
              e.currentTarget.style.transform = "translateY(0) translateZ(0)";
            }}
          >
            {/* Video Background */}
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #16233F 0%, #1C2536 100%)",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              }}
            >
              {/* Play Button Icon */}
              <div 
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {/* Animated Play Button */}
                <div 
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "#FF6B57",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 24px rgba(255, 107, 87, 0.3)",
                    animation: "pulse-glow 2s ease-in-out infinite"
                  }}
                >
                  <span 
                    style={{
                      color: "#FFFFFF",
                      fontSize: "36px",
                      marginLeft: "4px"
                    }}
                  >
                    ▶
                  </span>
                </div>

                {/* Play Text */}
                <p 
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontStyle: "italic",
                    fontWeight: "500",
                    marginTop: "0",
                    opacity: 0.9
                  }}
                >
                  Press play. This will change how you see your own expertise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: "3rem" }}>
          <a 
            href="#waitlist-form"
            className="inline-block text-white font-medium transition-all"
            style={{
              backgroundColor: "#FF6B57",
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
              boxShadow: "0 4px 14px rgba(255, 107, 87, 0.25)",
              transition: "all 0.2s ease-in-out"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#E55A47";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 107, 87, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FF6B57";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(255, 107, 87, 0.25)";
            }}
          >
            Join the Free Waitlist After You Watch
          </a>
        </div>

        {/* Micro-copy */}
        <p 
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#5B6472",
            fontSize: "14px",
            fontStyle: "italic",
            fontWeight: "500",
            marginTop: "1rem",
            opacity: 0.85
          }}
        >
          Doors open September 1st. Waitlist members save 50%.
        </p>
      </div>

      {/* CSS for Pulse Animation */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 8px 24px rgba(255, 107, 87, 0.3);
          }
          50% {
            box-shadow: 0 8px 32px rgba(255, 107, 87, 0.5);
          }
        }
      `}</style>
    </section>
  );
}