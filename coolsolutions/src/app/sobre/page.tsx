import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Section, Card } from '@/components/ui'

export const metadata = { title: 'Sobre' }

export default function SobrePage() {
  return (
    <div>
      <Header />
      <main>
        <Section>
          <h1 className="text-3xl font-semibold text-neutral-900 mb-6">Sobre — Nossa História</h1>
          <div className="prose max-w-none text-neutral-700">
            <p>Com 12 anos de atuação, a CoolSolutions entrega projetos sob medida em Cloud Computing, Kubernetes, DevOps e Infraestrutura como Código. Planejamos, implementamos e operamos ambientes robustos, escaláveis e seguros para empresas que exigem alta disponibilidade.</p>
          </div>
        </Section>
        <Section>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h2 className="font-semibold text-neutral-900 mb-2">Nossa Missão</h2>
              <p className="text-neutral-700">Transformar a infraestrutura de TI dos clientes com soluções em nuvem que entregam agilidade, segurança e redução de custos.</p>
            </Card>
            <Card className="p-6 md:col-span-2">
              <h2 className="font-semibold text-neutral-900 mb-2">Nossos Valores</h2>
              <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                <li>Excelência Técnica — melhores práticas e padrões de mercado.</li>
                <li>Inovação — tecnologia a favor do negócio.</li>
                <li>Compromisso — foco em resultados.</li>
                <li>Transparência — comunicação clara e honesta.</li>
                <li>Colaboração — trabalho em parceria, de ponta a ponta.</li>
              </ul>
            </Card>
          </div>
        </Section>
        <Section>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Nossa Especialização</h3>
              <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                <li>AWS — líder global de nuvem.</li>
                <li>Google Cloud (GCP) — IA/ML e dados em escala.</li>
                <li>Microsoft Azure — soluções híbridas e integração Microsoft.</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Nossas Competências</h3>
              <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                <li>DevOps & CI/CD — automação ponta a ponta.</li>
                <li>Kubernetes — orquestração de contêineres e microsserviços.</li>
                <li>Infra como Código — Terraform, CloudFormation, ARM.</li>
                <li>Observabilidade — métricas, logs e tracing.</li>
                <li>Segurança — boas práticas e hardening.</li>
                <li>Migração para Nuvem — estratégia e execução.</li>
              </ul>
            </Card>
          </div>
        </Section>
        <Section>
          <Card className="p-6">
            <h3 className="font-semibold text-neutral-900 mb-2">Por que escolher a CoolSolutions?</h3>
            <ul className="list-disc pl-5 text-neutral-700 space-y-1">
              <li>Experiência Comprovada — 12 anos e centenas de entregas.</li>
              <li>Certificações — equipe com selos oficiais.</li>
              <li>Suporte 24×7 — disponibilidade real.</li>
              <li>Metodologia Ágil — entregas incrementais.</li>
              <li>Parcerias Estratégicas — AWS, Google e Microsoft.</li>
            </ul>
            <p className="text-neutral-600 mt-4 text-sm">Disclaimer<br/>Cada projeto tem particularidades que impactam resultados. As soluções são personalizadas considerando infraestrutura, escopo e objetivos. Reforçamos nosso compromisso com transparência, qualidade e boas práticas.</p>
          </Card>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
