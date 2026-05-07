import { Send } from 'lucide-react';
import { SITE, NAV_LINKS } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-glow">
              <span className="font-bold text-sm">{'</>'}</span>
            </span>
            <span className="text-base font-semibold tracking-tight text-slate-900">
              {SITE.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-slate-600">
            Делаем курсовые и дипломные проекты под ключ — с защитой и
            сопровождением.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Разделы
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-700 transition-colors hover:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Связаться
          </h4>
          <p className="mt-4 text-sm text-slate-600">
            Самый быстрый способ — написать в нашу группу ВКонтакте. Отвечаем
            обычно в течение часа.
          </p>
          <a
            href={SITE.primaryContact}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-slate-800"
          >
            <Send className="h-4 w-4" /> Написать в VK
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200/80">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center lg:px-8">
          <span>© {year} {SITE.name}. Все права защищены.</span>
          <span>
            Сделано на Next.js, TailwindCSS и Framer Motion.
          </span>
        </div>
      </div>
    </footer>
  );
}
