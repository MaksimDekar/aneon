import { Container } from '@/components/ui/Container';
import { FormField } from '@/components/ui/FormField';
import { NeonButton } from '@/components/ui/NeonButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { consultationContent } from '@/data/siteContent';

export function ConsultationSection() {
  return (
    <section className="py-16 sm:py-20" id="consultation">
      <Container>
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-base-900 to-base-800 p-6 shadow-card sm:p-8">
          <SectionHeading description={consultationContent.description} overline="Консультация" title={consultationContent.title} />
          <form className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              {consultationContent.fields.map((field) => (
                <FormField id={field.id} key={field.id} label={field.label} placeholder={field.placeholder} type={field.type} />
              ))}
            </div>
            <label className="flex flex-col gap-2 text-sm text-white/70" htmlFor="comment">
              {consultationContent.commentLabel}
              <textarea
                className="min-h-28 rounded-xl border border-white/15 bg-base-900 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-neon-pink/60 focus:ring-1 focus:ring-neon-pink/60"
                id="comment"
                name="comment"
                placeholder={consultationContent.commentPlaceholder}
              />
            </label>
            <NeonButton className="w-full sm:w-auto" type="submit">
              {consultationContent.ctaLabel}
            </NeonButton>
          </form>
        </div>
      </Container>
    </section>
  );
}

