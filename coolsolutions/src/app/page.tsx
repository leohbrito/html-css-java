import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTAButton } from '@/components/CTAButton'
import { Section, Card, KPI, FadeIn, LogoCloud } from '@/components/ui'
import { BreadcrumbsJsonLd } from './structured-data'

export const metadata = {
  title: 'Cloud, Kubernetes, DevOps',
}

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <BreadcrumbsJsonLd />
        <Section className="pt-12 pb-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-semibold text-neutral-900">
                Cloud, Kubernetes, DevOps — sob medida para o seu negócio
              </h1>
              <p className="mt-4 text-neutral-600 max-w-prose">
                Ambientes robustos, escaláveis e seguros. Planejamento, implementação e operação com foco em disponibilidade e resultados.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <CTAButton href="/contato">Falar com Especialista</CTAButton>
                <Link href="/servicos" className="text-neutral-900 underline underline-offset-4">Ver serviços</Link>
              </div>
            </div>
            <FadeIn>
              <Card className="p-8">
                <p className="text-neutral-900 font-semibold mb-3">Parceiros</p>
                <LogoCloud logos={[
                  { src: '/logos/abu-consultoria-gray.svg', alt: 'Abu Consultoria' },
                  { src: '/logos/alelo-gray.svg', alt: 'Alelo' },
                  { src: '/logos/suitecred-gray.svg', alt: 'SuiteCred.io' },
                  { src: '/logos/ingresse-gray.svg', alt: 'Ingresse.com' },
                  { src: '/logos/garage-im-gray.svg', alt: 'Garagem.im' },
                ]} />
              </Card>
            </FadeIn>
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Por que a CoolSolutions?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Experiência Comprovada — 12 anos e centenas de entregas.',
              'Certificações — equipe com selos oficiais.',
              'Suporte 24×7 — disponibilidade real.',
              'Metodologia Ágil — entregas incrementais.',
              'Parcerias Estratégicas — AWS, Google e Microsoft.',
            ].slice(0,4).map((text,i) => (
              <FadeIn key={text} delay={i*0.05}><Card className="p-6"><p className="text-neutral-900">{text}</p></Card></FadeIn>
            ))}
          </div>
        </Section>

        <Section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-neutral-900">Serviços</h2>
            <Link href="/servicos" className="text-primary hover:text-primary-600">Ver todos</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['AWS','GCP','Azure','DevOps & IaC','Kubernetes','Pipelines CI/CD','Observabilidade'].slice(0,6).map((service) => (
              <Card key={service} className="p-6 hover:shadow-md transition-shadow">
                <p className="font-semibold text-neutral-900">{service}</p>
                <Link href="/servicos" className="text-sm text-primary underline underline-offset-4 mt-2 inline-block">Saiba mais</Link>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <KPI value="12+" label="anos de atuação" />
            <KPI value="24×7" label="suporte" />
            <KPI value="100+" label="projetos entregues" />
            <KPI value=">99,9%" label="SLAs de disponibilidade" />
          </div>
        </Section>

        <Section className="pt-0">
          <Card className="p-8 text-center">
            <h3 className="text-xl font-semibold text-neutral-900">Pronto para acelerar sua jornada em nuvem?</h3>
            <p className="text-neutral-600 mt-2">Fale com nosso time especialista.</p>
            <div className="mt-4"><CTAButton href="/contato">Falar com Especialista</CTAButton></div>
          </Card>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
