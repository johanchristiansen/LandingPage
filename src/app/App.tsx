import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { ServicesSection } from './components/ServicesSection';
import { ProductHighlightSection } from './components/ProductHighlightSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { TechStackSection } from './components/TechStackSection';
import { Footer } from './components/Footer';

export default function App() {
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
