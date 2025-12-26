import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import Snowflakes from "@/components/layout/Snowflakes";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Snowflakes />
      <Header />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
