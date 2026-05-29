import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Términos de Uso | gustagoat.ai',
  description: 'Términos y condiciones que rigen el uso del sitio y del producto.',
};

const SUPPORT_EMAIL = 'coven688@gmail.com';

export default function TerminosPage() {
  return (
    <LegalPage title="Términos de Uso">
      <p>Última actualización: 29 de mayo de 2026.</p>
      <p>
        Estos Términos de Uso ("Términos") regulan el acceso y la utilización del sitio
        gustagoat.ai y de los productos digitales ofrecidos por Gomes e Silva Desenvolvimento de
        Software LTDA ("Blackfarm"). Al acceder al sitio o realizar una compra, declaras estar de
        acuerdo con estos Términos.
      </p>

      <h2 className="mt-6 text-lg font-bold">1. Objeto</h2>
      <p>
        Comercializamos productos digitales de carácter educativo, principalmente packs de
        prompts y materiales relacionados con la generación de imágenes mediante inteligencia
        artificial.
      </p>

      <h2 className="mt-6 text-lg font-bold">2. Naturaleza educativa</h2>
      <p>
        Nuestro contenido es <strong>exclusivamente educativo e informativo</strong>. No
        garantizamos ganancias, ingresos ni resultados específicos. Los resultados varían según
        cada persona, su dedicación, conocimientos previos y otros factores ajenos a nuestro
        control.
      </p>

      <h2 className="mt-6 text-lg font-bold">3. Licencia de uso</h2>
      <p>
        Al adquirir el producto, recibes una licencia personal, no exclusiva e intransferible para
        usar el material. Está <strong>prohibido</strong>:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Revender, redistribuir o ceder el contenido a terceros;</li>
        <li>Compartir credenciales de acceso;</li>
        <li>Reproducir el contenido en cursos o publicaciones propias.</li>
      </ul>

      <h2 className="mt-6 text-lg font-bold">4. Pago y acceso</h2>
      <p>
        El pago se procesa mediante un procesador externo. Tras la confirmación, el acceso se
        envía al e-mail y/o WhatsApp registrados en la compra. Verifica también la carpeta de
        spam.
      </p>

      <h2 className="mt-6 text-lg font-bold">5. Reembolso</h2>
      <p>
        El reembolso se rige por nuestra{' '}
        <a href="/politica-de-reembolso" className="text-cta underline">
          Política de Reembolso
        </a>
        , que garantiza la devolución dentro del plazo de 7 días.
      </p>

      <h2 className="mt-6 text-lg font-bold">6. Propiedad intelectual</h2>
      <p>
        Todo el contenido del sitio y del producto — incluyendo textos, imágenes, prompts, marcas
        y diseños — está protegido por derechos de autor. Su uso indebido puede generar
        responsabilidad civil y penal.
      </p>

      <h2 className="mt-6 text-lg font-bold">7. Limitación de responsabilidad</h2>
      <p>
        Blackfarm no se responsabiliza por: (a) decisiones tomadas con base en el contenido;
        (b) interrupciones o fallos de plataformas de terceros (IA, redes sociales, procesadores
        de pago); (c) usos indebidos del material que infrinjan estos Términos o la ley.
      </p>

      <h2 className="mt-6 text-lg font-bold">8. Modificaciones</h2>
      <p>
        Podemos modificar estos Términos en cualquier momento. La versión vigente siempre estará
        publicada en esta página.
      </p>

      <h2 className="mt-6 text-lg font-bold">9. Legislación y foro</h2>
      <p>
        Estos Términos se rigen por las leyes de la República Federativa de Brasil. Las
        controversias se resolverán en el foro de la sede de la empresa, salvo disposición legal
        en contrario que beneficie al consumidor.
      </p>

      <h2 className="mt-6 text-lg font-bold">10. Contacto</h2>
      <p>
        Dudas sobre estos Términos:{' '}
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
