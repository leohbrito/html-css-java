import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Section, Card } from '@/components/ui'
import { DocLinkList } from '@/components/DocLinkList'

export const metadata = { title: 'Referências' }

export default function LinksPage() {
  const sections = [
    {
      title: 'SRE e operação',
      items: [
        { label: 'Google SRE Book', href: 'https://sre.google/books/' },
        { label: 'SRE Workbook', href: 'https://sre.google/workbook/' },
      ],
    },
    {
      title: 'Kubernetes',
      items: [
        { label: 'Kubernetes Docs', href: 'https://kubernetes.io/docs/' },
        { label: 'Amazon EKS', href: 'https://docs.aws.amazon.com/eks/' },
        { label: 'Istio', href: 'https://istio.io/latest/docs/' },
        { label: 'Velero', href: 'https://velero.io/docs/' },
      ],
    },
    {
      title: 'Infraestrutura como código',
      items: [{ label: 'Terraform Docs', href: 'https://developer.hashicorp.com/terraform/docs' }],
    },
    {
      title: 'Observabilidade',
      items: [
        { label: 'Datadog', href: 'https://docs.datadoghq.com/' },
        { label: 'Prometheus', href: 'https://prometheus.io/docs/' },
        { label: 'Grafana', href: 'https://grafana.com/docs/' },
      ],
    },
    {
      title: 'Cloud providers',
      items: [
        { label: 'AWS Docs', href: 'https://docs.aws.amazon.com/' },
        { label: 'Google Cloud Docs', href: 'https://cloud.google.com/docs' },
        { label: 'Azure Docs', href: 'https://learn.microsoft.com/azure/' },
      ],
    },
  ]

  return (
    <div>
      <Header />
      <main>
        <Section className="pb-10 pt-10 md:pt-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="eyebrow text-[10px] text-[var(--muted)]">Referências</p>
              <h1 className="balanced-title mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-[var(--foreground)] md:text-6xl">
                Documentação séria para embasar arquitetura, operação e decisão técnica.
              </h1>
            </div>
            <Card className="rounded-[2rem] p-6 md:p-7">
              <p className="text-sm leading-7 text-[var(--muted)]">
                Esta curadoria reúne bases de referência usadas com frequência em desenho de plataforma,
                confiabilidade, infraestrutura como código e operação em cloud.
              </p>
            </Card>
          </div>
        </Section>
        <Section className="pt-0">
          <DocLinkList sections={sections} />
        </Section>
      </main>
      <Footer />
    </div>
  )
}
