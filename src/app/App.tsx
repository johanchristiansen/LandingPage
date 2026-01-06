import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { ServicesSection } from './components/ServicesSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <HeroSection />
      <BentoGrid />
      <ServicesSection />
      <InfrastructureSection />
      <Footer />
    </div>
  );
}
