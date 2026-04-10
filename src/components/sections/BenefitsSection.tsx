import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { benefitsContent, sectionText } from '@/data/siteContent';

const accentClass: Record<string, string> = {
  blue: 'from-neon-blue/35',
  pink: 'from-neon-pink/35',
  green: 'from-neon-green/30',
  red: 'from-neon-red/30',
};

export function BenefitsSection() {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading description={sectionText.benefits.description} overline={sectionText.benefits.overline} title={sectionText.benefits.title} />
        <div className="grid gap-5 sm:grid-cols-2">
          {benefitsContent.map((benefit, index) => (
            <article className="premium-card relative overflow-hidden p-5 sm:p-6" key={benefit.title}>
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentClass[benefit.accent]} to-transparent opacity-70`} />
              <div className="relative">
                <span className="mb-4 inline-flex rounded-lg border border-white/15 bg-black/20 px-2 py-1 text-[11px] uppercase tracking-[0.16em] text-white/70">
                  0{index + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-white sm:text-2xl">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
