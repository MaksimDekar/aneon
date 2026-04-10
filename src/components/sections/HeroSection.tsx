import { Container } from '@/components/ui/Container';
import { NeonButton } from '@/components/ui/NeonButton';
import { images } from '@/data/images';
import { heroContent, staticSectionImages } from '@/data/siteContent';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10">
            <img alt="Логотип компании" className="mb-8 h-10 w-auto opacity-90" src={images.logo} />
            <span className="mb-4 inline-flex rounded-full border border-neon-pink/40 bg-neon-pink/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-neon-pink">
              {heroContent.eyebrow}
            </span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {heroContent.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{heroContent.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <NeonButton href={heroContent.cta.href}>{heroContent.cta.label}</NeonButton>
              <NeonButton className="border-white/20 shadow-none hover:border-neon-green" href={heroContent.secondaryCta.href}>
                {heroContent.secondaryCta.label}
              </NeonButton>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {heroContent.stats.map((item) => (
                <li
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.1em] text-white/80"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-neon-pink/25 via-transparent to-neon-blue/25 blur-2xl" />
            <div className="relative grid gap-4 rounded-3xl border border-white/10 bg-base-900/70 p-3 shadow-card backdrop-blur">
              <img
                alt="Архивное фото неоновой вывески"
                className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px]"
                src={staticSectionImages.heroMain}
              />
              <img
                alt="Дополнительное фото с неоновой вывеской"
                className="h-[180px] w-full rounded-2xl object-cover"
                src={staticSectionImages.heroSecondary}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

