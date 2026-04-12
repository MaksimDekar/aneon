import { Container } from '@/components/ui/Container';
import { NeonButton } from '@/components/ui/NeonButton';
import { images } from '@/data/images';
import { heroContent, staticSectionImages } from '@/data/siteContent';

export function HeroSection() {
  return (
    <section className="relative z-10 overflow-hidden pb-12 pt-24 sm:pb-20 sm:pt-28" id="top">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(123,29,81,0.28),transparent_44%),radial-gradient(circle_at_88%_12%,rgba(18,94,124,0.2),transparent_38%),linear-gradient(to_bottom,rgba(7,9,16,0.55),rgba(7,9,16,0.15)_58%,transparent_100%)]" />
      <Container>
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative fx-fade-lift">
            <img alt="Логотип компании" className="mb-6 h-8 w-auto opacity-95 sm:mb-7 sm:h-9" src={images.logo} />
            <h1 className="font-display text-3xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">{heroContent.title}</h1>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
              <NeonButton className="w-full sm:w-auto" href={heroContent.cta.href}>
                {heroContent.cta.label}
              </NeonButton>
              <NeonButton className="w-full before:opacity-30 sm:w-auto" href={heroContent.secondaryCta.href}>
                {heroContent.secondaryCta.label}
              </NeonButton>
            </div>
            <span className="mono-label mt-6 inline-flex rounded-full border border-white/25 bg-white/[0.04] px-3 py-1 sm:mt-8">
              {heroContent.eyebrow}
            </span>
          </div>

          <div className="relative fx-fade-lift fx-float-slow lg:ml-auto lg:w-full lg:max-w-[560px]" style={{ animationDelay: '120ms' }}>
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl" />
            <div className="glass-panel relative grid gap-3 p-3 shadow-card sm:gap-4">
              <img
                alt="Архивное фото неоновой вывески"
                className="h-[250px] w-full rounded-2xl object-cover object-[left_top] sm:h-[420px] lg:h-[470px]"
                decoding="async"
                fetchPriority="high"
                src={staticSectionImages.heroMain}
              />
              <div className="grid grid-cols-[1.7fr_1fr] gap-3 sm:gap-4">
                <img
                  alt="Дополнительное фото с неоновой вывеской"
                  className="h-[110px] w-full rounded-2xl object-cover object-[left_top] sm:h-[135px]"
                  decoding="async"
                  loading="lazy"
                  src={staticSectionImages.heroSecondary}
                />
                <div className="fx-pulse-soft flex min-w-0 flex-col justify-between rounded-2xl border border-white/15 bg-black/55 p-3 sm:p-4">
                  <span className="mono-label">С 2020</span>
                  <span className="font-display text-2xl text-white sm:text-[44px] sm:leading-none">271+</span>
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
