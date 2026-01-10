import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { ServicesSection } from './components/ServicesSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#020617] text-white">
      <HeroSection />
      <BentoGrid />
      <ServicesSection />
      <InfrastructureSection />
      <Footer />
    </div>
  );
}
