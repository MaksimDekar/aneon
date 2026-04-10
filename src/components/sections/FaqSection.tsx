import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { faqItems } from '@/data/faq';
import { sectionText } from '@/data/siteContent';

export function FaqSection() {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading overline={sectionText.faq.overline} title={sectionText.faq.title} />
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details className="group rounded-2xl border border-white/12 bg-base-900/85 p-4 transition hover:border-white/25 sm:p-5" key={item.id}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 pr-1 font-display text-base text-white sm:gap-6 sm:text-lg">
                {item.question}
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-sm text-white/70 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
