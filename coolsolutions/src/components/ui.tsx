"use client"
import React from 'react'
import { motion } from 'framer-motion'

export function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container-responsive">{children}</div>
    </section>
  )
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-neutral-200 bg-white shadow-soft ${className}`}>{children}</div>
  )
}

export function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-semibold text-neutral-900">{value}</div>
      <div className="text-sm text-neutral-600">{label}</div>
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
    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
      {logos.map((logo, index) => (
        <div key={logo.alt} className="relative flex items-center">
          <span className="text-neutral-500 font-light text-sm tracking-wide">
            {logo.alt}
          </span>
          {index < logos.length - 1 && (
            <span className="hidden sm:inline-block ml-8 text-neutral-300">•</span>
          )}
        </div>
      ))}
    </div>
  )
}
