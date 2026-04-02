import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Section, Card } from '@/components/ui'

export const metadata = { title: 'Serviços' }

const serviceBlocks = [
  {
    title: 'Cloud Foundations',
    description:
      'Estruturação de ambientes AWS, GCP e Azure com foco em landing zones, redes, identidade, segurança, backup e governança.',
    items: ['Arquitetura base', 'Migração planejada', 'Custos e segurança', 'Operação inicial'],
  },
  {
    title: 'Plataforma Kubernetes',
    description:
      'Clusters gerenciados ou self-hosted, padrões de deploy, políticas, observabilidade e rotinas de upgrade sem improviso.',
    items: ['EKS, GKE e AKS', 'GitOps', 'Segurança de cluster', 'Observabilidade'],
  },
  {
    title: 'DevOps e IaC',
    description:
      'Pipelines, ambientes reproduzíveis, automação de provisionamento e esteiras com validação, rollback e rastreabilidade.',
    items: ['Terraform', 'CI/CD', 'GitHub Actions', 'ArgoCD e Flux'],
  },
  {
    title: 'Observabilidade',
    description:
      'Métricas, logs, traces, dashboards e alertas desenhados por stakeholder para reduzir o tempo até diagnóstico.',
    items: ['Prometheus', 'Grafana', 'Datadog', 'Alertas e SLOs'],
  },
  {
    title: 'Sustentação',
    description:
      'Acompanhamento recorrente para operações que exigem resposta rápida, rotina organizada e evolução contínua.',
    items: ['Troubleshooting', 'Melhoria contínua', 'Runbooks', 'Suporte 24x7'],
  },
  {
    title: 'Advisory técnico',
    description:
      'Leitura crítica do ambiente, roadmap de modernização e apoio executivo para decisões estruturais em cloud e plataforma.',
    items: ['Assessment', 'Roadmap', 'Governança', 'Prioridades de investimento'],
  },
]

export default function ServicosPage() {
  return (
    <div>
      <Header />
      <main>
        <Section className="pb-10 pt-10 md:pt-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="eyebrow text-[10px] text-[var(--muted)]">Serviços</p>
              <h1 className="balanced-title mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-[var(--foreground)] md:text-6xl">
                Capacidades técnicas organizadas para dar solidez à plataforma, não só entregar tarefas.
              </h1>
            </div>
            <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
              O portfólio é enxuto de propósito. A atuação cobre os blocos que mais afetam disponibilidade,
              velocidade de entrega, previsibilidade operacional e governança em cloud.
            </p>
          </div>
        </Section>

        <Section className="pt-0">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceBlocks.map((block) => (
              <Card key={block.title} className="h-full rounded-[2rem] p-7">
                <p className="eyebrow text-[10px] text-[var(--muted)]">Capability</p>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">{block.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{block.description}</p>
                <ul className="mt-6 space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--foreground)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
