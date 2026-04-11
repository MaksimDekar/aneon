import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { FormField } from '@/components/ui/FormField';
import { NeonButton } from '@/components/ui/NeonButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { consultationContent } from '@/data/siteContent';
import { sendLead } from '@/lib/leads';

export function ConsultationSection() {
  const [formState, setFormState] = useState<Record<string, string>>({
    name: '',
    contact: '',
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      await sendLead('Консультация', {
        Имя: formState.name,
        Контакт: formState.contact,
        Комментарий: formState.comment,
      });
      setStatusMessage('Заявка отправлена. Мы скоро свяжемся с вами.');
      setFormState({ name: '', contact: '', comment: '' });
    } catch {
      setStatusMessage('Не удалось отправить заявку. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-shell" id="consultation">
      <Container>
        <div className="glass-panel margiela-stitches grid gap-6 p-4 sm:p-8">
          <SectionHeading description={consultationContent.description} overline="Консультация" title={consultationContent.title} />
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              {consultationContent.fields.map((field) => (
                <FormField
                  id={field.id}
                  key={field.id}
                  label={field.label}
                  placeholder={field.placeholder}
                  required
                  type={field.type}
                  value={formState[field.id] ?? ''}
                  onChange={(value) => setFormState((prev) => ({ ...prev, [field.id]: value }))}
                />
              ))}
            </div>
            <label className="flex flex-col gap-2 text-sm text-white/70" htmlFor="comment">
              {consultationContent.commentLabel}
              <textarea
                className="min-h-28 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-neon-pink/60 focus:ring-2 focus:ring-neon-pink/30"
                id="comment"
                name="comment"
                placeholder={consultationContent.commentPlaceholder}
                required
                value={formState.comment}
                onChange={(event) => setFormState((prev) => ({ ...prev, comment: event.target.value }))}
              />
            </label>
            <div>
              <NeonButton className="w-full sm:w-auto" type="submit">
                {consultationContent.ctaLabel}
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
