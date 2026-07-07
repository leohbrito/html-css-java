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
    description: 'O repositório foi limpo e preparado para continuar o projeto sem sujeira no histórico.',
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
    title: 'Planejamento da arquitetura AWS',
    description: 'A direção técnica da AWS foi definida antes de sair criando recurso sem critério.',
    activities: [
      'Arquitetura AWS definida.',
      'Infraestrutura como código escolhida.',
      'Ambientes dev, homologação e produção planejados.',
    ],
    status: 'Caminho técnico definido.',
    nextStep: 'Registrar as decisões principais em um documento curto.',
  },
  {
    date: '2025',
    title: 'Infraestrutura AWS',
    description: 'Foram escolhidos os serviços AWS necessários para a base do projeto.',
    activities: [
      'VPC, EC2, RDS, S3, IAM, Route53 e Security Groups mapeados.',
      'Monitoramento com CloudWatch previsto.',
      'Backups incluídos no desenho.',
    ],
    status: 'Peças principais mapeadas.',
    nextStep: 'Transformar o desenho em Terraform por ambiente.',
  },
  {
    date: '2025',
    title: 'Planejamento Terraform',
    description: 'Terraform foi escolhido para criar infraestrutura de forma repetível e controlada.',
    activities: [
      'Infraestrutura versionada planejada.',
      'Ambientes separados.',
      'Menos configuração manual.',
    ],
    status: 'IaC definida como padrão.',
    nextStep: 'Padronizar módulos, variáveis e estados.',
  },
  {
    date: '2025',
    title: 'Segurança e controle de acesso',
    description: 'Acesso, chaves e permissões foram tratados como parte central da infraestrutura.',
    activities: [
      'IAM e permissões planejados.',
      'SSH e keypairs revisados.',
      'Ambientes separados.',
    ],
    status: 'Segurança tratada desde a base.',
    nextStep: 'Aplicar acesso mínimo por ambiente.',
  },
  {
    date: '2025',
    title: 'Organização modular do projeto',
    description: 'O projeto foi pensado em partes menores para ficar mais fácil de manter.',
    activities: [
      'Infraestrutura separada da aplicação.',
      'Organização por módulos.',
      'Código pensado para crescer sem virar bagunça.',
    ],
    status: 'Estrutura modular definida.',
    nextStep: 'Registrar nomes, pastas e responsabilidades.',
  },
  {
    date: '2025',
    title: 'Documentação técnica',
    description: 'A documentação foi iniciada para ninguém depender de memória ou conversa antiga.',
    activities: [
      'Arquitetura registrada.',
      'Decisões técnicas anotadas.',
      'Contexto do projeto preservado.',
    ],
    status: 'Documentação iniciada.',
    nextStep: 'Criar um PROJECT_CONTEXT.md direto e completo.',
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
]

const principles = [
  'Mudar pouco por vez.',
  'Não quebrar o que já funciona.',
  'Documentar decisão importante.',
  'Manter código simples.',
]

const nextSteps = [
  'Criar PROJECT_CONTEXT.md.',
  'Fechar decisões de arquitetura.',
  'Mapear backlog técnico e de produto.',
  'Revisar ambientes dev, homologação e produção.',
]

const backlogRoadmap = [
  {
    quarter: 'Q3 2026',
    focus: 'Base operacional',
    items: [
      'Criar painel simples de saúde da plataforma.',
      'Definir SLOs: disponibilidade, erro e tempo de resposta.',
      'Revisar logs, métricas e alertas críticos.',
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
      'Revisar capacidade de banco, API e servidores.',
    ],
  },
  {
    quarter: 'Q1 2027',
    focus: 'Estabilidade',
    items: [
      'Revisar incidentes de 2026 e corrigir causas reais.',
      'Melhorar runbooks de suporte e operação.',
      'Criar rotina mensal de patch, backup e permissões.',
      'Reduzir alertas falsos e barulho operacional.',
    ],
  },
  {
    quarter: 'Q2 2027',
    focus: 'Escala',
    items: [
      'Planejar crescimento do número de requests.',
      'Fazer teste de carga da API e da Plataforma.',
      'Ajustar banco, cache e filas se o volume crescer.',
      'Definir limite claro para escalar infraestrutura.',
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
    area: 'Backups',
    level: 4,
    adherence: 80,
    status: 'Bom',
    note: 'Existe validação. Falta rotina fixa de restauração.',
  },
  {
    area: 'Segurança',
    level: 3,
    adherence: 60,
    status: 'Médio',
    note: 'Base definida. Falta revisar acesso mínimo por ambiente.',
  },
  {
    area: 'Observabilidade',
    level: 2,
    adherence: 40,
    status: 'Atenção',
    note: 'Precisa de painel, alertas úteis e SLOs simples.',
  },
  {
    area: 'Escala',
    level: 2,
    adherence: 40,
    status: 'Atenção',
    note: 'Precisa testar carga e definir limite de crescimento.',
  },
  {
    area: 'Documentação',
    level: 3,
    adherence: 60,
    status: 'Médio',
    note: 'Contexto iniciado. Falta PROJECT_CONTEXT.md completo.',
  },
  {
    area: 'Operação',
    level: 2,
    adherence: 40,
    status: 'Atenção',
    note: 'Faltam runbooks, calendário operacional e rotina de revisão.',
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
                SuiteCred: histórico simples do que importa.
              </h1>
              <p className="muted-copy mt-6 max-w-2xl text-base leading-8">
                O que foi feito, o estado atual e o próximo passo. Sem enfeite.
              </p>
            </div>
            <Card className="rounded-[2rem] p-6 md:p-7">
              <p className="eyebrow text-[10px] text-[var(--muted)]">Resumo</p>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                {timeline.length} registros
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Datas com apenas o ano são aproximadas.
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
