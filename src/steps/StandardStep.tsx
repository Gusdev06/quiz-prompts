'use client';

import Image from 'next/image';
import { BlockButton } from '@/components/BlockButton';
import { SubtleAnswerCard } from '@/components/SubtleAnswerCard';
import { RichText } from '@/components/RichText';
import { StepShell } from '@/components/StepShell';
import { STEPS } from '@/lib/content';
import { imgFor } from '@/lib/assets';
import { trackCustom } from '@/lib/pixel';
import { useQuiz } from '@/store/quizStore';

export function StandardStep({ index }: { index: number }) {
  const next = useQuiz((s) => s.next);
  const copy = STEPS[index];

  const handleAdvance = (answer?: string) => {
    trackCustom('QuizStep', { step: index + 1, answer });
    next(answer);
  };

  return (
    <StepShell>
      {copy.title ? <RichText text={`**${copy.title}**`} className="text-center" /> : null}
      {copy.body ? <RichText text={copy.body} className="text-center" /> : null}

      {copy.heroUuid ? (
        <Image
          src={imgFor(copy.heroUuid)}
          alt=""
          width={1024}
          height={1024}
          priority={index <= 1}
          className="mx-auto h-auto w-full rounded-xl"
          unoptimized
        />
      ) : null}

      {copy.inlineUuids?.map((uuid) => (
        <Image
          key={uuid}
          src={imgFor(uuid)}
          alt=""
          width={1024}
          height={1024}
          className="mx-auto h-auto w-full rounded-xl"
          unoptimized
        />
      ))}

      {copy.tagline ? (
        <RichText text={copy.tagline} className="text-center text-cta font-medium" />
      ) : null}

      {copy.choices ? (
        <div className="flex flex-col gap-3">
          {copy.choices.map((c) => (
            <SubtleAnswerCard
              key={c.id}
              label={c.label}
              onSelect={() => handleAdvance(c.id)}
            />
          ))}
        </div>
      ) : null}

      {copy.cta ? (
        <BlockButton onClick={() => handleAdvance()}>
          <span>{copy.cta}</span>
        </BlockButton>
      ) : null}
    </StepShell>
  );
}
