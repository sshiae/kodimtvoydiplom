import Link from 'next/link';
import clsx from 'clsx';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-slate-900 text-white hover:bg-slate-800 shadow-soft hover:shadow-glow ring-1 ring-slate-900/5',
  secondary:
    'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-soft',
  ghost:
    'bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-100',
};

const sizeClasses: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-base py-3',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  iconRight?: LucideIcon;
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>;

export function LinkButton({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  showArrow,
  children,
  className,
  href,
  external,
  ...rest
}: LinkButtonProps) {
  const cls = clsx(
    'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out',
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      {Icon ? <Icon className="h-4 w-4" strokeWidth={2.2} /> : null}
      <span>{children}</span>
      {IconRight ? <IconRight className="h-4 w-4" strokeWidth={2.2} /> : null}
      {showArrow ? (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.2}
        />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
