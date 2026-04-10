import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { benefitsContent, sectionText } from '@/data/siteContent';

const accentClass: Record<string, string> = {
  blue: 'from-neon-blue/30',
  pink: 'from-neon-pink/30',
  green: 'from-neon-green/25',
  red: 'from-neon-red/25',
};

export function BenefitsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          description={sectionText.benefits.description}
          overline={sectionText.benefits.overline}
          title={sectionText.benefits.title}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {benefitsContent.map((benefit) => (
            <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-base-900 p-6" key={benefit.title}>
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentClass[benefit.accent]} to-transparent`} />
              <h3 className="relative font-display text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/75">{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
