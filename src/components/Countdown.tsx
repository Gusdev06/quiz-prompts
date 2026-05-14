'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'bb_countdown_start';

function format(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':');
}

export function Countdown({
  durationSec = 600,
  className = 'text-warn text-4xl font-bold tabular-nums tracking-wider',
}: { durationSec?: number; className?: string }) {
  const [remaining, setRemaining] = useState(durationSec);

  useEffect(() => {
    const now = Date.now();
    const stored = Number(localStorage.getItem(STORAGE_KEY));
    const isValid =
      stored && Number.isFinite(stored) && now - stored < durationSec * 1000;
    const start = isValid ? stored : now;
    if (!isValid) localStorage.setItem(STORAGE_KEY, String(start));

    const tick = () => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      setRemaining(Math.max(0, durationSec - elapsed));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [durationSec]);

  return <div className={className}>{format(remaining)}</div>;
}
