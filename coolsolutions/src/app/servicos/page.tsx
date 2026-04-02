import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Section, Card } from '@/components/ui'

export const metadata = { title: 'Serviços' }

const SectionBlock = ({ title, items }: { title: string; items: string[] }) => (
  <Card className="p-6">
    <h3 className="font-semibold text-neutral-900 mb-2" id={title.toLowerCase().replace(/\s+/g,'-')}>{title}</h3>
    <ul className="list-disc pl-5 text-neutral-700 space-y-1">
      {items.map((i) => (<li key={i}>{i}</li>))}
    </ul>
  </Card>
)

export default function ServicosPage() {
  return (
    <div>
      <Header />
      <main>
        <Section>
          <h1 className="text-3xl font-semibold text-neutral-900 mb-6">Serviços</h1>
          <nav aria-label="Âncoras" className="flex flex-wrap gap-3 mb-6 text-sm">
            {['AWS','GCP','Azure','DevOps & IaC','Kubernetes','Pipelines CI/CD','Observabilidade'].map((a) => (
              <a key={a} href={`#${a.toLowerCase().replace(/\s+|\//g,'-')}`} className="px-3 py-1 rounded-full bg-primary-50 text-neutral-900 border border-neutral-200">{a}</a>
            ))}
          </nav>
          <div className="grid md:grid-cols-2 gap-6">
            <SectionBlock title="AWS" items={[
              'IaaS: EC2, VPC, ELB, Auto Scaling',
              'Armazenamento: S3, EBS, Glacier, Storage Gateway',
              'Bancos: RDS, DynamoDB, ElastiCache, Redshift',
              'Serverless: Lambda, API Gateway, Step Functions',
              'Contêineres: ECS, EKS, Fargate',
              'Segurança: IAM, KMS, CloudTrail, GuardDuty',
              'Monitoramento: CloudWatch, X-Ray, CloudFormation',
              'Consultoria: migração, otimização de custos, arquitetura escalável e suporte 24×7.'
            ]} />
            <SectionBlock title="Google Cloud (GCP)" items={[
              'Compute: Compute Engine, App Engine, Cloud Run, Cloud Functions',
              'IA/ML: Vertex AI/AI Platform, AutoML, Vision API, Speech-to-Text',
              'Big Data: BigQuery, Dataflow, Pub/Sub, Dataproc',
              'Contêineres: GKE, Cloud Build',
              'Armazenamento: Cloud Storage, Cloud SQL, Firestore',
              'Networking: Cloud LB, Cloud CDN, Cloud Armor',
              'DevOps: Cloud Build, Cloud Deploy, Artifact Registry',
              'Entregas: ML, dados em tempo real e arquiteturas serverless.'
            ]} />
            <SectionBlock title="Microsoft Azure" items={[
              'Compute: VMs, App Service, Functions, Container Instances',
              'Bancos: SQL Database, Cosmos DB, Redis, Synapse',
              'IA: Cognitive Services, ML, Bot Service',
              'Contêineres: AKS, ACR',
              'Integração: Logic Apps, API Management, Service Bus',
              'Segurança: Azure AD, Key Vault, Security Center',
              'Monitoramento: Application Insights, Log Analytics, Monitor',
              'Especialidades: soluções híbridas, migração legada e integração AD/Office 365.'
            ]} />
            <SectionBlock title="DevOps & IaC" items={[
              'CI: Jenkins, GitLab CI, GitHub Actions, Azure DevOps',
              'CD: ArgoCD, Flux, Spinnaker, Tekton',
              'IaC: Terraform, CloudFormation, ARM, Deployment Manager',
              'Configuração: Ansible, Chef, Puppet, Salt',
              'Observabilidade: Prometheus, Grafana, ELK, Datadog',
              'Segurança: OPA, Falco, Trivy, Snyk'
            ]} />
            <SectionBlock title="Kubernetes" items={[
              'Instalação/Configuração (gerenciado e self-hosted)',
              'Migração de VMs para contêineres',
              'Operações: backup, upgrades, troubleshooting',
              'Segurança: RBAC, Network Policies, PSS',
              'Observabilidade: Prometheus, Grafana, Jaeger',
              'CI/CD: ArgoCD, Flux, Tekton'
            ]} />
            <SectionBlock title="Pipelines CI/CD" items={[
              'Build: compilação, testes unitários e integração',
              'Quality Gates: análise estática, SAST/DAST, cobertura',
              'Deploy: blue-green, canary, rolling',
              'Rollback automático',
              'Multi-Cloud: AWS, GCP e Azure'
            ]} />
            <SectionBlock title="Observabilidade" items={[
              'Métricas, logs e tracing distribuído',
              'Alertas e escalonamento inteligentes',
              'Dashboards por stakeholder',
              'Integrações: Slack, Teams, PagerDuty, e-mail'
            ]} />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
