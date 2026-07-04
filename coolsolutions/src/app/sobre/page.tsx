import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Section, Card, KPI } from '@/components/ui'

export const metadata = { title: 'Sobre' }

const principles = [
  'Clareza técnica antes de velocidade aparente.',
  'Arquitetura orientada por operação real, não por apresentação.',
  'Automação como disciplina, não como ornamento.',
  'Documentação, observabilidade e governança desde o início.',
]

export default function SobrePage() {
  return (
    <div>
      <Header />
      <main>
        <Section className="pb-10 pt-10 md:pt-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow text-[10px] text-[var(--muted)]">Sobre a CoolSolutions</p>
              <h1 className="balanced-title mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-[var(--foreground)] md:text-6xl">
                Uma consultoria de engenharia focada em plataformas estáveis, legíveis e sustentáveis.
              </h1>
            </div>
            <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
              Com 12 anos de atuação, a CoolSolutions apoia empresas que precisam organizar fundações cloud,
              modernizar esteiras e estruturar operação com menos fricção. O posicionamento é simples:
              atuar com senioridade, escopo claro e responsabilidade de ponta a ponta.
            </p>
          </div>
        </Section>

        <Section className="py-0">
          <div className="grid gap-5 md:grid-cols-3">
            <KPI value="12+" label="anos combinando arquitetura, operação e modernização." />
            <KPI value="Cloud" label="profundidade prática em AWS, GCP e Azure." />
            <KPI value="DevOps" label="plataformas, pipelines, IaC e disciplina operacional." />
          </div>
        </Section>

        <Section>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-[2rem] p-7 md:p-8">
              <p className="eyebrow text-[10px] text-[var(--muted)]">Missão</p>
              <p className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                Transformar ambientes complexos em operações mais previsíveis, seguras e alinhadas ao negócio.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                O objetivo não é só entregar componentes técnicos. É deixar estrutura, critério e meios para que a plataforma continue evoluindo com menos dependência de ações emergenciais.
              </p>
            </Card>
            <Card className="rounded-[2rem] p-7 md:p-8">
              <p className="eyebrow text-[10px] text-[var(--muted)]">Princípios</p>
              <ul className="mt-5 space-y-4">
                {principles.map((principle) => (
                  <li key={principle} className="border-b border-[rgba(18,18,18,0.08)] pb-4 text-base leading-7 text-[var(--foreground)] last:border-b-0 last:pb-0">
                    {principle}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        <Section className="pt-0">
          <Card className="rounded-[2rem] p-7 md:p-8">
            <p className="eyebrow text-[10px] text-[var(--muted)]">Especialização</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">Arquitetura e plataforma</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Landing zones, redes, segurança, identidade, padrões de provisionamento, GitOps,
                  esteiras de entrega, Kubernetes e observabilidade.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">Operação e evolução</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Sustentação, troubleshooting, hardening, otimização de custos, revisão de arquitetura,
                  melhorias incrementais e suporte a ambientes críticos.
                </p>
              </div>
            </div>
          </Card>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
