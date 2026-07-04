"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const nav = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/links', label: 'Referências' },
  { href: '/contato', label: 'Contato' },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {nav.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={
              'transition-colors ' +
              (mobile ? 'text-base ' : 'text-sm ') +
              (active
                ? 'text-[var(--foreground)]'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]')
            }
            aria-current={active ? 'page' : undefined}
          >
            {item.label}
          </Link>
        )
      })}
    </>
  )

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5">
      <div className="container-responsive">
        <div className="panel-strong rounded-[1.6rem] px-5 py-4 shadow-[0_18px_60px_rgba(18,18,18,0.06)]">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex flex-col">
              <span className="eyebrow text-[10px] text-[var(--muted)]">CoolSolutions</span>
              <span className="text-sm font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                Cloud Systems Studio
              </span>
            </Link>
            <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
              <NavLinks />
            </nav>
            <Link
              href="/contato"
              className="hidden rounded-full border border-[rgba(18,18,18,0.1)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent-soft)] md:inline-flex"
            >
              Iniciar conversa
            </Link>
            <button
              type="button"
              className="inline-flex rounded-full border border-[rgba(18,18,18,0.1)] p-2 text-[var(--foreground)] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
          <nav
            id="mobile-nav"
            className={`${open ? 'mt-4 flex' : 'hidden'} flex-col gap-4 border-t border-[rgba(18,18,18,0.08)] pt-4 md:hidden`}
            aria-label="Principal mobile"
          >
            <NavLinks mobile />
            <Link
              href="/contato"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-white"
            >
              Iniciar conversa
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
