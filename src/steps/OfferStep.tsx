'use client';

import Image from 'next/image';
import { BlockButton } from '@/components/BlockButton';
import { Countdown } from '@/components/Countdown';
import { RichText } from '@/components/RichText';
import { StepShell } from '@/components/StepShell';
import { imgFor } from '@/lib/assets';
import { OFFER_IMAGES } from '@/lib/content';
import { trackEvent } from '@/lib/pixel';

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL ?? 'https://gustagoat.mycartpanda.com/checkout/210183915:1';

export function OfferStep() {
  const handlePurchase = () => {
    trackEvent('InitiateCheckout', { currency: 'USD', value: 21.39 });
    window.location.href = CHECKOUT_URL;
  };

  return (
    <StepShell>
      <div className="text-center">
        <RichText text="**Aquí está tu regalo 🎁👇**" className="text-xl" />
        <p className="mt-3 text-lg">
          ¡Liberé un descuento como incentivo por haber llegado al final del quiz, aprovecha! 🤝
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 rounded-xl bg-cta px-5 py-4 text-white shadow-sm">
        <Countdown durationSec={600} className="text-2xl font-bold tabular-nums tracking-wider text-white" />
        <span aria-hidden className="text-xl">⏱</span>
        <p className="text-sm font-bold uppercase tracking-wide">Descuento especial liberado</p>
      </div>



      <RichText
        className="text-center"
        text="**Antes de ver el descuento, mira lo que los propios alumnos están diciendo de los prompts👇**"
      />

      <div className="flex flex-col gap-4">
        <Image
          src="/assets/step-13/depoimento1.webp"
          alt="Testimonio de alumno 1"
          width={1024}
          height={1280}
          className="mx-auto h-auto w-full rounded-xl"
          unoptimized
        />
        <Image
          src="/assets/step-13/depoimento2.webp"
          alt="Testimonio de alumno 2"
          width={1024}
          height={400}
          className="mx-auto h-auto w-full rounded-xl"
          unoptimized
        />
      </div>

      <div className="rounded-xl bg-[#d8f5cf] p-6">
        <p className="font-bold">ACCEDE AHORA MISMO...</p>
        <ul className="mt-3 space-y-2 text-base">
          <li>+ de 350 Prompts Listos ya liberados</li>
          <li>+ Clase enseñando a generar las imágenes con herramienta gratuita</li>
          <li>+ Cómo editar las imágenes, agregando elementos, quitando elementos, cambiando lo que quieras</li>
          <li>+ Clase de cómo dejar las imágenes sin marca de agua y en alta resolución</li>
          <li>+ Prompts Nuevos cada semana</li>
        </ul>
      </div>

      <Image
        src={imgFor(OFFER_IMAGES.bonusCard)}
        alt=""
        width={1024}
        height={1024}
        className="mx-auto h-auto w-full rounded-xl"
        unoptimized
      />

      <div className="text-center">
        <p>
          <strong>El valor normal de nuestro producto es $97</strong>, pero tu
        </p>
        <p className="text-2xl font-bold">DESCUENTO ESPECIAL</p>
        <p>está garantizado en el botón de abajo👇</p>
      </div>

      <div className="flex flex-col items-start gap-2 rounded-xl bg-[#1f4d1f] p-5 text-white">
        <p className="flex items-center gap-2 text-base font-bold">
          <span aria-hidden>📅</span>
          <span>🚨ATENCIÓN:</span>
        </p>
        <p className="text-sm font-bold uppercase leading-snug">
          ⚠️ EL DESCUENTO ESPECIAL TERMINA EL PRÓXIMO LUNES ⚠️
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-xl bg-white p-4 ring-1 ring-cta/40 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-cta/10 text-cta">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-sm font-bold uppercase text-cta">OFERTA ESPECIAL</p>
            <p className="text-sm leading-snug text-gray-700">
              Copia y Pega mis prompts <strong>por solo</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-cta px-3 py-2 text-white">
          <span className="text-xs">3x de</span>
          <span className="text-lg font-bold leading-none">$6,99</span>
        </div>
      </div>

      <BlockButton onClick={handlePurchase}>
        DESBLOQUEAR MI ACCESO A LOS + DE 350 PROMPTS LISTOS
      </BlockButton>

      <p className="text-center font-bold">
        Acceso inmediato a tu <span className="text-cta">WHATSAPP</span> y <span className="text-cta">EMAIL</span>📲
      </p>

      <div className="flex flex-col items-center gap-3 rounded-xl bg-[#d8f5cf] p-6 text-center">


        <p className="font-bold">¿TIENES MIEDO DE QUE NO FUNCIONE PARA TI?</p>
        <p className="italic">
          “Si en 7 días no quedas impresionado y no creas imágenes iguales a las que te mostré aquí, ¡te devuelvo cada centavo sin ni siquiera preguntarte por qué!”
        </p>
      </div>
    </StepShell>
  );
}
