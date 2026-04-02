import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type Props = { href: string; children: React.ReactNode }

export function CTAButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent)]"
    >
      <span className="font-semibold tracking-[-0.02em]">{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  )
}
