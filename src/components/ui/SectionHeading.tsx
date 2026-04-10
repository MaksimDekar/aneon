interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ overline, title, description, align = 'left' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`mb-8 flex max-w-3xl flex-col gap-3 ${alignClass}`}>
      {overline ? (
        <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-neon-blue">
          {overline}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-relaxed text-white/70">{description}</p> : null}
    </div>
  );
}

