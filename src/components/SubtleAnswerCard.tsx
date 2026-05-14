'use client';

type Props = {
  label: string;
  onSelect: () => void;
};

// White rectangular card used on qualifier/multi-choice steps (4, 5).
// No pulse, no green — just a subtle border and a hover lift.
export function SubtleAnswerCard({ label, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="w-full rounded-xl bg-white px-5 py-4 text-left text-base ring-1 ring-gray-200 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:opacity-80"
    >
      {label}
    </button>
  );
}
