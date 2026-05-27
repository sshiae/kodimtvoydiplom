'use client';

import { Send, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
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

      <div className="border-t border-slate-200/60 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
          >
            <div className="flex items-start gap-3 max-w-2xl">
              <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-500 ring-1 ring-indigo-100/80 shadow-sm">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <p className="text-[13px] leading-relaxed text-slate-500">
                Мы продаём не готовую дипломную или курсовую работу, а{' '}
                <span className="font-medium text-slate-700">помощь опытных IT-экспертов</span>{' '}
                в её подготовке. Все материалы, созданные в ходе нашего сотрудничества, 
                предназначены исключительно для самостоятельного использования студентом 
                в качестве учебного пособия и образца для написания собственной работы.
              </p>
            </div>
            
            <div className="flex flex-col gap-1 text-xs text-slate-400 md:items-end md:text-right shrink-0">
              <span className="font-medium text-slate-500">© {year} {SITE.name}</span>
              <span>Сделано на Next.js, TailwindCSS и Framer Motion.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}