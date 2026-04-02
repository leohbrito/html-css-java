import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type Props = { href: string; children: React.ReactNode }

export function CTAButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-white shadow-soft hover:bg-primary-600 focus-visible:outline-primary"
    >
      <span className="font-semibold">{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  )
}
