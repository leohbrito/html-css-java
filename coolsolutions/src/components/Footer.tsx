import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 mt-16">
      <div className="container-responsive py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">© {new Date().getFullYear()} CoolSolutions. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6">
          <Link href="/sobre" className="hover:text-neutral-900">Sobre</Link>
          <Link href="/servicos" className="hover:text-neutral-900">Serviços</Link>
          <Link href="/links" className="hover:text-neutral-900">Links & Documentações</Link>
          <a className="hover:text-neutral-900" href="mailto:suporte@coolsolutions.com.br">suporte@coolsolutions.com.br</a>
        </div>
      </div>
    </footer>
  )
}
