'use client';

import Image from 'next/image';
import { BlockButton } from '@/components/BlockButton';
import { RichText } from '@/components/RichText';
import { StepShell } from '@/components/StepShell';
import { GALLERY } from '@/lib/content';
import { imgFor } from '@/lib/assets';
import { useQuiz } from '@/store/quizStore';

export function GalleryStep() {
  const next = useQuiz((s) => s.next);

  return (
    <StepShell>
      <RichText text="[green:Resultados Reales] **de los prompts👇**" className="text-center" />

      <div className="flex flex-col gap-5">
        {GALLERY.map((item) => (
          <figure key={item.imageUuid} className="flex flex-col gap-2">
            <figcaption className="text-center text-base">{item.label}</figcaption>
            <Image
              src={imgFor(item.imageUuid)}
              alt={item.label}
              width={1024}
              height={682}
              className="h-auto w-full rounded-xl"
              unoptimized
            />
          </figure>
        ))}
      </div>

      <p className="text-center">Y mucho más...👇</p>

      <BlockButton onClick={() => next()}>Quiero acceder a estos Prompts, gustagoat...</BlockButton>
    </StepShell>
  );
}
