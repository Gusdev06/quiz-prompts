import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Reembolso | gustagoat.ai',
  description: 'Política oficial de reembolso del producto.',
};

const SUPPORT_EMAIL = 'coven688@gmail.com';

export default function ReembolsoPage() {
  return (
    <LegalPage title="Política de Reembolso">
      <p>
        Última actualización: 29 de mayo de 2026.
      </p>

      <h2 className="mt-6 text-lg font-bold">1. Garantía Incondicional de 7 días</h2>
      <p>
        Ofrecemos una garantía incondicional de <strong>7 (siete) días</strong>, contados a partir
        de la fecha de la compra, conforme determina el Art. 49 del Código de Defensa del
        Consumidor brasileño. Dentro de este plazo, podrás solicitar el reembolso íntegro del valor
        pagado, sin necesidad de justificación.
      </p>

      <h2 className="mt-6 text-lg font-bold">2. Cómo solicitar el reembolso</h2>
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          Envía un e-mail a{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cta underline">
            {SUPPORT_EMAIL}
          </a>{' '}
          con el asunto <em>"Solicitud de Reembolso"</em>.
        </li>
        <li>Informa el nombre completo y el e-mail utilizados en la compra.</li>
        <li>Adjunta el comprobante de compra o el ID de la transacción.</li>
        <li>
          Nuestro equipo procesará la solicitud en hasta <strong>5 días hábiles</strong>.
        </li>
      </ol>

      <h2 className="mt-6 text-lg font-bold">3. Plazo del reintegro</h2>
      <p>
        Tras la aprobación, el valor será reintegrado por el mismo medio de pago utilizado en la
        compra. El plazo de aparición del reintegro depende de la operadora del medio de pago y
        puede tardar hasta <strong>2 facturas</strong> en el caso de tarjeta de crédito.
      </p>

      <h2 className="mt-6 text-lg font-bold">4. Después del plazo de 7 días</h2>
      <p>
        Pasado el plazo de garantía, no aceptaremos solicitudes de reembolso, salvo en casos
        específicos previstos por la legislación vigente.
      </p>

      <h2 className="mt-6 text-lg font-bold">5. Contacto</h2>
      <p>
        Para cualquier duda sobre esta política, contáctanos por{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cta underline">
          {SUPPORT_EMAIL}
        </a>
        .
      </p>

      <p className="mt-8 rounded-lg bg-slate-100 p-4 text-sm">
        <strong>Gomes e Silva Desenvolvimento de Software LTDA</strong> (Blackfarm) — CNPJ:
        57.675.582/0001-23
      </p>
    </LegalPage>
  );
}
