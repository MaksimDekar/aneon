import { Container } from '@/components/ui/Container';
import { FormField } from '@/components/ui/FormField';
import { NeonButton } from '@/components/ui/NeonButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { estimateContent } from '@/data/siteContent';

export function EstimateSection() {
  return (
    <section className="py-16 sm:py-20" id="estimate">
      <Container>
        <div className="rounded-3xl border border-neon-blue/35 bg-base-900 p-6 shadow-neon sm:p-8">
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

