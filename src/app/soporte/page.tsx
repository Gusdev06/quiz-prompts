import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Soporte | gustagoat.ai',
  description: 'Canal oficial de soporte al cliente.',
};

const SUPPORT_EMAIL = 'coven688@gmail.com';

export default function SoportePage() {
  return (
    <LegalPage title="Soporte al Cliente">
      <p>
        Estamos aquí para ayudarte. Si tienes dudas sobre tu compra, problemas con el acceso al
        producto o necesitas asistencia técnica, por favor contáctanos por uno de los canales abajo.
      </p>

      <h2 className="mt-6 text-lg font-bold">Canales de atención</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>E-mail:</strong>{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cta underline">
            {SUPPORT_EMAIL}
          </a>
        </li>
        <li>
          <strong>Horario de atención:</strong> Lunes a Viernes, de 9h a 18h (BRT).
        </li>
        <li>
          <strong>Plazo de respuesta:</strong> hasta 48 horas hábiles.
        </li>
      </ul>

      <h2 className="mt-6 text-lg font-bold">Antes de contactarnos</h2>
      <p>Para agilizar tu atención, por favor incluye en tu mensaje:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Nombre completo utilizado en la compra;</li>
        <li>E-mail registrado en la compra;</li>
        <li>Descripción detallada de la duda o problema;</li>
        <li>Capturas de pantalla, si es posible.</li>
      </ul>

      <h2 className="mt-6 text-lg font-bold">Reembolsos</h2>
      <p>
        Para solicitudes de reembolso, consulta nuestra{' '}
        <a href="/politica-de-reembolso" className="text-cta underline">
          Política de Reembolso
        </a>{' '}
        y envía la solicitud por e-mail dentro del plazo previsto.
      </p>

      <h2 className="mt-6 text-lg font-bold">Datos de la empresa</h2>
      <p className="rounded-lg bg-slate-100 p-4 text-sm">
        <strong>Razón Social:</strong> Gomes e Silva Desenvolvimento de Software LTDA
        <br />
        <strong>Nombre Fantasía:</strong> Blackfarm
        <br />
        <strong>CNPJ:</strong> 57.675.582/0001-23
        <br />
        <strong>Dirección:</strong> Rua João Urizzi, 31 — Parque Olímpico, Mogi das Cruzes/SP, Brasil
      </p>
    </LegalPage>
  );
}
