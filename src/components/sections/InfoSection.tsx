import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { infoBlockContent, staticSectionImages } from '@/data/siteContent';

export function InfoSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-gradient-to-tr from-neon-pink/15 via-neon-blue/5 to-transparent blur-2xl" />
            <img
              alt="Архивный неоновый проект"
              className="relative h-[240px] w-full rounded-3xl border border-white/10 object-cover shadow-card sm:h-[440px]"
              src={staticSectionImages.infoBlock}
            />
          </div>
          <div>
            <SectionHeading overline="О продукте" title={infoBlockContent.title} />
            <div className="space-y-4">
              {infoBlockContent.paragraphs.map((paragraph) => (
                <p className="text-sm leading-relaxed text-white/70 sm:text-lg" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
