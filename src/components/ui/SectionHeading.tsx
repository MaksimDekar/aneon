interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ overline, title, description, align = 'left' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      {overline ? (
        <span className="mono-label inline-flex rounded-full border border-white/20 bg-white/[0.04] px-3 py-1">
          {overline}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-semibold leading-[1.08] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{description}</p> : null}
    </div>
  );
}

