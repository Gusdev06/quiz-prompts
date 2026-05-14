'use client';

import { BlockButton } from '@/components/BlockButton';
import { RichText } from '@/components/RichText';
import { StepShell } from '@/components/StepShell';
import { trackCustom } from '@/lib/pixel';
import { useQuiz } from '@/store/quizStore';

const STEP_INDEX = 11;

const BULLETS = [
  '**+ de 350 Prompts Listos**, con realismo absurdo, ya liberados para que solo copies y pegues',
  '**Clase enseñando a generar las imágenes con herramienta gratuita**',
  '**Clase de Cómo editar las imágenes**, agregando elementos, quitando elementos, cambiando lo que quieras en tu imagen/influencer',
  '**Clase de cómo dejar las imágenes sin marca de agua y en alta resolución** con herramienta gratuita',
  '**Prompts Nuevos cada semana**',
];

const BULLETS_2 = [
  '**Actualizaciones Semanales** (subimos prompts nuevos [red:CADA SEMANA])',
  'Todos los prompts de las imágenes mostradas aquí, y en mis anuncios, [red:LIBERADOS PARA TI]',
];

export function FeaturesStep() {
  const next = useQuiz((s) => s.next);

  const handleAdvance = () => {
    trackCustom('QuizStep', { step: STEP_INDEX + 1 });
    next();
  };

  return (
    <StepShell>
      <RichText
        text="¿Qué hay en **gustagoat.ai**?"
        className="text-center text-xl font-bold"
      />

      <ul className="flex flex-col gap-3">
        {BULLETS.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-left text-base leading-snug">
            <span className="flex-none" aria-hidden>✅</span>
            <RichText text={item} className="text-base leading-snug" />
          </li>
        ))}
      </ul>

      <div className="rounded-lg border-l-4 border-warn bg-warn/5 p-3 text-left">
        <RichText
          text="[red:OBS:] Recuerda que puedes modificar las imágenes después de generadas y cambiar ropa, productos, en fin, ¡las posibilidades son infinitas!"
          className="text-sm leading-snug"
        />
      </div>

      <ul className="flex flex-col gap-3">
        {BULLETS_2.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-left text-base leading-snug">
            <span className="flex-none" aria-hidden>✅</span>
            <RichText text={item} className="text-base leading-snug" />
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2 text-left">
        <p className="flex items-start gap-2 text-base leading-snug">
          <span aria-hidden>✅</span>
          <span className="font-bold">Solo necesitas:</span>
        </p>
        <p className="pl-7">1️⃣ copiar</p>
        <p className="pl-7">2️⃣ pegar</p>
        <p className="pl-7">
          3️⃣ generar las imágenes (puedes generar las imágenes de forma{' '}
          <span className="font-bold text-cta">100% GRATIS</span>)
        </p>
      </div>

      <RichText
        text="¡Y crear influencers e imágenes hiper realistas **en minutos!**"
        className="text-center"
      />

      <BlockButton onClick={handleAdvance}>YO QUIERO ESTOS PROMPTS AHORA...</BlockButton>
    </StepShell>
  );
}
