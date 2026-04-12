import { useEffect } from 'react';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { CookieBanner } from '@/components/sections/CookieBanner';
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
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.section-shell, #footer'));
    targets.forEach((element) => element.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' },
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

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
      <CookieBanner />
    </div>
  );
}

export default App;

