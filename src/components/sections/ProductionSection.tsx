import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { productionContent, staticSectionImages } from '@/data/siteContent';

export function ProductionSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="glass-panel margiela-stitches grid gap-6 p-4 sm:gap-10 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading overline="Производство" title={productionContent.title} />
            <p className="text-sm leading-relaxed text-white/70 sm:text-lg">{productionContent.description}</p>
            <div className="mt-5 inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs text-white/80 sm:mt-7 sm:text-sm">
              Ручная сборка, тест свечения и проверка перед отправкой каждого проекта.
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-neon-red/20 to-transparent blur-2xl" />
            <img
              alt="Процесс ручной сборки неоновых вывесок"
              className="relative h-[240px] w-full rounded-2xl border border-white/10 object-cover sm:h-[420px]"
              src={staticSectionImages.production}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
