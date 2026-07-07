import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card, Section } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SuiteCred — Overview interno',
  description:
    'Histórico interno da SuiteCred com arquitetura AWS, segurança, Terraform, backups e Amazon SES.',
  keywords: ['SuiteCred', 'AWS', 'Terraform', 'Amazon SES', 'SRE', 'Cloud', 'Segurança'],
  openGraph: {
    title: 'SuiteCred — Overview interno',
    description:
      'Histórico interno da SuiteCred com arquitetura AWS, segurança, Terraform, backups e Amazon SES.',
  },
  twitter: {
    title: 'SuiteCred — Overview interno',
    description:
      'Histórico interno da SuiteCred com arquitetura AWS, segurança, Terraform, backups e Amazon SES.',
  },
  robots: {
    index: false,
    follow: false,
  },
}

const timeline = [
  {
    date: '30/05/2025',
    title: 'Estruturação do repositório',
    description: 'O repositório foi limpo, organizado e preparado para evolução segura da plataforma.',
    activities: [
      'Git organizado.',
      '.gitignore corrigido.',
      'Arquivos grandes e .terraform removidos do versionamento.',
    ],
    status: 'Base limpa e pronta para evoluir.',
    nextStep: 'Manter o repositório simples e bem documentado.',
  },
  {
    date: '2025',
    title: 'Arquitetura AWS',
    description: 'Definimos a base cloud da SuiteCred com separação de ambientes e serviços essenciais.',
    activities: [
      'Ambientes Development, Staging e Production planejados.',
      'VPC, Subnets, Security Groups, IAM, Route53, S3, EC2, RDS e CloudWatch mapeados.',
      'Backup e disaster recovery entraram no desenho.',
    ],
    status: 'Arquitetura base definida.',
    nextStep: 'Manter o desenho versionado e fácil de consultar.',
  },
  {
    date: '2025',
    title: 'Terraform e padronização',
    description: 'A infraestrutura foi pensada como código para ser reproduzível e auditável.',
    activities: [
      'Terraform definido como base de provisionamento.',
      'Separação por ambiente planejada.',
      'Módulos, variáveis e estados entraram no padrão técnico.',
    ],
    status: 'IaC definida como prática central.',
    nextStep: 'Completar módulos e convenções por ambiente.',
  },
  {
    date: '2025',
    title: 'Segurança e acessos',
    description: 'Acesso, chaves, permissões e segregação foram tratados como parte da arquitetura.',
    activities: [
      'IAM e permissões planejados.',
      'SSH e keypairs revisados.',
      'Segregação de ambientes definida.',
      'Boas práticas de segurança incorporadas.',
    ],
    status: 'Segurança tratada desde a base.',
    nextStep: 'Aplicar acesso mínimo por ambiente.',
  },
  {
    date: '2025',
    title: 'Arquitetura de serviços',
    description: 'Organizamos a visão de microsserviços, APIs, integrações, segurança e autenticação.',
    activities: [
      'Desenho de serviços e integrações trabalhado.',
      'Padrões de documentação técnica definidos.',
      'Responsabilidades entre times começaram a ser formalizadas.',
    ],
    status: 'Base arquitetural organizada.',
    nextStep: 'Transformar decisões em documentação operacional simples.',
  },
  {
    date: '12/12/2025',
    title: 'Ajustes de SSH e keypair',
    description: 'O acesso SSH foi corrigido para a operação não travar por chave mal configurada.',
    activities: [
      'Permissões da chave corrigidas.',
      'Keypair ajustada.',
      'Acesso operacional revisado.',
    ],
    status: 'Acesso SSH funcionando.',
    nextStep: 'Documentar como acessar e cuidar das chaves.',
  },
  {
    date: '27/05/2026',
    title: 'Validação dos backups AWS',
    description: 'Os backups da Plataforma e da API foram conferidos na AWS.',
    activities: [
      'Planos de backup conferidos.',
      'Jobs validados.',
      'Backups da Plataforma e da API confirmados.',
    ],
    status: 'Backups executando corretamente.',
    nextStep: 'Criar rotina de revisão e teste de restauração.',
  },
  {
    date: '2026',
    title: 'Amazon SES - fase 1',
    description: 'Provisionamos o Amazon SES para o domínio da SuiteCred e tiramos o envio do campo improvisado.',
    activities: [
      'Conta AWS dedicada e SES configurados.',
      'Solicitação de saída do Sandbox conduzida.',
      'SMTP, SPF, DKIM, DMARC e DNS configurados.',
      'Testes de envio e documentação técnica realizados.',
    ],
    status: 'Projeto SES virou um dos principais blocos de infraestrutura.',
    nextStep: 'Manter documentação, limites, reputação e evidências de envio atualizados.',
  },
  {
    date: '2026',
    title: 'Amazon SES - expansão',
    description: 'O SES evoluiu para suportar múltiplos domínios com processo mais padronizado.',
    activities: [
      'Planejamento para aproximadamente 6 domínios.',
      'Isolamento de identidades por domínio.',
      'Automação via Terraform prevista.',
      'Onboarding de novos domínios padronizado.',
    ],
    status: 'Expansão planejada para reduzir dependência manual do time SRE.',
    nextStep: 'Fechar checklist de solicitação e esteira de provisionamento.',
  },
]

