import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { ConsultationSection } from '@/components/sections/ConsultationSection';
import { EstimateSection } from '@/components/sections/EstimateSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { Footer } from '@/components/sections/Footer';
import { GallerySection } from '@/components/sections/GallerySection';
import { HeroSection } from '@/components/sections/HeroSection';
import { InfoSection } from '@/components/sections/InfoSection';
import { ProductionSection } from '@/components/sections/ProductionSection';
import { TopNav } from '@/components/sections/TopNav';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-base-950 text-white">
      <div className="site-ambient" />
      <div className="site-noise" />
      <TopNav />
      <HeroSection />
      <main className="relative z-10">
        <ProductionSection />
        <BenefitsSection />
        <EstimateSection />
        <GallerySection />
        <InfoSection />
        <ConsultationSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

