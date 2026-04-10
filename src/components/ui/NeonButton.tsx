import type { PropsWithChildren } from 'react';

interface NeonButtonProps extends PropsWithChildren {
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
}

export function NeonButton({ children, href, type = 'button', className = '' }: NeonButtonProps) {
  const baseClass =
    'group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition duration-300';
  const skinClass =
    'neon-border bg-gradient-to-b from-base-900 to-black/90 shadow-[0_8px_22px_rgba(0,0,0,0.45)] hover:scale-[1.01] hover:shadow-[0_0_12px_rgba(255,255,255,0.18)]';

  if (href) {
    return (
      <a className={`${baseClass} ${skinClass} ${className}`} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClass} ${skinClass} ${className}`} type={type}>
      {children}
    </button>
  );
}

