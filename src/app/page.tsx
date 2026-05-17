'use client';

import { StandardStep } from '@/steps/StandardStep';
import { AuthorityStep } from '@/steps/AuthorityStep';
import { CaseStudyStep } from '@/steps/CaseStudyStep';
import { FeaturesStep } from '@/steps/FeaturesStep';
import { GalleryStep } from '@/steps/GalleryStep';
import { OfferStep } from '@/steps/OfferStep';
import { ScoreStep } from '@/steps/ScoreStep';
import { PerceptionStep } from '@/steps/PerceptionStep';
import { useQuiz } from '@/store/quizStore';

export default function Home() {
  const stepIndex = useQuiz((s) => s.stepIndex);

  const renderStep = () => {
    if (stepIndex === 1) return <PerceptionStep />;
    if (stepIndex === 6) return <CaseStudyStep />;
    if (stepIndex === 7) return <AuthorityStep />;
    if (stepIndex === 8) return <GalleryStep />;
    if (stepIndex === 9) return <ScoreStep />;
    if (stepIndex === 10) return <FeaturesStep />;
    if (stepIndex === 11) return <OfferStep />;
    return <StandardStep index={stepIndex} />;
  };

  return (
    <main className="mx-auto flex w-full max-w-quiz flex-col items-center px-4 py-6">
      <div className="w-full">{renderStep()}</div>
    </main>
  );
}
