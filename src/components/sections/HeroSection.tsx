import { Container } from '@/components/ui/Container';
import { NeonButton } from '@/components/ui/NeonButton';
import { images } from '@/data/images';
import { heroContent, staticSectionImages } from '@/data/siteContent';

export function HeroSection() {
  return (
    <section className="relative z-10 overflow-hidden pb-12 pt-24 sm:pb-20 sm:pt-28" id="top">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-80" />
      <Container>
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative">
            <img alt="Логотип компании" className="mb-6 h-8 w-auto opacity-95 sm:mb-10 sm:h-9" src={images.logo} />
            <span className="mono-label mb-4 inline-flex rounded-full border border-white/25 bg-white/[0.04] px-3 py-1 sm:mb-5">
              {heroContent.eyebrow}
            </span>
            <h1 className="font-display text-3xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">{heroContent.title}</h1>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
              <NeonButton className="w-full sm:w-auto" href={heroContent.cta.href}>
                {heroContent.cta.label}
              </NeonButton>
              <NeonButton className="w-full before:opacity-30 sm:w-auto" href={heroContent.secondaryCta.href}>
                {heroContent.secondaryCta.label}
              </NeonButton>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
              {heroContent.stats.map((item) => (
                <li className="font-mono rounded-full border border-white/20 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/78 sm:px-4 sm:text-[11px] sm:tracking-[0.18em]" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl" />
            <div className="glass-panel margiela-stitches relative grid gap-4 p-3 shadow-card">
              <img
                alt="Архивное фото неоновой вывески"
                className="h-[250px] w-full rounded-2xl object-cover sm:h-[440px]"
                decoding="async"
                fetchPriority="high"
                src={staticSectionImages.heroMain}
              />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto] sm:gap-4">
                <img
                  alt="Дополнительное фото с неоновой вывеской"
                  className="h-[130px] w-full rounded-2xl object-cover object-center sm:h-[170px]"
                  decoding="async"
                  loading="lazy"
                  src={staticSectionImages.heroSecondary}
                />
                <div className="flex min-w-0 flex-row items-end justify-between rounded-2xl border border-white/15 bg-black/55 p-3 sm:min-w-[120px] sm:flex-col sm:items-start sm:justify-between sm:p-4">
                  <span className="mono-label">С 2020</span>
                  <span className="font-display text-2xl text-white sm:text-3xl">271+</span>
                  <span className="text-right text-xs text-white/65 sm:text-left">реализованный проект</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
