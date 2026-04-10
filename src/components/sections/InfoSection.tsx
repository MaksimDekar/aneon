import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { infoBlockContent, staticSectionImages } from '@/data/siteContent';

export function InfoSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <img
            alt="Архивный неоновый проект"
            className="h-[300px] w-full rounded-3xl border border-white/10 object-cover shadow-card sm:h-[420px]"
            src={staticSectionImages.infoBlock}
          />
          <div>
            <SectionHeading overline="О продукте" title={infoBlockContent.title} />
            <div className="space-y-4">
              {infoBlockContent.paragraphs.map((paragraph) => (
                <p className="text-base leading-relaxed text-white/70" key={paragraph}>
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

