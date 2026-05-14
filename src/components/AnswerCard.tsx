'use client';

import Image from 'next/image';
import { BlockButton } from './BlockButton';
import { imgFor } from '@/lib/assets';

type Props = {
  label: string;
  imageUuid?: string;
  onSelect: () => void;
};

export function AnswerCard({ label, imageUuid, onSelect }: Props) {
  return (
    <BlockButton pulse={false} onClick={onSelect} className="!py-0 overflow-hidden">
      {imageUuid ? (
        <Image
          src={imgFor(imageUuid)}
          alt={label}
          width={800}
          height={600}
          className="h-auto w-full"
          unoptimized
        />
      ) : null}
      <p className="px-4 py-5">{label}</p>
    </BlockButton>
  );
}
