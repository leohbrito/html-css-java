"use client"
import React, { useState } from 'react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function isValidEmail(value: string) {
    return /.+@.+\..+/.test(value)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !isValidEmail(email) || !message) return
    const mailto = `mailto:suporte@coolsolutions.com.br?subject=${encodeURIComponent('Contato via site')}&body=${encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nEmpresa: ${company}\n\nMensagem:\n${message}`
    )}`
    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <div className="panel rounded-[2rem] p-6 md:p-8">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">Nome</label>
            <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-2xl border border-[rgba(18,18,18,0.12)] bg-[rgba(255,255,255,0.78)] px-4 py-3 text-[var(--foreground)]" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">E-mail</label>
            <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required aria-invalid={email !== '' && !isValidEmail(email)} className="mt-1 w-full rounded-2xl border border-[rgba(18,18,18,0.12)] bg-[rgba(255,255,255,0.78)] px-4 py-3 text-[var(--foreground)]" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-medium text-[var(--foreground)]">Empresa</label>
            <input id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 w-full rounded-2xl border border-[rgba(18,18,18,0.12)] bg-[rgba(255,255,255,0.78)] px-4 py-3 text-[var(--foreground)]" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">Contexto</label>
            <textarea id="message" name="message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} required className="mt-1 w-full rounded-2xl border border-[rgba(18,18,18,0.12)] bg-[rgba(255,255,255,0.78)] px-4 py-3 text-[var(--foreground)]" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button type="submit" className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent)]">Enviar briefing</button>
          <a href="mailto:suporte@coolsolutions.com.br" className="text-sm text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--accent)]">suporte@coolsolutions.com.br</a>
        </div>
        {submitted && (
          <p className="mt-3 text-sm text-[var(--muted)]">Se o aplicativo de e-mail não abrir, envie manualmente para suporte@coolsolutions.com.br.</p>
        )}
      </form>
    </div>
  )
}
