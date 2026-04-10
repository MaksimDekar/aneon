import { images } from '@/data/images';

const navItems = [
  { label: 'Производство', href: '#production' },
  { label: 'Преимущества', href: '#benefits' },
  { label: 'Расчет', href: '#estimate' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'О продукте', href: '#info' },
  { label: 'Консультация', href: '#consultation' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#footer' },
];

export function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 pt-3 sm:px-6 lg:px-8">
        <a className="glass-panel inline-flex items-center gap-2 px-3 py-2" href="#top">
          <img alt="Логотип" className="h-5 w-auto" src={images.logo} />
        </a>

        <details className="group relative">
          <summary className="mono-label glass-panel cursor-pointer list-none px-4 py-2 text-white/85">Меню</summary>
          <nav className="glass-panel absolute right-0 mt-2 min-w-56 overflow-hidden p-2">
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="block rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}

