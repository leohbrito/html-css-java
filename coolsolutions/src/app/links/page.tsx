import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Section } from '@/components/ui'
import { DocLinkList } from '@/components/DocLinkList'

export const metadata = { title: 'Links & Documentações' }

export default function LinksPage() {
  const sections = [
    {
      title: 'SRE',
      items: [
        { label: 'Google SRE Book', href: 'https://sre.google/books/' },
        { label: 'SRE Workbook', href: 'https://sre.google/workbook/' },
      ],
    },
    {
      title: 'Kubernetes / EKS',
      items: [
        { label: 'Kubernetes Docs', href: 'https://kubernetes.io/docs/' },
        { label: 'EKS', href: 'https://docs.aws.amazon.com/eks/' },
        { label: 'Istio', href: 'https://istio.io/latest/docs/' },
        { label: 'Velero', href: 'https://velero.io/docs/' },
      ],
    },
    {
      title: 'Terraform',
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
      title: 'Cloud',
      items: [
        { label: 'AWS Docs', href: 'https://docs.aws.amazon.com/' },
        { label: 'GCP Docs', href: 'https://cloud.google.com/docs' },
        { label: 'Azure Docs', href: 'https://learn.microsoft.com/azure/' },
      ],
    },
  ]

  return (
    <div>
      <Header />
      <main>
        <Section>
          <h1 className="text-3xl font-semibold text-neutral-900 mb-6">Links & Documentações</h1>
          <DocLinkList sections={sections} />
        </Section>
      </main>
      <Footer />
    </div>
  )
}
