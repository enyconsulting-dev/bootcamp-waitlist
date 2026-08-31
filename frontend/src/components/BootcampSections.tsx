import { useEffect, useState } from "react";
import WaitlistForm from "./WaitlistForm";
import { CountdownTimer } from "./CountdownTimer";
import { getPricingInfo, getUserRegion, type PricingRegion } from "../utils/geoLocation";

const weeks = [
  { number: "01", title: "Your Senior Consulting Offer", topics: ["The shift from expert / freelancer to senior consultant", "Define your expertise and your ideal client", "Package it into a high-ticket offer priced for ROI (not hours)", "Build proof: a professional portfolio + case studies (with AI tools)"], deliverable: "Your Senior Offer Suite — a 1-page offer + portfolio" },
  { number: "02", title: "Authority & Visibility", topics: ["Strategic personal branding so premium clients seek you out", "LinkedIn profile mastery & optimization for consultants", "AI-assisted thought-leadership content in your own voice", "Organic networking with decision-makers"], deliverable: "LinkedIn overhaul + your first thought-leadership post" },
  { number: "03", title: "Landing Clients", topics: ["Generate leads of decision-makers and executives", "Strategic direct outreach & social selling", "Pitch your value proposition with confidence", "Fill your calendar with real conversations"], deliverable: "Outreach Sprint — target list + custom pitches sent" },
  { number: "04", title: "Winning the Client", topics: ["Lead the consulting discovery / sales call", "Run diagnostic interviews and ask high-level questions", "Turn discovery into a structured consulting proposal", "Present your fee and handle objections like a veteran"], deliverable: "A proposal + a live mock discovery call" }
];

const benefits = [
  ["01", "A daily training", "Every day for 30 days."],
  ["02", "A daily task", "Build a piece of your offer or pipeline daily."],
  ["03", "Live coaching", "Every Saturday with your coach."],
  ["04", "A live kickoff call", "Saturday, September 5."],
  ["05", "Templates and sprints", "Worksheets and weekly execution sprints. Submit one real asset each week."],
  ["06", "A cohort community + capstone", "Finish with a live client-scenario pitch."]
];

const timeline = [
  ["Now", "Join the free waitlist"],
  ["September 1", "Enrollment opens (payment day)"],
  ["September 3", "48-hour early-bird price closes"],
  ["September 5 (Sat)", "Live kickoff call"],
  ["September 7", "Classes begin — 30 days of daily trainings + daily tasks, live coaching every Saturday, capstone + graduation"]
];

const reasons = ["Early access — enroll first when doors open September 1", "The lowest price, guaranteed — the 48-hour early-bird is waitlist-only", "Your waitlist bonus — the 6-Figure Offer Starter Kit, delivered instantly", "First look at the curriculum — before it goes public", "Priority notification — you’ll know the second doors open"];

function CTA({ label = "⚡ Join the free waitlist" }: { label?: string }) {
  return <a className="button button-primary" href="#waitlist-form">{label} <span aria-hidden="true">→</span></a>;
}

