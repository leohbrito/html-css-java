import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card, Section } from '@/components/ui'

export const metadata = {
  title: 'SuiteCred — Overview interno',
  robots: {
    index: false,
    follow: false,
  },
}

const timeline = [
  {
    date: '30/05/2025',
    title: 'Estruturação do repositório',
    description:
      'Organização do repositório principal para permitir evolução colaborativa, versionamento saudável e publicação do projeto.',
    activities: [
      'Organização do Git e correção do .gitignore.',
      'Remoção da pasta .terraform do versionamento.',
      'Limpeza do histórico com BFG Repo Cleaner.',
      'Correção de arquivos que excediam o limite do GitHub.',
      'Preparação do repositório para publicação.',
    ],
    status: 'Base técnica reorganizada para continuidade do desenvolvimento.',
    nextStep: 'Manter regras de versionamento e documentar convenções do repositório.',
  },
  {
    date: '2025',
    title: 'Planejamento da arquitetura AWS',
    description:
      'Definição dos conceitos principais de arquitetura cloud para sustentar escalabilidade, segurança e separação de ambientes.',
    activities: [
      'Discussão de arquitetura baseada em AWS.',
      'Definição de infraestrutura como código como diretriz.',
      'Planejamento dos ambientes development, homologação e produção.',
      'Levantamento de requisitos de escalabilidade, segurança e baixo custo operacional.',
    ],
    status: 'Direção arquitetural estabelecida.',
    nextStep: 'Consolidar as decisões em um documento de arquitetura versionado.',
  },
  {
    date: '2025',
    title: 'Infraestrutura AWS',
    description:
      'Mapeamento dos serviços AWS necessários para compor a base de rede, computação, dados, DNS, observabilidade e backup.',
    activities: [
      'Planejamento de VPC, EC2, RDS, S3, IAM, Route53 e Security Groups.',
      'Discussão de CloudWatch para monitoramento.',
      'Inclusão de AWS Backup na estratégia operacional.',
      'Avaliação de alta disponibilidade, segurança, escalabilidade e custo.',
    ],
    status: 'Componentes principais identificados.',
    nextStep: 'Transformar o desenho em módulos Terraform por ambiente.',
  },
  {
    date: '2025',
    title: 'Planejamento Terraform',
    description:
      'Definição do Terraform como base para provisionar infraestrutura versionada, reproduzível e independente por ambiente.',
    activities: [
      'Planejamento de infraestrutura versionada.',
      'Separação lógica entre ambientes.',
      'Discussão de reprodutibilidade.',
      'Preparação para reduzir configurações manuais.',
    ],
    status: 'IaC definida como prática central do projeto.',
    nextStep: 'Padronizar estrutura de módulos, variáveis, estados e convenções.',
  },
  {
    date: '2025',
    title: 'Segurança e controle de acesso',
    description:
      'Discussão das camadas de segurança para acesso, chaves, segregação de ambientes, backup e boas práticas de produção.',
    activities: [
      'Planejamento de IAM e controle de acesso.',
      'Discussão de SSH, gerenciamento de chaves e keypairs.',
      'Separação entre ambientes.',
      'Boas práticas para produção e rotina de backup.',
    ],
    status: 'Princípios de segurança definidos para guiar a implementação.',
    nextStep: 'Formalizar políticas de acesso mínimo e revisar permissões por ambiente.',
  },
  {
    date: '2025',
    title: 'Organização modular do projeto',
    description:
      'Discussão de uma estrutura modular para facilitar manutenção, separar responsabilidades e permitir crescimento controlado.',
    activities: [
      'Separação entre infraestrutura e aplicação.',
      'Organização por módulos.',
      'Definição de princípios para escalabilidade e manutenção.',
      'Alinhamento para manter código limpo e modular.',
    ],
    status: 'Modelo modular definido como referência.',
    nextStep: 'Registrar padrões de pastas, nomes e responsabilidades no contexto do projeto.',
  },
  {
    date: '2025',
    title: 'Documentação técnica',
    description:
      'Início da documentação de arquitetura, infraestrutura, processos e decisões técnicas para preservar continuidade.',
    activities: [
      'Registro de arquitetura e infraestrutura.',
      'Organização de processos.',
      'Documentação de decisões técnicas.',
      'Definição de documentação como prática contínua.',
    ],
    status: 'Documentação técnica iniciada.',
    nextStep: 'Criar um PROJECT_CONTEXT.md completo para orientar próximas sessões e implementações.',
  },
  {
    date: '12/12/2025',
    title: 'Ajustes de SSH e keypair',
    description:
      'Correção de acesso SSH relacionado a permissões da chave e keypair utilizada pela infraestrutura.',
    activities: [
      'Correção das permissões da chave SSH.',
      'Ajuste da keypair utilizada na infraestrutura.',
      'Revisão do acesso necessário para operação.',
    ],
    status: 'Acesso SSH ajustado.',
    nextStep: 'Documentar procedimento de acesso e cuidados com chaves.',
  },
  {
    date: '27/05/2026',
    title: 'Validação dos backups AWS',
    description:
      'Conferência do ambiente AWS para validar planos, jobs e execução dos backups da Plataforma e da API.',
    activities: [
      'Conferência dos planos de backup.',
      'Validação dos jobs.',
      'Verificação da execução.',
      'Confirmação dos backups da Plataforma.',
      'Confirmação dos backups da API.',
    ],
    status: 'Todos os backups executando corretamente.',
    nextStep: 'Definir rotina periódica de revisão, restauração de teste e evidências.',
  },
]

