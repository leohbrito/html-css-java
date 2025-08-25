"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/links', label: 'Links & Documentações' },
  { href: '/contato', label: 'Contato' },
]

export function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-100">
      <div className="container-responsive flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-neutral-900">
          CoolSolutions
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Principal">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  'text-sm transition-colors ' +
                  (active ? 'text-primary font-semibold' : 'text-neutral-600 hover:text-neutral-900')
                }
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
