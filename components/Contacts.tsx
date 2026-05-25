'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Send, Clock, Sparkles } from 'lucide-react';
import { Section } from './ui/Section';
import { LinkButton } from './ui/Button';
import { SITE, TEAM, ALL_CONTACT_LINKS } from '@/lib/data';

export function Contacts() {
  return (
    <Section id="contacts">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-slate-950 px-6 py-12 shadow-glow md:px-12 md:py-16"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-fuchsia-600/30 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
              Готовы обсудить ваш проект
            </div>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Расскажите о теме —{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(120deg,#a5b4fc,#f0abfc)' }}>
                ответим в течение часа
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-300">
              Минимальная стоимость —{' '}
              <span className="font-semibold text-white">{SITE.minPriceLabel}</span>.
              Итоговая цена договорная и зависит от требований вуза, объёма и сроков.
              Чем больше деталей вы пришлёте, тем точнее будет оценка.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <LinkButton
                href={SITE.primaryContact}
                external
                icon={Send}
                size="lg"
                className="!bg-white !text-slate-900 hover:!bg-slate-100 hover:!shadow-glow"
              >
                Написать в VK
              </LinkButton>
              <span className="inline-flex items-center gap-2 text-sm text-slate-300">
                <Clock className="h-4 w-4" /> Среднее время ответа — 30 мин
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {TEAM.map((member) => {
              const links = ALL_CONTACT_LINKS(member);
              return (
                <div
                  key={member.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl ring-2 ring-white/20">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {member.name}
                      </div>
                      <div className="text-xs text-slate-300">
                        {member.role}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-1.5 text-sm">
                    {links.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.label === 'Email' ? undefined : '_blank'}
                          rel="noreferrer"
                          className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-slate-200 transition hover:bg-white/5 hover:text-white"
                        >
                          <span className="inline-flex items-center gap-2">
                            <Icon className="h-4 w-4 text-slate-400" />
                            {link.label}
                          </span>
                          <span className="truncate text-xs text-slate-400">
                            {link.username}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
