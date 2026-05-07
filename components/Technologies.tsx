'use client';

import { TECHNOLOGIES } from '@/lib/data';

export function Technologies() {
  const items = [...TECHNOLOGIES, ...TECHNOLOGIES];
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Стек, с которым мы работаем каждый день
        </p>

        <div className="mask-fade-edges mt-8 overflow-hidden">
          <div className="flex w-max gap-3 animate-marquee">
            {items.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="select-none rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-soft backdrop-blur"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
