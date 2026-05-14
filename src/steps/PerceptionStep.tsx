'use client';

import Image from 'next/image';
import { RichText } from '@/components/RichText';
import { StepShell } from '@/components/StepShell';
import { STEPS } from '@/lib/content';
import { imgFor } from '@/lib/assets';
import { trackCustom } from '@/lib/pixel';
import { useQuiz } from '@/store/quizStore';

const STEP_INDEX = 1;

export function PerceptionStep() {
  const next = useQuiz((s) => s.next);
  const copy = STEPS[STEP_INDEX];
  const choices = copy.choices ?? [];

  const handleSelect = (id: string) => {
    trackCustom('QuizStep', { step: STEP_INDEX + 1, answer: id });
    next(id);
  };

  return (
    <StepShell>
      <RichText text={`**${copy.title ?? ''}**`} className="text-center" />
      <RichText text={copy.body} className="text-center" />

      <div className="flex flex-col gap-6">
        {choices.map((c) =>
          c.imageUuid ? (
            <Image
              key={c.id}
              src={imgFor(c.imageUuid)}
              alt={c.label}
              width={1024}
              height={1280}
              className="h-auto w-full rounded-xl"
              unoptimized
            />
          ) : null
        )}
      </div>

      <div className="flex flex-col gap-3">
        {choices.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => handleSelect(c.id)}
            className="w-full rounded-xl bg-warn py-4 text-center font-bold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02] active:opacity-80"
          >
            {c.label}
          </button>
        ))}
      </div>
    </StepShell>
  );
}
