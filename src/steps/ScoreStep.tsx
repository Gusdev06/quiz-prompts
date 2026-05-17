'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BlockButton } from '@/components/BlockButton';
import { RichText } from '@/components/RichText';
import { StepShell } from '@/components/StepShell';
import { imgFor } from '@/lib/assets';
import { STEPS } from '@/lib/content';
import { useQuiz } from '@/store/quizStore';

const STEP_INDEX = 9;
const SCORE = 89;
const LOAD_DURATION_MS = 3200;

export function ScoreStep() {
  const next = useQuiz((s) => s.next);
  const copy = STEPS[STEP_INDEX];
  const womanUuid = copy.inlineUuids?.[0];

  const [phase, setPhase] = useState<'loading' | 'score'>('loading');
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const ratio = Math.min(1, elapsed / LOAD_DURATION_MS);
      setPct(Math.round(ratio * SCORE));
      if (ratio >= 1) clearInterval(id);
    }, 60);
    const timeout = setTimeout(() => setPhase('score'), LOAD_DURATION_MS + 100);
    return () => {
      clearInterval(id);
      clearTimeout(timeout);
    };
  }, []);

  if (phase === 'loading') {
    return (
      <div className="flex min-h-[70dvh] w-full flex-col items-center justify-center gap-6 px-4">
        <div className="w-full max-w-sm">
          <div className="relative h-3 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="flex h-full items-center justify-end rounded-full bg-cta pr-2 text-[10px] font-bold text-white transition-[width] duration-150 ease-linear"
              style={{ width: `${pct}%` }}
            >
              {pct >= 8 ? `${pct}%` : null}
            </div>
          </div>
        </div>
        <p className="text-center text-lg font-bold">Analizando tus respuestas...</p>
        <p className="text-center text-sm text-gray-500">¡Esto toma segundos!</p>
      </div>
    );
  }

  return (
    <StepShell>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-gray-200">
          <p className="text-xs uppercase tracking-widest text-gray-500">TU PUNTUACIÓN</p>
          <div
            className="relative flex h-32 w-32 items-center justify-center rounded-full"
            style={{
              background: `conic-gradient(#DC2626 ${SCORE * 3.6}deg, #E5E7EB 0)`,
            }}
          >
            <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-50">
              <span className="text-2xl font-bold text-gray-900">{SCORE}%</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 ring-1 ring-gray-200">
          <p className="rounded-md px-2 py-1 text-center text-sm font-bold text-gray-900">
            Resultado: Flojo 😥
          </p>
          {womanUuid ? (
            <div className="relative h-44 w-full overflow-hidden rounded-lg">
              <Image
                src={imgFor(womanUuid)}
                alt="Resultado: Flojo"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
          ) : null}
        </div>
      </div>

      <RichText
        className="text-left"
        text={`Basado en tus respuestas…
Existe **${SCORE}% de probabilidad de que estés usando prompts flojos, generando imágenes pésimas, que te impiden vender y meter más plata en el bolsillo!**
Pero la culpa no es tuya, esto pasa porque **la mayoría de las personas escribe prompts sin estructura;**`}
      />

      <div className="space-y-1">
        <p>Resultado:</p>
        <p>❌ personajes que parecen muñecos</p>
        <p>❌ gastas un montón de créditos y nunca aciertas una imagen buena</p>
        <p>❌ pierdes tiempo y dinero</p>
      </div>

      <p>Y fue exactamente por eso que creé gustagoat.ai👇</p>

      <BlockButton onClick={() => next()}>Quiero ver qué es eso...</BlockButton>
    </StepShell>
  );
}
