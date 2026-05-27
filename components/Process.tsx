'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from './ui/Section';
import { PROCESS } from '@/lib/data';

export function Process() {
  return (
    <Section id="process" className="bg-slate-50/60">
      <SectionHeader
        eyebrow="Как мы работаем"
        title={
          <>
            Прозрачный процесс — <span className="text-gradient">без сюрпризов</span>
          </>
        }
        description="Чёткие этапы, фиксированная стоимость и постоянная связь. Вы всегда понимаете, на каком этапе находится ваша подготовка."
      />

      <div className="relative mt-14">
        <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent lg:block" />

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <motion.li
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-sm font-semibold text-white shadow-glow">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
