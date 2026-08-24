import {
  Awareness,
  Benefits,
  Curriculum,
  Deal,
  Hero,
  OptIn,
  Profiles,
  Testimonials,
  Timeline,
  Video,
  WhyJoin,
} from "./components/BootcampSections";

function App() {
  return (
    <div className="page-shell">
      <Hero />
      <Video />
      <OptIn />
      <Awareness />
      <Curriculum />
      <Benefits />
      <Timeline />
      <Deal />
      <WhyJoin />
      <Testimonials />
      <Profiles />
    </div>
  );
}

export default App;