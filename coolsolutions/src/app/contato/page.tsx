import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Section, Card } from '@/components/ui'
import { ContactForm } from '@/components/ContactForm'

export const metadata = { title: 'Contato' }

export default function ContatoPage() {
  return (
    <div>
      <Header />
      <main>
        <Section className="pb-10 pt-10 md:pt-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow text-[10px] text-[var(--muted)]">Contato</p>
              <h1 className="balanced-title mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-[var(--foreground)] md:text-6xl">
                Traga o cenário atual. A conversa começa pelo problema real.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">
                Compartilhe contexto sobre ambiente, prioridade, prazo e o tipo de apoio esperado.
                A resposta pode seguir por assessment, desenho de solução, sustentação ou plano de modernização.
              </p>
              <div className="mt-8 space-y-4">
                <Card className="rounded-[1.75rem] p-5">
                  <p className="eyebrow text-[10px] text-[var(--muted)]">E-mail</p>
                  <a href="mailto:suporte@coolsolutions.com.br" className="mt-2 inline-block text-lg font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                    suporte@coolsolutions.com.br
                  </a>
                </Card>
                <Card className="rounded-[1.75rem] p-5">
                  <p className="eyebrow text-[10px] text-[var(--muted)]">Escopo comum</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    Cloud foundations, Kubernetes, pipelines, observabilidade, troubleshooting e advisory técnico.
                  </p>
                </Card>
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
