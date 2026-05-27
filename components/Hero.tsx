'use client';

import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  Code2,
  GitBranch,
  Activity,
  Star,
} from 'lucide-react';
import { LinkButton } from './ui/Button';
import { SITE } from '@/lib/data';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-200/60 via-violet-200/50 to-fuchsia-200/40 blur-3xl animate-blob" />
        <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl animate-blob [animation-delay:-8s]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Помощь с дипломом и курсовой —
            <br className="hidden sm:block" />
            от первой строки кода{' '}
            <span className="text-gradient">до успешной защиты</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-slate-600 md:text-lg">
            Помогаем студентам разобраться в теме и разработать проект по требованиям
            вашего вуза: веб, мобильные, десктоп, ML, боты и игры. Вы получаете
            не просто код, а понятный пример профессиональной разработки, который
            сами адаптируете и защищаете. Мы сопровождаем вас на всём пути
            самостоятельной подготовки.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton
              href={SITE.primaryContact}
              external
              icon={Send}
              size="lg"
            >
              Написать в VK
            </LinkButton>
            <LinkButton href="#services" variant="secondary" size="lg" showArrow>
              Что мы делаем
            </LinkButton>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-600 sm:-mx-10 sm:gap-x-6 lg:-mx-16">
            {[
              'Индивидуальный разбор темы',
              'Понятный пример на GitHub',
              'Сопровождение до защиты',
              'Поддержка на доработках',
            ].map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <MockCodeWindow />

          <FloatingStat
            className="left-2 top-10 sm:-left-4 sm:top-14"
            icon={<Star className="h-4 w-4 text-amber-500" />}
            label="Оценка"
            value="«Отлично»"
            sub="на защите"
            delay={0.4}
          />
          <FloatingStat
            className="right-2 -top-4 sm:-right-6 sm:-top-6"
            icon={<Activity className="h-4 w-4 text-emerald-500" />}
            label="Поддержка"
            value="Сопровождение"
            sub="до защиты"
            delay={0.55}
          />
          <FloatingStat
            className="bottom-14 right-3 sm:bottom-8 sm:-right-6"
            icon={<GitBranch className="h-4 w-4 text-indigo-600" />}
            label="GitHub"
            value="приватный"
            sub="репозиторий"
            delay={0.7}
          />
        </motion.div>
      </div>
    </section>
  );
}

function MockCodeWindow() {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-2 shadow-glow ring-1 ring-slate-900/5 backdrop-blur">
      <div className="rounded-[20px] bg-slate-950 text-slate-200">
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
            <Code2 className="h-3.5 w-3.5" />
            <span>diploma-project · main</span>
          </div>
          <div className="text-xs text-slate-500">~/projects</div>
        </div>

        <div className="grid gap-0 sm:grid-cols-[200px_1fr]">
          <aside className="hidden border-r border-white/5 px-4 py-4 text-xs text-slate-400 sm:block">
            <div className="mb-2 font-semibold uppercase tracking-wider text-slate-500">
              Структура
            </div>
            <ul className="space-y-1.5">
              <li className="text-slate-300">📁 src/</li>
              <li className="ml-4">📁 components/</li>
              <li className="ml-4">📁 modules/</li>
              <li className="ml-4">📁 services/</li>
              <li className="text-slate-300">📁 docs/</li>
              <li className="ml-4">📄 thesis.docx</li>
              <li className="ml-4">📄 presentation.pptx</li>
              <li className="text-slate-300">📄 README.md</li>
            </ul>
          </aside>

          <div className="overflow-hidden p-5 font-mono text-[12.5px] leading-relaxed sm:text-sm">
            <div className="flex">
              <div className="mr-4 select-none text-slate-600">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <div key={n}>{n}</div>
                ))}
              </div>
              <pre className="flex-1 whitespace-pre overflow-x-auto">
{`// Дипломный проект: «Платформа для онлайн-обучения»
import { Auth, Dashboard, Analytics } from "@/modules";

`}
<span className="text-fuchsia-400">export const</span>{' '}<span className="text-sky-300">graduate</span> = <span className="text-amber-300">async</span> () =&gt; {'{'}
{`
  `}
<span className="text-emerald-300">const</span>{' '}user = <span className="text-amber-300">await</span> Auth.<span className="text-sky-300">login</span>();
{`
  `}
<span className="text-emerald-300">const</span>{' '}stats = <span className="text-amber-300">await</span> Analytics.<span className="text-sky-300">track</span>(user);
{`
  `}
<span className="text-emerald-300">return</span>{' '}Dashboard.<span className="text-sky-300">render</span>({'{'} user, stats {'}'});
{`
}`};
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingStat({
  className,
  icon,
  label,
  value,
  sub,
  delay = 0,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute hidden rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-soft backdrop-blur sm:block ${className ?? ''}`}
    >
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-xl bg-slate-100">
          {icon}
        </div>
        <div>
          <div className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
            {label}
          </div>
          <div className="text-sm font-semibold text-slate-900">{value}</div>
          {sub ? <div className="text-[10px] text-slate-500">{sub}</div> : null}
        </div>
      </div>
    </motion.div>
  );
}
