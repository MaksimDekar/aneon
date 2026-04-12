import { useEffect, useState } from 'react';

const COOKIE_KEY = 'aneon_cookie_consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (consent !== 'accepted') {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-3 sm:bottom-6 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-base-900/95 p-4 shadow-card backdrop-blur-md sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-white/80">
            Мы используем файлы cookie, чтобы улучшать работу сайта и делать его удобнее.
          </p>
          <button
            className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/15"
            onClick={acceptCookies}
            type="button"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}