const principles = [
  'Mudar pouco por vez.',
  'Não quebrar o que já funciona.',
  'Documentar decisão importante.',
  'Automatizar o que for repetitivo.',
  'Manter código simples.',
]

const nextSteps = [
  'Criar PROJECT_CONTEXT.md.',
  'Documentar o processo completo de solicitação SES.',
  'Revisar ambientes dev, homologação e produção.',
  'Mapear backlog técnico e de produto.',
]

const sesProjects = [
  {
    title: 'Fase 1 - domínio SuiteCred',
    items: [
      'Conta AWS dedicada criada.',
      'Amazon SES configurado.',
      'Saída do Sandbox solicitada.',
      'SMTP, SPF, DKIM, DMARC e DNS configurados.',
      'Testes de envio e documentação técnica realizados.',
    ],
  },
  {
    title: 'Expansão multi-domínio',
    items: [
      'Planejamento para cerca de 6 domínios.',
      'Identidades isoladas por domínio.',
      'Automação via Terraform prevista.',
      'Onboarding de novos domínios padronizado.',
    ],
  },
  {
    title: 'Solicitação padrão',
    items: [
      'Domínio, ambiente e aplicação informados no card.',
      'Remetente, finalidade e volume esperado definidos.',
      'Responsáveis e uso de SMTP ou SDK documentados.',
      'Responsável pelo DNS identificado antes do provisionamento.',
    ],
  },
  {
    title: 'Operação e entregabilidade',
    items: [
      'Bounce, complaint e rejeição acompanhados.',
      'Reputação e limites de envio entram no monitoramento.',
      'Evidências de envio ficam disponíveis para investigação.',
      'Runbook para falha de envio precisa ficar formalizado.',
    ],
  },
]

const backlogRoadmap = [
  {
    quarter: 'Q3 2026',
    focus: 'Base SRE',
    items: [
      'Definir SLOs: disponibilidade, erro e tempo de resposta.',
      'Revisar métricas e alertas críticos.',
      'Fechar documentação do processo SES.',
      'Testar restauração de backup.',
    ],
  },
  {
    quarter: 'Q4 2026',
    focus: 'Datas fortes e clientes',
    items: [
      'Preparar operação para Black Friday, Natal e fechamento do ano.',
      'Criar plano de comunicação para clientes em incidentes.',
      'Simular aumento de requests antes de datas especiais.',
      'Revisar limites e reputação do AWS SES antes de datas especiais.',
      'Revisar capacidade de banco, API e servidores.',
    ],
  },
  {
    quarter: 'Q1 2027',
    focus: 'Governança operacional',
    items: [
      'Revisar incidentes de 2026 e corrigir causas reais.',
      'Melhorar runbooks de suporte e operação.',
      'Criar runbook para falha de envio de e-mail.',
      'Criar rotina mensal de patch, backup e permissões.',
      'Reduzir alertas falsos e ruído operacional.',
    ],
  },
  {
    quarter: 'Q2 2027',
    focus: 'Escala',
    items: [
      'Planejar crescimento do número de requests.',
      'Fazer teste de carga da API e da Plataforma.',
      'Ajustar banco, cache e filas se o volume crescer.',
      'Definir gatilhos claros para escalar infraestrutura e workloads.',
    ],
  },
  {
    quarter: 'Q3 2027',
    focus: 'Evolução da plataforma',
    items: [
      'Mapear melhorias de produto com impacto no cliente.',
      'Melhorar jornada de avisos, status e suporte.',
      'Criar backlog de performance por tela e endpoint.',
      'Revisar custo AWS e eliminar desperdício.',
    ],
  },
  {
    quarter: 'Q4 2027',
    focus: 'Maturidade',
    items: [
      'Preparar novamente Black Friday, Natal e virada de ano.',
      'Revisar plano de continuidade e desastre.',
      'Executar teste completo de recuperação.',
      'Fechar plano técnico de 2028 com base em dados reais.',
    ],
  },
]

