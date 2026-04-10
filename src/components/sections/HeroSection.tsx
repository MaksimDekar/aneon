import { Container } from '@/components/ui/Container';
import { NeonButton } from '@/components/ui/NeonButton';
import { images } from '@/data/images';
import { heroContent, staticSectionImages } from '@/data/siteContent';

export function HeroSection() {
  return (
    <section className="relative z-10 overflow-hidden pb-14 pt-16 sm:pb-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-80" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative">
            <img alt="Логотип компании" className="mb-10 h-9 w-auto opacity-95" src={images.logo} />
            <span className="mb-5 inline-flex rounded-full border border-neon-pink/40 bg-neon-pink/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-neon-pink">
              {heroContent.eyebrow}
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">{heroContent.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{heroContent.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <NeonButton href={heroContent.cta.href}>{heroContent.cta.label}</NeonButton>
              <NeonButton className="!shadow-none hover:!shadow-neon before:opacity-40" href={heroContent.secondaryCta.href}>
                {heroContent.secondaryCta.label}
              </NeonButton>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3">
              {heroContent.stats.map((item) => (
                <li className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.12em] text-white/80" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-neon-pink/20 via-transparent to-neon-blue/25 blur-2xl" />
            <div className="glass-panel relative grid gap-4 p-3 shadow-card">
              <img alt="Архивное фото неоновой вывески" className="h-[320px] w-full rounded-2xl object-cover sm:h-[440px]" src={staticSectionImages.heroMain} />
              <div className="grid grid-cols-[1fr_auto] gap-4">
                <img alt="Дополнительное фото с неоновой вывеской" className="h-[170px] w-full rounded-2xl object-cover" src={staticSectionImages.heroSecondary} />
                <div className="flex min-w-[120px] flex-col justify-between rounded-2xl border border-white/10 bg-base-900 p-4">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-white/55">С 2020</span>
                  <span className="font-display text-3xl text-neon-blue">271+</span>
                  <span className="text-xs text-white/65">реализованный проект</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
