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
    <div className="relative min-h-screen overflow-x-clip bg-base-950 text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_55%)]" />
      <div className="pointer-events-none fixed -left-24 top-20 z-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none fixed -right-16 top-1/3 z-0 h-80 w-80 rounded-full bg-white/8 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 left-1/3 z-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <HeroSection />
      <main className="relative z-10">
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

