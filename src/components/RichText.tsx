'use client';

import { Fragment, ReactNode } from 'react';

// Markdown-ish renderer for captured copy. Handles:
//   **bold**       → <strong> (auto-red when text is mostly uppercase)
//   [red:text]     → red text (explicit)
//   [green:text]   → green text (explicit)
//   \n             → line break (whitespace-pre-line)
export function RichText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`whitespace-pre-line text-lg leading-snug ${className}`}>
      {parse(text)}
    </div>
  );
}

function isShouty(s: string): boolean {
  const letters = s.replace(/[^a-zA-ZÀ-ÿ]/g, '');
  if (letters.length < 3) return false;
  const upper = letters.replace(/[^A-ZÀ-Ý]/g, '');
  return upper.length / letters.length >= 0.7;
}

// Splits the text on **bold** and [color:...] tokens, preserving order.
function parse(text: string): ReactNode[] {
  const TOKEN = /(\*\*[^*]+\*\*|\[(?:red|green):[^\]]+\])/g;
  const out: ReactNode[] = [];
  let lastIdx = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = TOKEN.exec(text)) !== null) {
    if (m.index > lastIdx) out.push(<Fragment key={key++}>{text.slice(lastIdx, m.index)}</Fragment>);
    const tok = m[0];
    if (tok.startsWith('**')) {
      const inner = tok.slice(2, -2);
      out.push(
        <strong key={key++} className={isShouty(inner) ? 'text-warn' : undefined}>
          {inner}
        </strong>
      );
    } else {
      const [color, ...rest] = tok.slice(1, -1).split(':');
      const inner = rest.join(':');
      const cls = color === 'red' ? 'text-warn font-bold' : 'text-cta font-bold';
      out.push(
        <span key={key++} className={cls}>
          {inner}
        </span>
      );
    }
    lastIdx = m.index + tok.length;
  }
  if (lastIdx < text.length) out.push(<Fragment key={key++}>{text.slice(lastIdx)}</Fragment>);
  return out;
}
