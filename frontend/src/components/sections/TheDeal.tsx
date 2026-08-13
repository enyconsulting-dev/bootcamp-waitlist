// /home/obed/Documents/bootcamp-waitlist/frontend/src/components/sections/TheDeal.tsx

export default function TheDeal() {
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
          The Waitlist Advantage
        </div>

        {/* Section Headline */}
        <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight lg:text-4xl text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#1C2536",
            fontWeight: "bold"
          }}
        >
          EVERYONE ELSE PAYS $97. WAITLIST MEMBERS PAY $47. FOR 48 HOURS ONLY.
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
          Here's the deal — and it's straightforward.
        </p>

        {/* Pricing details */}
        <div className="mt-12 space-y-8 text-center">
          <p className="text-lg text-gray-700"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            When enrollment opens on September 1st, the regular price is $97 USD for international students and   ₦37,625 NGN for students in Nigeria.
          </p>

          <p className="text-lg text-gray-700"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            But waitlist members get something the public doesn't.
          </p>

          <p className="text-lg text-gray-700"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            For exactly 48 hours — September 1st through September 3rd — waitlist members can enroll at the early-bird price. Half the regular price. No code required. No catch. Just first access for the people who raised their hand early.
          </p>

          <p className="text-lg text-gray-700"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            After September 3rd, that price is gone. The program continues at the regular rate for anyone who enrolls after the window closes.
          </p>

          <p className="text-lg text-gray-700"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            Joining the waitlist today is the only way to access this price.
          </p>
        </div>

        {/* Pricing Comparison */}
        <div className="mt-16 flex flex-col md:flex-row gap-8">
          {/* USD Column */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6 border border-t-4 border-gold"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              borderTopWidth: "4px",
              borderTopColor: "#FF6B57",
              padding: "1.5rem"
            }}
          >
            <h3 className="text-lg font-bold text-navy mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#16233F",
                fontWeight: "bold",
                fontSize: "18px"
              }}
            >
                 🌍 INTERNATIONAL (USD)
            </h3>

            <div className="space-y-4">
              <div className="flex items-baseline mb-2">
                <span className="text-2xl font-bold text-gold-cta mr-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#FF6B57",
                    fontWeight: "bold",
                    fontSize: "24px"
                  }}
                >
                  $47
                </span>
                <span className="text-sm font-medium text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    color: "#5B6472",
                    fontSize: "14px"
                  }}
                >
                  Waitlist Early-Bird
                </span>
              </div>

              <div className="flex items-baseline mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#9CA3AF",
                    fontWeight: "bold",
                    fontSize: "24px"
                  }}
                >
                  $97
                </span>
                <span className="text-sm font-medium text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    color: "#5B6472",
                    fontSize: "14px"
                  }}
                >
                  Regular Price
                </span>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "14px",
                    lineHeight: "1.5"
                  }}
                >
                  When
                </p>
                <p className="font-medium text-gray-700"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    color: "#374151",
                    fontSize: "16px"
                  }}
                >
                  Sept 1–3 only
                </p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "14px",
                    lineHeight: "1.5"
                  }}
                >
                  Who Gets It
                </p>
                <p className="font-medium text-gray-700"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    color: "#374151",
                    fontSize: "16px"
                  }}
                >
                  Waitlist members only
                </p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "14px",
                    lineHeight: "1.5"
                  }}
                >
                  Savings
                </p>
                <p className="font-bold text-gold-cta"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "bold",
                    color: "#FF6B57",
                    fontSize: "16px"
                  }}
                >
                  Save $50 (50% off)
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500 italic"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#6B7280",
                    fontStyle: "italic",
                    fontSize: "14px"
                  }}
                >
                  Checkout via Stripe
                </p>
              </div>
            </div>
          </div>

          {/* NGN Column */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6 border border-t-4 border-gold"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              borderTopWidth: "4px",
              borderTopColor: "#FF6B57",
              padding: "1.5rem"
            }}
          >
            <h3 className="text-lg font-bold text-navy mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#16233F",
                fontWeight: "bold",
                fontSize: "18px"
              }}
            >
                 🇳   🇬 NIGERIA (NGN)
            </h3>

            <div className="space-y-4">
              <div className="flex items-baseline mb-2">
                <span className="text-2xl font-bold text-gold-cta mr-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#FF6B57",
                    fontWeight: "bold",
                    fontSize: "24px"
                  }}
                >
                    ₦26,875
                </span>
                <span className="text-sm font-medium text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    color: "#5B6472",
                    fontSize: "14px"
                  }}
                >
                  Waitlist Early-Bird
                </span>
              </div>

              <div className="flex items-baseline mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#9CA3AF",
                    fontWeight: "bold",
                    fontSize: "24px"
                  }}
                >
                    ₦37,625
                </span>
                <span className="text-sm font-medium text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    color: "#5B6472",
                    fontSize: "14px"
                  }}
                >
                  Regular Price
                </span>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "14px",
                    lineHeight: "1.5"
                  }}
                >
                  When
                </p>
                <p className="font-medium text-gray-700"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    color: "#374151",
                    fontSize: "16px"
                  }}
                >
                  Sept 1–3 only
                </p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "14px",
                    lineHeight: "1.5"
                  }}
                >
                  Who Gets It
                </p>
                <p className="font-medium text-gray-700"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "500",
                    color: "#374151",
                    fontSize: "16px"
                  }}
                >
                  Waitlist members only
                </p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#5B6472",
                    fontSize: "14px",
                    lineHeight: "1.5"
                  }}
                >
                  Savings
                </p>
                <p className="font-bold text-gold-cta"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "bold",
                    color: "#FF6B57",
                    fontSize: "16px"
                  }}
                >
                  Save   ₦10,750 (29% off)
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500 italic"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#6B7280",
                    fontStyle: "italic",
                    fontSize: "14px"
                  }}
                >
                  Checkout via Paystack
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional details */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            You don't pay anything today. You join the waitlist for free. On September 1st, you'll receive an email with your early-bird enrollment link — and you'll have 48 hours to use it.
          </p>

          <p className="mt-4 text-lg text-gray-700"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#374151",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            That's the deal.
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
            Join the Free Waitlist — Claim Your Early-Bird Price
          </a>

          <p className="mt-4 text-sm text-gray-300 italic"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#5B6472",
              fontStyle: "italic"
            }}
          >
            Free today. $47 USD /                       ₦ 26,875 NGN when doors open Sept 1.
          </p>
        </div>
      </div>
    </section>
  );
}