const maturityMatrix = [
  {
    area: 'AWS base',
    level: 4,
    adherence: 80,
    status: 'Bom',
    note: 'Arquitetura e serviços principais foram definidos.',
  },
  {
    area: 'Terraform',
    level: 4,
    adherence: 80,
    status: 'Bom',
    note: 'IaC foi definida como padrão. Falta fechar módulos e convenções.',
  },
  {
    area: 'Amazon SES',
    level: 4,
    adherence: 80,
    status: 'Bom',
    note: 'Projeto principal executado. Expansão multi-domínio precisa virar processo fixo.',
  },
  {
    area: 'Segurança',
    level: 3,
    adherence: 60,
    status: 'Médio',
    note: 'Base definida. Falta revisar acesso mínimo por ambiente.',
  },
  {
    area: 'Documentação',
    level: 4,
    adherence: 80,
    status: 'Bom',
    note: 'Vários documentos foram produzidos. Falta centralizar o contexto final.',
  },
  {
    area: 'Operação',
    level: 3,
    adherence: 60,
    status: 'Médio',
    note: 'Runbooks, calendário operacional e rotina de revisão precisam fechar.',
  },
  {
    area: 'Escala',
    level: 2,
    adherence: 40,
    status: 'Atenção',
    note: 'Precisa testar carga e definir limites de crescimento.',
  },
  {
    area: 'Disaster recovery',
    level: 2,
    adherence: 40,
    status: 'Atenção',
    note: 'Backup foi planejado e validado. Falta teste recorrente de recuperação.',
  },
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

function MaturityDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1.5" aria-label={`Nível ${level} de 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`h-2.5 w-2.5 rounded-full ${
            index < level ? 'bg-[var(--accent)]' : 'bg-[rgba(18,18,18,0.1)]'
          }`}
        />
      ))}
    </div>
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
                SuiteCred: base cloud, SRE e Amazon SES.
              </h1>
              <p className="muted-copy mt-6 max-w-2xl text-base leading-8">
                Histórico direto do trabalho como Staff SRE / Cloud Architect: infraestrutura,
                segurança, automação e e-mail transacional.
              </p>
            </div>
            <Card className="rounded-[2rem] p-6 md:p-7">
              <p className="eyebrow text-[10px] text-[var(--muted)]">Resumo</p>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                {timeline.length} registros
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                O Amazon SES foi um dos principais projetos de infraestrutura realizados.
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
                Regras simples.
              </h2>
              <div className="mt-6">
                <BulletList items={principles} />
              </div>
            </Card>
            <Card className="rounded-[2rem] p-6 md:p-8">
              <p className="eyebrow text-[10px] text-[var(--muted)]">Próximos passos sugeridos</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                O que fazer agora.
              </h2>
              <div className="mt-6">
                <BulletList items={nextSteps} />
              </div>
            </Card>
          </div>
        </Section>

        <Section className="pt-0">
          <div>
            <p className="eyebrow text-[10px] text-[var(--muted)]">Projetos SES</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)] md:text-4xl">
              Amazon SES foi projeto principal.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              O trabalho saiu de um domínio inicial e evoluiu para um modelo multi-domínio,
              com solicitação padronizada e execução pelo time SRE.
            </p>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {sesProjects.map((project) => (
                <Card key={project.title} className="rounded-[2rem] p-6 md:p-8">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  <div className="mt-5">
                    <BulletList items={project.items} />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section className="pt-0">
          <div>
            <p className="eyebrow text-[10px] text-[var(--muted)]">Matriz de maturidade</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)] md:text-4xl">
              Aderência SRE/TI da plataforma.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Leitura rápida: o que está bom, o que está no meio e o que precisa de atenção.
            </p>
            <div className="mt-8 grid gap-4">
              {maturityMatrix.map((item) => (
                <Card key={item.area} className="rounded-[2rem] p-5 md:p-6">
                  <div className="grid gap-5 md:grid-cols-[0.8fr_0.7fr_1fr] md:items-center">
                    <div>
                      <p className="text-lg font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                        {item.area}
                      </p>
                      <p className="mt-2 text-sm text-[var(--muted)]">{item.status}</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <MaturityDots level={item.level} />
                        <span className="text-sm font-semibold text-[var(--foreground)]">{item.adherence}%</span>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-[rgba(18,18,18,0.08)]">
                        <div
                          className="h-full rounded-full bg-[var(--accent)]"
                          style={{ width: `${item.adherence}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-sm leading-7 text-[var(--muted)]">{item.note}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section className="pt-0">
          <div>
            <p className="eyebrow text-[10px] text-[var(--muted)]">Backlog sugerido</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)] md:text-4xl">
              Próximos quarters: 2026 e 2027.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Propostas para manter a plataforma estável, preparada para crescer e simples de operar.
            </p>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {backlogRoadmap.map((period) => (
                <Card key={period.quarter} className="rounded-[2rem] p-6 md:p-8">
                  <p className="eyebrow text-[10px] text-[var(--muted)]">{period.quarter}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                    {period.focus}
                  </h3>
                  <div className="mt-5">
                    <BulletList items={period.items} />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
