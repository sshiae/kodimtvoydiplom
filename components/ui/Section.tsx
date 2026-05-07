import clsx from 'clsx';
import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={clsx('relative py-20 md:py-28', className)}>
      <div className={clsx('mx-auto max-w-7xl px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        'mx-auto max-w-2xl',
        align === 'center' ? 'text-center' : 'text-left mx-0',
      )}
    >
      {eyebrow ? (
        <div
          className={clsx(
            'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-600',
            align === 'center' ? 'mx-auto' : '',
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-balance text-base text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
