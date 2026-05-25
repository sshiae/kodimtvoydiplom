'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';
import type { Review } from '@/lib/reviews';
import { SITE } from '@/lib/data';

type ReviewsProps = {
  reviews: Review[];
};

export function Reviews({ reviews }: ReviewsProps) {
  const hasReviews = reviews.length > 0;

  return (
    <Section id="reviews" className="bg-slate-50/60">
      <SectionHeader
        eyebrow="Отзывы"
        title={
          <>
            Что говорят <span className="text-gradient">наши клиенты</span>
          </>
        }
        description={
          <>
            Отзывы берём из нашей группы{' '}
            <a
              href={SITE.primaryContact}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition hover:text-indigo-700"
            >
              ВКонтакте
            </a>
            .
          </>
        }
      />

      {hasReviews ? (
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.article
              key={`${review.firstName}-${review.lastName}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:border-slate-300 hover:shadow-glow"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-200/40 via-violet-200/30 to-fuchsia-200/40 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <Quote className="relative h-8 w-8 text-indigo-500/80" strokeWidth={2} />

              <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">
                {review.text}
              </p>

              <div className="relative mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-sm font-semibold text-white shadow-glow">
                  {review.firstName[0]}
                  {review.lastName[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {review.firstName} {review.lastName}
                  </div>
                  <div className="text-xs text-slate-500">Клиент</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-2xl rounded-3xl border border-dashed border-slate-300 bg-white/80 px-8 py-12 text-center shadow-soft"
        >
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-50 to-fuchsia-50 text-indigo-600">
            <Quote className="h-7 w-7" strokeWidth={2} />
          </div>
          <p className="mt-5 text-lg font-medium text-slate-800">
            Отзывов пока что нет, Ваш может быть первым!
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Напишите нам во ВКонтакте — обсудим ваш проект и поможем с защитой.
          </p>
        </motion.div>
      )}
    </Section>
  );
}
