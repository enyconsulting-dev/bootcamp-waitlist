import Hero from "./components/sections/Hero";
import WaitlistForm from "./components/WaitlistForm";

function App() {
  return (
    <div className="page-shell">
      <Hero />

      <section className="optin-section" id="waitlist-form">
        <div className="optin-container">
          <div className="optin-panel">
            <div className="optin-kicker">Doors Open September 1 • Join the Free Waitlist</div>

            <h2 className="optin-title">Secure your spot before the early-bird window closes.</h2>

            <p className="optin-copy">
              Join the free waitlist and be first in line when the 30-Day Consulting Offer Bootcamp opens.
              You’ll get early access at the lowest price it will ever be offered.
            </p>

            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;