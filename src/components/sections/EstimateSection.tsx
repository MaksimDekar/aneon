import { Container } from '@/components/ui/Container';
import { FormField } from '@/components/ui/FormField';
import { NeonButton } from '@/components/ui/NeonButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { estimateContent } from '@/data/siteContent';

export function EstimateSection() {
  return (
    <section className="section-shell" id="estimate">
      <Container>
        <div className="glass-panel margiela-stitches neon-border grid gap-6 p-4 sm:gap-7 sm:p-8">
          <SectionHeading description={estimateContent.description} overline="Калькулятор" title={estimateContent.title} />
          <form className="grid gap-4 sm:grid-cols-3">
            {estimateContent.fields.map((field) => (
              <FormField id={field.id} key={field.id} label={field.label} placeholder={field.placeholder} />
            ))}
            <div className="sm:col-span-3">
              <NeonButton className="w-full sm:w-auto" type="submit">
                {estimateContent.ctaLabel}
              </NeonButton>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
