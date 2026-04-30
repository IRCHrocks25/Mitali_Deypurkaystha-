import { HeroSection } from "./components/HeroSection";
import { Ticker } from "./components/Ticker";
import { IntroSection } from "./components/IntroSection";
import { CredibilitySection } from "./components/CredibilitySection";
import { ProblemSection } from "./components/ProblemSection";
import { DataSection } from "./components/DataSection";
import { DifferentSection } from "./components/DifferentSection";
import { SolutionSection } from "./components/SolutionSection";
import { PartnershipSection } from "./components/PartnershipSection";
import { TimelineSection } from "./components/TimelineSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { AboutSection } from "./components/AboutSection";
import { LeadMagnetSection } from "./components/LeadMagnetSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#F9F7F2", color: "#1C1C1A", overflowX: "hidden", WebkitFontSmoothing: "antialiased" }}>
      <HeroSection />
      <Ticker />
      <IntroSection />
      <CredibilitySection />
      <ProblemSection />
      <DataSection />
      <DifferentSection />
      <SolutionSection />
      <PartnershipSection />
      <TimelineSection />
      <TestimonialsSection />
      <AboutSection />
      <LeadMagnetSection />
      <Footer />
    </div>
  );
}
