import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faqItems } from '@/data/faq';
import { sectionText } from '@/data/siteContent';

export function FaqSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading overline={sectionText.faq.overline} title={sectionText.faq.title} />
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details className="group rounded-2xl border border-white/12 bg-base-900 p-5" key={item.id}>
              <summary className="cursor-pointer list-none pr-8 font-display text-lg text-white">{item.question}</summary>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
