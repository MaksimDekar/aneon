import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { CasesSection } from '@/components/sections/CasesSection';
import { ConsultationSection } from '@/components/sections/ConsultationSection';
import { EstimateSection } from '@/components/sections/EstimateSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { Footer } from '@/components/sections/Footer';
import { GallerySection } from '@/components/sections/GallerySection';
import { HeroSection } from '@/components/sections/HeroSection';
import { InfoSection } from '@/components/sections/InfoSection';
import { ProductionSection } from '@/components/sections/ProductionSection';

function App() {
  return (
    <div className="min-h-screen bg-base-950 text-white">
      <HeroSection />
      <main>
        <ProductionSection />
        <BenefitsSection />
        <EstimateSection />
        <GallerySection />
        <InfoSection />
        <ConsultationSection />
        <CasesSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

