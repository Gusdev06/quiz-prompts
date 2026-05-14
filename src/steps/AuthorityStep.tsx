'use client';

import { BlockButton } from '@/components/BlockButton';
import { RichText } from '@/components/RichText';
import { StepShell } from '@/components/StepShell';
import { trackCustom } from '@/lib/pixel';
import { useQuiz } from '@/store/quizStore';

const STEP_INDEX = 7;

export function AuthorityStep() {
  const next = useQuiz((s) => s.next);

  const handleAdvance = () => {
    trackCustom('QuizStep', { step: STEP_INDEX + 1 });
    next();
  };

  return (
    <StepShell>
      <RichText
        className="text-left"
        text={`Llevo 1 año en el mercado de I.A, y **tuve que estudiar Ingeniería de Prompt, leer documentación de las principales I.A del mercado para entender cómo sacarles el máximo**, pero tranquilo...`}
      />

      <div className="rounded-2xl bg-warn p-5 text-white">
        <p className="mb-2 flex items-center gap-2 text-lg font-bold">
          <span aria-hidden>🚨</span> ¡Atención!
        </p>
        <p className="text-base leading-snug">
          No necesitas perder tiempo leyendo mil documentos para aprender ingeniería de prompt y tener resultados como los que te voy a mostrar en la próxima página...
        </p>
      </div>

      <p className="text-left text-lg leading-snug">
        Haz clic en continuar para ver los resultados reales de mis prompts👇
      </p>

      <BlockButton onClick={handleAdvance}>Continuar...</BlockButton>
    </StepShell>
  );
}
