import { ThemeToggle } from "../components/ThemeToggle";
import { NatureBackground } from "../components/NatureBackground.jsx";
import { NavBar } from "../components/NavBar.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { AboutSection } from "../components/Aboutsection.jsx";
import { SkillsSection } from "../components/SkillsSection.jsx";
import { ProjectsSection } from "../components/ProjectsSection.jsx";
import { ContactSection } from '../components/ContactSection';
import { Footer } from "../components/Footer.jsx";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <NatureBackground />

      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
