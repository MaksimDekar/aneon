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
            <span className="mono-label mb-5 inline-flex rounded-full border border-white/25 bg-white/[0.04] px-3 py-1">
              {heroContent.eyebrow}
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">{heroContent.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{heroContent.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <NeonButton href={heroContent.cta.href}>{heroContent.cta.label}</NeonButton>
              <NeonButton className="before:opacity-30" href={heroContent.secondaryCta.href}>
                {heroContent.secondaryCta.label}
              </NeonButton>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3">
              {heroContent.stats.map((item) => (
                <li className="font-mono rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/78" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl" />
            <div className="glass-panel margiela-stitches relative grid gap-4 p-3 shadow-card">
              <img alt="Архивное фото неоновой вывески" className="h-[320px] w-full rounded-2xl object-cover sm:h-[440px]" src={staticSectionImages.heroMain} />
              <div className="grid grid-cols-[1fr_auto] gap-4">
                <img alt="Дополнительное фото с неоновой вывеской" className="h-[170px] w-full rounded-2xl object-cover" src={staticSectionImages.heroSecondary} />
                <div className="flex min-w-[120px] flex-col justify-between rounded-2xl border border-white/15 bg-black/55 p-4">
                  <span className="mono-label">С 2020</span>
                  <span className="font-display text-3xl text-white">271+</span>
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
