import { Container } from '@/components/ui/Container';
import { FormField } from '@/components/ui/FormField';
import { NeonButton } from '@/components/ui/NeonButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { consultationContent } from '@/data/siteContent';

export function ConsultationSection() {
  return (
    <section className="section-shell" id="consultation">
      <Container>
        <div className="glass-panel margiela-stitches grid gap-6 p-6 sm:p-8">
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
                className="min-h-28 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-neon-pink/60 focus:ring-2 focus:ring-neon-pink/30"
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
