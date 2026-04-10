import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { productionContent, staticSectionImages } from '@/data/siteContent';

export function ProductionSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-base-900/60 p-6 shadow-card sm:p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading overline="Производство" title={productionContent.title} />
            <p className="text-base leading-relaxed text-white/70">{productionContent.description}</p>
          </div>
          <img
            alt="Процесс ручной сборки неоновых вывесок"
            className="h-[300px] w-full rounded-2xl object-cover sm:h-[380px]"
            src={staticSectionImages.production}
          />
        </div>
      </Container>
    </section>
  );
}

