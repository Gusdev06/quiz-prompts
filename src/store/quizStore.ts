'use client';

import { create } from 'zustand';

type Answers = Record<number, string>;

type QuizState = {
  stepIndex: number;
  answers: Answers;
  next: (answer?: string) => void;
  goTo: (index: number) => void;
  reset: () => void;
};

export const TOTAL_STEPS = 12;

export const useQuiz = create<QuizState>((set) => ({
  stepIndex: 0,
  answers: {},
  next: (answer) =>
    set((s) => ({
      stepIndex: Math.min(s.stepIndex + 1, TOTAL_STEPS - 1),
      answers: answer === undefined ? s.answers : { ...s.answers, [s.stepIndex]: answer },
    })),
  goTo: (index) => set({ stepIndex: Math.max(0, Math.min(index, TOTAL_STEPS - 1)) }),
  reset: () => set({ stepIndex: 0, answers: {} }),
}));
