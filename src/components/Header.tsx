'use client';

import Image from 'next/image';
import { useQuiz, TOTAL_STEPS } from '@/store/quizStore';

export function Header() {
  const stepIndex = useQuiz((s) => s.stepIndex);
  const pct = Math.max(8, Math.round(((stepIndex + 1) / TOTAL_STEPS) * 100));

  return (
    <div className="flex w-full flex-col items-center gap-4 pt-2">
      <Image
        src="/assets/shared/gustagoat.png"
        alt="@Gustagoat.ia"
        width={800}
        height={200}
        priority
        className="mx-auto h-auto w-[220px]"
        unoptimized
      />
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-cta transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
