import { Container } from '@/components/ui/Container';
import footer369 from '@/assets/images/footer-369.svg';
import { contactsContent } from '@/data/contacts';
import { footerContent, staticSectionImages } from '@/data/siteContent';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black/35 py-8 sm:py-12" id="footer">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 flex items-center justify-center sm:mb-4">
            <img alt="369" className="h-12 w-auto sm:h-14" src={footer369} />
          </div>

          <div className="relative mx-auto mb-4 max-w-xl sm:mb-5">
            <img
              alt="Неоновая сцена"
              className="h-16 w-full rounded-sm border border-white/10 object-cover opacity-80 sm:h-24"
              src={staticSectionImages.heroSecondary}
            />
            <svg
              className="pointer-events-none absolute -left-4 -top-4 h-[120px] w-[calc(100%+1.8rem)] sm:-left-8 sm:h-[175px] sm:w-[calc(100%+3.5rem)]"
              fill="none"
              viewBox="0 0 860 320"
            >
              <path
                d="M30 70C220 20 370 95 520 150C640 190 740 195 835 55"
                stroke="#00ffa2"
                strokeLinecap="round"
                strokeWidth="2.2"
              />
            </svg>
          </div>

          <div className="mx-auto max-w-xl text-center">
            <h3 className="mb-2 font-display text-2xl font-semibold italic tracking-tight text-white sm:mb-3 sm:text-4xl">a.neon</h3>
            <p className="mx-auto mb-4 max-w-xs text-xs leading-relaxed text-white/72 sm:mb-5 sm:text-base">
              Делаем вывески с 2020 года и отправляем во все уголки нашей страны
            </p>

            <div className="mb-4 flex flex-wrap items-center justify-center gap-4 sm:mb-5 sm:gap-6">
              {contactsContent.messenger.map((messenger) => (
                <a
                  className="font-mono text-xs uppercase tracking-[0.08em] text-white transition hover:text-neon-green sm:text-base"
                  href={messenger.href}
                  key={messenger.label}
                >
                  ↘ {messenger.label}
                </a>
              ))}
            </div>

            <a
              className="mb-5 block font-display text-2xl tracking-wide text-white transition hover:text-neon-blue sm:mb-6 sm:text-4xl"
              href={contactsContent.phone.href}
            >
              {contactsContent.phone.value}
            </a>

            <div className="mb-6 space-y-1 text-white/85">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/55">Адрес</p>
              <p className="text-sm break-words sm:text-lg">{contactsContent.address}</p>
              <p className="text-sm text-white/65">{contactsContent.schedule}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-4 max-w-3xl border-t border-white/10 pt-3 text-center text-[11px] leading-relaxed text-white/45 sm:mt-6 sm:pt-4 sm:text-sm">
          {footerContent.legalText}
          <div className="mt-1 text-white/35">{footerContent.copyright}</div>
        </div>
      </Container>
    </footer>
  );
}
