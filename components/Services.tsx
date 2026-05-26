'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from './ui/Section';
import { SERVICES } from '@/lib/data';

export function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Что мы делаем"
        title={
          <>
            Помощь по любым <span className="text-gradient">IT-направлениям</span>
          </>
        }
        description="Веб-приложения, мобильные проекты, машинное обучение, боты и игры. Помогаем разобраться в теме и подобрать стек под требования вашего вуза."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur transition-all hover:border-slate-300 hover:shadow-glow"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-200/40 via-violet-200/40 to-fuchsia-200/40 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-glow">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {service.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
