import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mx-auto mt-12 w-full max-w-quiz px-4 pb-8 pt-6 text-center text-xs text-gray-500">
      <nav className="mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <Link href="/terminos-de-uso" className="hover:text-cta hover:underline">
          Términos de Uso
        </Link>
        <span aria-hidden>•</span>
        <Link href="/politica-de-privacidad" className="hover:text-cta hover:underline">
          Política de Privacidad
        </Link>
        <span aria-hidden>•</span>
        <Link href="/politica-de-reembolso" className="hover:text-cta hover:underline">
          Política de Reembolso
        </Link>
        <span aria-hidden>•</span>
        <Link href="/soporte" className="hover:text-cta hover:underline">
          Soporte
        </Link>
      </nav>

      <div className="space-y-1 leading-relaxed">
        <p>
          <strong>Gomes e Silva Desenvolvimento de Software LTDA</strong> (Blackfarm)
        </p>
        <p>CNPJ: 57.675.582/0001-23</p>
        <p>Rua João Urizzi, 31 — Parque Olímpico, Mogi das Cruzes/SP, Brasil</p>
        <p>Contenido educativo. Los resultados varían según la persona.</p>
      </div>
    </footer>
  );
}
