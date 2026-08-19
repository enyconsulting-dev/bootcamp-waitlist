import Hero from "./components/sections/Hero";
import Video from "./components/sections/Video";
import AwarenessProblem from "./components/sections/AwarenessProblem";
import ThePromise from "./components/sections/ThePromise";
import Curriculum from "./components/sections/Curriculum";
import CoachBio from "./components/sections/CoachBio";
import WaitlistForm from "./components/WaitlistForm";
import { CountdownTimer } from "./components/CountdownTimer";

function App() {
  return (
    <div className="page-shell">
      <Hero />
      <Video />
      <AwarenessProblem />
      <ThePromise />
      <Curriculum />
      <CoachBio />

      <section className="optin-section" id="waitlist-form">
        <div className="optin-container">
          <div className="optin-panel">
            <div className="optin-kicker">Doors Open September 1 • Join the Free Waitlist</div>
            <div className="optin-countdown">
              <CountdownTimer />
            </div>

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