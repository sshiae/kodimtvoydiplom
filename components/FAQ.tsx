'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';
import { FAQ as FAQ_ITEMS } from '@/lib/data';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="Вопросы и ответы"
        title={
          <>
            Самое <span className="text-gradient">важное о работе с нами</span>
          </>
        }
        description="Если что-то осталось непонятным — напишите во ВКонтакте, ответим лично."
      />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-soft">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium text-slate-900 md:text-lg">
                  {item.q}
                </span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition-transform duration-300 ${
                    isOpen ? 'rotate-45 border-indigo-200 bg-indigo-50 text-indigo-600' : ''
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-[15px] leading-relaxed text-slate-600 md:px-7 md:pb-6">
                      {item.a}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
