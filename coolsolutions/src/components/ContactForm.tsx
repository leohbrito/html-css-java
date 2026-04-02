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
    <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-soft">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-900">Nome</label>
            <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2 focus:outline-primary" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-900">E-mail</label>
            <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required aria-invalid={email !== '' && !isValidEmail(email)} className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2 focus:outline-primary" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-medium text-neutral-900">Empresa</label>
            <input id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2 focus:outline-primary" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-neutral-900">Mensagem</label>
            <textarea id="message" name="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2 focus:outline-primary" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button type="submit" className="rounded-2xl bg-primary px-5 py-2.5 text-white font-semibold hover:bg-primary-600">Enviar</button>
          <a href="mailto:suporte@coolsolutions.com.br" className="text-primary hover:text-primary-600">suporte@coolsolutions.com.br</a>
        </div>
        {submitted && (
          <p className="mt-3 text-sm text-neutral-600">Se o aplicativo de e-mail não abrir, envie manualmente para suporte@coolsolutions.com.br.</p>
        )}
      </form>
    </div>
  )
}
