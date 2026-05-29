import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-quiz px-4 py-8">
      <div className="flex flex-col items-center gap-4 pt-2">
        <Link href="/" aria-label="Volver al inicio">
          <Image
            src="/assets/shared/gustagoat.png"
            alt="@Gustagoat.ia"
            width={800}
            height={200}
            priority
            className="mx-auto h-auto w-[180px]"
            unoptimized
          />
        </Link>
      </div>

      <article className="legal-content mt-8 text-[15px] leading-relaxed text-slate-800">
        <h1 className="mb-6 text-2xl font-bold text-slate-900">{title}</h1>
        {children}
      </article>

      <div className="mt-10 text-center">
        <Link
          href="/"
          className="inline-block rounded-full bg-cta px-6 py-2 text-sm font-bold text-white hover:opacity-90"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
