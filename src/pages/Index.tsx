import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PublicationsSection from "@/components/PublicationsSection";
import HCIProjectSection from "@/components/HCIProjectSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PublicationsSection />
      <HCIProjectSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
