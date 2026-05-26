import { Send, Info } from 'lucide-react';
import { SITE, NAV_LINKS } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl shadow-glow">
              <img src="/icon.svg" alt="Логотип" className="h-9 w-9" />
            </span>
            <span className="text-base font-semibold tracking-tight text-slate-900">
              {SITE.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-slate-600">
            Помогаем студентам с подготовкой IT-курсовых и дипломных работ —
            от разбора темы до сопровождения на защите.
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
      
      <div className="border-t border-slate-100 bg-amber-50/60">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-start gap-3 rounded-xl border border-amber-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <p className="text-sm leading-relaxed text-amber-900">
              Мы продаём не готовую дипломную или курсовую работу, а{' '}
              <strong className="font-semibold text-amber-950">
                помощь опытных IT-экспертов
              </strong>{' '}
              в её подготовке. Все материалы, созданные в ходе нашего
              сотрудничества, предназначены исключительно для самостоятельного
              использования студентом в качестве учебного пособия и образца для
              написания собственной работы.
            </p>
          </div>
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