function SectionIntro({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className={`section-intro ${light ? "section-intro-light" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export function Hero() {
  return <section className="hero section-dark"><div className="hero-grid"><div className="hero-copy"><span className="eyebrow">The 30-Day Consulting Offer Bootcamp · Doors Open September 1</span><h1>Turn Your Expertise Into a Consulting Offer <em>That Lands Clients</em> — in 30 Days.</h1><p className="hero-lede">You’ve got the experience. You’ve got the expertise. Now let’s package it into a consulting offer that actually wins clients — with daily trainings, daily tasks, and live coaching every Saturday.</p><p className="hero-note">Join the free waitlist to lock in 48-hour early-bird pricing before anyone else.</p><CTA /></div><div className="hero-side"><div className="countdown-card"><span className="card-label">Until enrollment opens</span><CountdownTimer /><p>September 1, 2026</p></div><div className="hero-stats"><div><strong>100,000+</strong><span>Trained</span></div><div><strong>90+</strong><span>Countries</span></div><div><strong>95%</strong><span>Success rate</span></div></div></div></div></section>;
}

const vimeoVideoUrl = "https://player.vimeo.com/video/1218920431?title=0&byline=0&portrait=0&badge=0&controls=1";
const vimeoShareUrl = "https://vimeo.com/1218920431?share=copy&fl=sv&fe=ci";

export function Video() {
  return (
    <section className="section section-paper">
      <div className="content-narrow">
        <SectionIntro eyebrow="A message from Eno" title="See what you’ll build in 30 days." copy="A short introduction to the bootcamp, the offer you’ll create, and why the waitlist is your smartest next move." light />
        <div className="video-frame" style={{ position: "relative" }}>
          <iframe
            src={vimeoVideoUrl}
            title="Eno's message about the 30-Day Consulting Offer Bootcamp"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        
      </div>
    </section>
  );
}

export function OptIn() {
  return <section className="section form-section" id="waitlist-form"><div className="form-layout"><div><span className="eyebrow">Free access · no payment now</span><h2>Save Your Spot on the Waitlist</h2><p>It’s free — and it locks in your 48-hour early-bird price.</p><div className="trust-line"><span>🎓 100,000+ Trained</span><span>🌍 90+ Countries</span><span>⭐ 95% Success Rate</span></div></div><div className="form-card"><WaitlistForm /></div></div></section>;
}

export function Awareness() {
  return <section className="section section-dark"><div className="content-medium split-copy"><SectionIntro eyebrow="The shift" title="You’re the Go-To Expert. So Why Are Less-Experienced People Landing the Clients?" copy="You’re the person your company calls when it matters. The one your friends and colleagues come to for advice. You’ve spent years — maybe decades — building real expertise, and you’ve quietly been “consulting” for free for as long as you can remember." /><div className="narrative"><p>And yet you keep watching it happen: people with less experience than you land the contracts, sign the clients, and get paid premium fees as consultants — while your knowledge stays locked inside a salary or scattered across favors.</p><p>It’s not a skill gap. It’s not that they know more than you. They just packaged what they know into a clear consulting offer — and you haven’t yet.</p><p className="pull-quote">In the next 30 days, we’re going to fix that — together.</p><CTA /></div></div></section>;
}

export function Curriculum() {
  return <section className="section section-paper"><div className="content-wide"><SectionIntro eyebrow="How your offer comes together in 30 days" title="Every week, you build a real piece of your consulting business — and submit it." copy="You don’t just learn. You ship." light /><div className="card-grid curriculum-grid">{weeks.map((week) => <article className="info-card curriculum-card" key={week.number}><div className="card-top"><span className="week-number">{week.number}</span><span className="card-label">Week {week.number}</span></div><h3>{week.title}</h3><ul>{week.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul><p className="deliverable"><strong>Deliverable:</strong> {week.deliverable}</p></article>)}</div><div className="capstone"><strong>🏆 The capstone</strong><span>In the final week you’ll pitch a solution for a real-world client scenario, pair up for live mock discovery calls, and get direct feedback on your delivery — so you can step into real client meetings with complete confidence.</span></div><p className="closing-copy">You’ll be taught to use AI tools (Claude, ChatGPT, Lovable & more) to generate leads, write outreach, build your portfolio, plan your consulting business, and stand out.</p><CTA /></div></section>;
}

export function Benefits() {
  return <section className="section section-tint"><div className="content-wide"><SectionIntro eyebrow="Inside the bootcamp" title="What You Get Inside the Bootcamp" /><div className="card-grid benefits-grid">{benefits.map(([number, title, copy]) => <article className="benefit-card" key={number}><span className="benefit-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

export function Timeline() {
  return <section className="section section-dark"><div className="content-medium"><SectionIntro eyebrow="How it works" title="A clear path from waitlist to graduation." /><div className="timeline">{timeline.map(([date, copy], index) => <div className="timeline-item" key={date}><span className="timeline-marker">{String(index + 1).padStart(2, "0")}</span><div><span className="timeline-date">{date}</span><p>{copy}</p></div></div>)}</div><CTA /></div></section>;
}

export function Deal() {
  const [region, setRegion] = useState<PricingRegion>("USD");
  useEffect(() => { getUserRegion().then(setRegion).catch(() => setRegion("USD")); }, []);
  const earlyBird = getPricingInfo(region);
  const regular = region === "NGN" ? "₦35,000" : "$97";
  return <section className="section section-paper"><div className="content-wide"><SectionIntro eyebrow="The deal — and why the waitlist wins" title="Waitlist members get 48 hours at half the regular price." copy="When doors open September 1, everyone pays the regular price. Waitlist members get 48 hours to enroll at the early-bird price first." light /><div className="price-grid"><article className="price-card price-card-featured"><span className="card-label">Waitlist early-bird</span><strong>{region === "NGN" ? "₦25,000" : earlyBird.label.split(" ")[0]}</strong><p>Save 50% · waitlist only</p><span className="price-detail">September 1 → September 3</span></article><article className="price-card"><span className="card-label">Regular price</span><strong>{regular}</strong><p>For everyone else</p><span className="price-detail">After the 48-hour window</span></article></div><p className="center-copy">After September 3, full price. Joining the waitlist today is the only way to access the early-bird price.</p><CTA /></div></section>;
}

export function WhyJoin() {
  return <section className="section section-tint"><div className="content-medium"><SectionIntro eyebrow="Why join the waitlist now?" title="Raise your hand early. Keep the advantage." /><ol className="reason-list">{reasons.map((reason, index) => <li key={reason}><span>{String(index + 1).padStart(2, "0")}</span><p>{reason}</p></li>)}</ol><CTA /></div></section>;
}

export function Testimonials() {
  return <section className="section section-paper"><div className="content-wide"><SectionIntro eyebrow="Testimonials" title="What People Say About Learning From Us" copy="Real messages from our masterclass community." light /><div className="testimonial-grid">{Array.from({ length: 6 }, (_, index) => <figure className="testimonial-slot" key={index}><img src={`/Feedback_${index + 1}.png`} alt={`Testimonial screenshot ${String(index + 1).padStart(2, "0")}`} loading="lazy" /></figure>)}</div><CTA /></div></section>;
}

export function Profiles() {
  return <section className="section section-dark"><div className="content-wide"><SectionIntro eyebrow="Who you’re learning from" title="Experience that turns expertise into momentum." /><div className="profile-grid"><article className="profile-card founder-card"><img src="/eno_headshot.jpeg" alt="Eno Eka" /><div><span className="card-label">Founder, Consulting School</span><h3>Eno Eka</h3><p>Eno Eka is the CEO of ENY Consulting Inc. and the founder of Consulting School and Business Analysis School. She has trained 100,000+ professionals across 90+ countries, led a $6 billion digital transformation, and been featured in Forbes, CTV, CBC, and The Guardian.</p><p>She’s one of Canada’s Top 100 Most Powerful Women and an RBC Women of Influence honoree, with private consulting rates of $50,000–$100,000+.</p></div></article><article className="profile-card coach-placeholder"><img src="/coach.png" alt="Your cohort coach" /><div><span className="card-label">Your live Saturday coach</span><h3>Meet your cohort coach</h3><p>The expert leading this cohort live every Saturday, guiding you through building and launching your consulting offer.</p></div></article></div><CTA /></div></section>;
}
