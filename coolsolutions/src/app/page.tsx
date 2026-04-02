import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTAButton } from '@/components/CTAButton'
import { Section, Card, KPI, FadeIn, LogoCloud } from '@/components/ui'
import { BreadcrumbsJsonLd } from './structured-data'

export const metadata = {
  title: 'Cloud, Kubernetes, DevOps',
}

const operatingBlocks = [
  {
    title: 'Arquitetura',
    text: 'Definimos foundations, landing zones, rede, segurança e padrões para ambientes que precisam crescer sem improviso.',
  },
  {
    title: 'Operação',
    text: 'Assumimos rotinas críticas, observabilidade, resposta a incidentes e evolução contínua com disciplina operacional.',
  },
  {
    title: 'Entrega',
    text: 'Modernizamos pipelines, containers e infraestrutura como código para reduzir lead time e aumentar previsibilidade.',
  },
]

const serviceGroups = [
  'AWS, GCP e Azure com desenho orientado a custo, resiliência e governança.',
  'Kubernetes e plataformas containerizadas com padrão de operação e segurança.',
  'Pipelines, GitOps, observabilidade e automação para esteiras maduras.',
]

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <BreadcrumbsJsonLd />

        <Section className="pb-10 pt-10 md:pb-16 md:pt-14">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="eyebrow text-[11px] text-[var(--muted)]">Cloud engineering for serious operations</p>
              <h1 className="balanced-title mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--foreground)] md:text-7xl">
                Uma operação cloud mais simples, mais rígida e mais preparada para escala.
              </h1>
              <p className="muted-copy mt-6 max-w-2xl text-lg leading-8">
                A CoolSolutions atua como extensão técnica de times que precisam de arquitetura,
                governança e execução com postura sênior. Menos ruído visual, menos improviso
                operacional, mais clareza sobre o que sustenta o negócio.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CTAButton href="/contato">Agendar conversa técnica</CTAButton>
                <Link
                  href="/servicos"
                  className="rounded-full border border-[rgba(18,18,18,0.12)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent-soft)]"
                >
                  Ver atuação
                </Link>
              </div>
            </div>

            <FadeIn>
              <Card className="rounded-[2.25rem] p-6 md:p-8">
                <p className="eyebrow text-[10px] text-[var(--muted)]">Modo de trabalho</p>
                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">Descobrir</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      Leitura do cenário atual, gargalos, riscos e prioridades reais do ambiente.
                    </p>
                  </div>
                  <div className="border-t border-[rgba(18,18,18,0.08)] pt-5">
                    <p className="text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">Estruturar</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      Decisões arquiteturais, trilha de implementação e governança por camadas.
                    </p>
                  </div>
                  <div className="border-t border-[rgba(18,18,18,0.08)] pt-5">
                    <p className="text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">Operar</p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      Sustentação, evolução e automação contínua para que a operação não dependa de heroísmo.
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </Section>

        <Section className="py-0">
          <div className="panel rounded-[2rem] px-6 py-6 md:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="eyebrow text-[10px] text-[var(--muted)]">Confiança construída em produção</p>
                <p className="mt-2 max-w-2xl text-lg tracking-[-0.03em] text-[var(--foreground)]">
                  Times e marcas que já contaram com a CoolSolutions em momentos de crescimento, migração e reestruturação.
                </p>
              </div>
              <LogoCloud
                logos={[
                  { src: '/logos/garage-im-gray.svg', alt: 'Garagem.im' },
                  { src: '/logos/alelo-gray.svg', alt: 'Alelo' },
                  { src: '/logos/abu-consultoria-gray.svg', alt: 'AB Consultoria' },
                  { src: '/logos/suitecred-gray.svg', alt: 'Suitecred' },
                  { src: '/logos/ingresse-gray.svg', alt: 'Ingresse' },
                ]}
              />
            </div>
          </div>
        </Section>

        <Section>
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-[10px] text-[var(--muted)]">Atuação</p>
              <h2 className="balanced-title mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)] md:text-5xl">
                Engenharia pragmática para plataformas que precisam sustentar receita, produto e operação.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
              Trabalhamos com recorte claro de responsabilidade: fundação cloud, plataforma de entrega e operação observável.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {operatingBlocks.map((block, index) => (
              <FadeIn key={block.title} delay={index * 0.06}>
                <Card className="h-full rounded-[2rem] p-7">
                  <p className="eyebrow text-[10px] text-[var(--muted)]">0{index + 1}</p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">{block.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{block.text}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section className="pt-0">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-[2rem] p-7 md:p-8">
              <p className="eyebrow text-[10px] text-[var(--muted)]">Escopo principal</p>
              <ul className="mt-6 space-y-5">
                {serviceGroups.map((item) => (
                  <li key={item} className="border-b border-[rgba(18,18,18,0.08)] pb-5 text-base leading-7 text-[var(--foreground)] last:border-b-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <div className="grid gap-5 sm:grid-cols-2">
              <KPI value="12+" label="anos apoiando operações críticas e jornadas de modernização." />
              <KPI value="24x7" label="capacidade de suporte para cenários que exigem continuidade." />
              <KPI value="100+" label="entregas em migração, plataforma, observabilidade e sustentação." />
              <KPI value="SLA" label="foco em disponibilidade, redução de risco e previsibilidade operacional." />
            </div>
          </div>
        </Section>

        <Section className="pt-0">
          <Card className="rounded-[2.25rem] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow text-[10px] text-[var(--muted)]">Próximo passo</p>
                <h3 className="balanced-title mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)] md:text-5xl">
                  Se o ambiente está complexo demais para operar com tranquilidade, esse é o problema certo para atacar agora.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
                  Entramos para dar forma ao que hoje depende de esforço excessivo: arquitetura, plataforma de entrega, observabilidade e rotina operacional.
                </p>
              </div>
              <CTAButton href="/contato">Falar com a CoolSolutions</CTAButton>
            </div>
          </Card>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
