import Link from 'next/link'

export function Footer() {
  return (
    <footer className="pb-8 pt-12">
      <div className="container-responsive">
        <div className="panel rounded-[2rem] px-6 py-8 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-[10px] text-[var(--muted)]">CoolSolutions</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                Arquitetura, operação e evolução de plataformas cloud com postura de time sênior.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-[var(--muted)]">
              <Link href="/sobre" className="hover:text-[var(--foreground)]">Sobre</Link>
              <Link href="/servicos" className="hover:text-[var(--foreground)]">Serviços</Link>
              <Link href="/links" className="hover:text-[var(--foreground)]">Referências</Link>
              <a className="hover:text-[var(--foreground)]" href="mailto:suporte@coolsolutions.com.br">suporte@coolsolutions.com.br</a>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-[rgba(18,18,18,0.08)] pt-5 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} CoolSolutions. Todos os direitos reservados.</p>
            <p>Operação remota, foco em engenharia, governança e continuidade.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
