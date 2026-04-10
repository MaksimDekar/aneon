import { Container } from '@/components/ui/Container';
import { contactsContent } from '@/data/contacts';
import { footerContent, staticSectionImages } from '@/data/siteContent';

export function Footer() {
  return (
    <footer className="section-shell relative overflow-hidden border-t border-white/10 bg-black/35 py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-center gap-2 font-mono text-6xl font-semibold tracking-[0.04em] sm:text-7xl">
            <span className="text-transparent [text-shadow:0_0_0_#ff256d,0_0_14px_rgba(255,37,109,0.25)]">3</span>
            <span className="text-transparent [text-shadow:0_0_0_#ff256d,0_0_14px_rgba(255,37,109,0.25)]">6</span>
            <span className="text-transparent [text-shadow:0_0_0_#00ffa2,0_0_14px_rgba(0,255,162,0.25)]">9</span>
          </div>

          <div className="relative mx-auto mb-8 max-w-2xl">
            <img alt="Неоновая сцена" className="h-28 w-full rounded-sm border border-white/10 object-cover opacity-80 sm:h-36" src={staticSectionImages.heroSecondary} />
            <svg className="pointer-events-none absolute -left-6 -top-5 h-[220px] w-[calc(100%+3rem)] sm:-left-10 sm:h-[280px] sm:w-[calc(100%+5rem)]" fill="none" viewBox="0 0 860 320">
              <path d="M30 70C220 20 370 95 520 150C640 190 740 195 835 55" stroke="#00ffa2" strokeLinecap="round" strokeWidth="2.5" />
            </svg>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-5 font-display text-5xl font-semibold italic tracking-tight text-white sm:text-6xl">a.neon</h3>
            <p className="mx-auto mb-8 max-w-sm text-base leading-relaxed text-white/72">Делаем вывески с 2020 года и отправляем во все уголки нашей страны</p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-7">
              {contactsContent.messenger.map((messenger) => (
                <a className="font-mono text-lg uppercase tracking-[0.05em] text-white transition hover:text-neon-green" href={messenger.href} key={messenger.label}>
                  ↘ {messenger.label}
                </a>
              ))}
            </div>

            <a className="mb-10 block font-display text-4xl tracking-wide text-white transition hover:text-neon-blue sm:text-5xl" href={contactsContent.phone.href}>
              {contactsContent.phone.value}
            </a>

            <div className="mb-10 space-y-1 text-white/85">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-white/55">Адрес</p>
              <p className="text-xl">{contactsContent.address}</p>
              <p className="text-base text-white/65">{contactsContent.schedule}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl border-t border-white/10 pt-6 text-center text-sm leading-relaxed text-white/45">
          {footerContent.legalText}
          <div className="mt-2 text-white/35">{footerContent.copyright}</div>
        </div>
      </Container>
    </footer>
  );
}
