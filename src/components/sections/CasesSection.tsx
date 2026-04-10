import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { caseItems } from '@/data/gallery';
import { sectionText } from '@/data/siteContent';

export function CasesSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          description={sectionText.cases.description}
          overline={sectionText.cases.overline}
          title={sectionText.cases.title}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseItems.map((item) => (
            <article className="overflow-hidden rounded-2xl border border-white/10 bg-base-900" key={item.id}>
              <img alt={item.title} className="h-52 w-full object-cover" src={item.image} />
              <div className="space-y-3 p-5">
                <h3 className="font-display text-xl text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                <ul className="flex flex-wrap gap-2 pt-1">
                  {item.metrics.map((metric) => (
                    <li className="rounded-md border border-white/15 px-2 py-1 text-xs text-white/70" key={metric}>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
