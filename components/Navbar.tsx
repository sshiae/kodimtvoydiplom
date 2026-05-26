'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Menu, X, Send } from 'lucide-react';
import { LinkButton } from './ui/Button';
import { NAV_LINKS, SITE } from '@/lib/data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-8 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-slate-200/60 bg-white/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl shadow-glow">
            <img src="/icon.svg" alt="Логотип" className="h-9 w-9" />
          </span>
          <span className="text-base font-semibold tracking-tight text-slate-900">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton href={SITE.primaryContact} external icon={Send} size="md">
            Написать в VK
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-soft md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200/60 bg-white/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
            <LinkButton
              href={SITE.primaryContact}
              external
              icon={Send}
              className="mt-3 self-start"
            >
              Написать в VK
            </LinkButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
