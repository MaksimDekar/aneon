import { Container } from '@/components/ui/Container';
import { contactsContent } from '@/data/contacts';
import { images } from '@/data/images';
import { footerContent } from '@/data/siteContent';

export function Footer() {
  return (
    <footer className="section-shell border-t border-white/10 bg-black/20 py-12">
      <Container>
        <div className="glass-panel margiela-stitches grid gap-8 p-6 sm:p-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <img alt="Логотип Neon Atelier" className="h-8 w-auto opacity-90" src={images.logo} />
            <p className="text-sm leading-relaxed text-white/60">{footerContent.legalText}</p>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.12em] text-white/50">{contactsContent.phone.label}</p>
            <a className="text-base text-white transition hover:text-neon-blue" href={contactsContent.phone.href}>
              {contactsContent.phone.value}
            </a>
            <a className="block text-sm text-white/70 transition hover:text-neon-blue" href={contactsContent.email.href}>
              {contactsContent.email.value}
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.12em] text-white/50">{contactsContent.labels.messengers}</p>
            {contactsContent.messenger.map((messenger) => (
              <a className="block text-sm text-white/75 transition hover:text-neon-pink" href={messenger.href} key={messenger.label}>
                {messenger.label}: {messenger.value}
              </a>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.12em] text-white/50">{contactsContent.labels.contacts}</p>
            <p className="text-sm text-white/75">{contactsContent.address}</p>
            <p className="text-sm text-white/75">{contactsContent.schedule}</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/50">{footerContent.copyright}</div>
      </Container>
    </footer>
  );
}
