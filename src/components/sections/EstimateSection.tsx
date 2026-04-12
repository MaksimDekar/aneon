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
    contact: '',
  });
  const [consent, setConsent] = useState(false);
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
        'Контакт для ответа': formState.contact,
        'Согласие на обработку данных': consent ? 'Да' : 'Нет',
      });
      setStatusMessage('Заявка отправлена. Мы свяжемся с вами в ближайшее время.');
      setFormState({ size: '', neonLength: '', elements: '', contact: '' });
      setConsent(false);
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
            <label className="sm:col-span-3 group flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-xs text-white/70 transition hover:border-white/20 sm:text-sm">
              <input
                checked={consent}
                className="peer sr-only"
                onChange={(event) => setConsent(event.target.checked)}
                required
                type="checkbox"
              />
              <span className="relative inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-white/30 bg-white/[0.03] transition peer-checked:border-neon-blue peer-checked:bg-neon-blue/20 peer-checked:shadow-[0_0_14px_rgba(53,214,255,0.35)]">
                <svg className="h-3.5 w-3.5 scale-75 text-white opacity-0 transition peer-checked:scale-100 peer-checked:opacity-100" fill="none" viewBox="0 0 16 16">
                  <path d="M3.2 8.3L6.5 11.3L12.8 4.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </span>
              <span className="leading-relaxed">Согласен на обработку персональных данных и получение ответа по указанным контактам.</span>
            </label>
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
