'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { useQuiz } from '@/store/quizStore';
import { Header } from './Header';

export function StepShell({ children }: { children: ReactNode }) {
  const stepIndex = useQuiz((s) => s.stepIndex);
  const [animKey, setAnimKey] = useState(stepIndex);
  const lastStepRef = useRef<number | null>(null);

  useEffect(() => {
    if (lastStepRef.current === stepIndex) return;
    lastStepRef.current = stepIndex;
    setAnimKey(stepIndex);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [stepIndex]);

  return (
    <div className="flex w-full flex-col gap-6">
      <Header />
      <div
        key={animKey}
        className="flex w-full flex-1 flex-col gap-8 sm:gap-10 md:gap-12 animate-step-entry"
      >
        {children}
      </div>
    </div>
  );
}
