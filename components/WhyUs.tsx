'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from './ui/Section';
import { ADVANTAGES } from '@/lib/data';

export function WhyUs() {
  return (
    <Section id="why">
      <SectionHeader
        eyebrow="Почему мы"
        title={
          <>
            Не «работа из интернета», а{' '}
            <span className="text-gradient">проект, который вы понимаете</span>
          </>
        }
        description="Мы пишем каждый проект с нуля, поясняем код и помогаем выступить так, чтобы у комиссии не осталось вопросов."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ADVANTAGES.map((adv, i) => {
          const Icon = adv.icon;
          return (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/60 p-6 shadow-soft transition-all hover:border-slate-300 hover:shadow-glow"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-soft transition-colors group-hover:border-indigo-200 group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-fuchsia-50">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {adv.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {adv.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
