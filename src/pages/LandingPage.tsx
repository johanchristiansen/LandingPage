import { Navbar } from '../app/components/Navbar';
import { HeroSection } from '../app/components/HeroSection';
import { BentoGrid } from '../app/components/BentoGrid';
import { ServicesSection } from '../app/components/ServicesSection';
import { ProductHighlightSection } from '../app/components/ProductHighlightSection';
import { InfrastructureSection } from '../app/components/InfrastructureSection';
import { TechStackSection } from '../app/components/TechStackSection';
import { Footer } from '../app/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth bg-[#020617] text-white">
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <ServicesSection />
      <InfrastructureSection />
      <ProductHighlightSection />
      <TechStackSection />
      <Footer />
    </div>
  );
}
