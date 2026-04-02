"use client"
import React from 'react'
import { motion } from 'framer-motion'

export function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container-responsive">{children}</div>
    </section>
  )
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`panel rounded-[2rem] ${className}`}>{children}</div>
  )
}

export function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.75rem] border border-[rgba(18,18,18,0.08)] bg-[rgba(255,255,255,0.58)] p-5 text-left">
      <div className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-4xl">{value}</div>
      <div className="mt-2 text-sm text-[var(--muted)]">{label}</div>
    </div>
  )
}

export function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

export function LogoCloud({ logos }: { logos: { src: string; alt: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
      {logos.map((logo, index) => (
        <div key={logo.alt} className="relative flex items-center">
          <span className="eyebrow text-[11px] text-[var(--muted)]">
            {logo.alt}
          </span>
          {index < logos.length - 1 && (
            <span className="hidden sm:inline-block ml-6 text-[rgba(18,18,18,0.24)]">/</span>
          )}
        </div>
      ))}
    </div>
  )
}
