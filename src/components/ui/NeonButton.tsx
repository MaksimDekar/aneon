import type { PropsWithChildren } from 'react';

interface NeonButtonProps extends PropsWithChildren {
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
}

export function NeonButton({ children, href, type = 'button', className = '' }: NeonButtonProps) {
  const baseClass =
    'inline-flex items-center justify-center rounded-xl border border-neon-blue/60 bg-base-800 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-neon transition hover:border-neon-pink hover:text-neon-blue';

  if (href) {
    return (
      <a className={`${baseClass} ${className}`} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClass} ${className}`} type={type}>
      {children}
    </button>
  );
}

