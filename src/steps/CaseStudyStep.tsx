'use client';

import Image from 'next/image';
import { BlockButton } from '@/components/BlockButton';
import { RichText } from '@/components/RichText';
import { StepShell } from '@/components/StepShell';
import { imgFor } from '@/lib/assets';
import { trackCustom } from '@/lib/pixel';
import { useQuiz } from '@/store/quizStore';

const STEP_INDEX = 6;
const HERO_UUID = '39ab87e4-3d19-46d7-8313-14837ffb343c';
const SALES_UUID = '9956a40d-f54c-445a-8114-f39b60b1b56b';

export function CaseStudyStep() {
  const next = useQuiz((s) => s.next);

  const handleAdvance = () => {
    trackCustom('QuizStep', { step: STEP_INDEX + 1 });
    next();
  };

  return (
    <StepShell>
      <RichText text="**Mira esta imagen de abajo...👇**" className="text-center" />

      <RichText
        className="text-center"
        text={`La imagen no se ve **"perfecta"**, hecha con una cámara profesional, sino con un celular como el tuyo, que estás sosteniendo, y ese es el secreto de un **PROMPT** con estructura **PROFESIONAL DE REALISMO**;

¡La imagen parece de una persona **REAL!**`}
      />

      <Image
        src={imgFor(HERO_UUID)}
        alt=""
        width={1024}
        height={1024}
        className="mx-auto h-auto w-full rounded-xl"
        unoptimized
      />

      <RichText
        className="text-center"
        text={`**OBS:** Este personaje fue creado para vender un producto sobre "sexualidad", en mi otra empresa, y ese producto ya vendió más de **$89 mil dólares (print abajo)**, usando este **AVATAR DE I.A** como "Experto" del producto;

(Acabo de darte una idea, ¿no? Agradéceme jajaja)...

**¡Ese es el poder de la I.A + REALISMO!**`}
      />

      <Image
        src={imgFor(SALES_UUID)}
        alt=""
        width={1024}
        height={1024}
        className="mx-auto h-auto w-full rounded-xl"
        unoptimized
      />

      <BlockButton onClick={handleAdvance}>Continuar...</BlockButton>
    </StepShell>
  );
}