const principles = [
  'Preservar a arquitetura existente.',
  'Evitar quebrar compatibilidade.',
  'Documentar mudanças importantes.',
  'Sugerir melhorias quando houver oportunidade clara.',
  'Manter código limpo e modular.',
  'Explicar impactos técnicos antes de alterações estruturais.',
]

const nextSteps = [
  'Criar um PROJECT_CONTEXT.md completo para a SuiteCred.',
  'Consolidar decisões arquiteturais e regras de negócio.',
  'Mapear backlog técnico e backlog de produto.',
  'Revisar plano dos ambientes dev, homologação e produção.',
]

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-7 text-[var(--muted)]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function SecretPage() {
  return (
    <div>
      <Header />
      <main>
        <Section className="pb-10 pt-10 md:pt-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="eyebrow text-[10px] text-[var(--muted)]">Área interna / SuiteCred</p>
              <h1 className="balanced-title mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-[var(--foreground)] md:text-6xl">
                Histórico de trabalho, decisões técnicas e próximos passos.
              </h1>
              <p className="muted-copy mt-6 max-w-2xl text-base leading-8">
                Overview oculto por URL para manter continuidade sobre arquitetura, infraestrutura,
                segurança e evolução da SuiteCred.
              </p>
            </div>
            <Card className="rounded-[2rem] p-6 md:p-7">
              <p className="eyebrow text-[10px] text-[var(--muted)]">Resumo</p>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                {timeline.length} registros
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Conteúdo inicial reconstruído a partir do contexto disponível. Datas com apenas o ano
                representam períodos aproximados.
              </p>
            </Card>
          </div>
        </Section>

        <Section className="pt-0">
          <div className="space-y-5">
            {timeline.map((item) => (
              <Card key={`${item.date}-${item.title}`} className="rounded-[2rem] p-6 md:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.24fr_1fr]">
                  <div>
                    <p className="eyebrow text-[10px] text-[var(--muted)]">Data</p>
                    <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                      {item.date}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                      <div>
                        <p className="eyebrow mb-3 text-[10px] text-[var(--muted)]">Atividades</p>
                        <BulletList items={item.activities} />
                      </div>
                      <div className="rounded-[1.5rem] border border-[rgba(18,18,18,0.08)] bg-[rgba(255,255,255,0.54)] p-5">
                        <p className="eyebrow text-[10px] text-[var(--muted)]">Status</p>
                        <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">{item.status}</p>
                        <p className="eyebrow mt-5 text-[10px] text-[var(--muted)]">Próximo passo</p>
                        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.nextStep}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="pt-0">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-[2rem] p-6 md:p-8">
              <p className="eyebrow text-[10px] text-[var(--muted)]">Continuidade</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                Princípios para novas alterações.
              </h2>
              <div className="mt-6">
                <BulletList items={principles} />
              </div>
            </Card>
            <Card className="rounded-[2rem] p-6 md:p-8">
              <p className="eyebrow text-[10px] text-[var(--muted)]">Próximos passos sugeridos</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                Base para retomar SuiteCred com menos perda de contexto.
              </h2>
              <div className="mt-6">
                <BulletList items={nextSteps} />
              </div>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
