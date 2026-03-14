import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ExperienceSection } from "./components/experience-section";
import { ProjectsSection } from "./components/projects-section";
import { SkillsSection } from "./components/skills-section";
import { PhilosophySection } from "./components/philosophy-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { SectionTracker } from "./components/section-tracker";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <SectionTracker />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </div>
  );
}