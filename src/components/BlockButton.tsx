'use client';

import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  pulse?: boolean;
};

export function BlockButton({ pulse = true, className = '', children, ...rest }: Props) {
  return (
    <div className="relative block w-full pb-2">
      <button
        {...rest}
        className={[
          'relative z-[2] block w-full rounded-xl bg-cta py-5 text-center font-bold text-white',
          'border-b-8 border-cta-shadow',
          'transition-transform duration-150 ease-[cubic-bezier(.4,0,.2,1)]',
          'hover:scale-[1.05] hover:shadow-cta hover:duration-200',
          'active:scale-[1.05] active:opacity-80 active:duration-100 active:shadow-cta',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:transform-none disabled:hover:shadow-none',
          pulse ? 'animate-cta-pulse' : '',
          className,
        ].join(' ')}
      >
        {children}
      </button>
    </div>
  );
}
