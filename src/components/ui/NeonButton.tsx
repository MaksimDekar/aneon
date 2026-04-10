import type { PropsWithChildren } from 'react';

interface NeonButtonProps extends PropsWithChildren {
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
}

export function NeonButton({ children, href, type = 'button', className = '' }: NeonButtonProps) {
  const baseClass =
    'group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition duration-300';
  const skinClass =
    'neon-border bg-gradient-to-b from-base-800 to-base-900 shadow-neon hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,47,179,0.35),0_0_46px_rgba(53,214,255,0.28)]';

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

