'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from './ui/Section';
import { TEAM, ALL_CONTACT_LINKS } from '@/lib/data';

export function Team() {
  return (
    <Section id="team" className="bg-slate-50/60">
      <SectionHeader
        eyebrow="Команда"
        title={
          <>
            Прямой контакт с разработчиками —{' '}
            <span className="text-gradient">никаких посредников</span>
          </>
        }
        description="Вы общаетесь напрямую с теми, кто пишет ваш проект. Это значит быстрые ответы, гибкие правки и личная ответственность за результат."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {TEAM.map((member, i) => {
          const links = ALL_CONTACT_LINKS(member);
          return (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-soft md:p-9"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-200/50 via-violet-200/40 to-fuchsia-200/50 blur-3xl" />

              <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl shadow-glow ring-4 ring-white">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-indigo-600">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="relative mt-5 text-[15px] leading-relaxed text-slate-700">
                {member.description}
              </p>

              {member.achievements.length > 0 ? (
                <ul className="relative mt-4 space-y-1.5 text-sm text-slate-600">
                  {member.achievements.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <ul className="relative mt-5 flex min-h-[72px] flex-wrap content-start gap-1.5">
                {member.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto grid auto-rows-fr gap-2 pt-6 sm:grid-cols-3">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.label === 'Email' ? undefined : '_blank'}
                      rel="noreferrer"
                      className="group flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm transition hover:border-slate-300 hover:bg-slate-50"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-700 transition group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:via-violet-600 group-hover:to-fuchsia-600 group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-medium text-slate-500">
                          {link.label}
                        </div>
                        <div className="truncate text-sm font-medium text-slate-900">
                          {link.username}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
