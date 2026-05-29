import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Privacidad | gustagoat.ai',
  description: 'Cómo recopilamos, usamos y protegemos tus datos personales.',
};

const SUPPORT_EMAIL = 'coven688@gmail.com';

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de Privacidad">
      <p>Última actualización: 29 de mayo de 2026.</p>
      <p>
        Esta Política de Privacidad describe cómo Gomes e Silva Desenvolvimento de Software LTDA
        (en adelante <strong>"Blackfarm"</strong>, <strong>"nosotros"</strong>) recopila, utiliza y
        protege la información personal que recibe de los usuarios de este sitio
        (gustagoat.ai).
      </p>

      <h2 className="mt-6 text-lg font-bold">1. Información que recopilamos</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Datos de contacto:</strong> nombre, e-mail y número de teléfono (WhatsApp)
          proporcionados durante el quiz o en la compra.
        </li>
        <li>
          <strong>Datos de pago:</strong> procesados directamente por el procesador de pagos
          (no almacenamos datos de tarjetas).
        </li>
        <li>
          <strong>Datos de navegación:</strong> dirección IP, tipo de dispositivo, navegador,
          páginas visitadas, parámetros UTM y eventos de interacción.
        </li>
        <li>
          <strong>Cookies y píxeles:</strong> utilizamos Meta Pixel (Facebook), Utmify y otros
          píxeles publicitarios para medir el desempeño de las campañas.
        </li>
      </ul>

      <h2 className="mt-6 text-lg font-bold">2. Cómo usamos tu información</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Procesar tu compra y entregar el producto adquirido;</li>
        <li>Enviar comunicaciones relacionadas con el producto, soporte y actualizaciones;</li>
        <li>Cumplir con obligaciones legales y fiscales;</li>
        <li>Mejorar nuestros productos, servicios y experiencia de navegación;</li>
        <li>Medir el desempeño de campañas publicitarias.</li>
      </ul>

      <h2 className="mt-6 text-lg font-bold">3. Compartir con terceros</h2>
      <p>
        No vendemos ni alquilamos tus datos. Podemos compartir información con proveedores
        estrictamente necesarios para la prestación del servicio, como:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Procesadores de pago (para concretar las transacciones);</li>
        <li>Plataformas de e-mail y de mensajería (para envío de accesos);</li>
        <li>Plataformas de medición y publicidad (Meta, Google, Utmify).</li>
      </ul>

      <h2 className="mt-6 text-lg font-bold">4. Tus derechos</h2>
      <p>
        Conforme a la LGPD (Brasil) y a las normativas locales aplicables, puedes solicitar en
        cualquier momento: acceso, corrección, exclusión, portabilidad o anonimización de tus
        datos personales. Envía tu solicitud a{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cta underline">
          {SUPPORT_EMAIL}
        </a>
        .
      </p>

      <h2 className="mt-6 text-lg font-bold">5. Seguridad</h2>
      <p>
        Adoptamos medidas técnicas y administrativas para proteger tus datos contra accesos no
        autorizados, pérdida, alteración o divulgación indebida.
      </p>

      <h2 className="mt-6 text-lg font-bold">6. Retención</h2>
      <p>
        Conservamos tus datos por el tiempo necesario para cumplir con las finalidades descritas y
        con las obligaciones legales aplicables.
      </p>

      <h2 className="mt-6 text-lg font-bold">7. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política periódicamente. La versión vigente siempre estará
        disponible en esta página.
      </p>

      <h2 className="mt-6 text-lg font-bold">8. Contacto</h2>
      <p className="rounded-lg bg-slate-100 p-4 text-sm">
        <strong>Encargado de Datos:</strong> Gomes e Silva Desenvolvimento de Software LTDA
        <br />
        <strong>CNPJ:</strong> 57.675.582/0001-23
        <br />
        <strong>E-mail:</strong>{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cta underline">
          {SUPPORT_EMAIL}
        </a>
      </p>
    </LegalPage>
  );
}
