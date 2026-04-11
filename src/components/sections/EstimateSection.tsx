import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { FormField } from '@/components/ui/FormField';
import { NeonButton } from '@/components/ui/NeonButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { estimateContent } from '@/data/siteContent';
import { sendLead } from '@/lib/leads';

export function EstimateSection() {
  const [formState, setFormState] = useState<Record<string, string>>({
    size: '',
    neonLength: '',
    elements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      await sendLead('Расчет вывески', {
        Размер: formState.size,
        'Длина неона': formState.neonLength,
        'Количество элементов': formState.elements,
      });
      setStatusMessage('Заявка отправлена. Мы свяжемся с вами в ближайшее время.');
      setFormState({ size: '', neonLength: '', elements: '' });
    } catch {
      setStatusMessage('Не удалось отправить заявку. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-shell" id="estimate">
      <Container>
        <div className="glass-panel margiela-stitches neon-border grid gap-6 p-4 sm:gap-7 sm:p-8">
          <SectionHeading description={estimateContent.description} overline="Калькулятор" title={estimateContent.title} />
          <form className="grid gap-4 sm:grid-cols-3" onSubmit={handleSubmit}>
            {estimateContent.fields.map((field) => (
              <FormField
                id={field.id}
                key={field.id}
                label={field.label}
                placeholder={field.placeholder}
                required
                value={formState[field.id] ?? ''}
                onChange={(value) => setFormState((prev) => ({ ...prev, [field.id]: value }))}
              />
            ))}
            <div className="sm:col-span-3">
              <NeonButton className="w-full sm:w-auto" type="submit">
                {estimateContent.ctaLabel}
              </NeonButton>
              {isSubmitting ? <p className="mt-3 text-sm text-white/60">Отправляем заявку...</p> : null}
              {statusMessage ? <p className="mt-3 text-sm text-white/80">{statusMessage}</p> : null}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
