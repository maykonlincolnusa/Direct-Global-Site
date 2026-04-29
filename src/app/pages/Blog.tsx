import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Database,
  Github,
  Globe2,
  Radar,
  ShieldCheck,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projects = [
  {
    title: "Fraud Master Bank",
    label: "Fraude e risco em tempo real",
    icon: ShieldCheck,
    href: "https://github.com/maykonlincolnusa/Fraud-Master-Bank-FMB-system-anti-fraud",
    summary:
      "Plataforma de inteligência antifraude orientada a eventos, pensada para operações financeiras que precisam identificar anomalias antes do prejuízo.",
    businessImpact:
      "Para bancos, fintechs, marketplaces, operações de crédito ou qualquer empresa que aprove transações, pagamentos ou cadastros sob risco. A lógica aqui reduz perda, acelera triagem e melhora governança.",
    implementation:
      "Pode ser implementado com ingestão contínua de eventos, pipelines serverless, analytics em tempo real e modelos explicáveis de score. Isso conversa diretamente com arquiteturas de streaming e ML em AWS.",
    outcome:
      "O cliente entende que não está comprando um dashboard. Está comprando um sistema para detectar risco mais cedo, responder mais rápido e decidir com mais confiança.",
  },
  {
    title: "AXIOM",
    label: "IA multiagente para decisões complexas",
    icon: BrainCircuit,
    href: "https://github.com/maykonlincolnusa/AXIOM",
    summary:
      "Plataforma modular com agentes especializados em domínios diferentes, operando sob uma camada de raciocínio compartilhada.",
    businessImpact:
      "Serve para empresas que precisam transformar análise espalhada em sistema operacional inteligente: jurídico, financeiro, imobiliário, compliance, back-office ou suporte executivo.",
    implementation:
      "Pode ser implementado com agentes especialistas, roteamento por contexto, memória seletiva e orchestration patterns para distribuir subtarefas sem sobrecarregar um único modelo.",
    outcome:
      "O valor para o cliente não é 'ter IA'. É ganhar velocidade analítica, consistência de decisão e redução de dependência manual em rotinas caras.",
  },
  {
    title: "ArcaERP",
    label: "ERP e operação centralizada",
    icon: Building2,
    href: "https://github.com/maykonlincolnusa/ArcaERP",
    summary:
      "MVP de ERP para organizar clientes, processos e visão operacional em uma base central mais limpa e controlável.",
    businessImpact:
      "Faz sentido para empresas em crescimento, franquias, operações comerciais e negócios que já sentem atrito entre atendimento, financeiro, cadastro e execução.",
    implementation:
      "Pode evoluir para um núcleo transacional com permissão por papel, integrações com CRM e financeiro, workflows automatizados e camada analítica para operação multiunidade.",
    outcome:
      "O cliente enxerga claramente que sistema interno bem desenhado não é custo administrativo. É o que impede a empresa de crescer com desordem.",
  },
  {
    title: "Alerta Risco GPS",
    label: "Geointeligência e monitoramento territorial",
    icon: Globe2,
    href: "https://github.com/maykonlincolnusa/alerta_risco_gps",
    summary:
      "Sistema de monitoramento geoespacial com alertas contextuais, zonas de risco, consulta via chat e leitura operacional de deslocamento.",
    businessImpact:
      "Pode ser adaptado para segurança, logística, equipes de campo, delivery, operações urbanas, seguros, proteção patrimonial e mobilidade em áreas sensíveis.",
    implementation:
      "A implementação conversa com mapas interativos, geofencing, camadas georreferenciadas, histórico de alertas e experiência mobile-first para times que operam fora do escritório.",
    outcome:
      "Em vez de reagir depois do incidente, a empresa passa a antecipar exposição, orientar deslocamento e transformar território em dado acionável.",
  },
  {
    title: "Sovereign AI Security Platform",
    label: "Segurança aplicada a sistemas críticos",
    icon: Radar,
    href: "https://github.com/maykonlincolnusa",
    summary:
      "Conceito de plataforma soberana para detecção de intrusão, modelagem de ameaças e correlação forense com disciplina técnica mais madura.",
    businessImpact:
      "Importa para empresas que operam dados sensíveis, infraestrutura crítica, múltiplos acessos, ambientes distribuídos ou qualquer contexto em que incidente vira impacto financeiro e reputacional.",
    implementation:
      "Pode ser estruturado com Zero Trust, mapeamento de ameaças por MITRE ATT&CK, trilhas auditáveis, correlação de eventos e preparo para resposta a incidente com mais defensabilidade.",
    outcome:
      "O cliente percebe que segurança séria não é plugin. É arquitetura, processo e telemetria trabalhando juntos para reduzir superfície de risco.",
  },
  {
    title: "OpRisk Intelligence",
    label: "Leitura de falhas operacionais antes da perda",
    icon: Database,
    href: "https://github.com/maykonlincolnusa/Barings-Bank-collapse",
    summary:
      "Projeto orientado a risco operacional para reconstruir falhas de controle, comportamento anômalo e exposição estrutural em ambientes financeiros.",
    businessImpact:
      "Pode ser aplicado em instituições financeiras, auditoria interna, compliance, seguradoras e empresas que precisam identificar onde processos, pessoas e sistemas se tornam fonte de prejuízo.",
    implementation:
      "A lógica pode ser levada para bases de eventos, classificação de ocorrências, cenários de perda, indicadores preventivos e inteligência executiva para áreas de risco e controle.",
    outcome:
      "Não é apenas análise histórica. É uma forma de transformar erro operacional em sinal precoce para governança, prevenção e priorização executiva.",
  },
];

const referenceBlocks = [
  {
    title: "Streaming, dados e score em tempo real",
    desc:
      "Arquiteturas de fraude e risco ganham maturidade quando a empresa deixa de depender de lote e passa a capturar eventos continuamente, integrando ingestão, transformação, analytics e decisão.",
  },
  {
    title: "Zero Trust e segurança orientada a recurso",
    desc:
      "Em ambientes distribuídos, o foco deixa de ser a rede como perímetro e passa a ser o recurso, a identidade, o dispositivo e a sessão. Isso muda a qualidade da proteção.",
  },
  {
    title: "Orquestração multiagente com contexto certo",
    desc:
      "Projetos de IA ficam mais úteis quando agentes especializados recebem contexto delimitado, tarefas claras e uma camada de orquestração que evita ruído e improviso.",
  },
];

export function Blog() {
  return (
    <div className="min-h-screen bg-background px-4 pb-10 pt-28 text-foreground selection:bg-white/10 lg:px-6">
      <SEO
        title="Projetos Aplicados"
        description="Projetos já realizados, explicados pelo impacto que podem gerar em segurança, operação, IA, risco, integrações e escala para empresas de diferentes setores."
      />

      <section className="mx-auto max-w-7xl">
        <div className="hero-shell premium-shell px-6 py-10 lg:px-12 lg:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(130,80,255,0.16),transparent_34%),linear-gradient(180deg,rgba(10,6,20,0.16),rgba(7,3,11,0.9))]" />

          <div className="relative z-10 grid gap-10 xl:grid-cols-[1.06fr_0.94fr] xl:items-end">
            <motion.div initial="initial" animate="animate" variants={stagger} className="max-w-4xl">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/68"
              >
                <Github className="size-4" />
                <span>Projetos que mostram capacidade real</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-8 text-5xl font-medium tracking-[-0.06em] text-white md:text-7xl lg:text-[5.7rem]"
              >
                Projetos reais que podem virar vantagem operacional.
                <br />
                <span className="text-white/[0.44]">Cada entrega mostra o que pode ser aplicado na sua empresa.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-white/[0.68] md:text-xl">
                Esta página foi redesenhada para falar com decisores. Cada projeto abaixo mostra uma entrega já publicada
                e traduz o impacto disso para empresas que precisam reduzir risco, integrar operação, acelerar decisão
                e crescer com mais controle.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="h-14 px-8" asChild>
                  <Link to="/contato">
                    Quero diagnosticar meu cenário
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8" asChild>
                  <a href="https://github.com/maykonlincolnusa" target="_blank" rel="noopener noreferrer">
                    Ver projetos no GitHub
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4"
            >
              <div className="surface-panel-strong rounded-[2.5rem] p-6 lg:p-7">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/[0.4]">Como essa página deve ser lida</div>
                <div className="mt-6 grid gap-4">
                  {[
                    {
                      title: "Projeto",
                      desc: "O que foi construído e em qual lógica operacional ele se apoia.",
                    },
                    {
                      title: "Impacto para a empresa",
                      desc: "Que tipo de problema o sistema ajuda a resolver no mundo real.",
                    },
                    {
                      title: "Implementação aplicável",
                      desc: "Como a mesma base pode ser adaptada ao contexto do próximo cliente.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] px-5 py-4">
                      <h2 className="text-lg font-medium tracking-[-0.03em] text-white">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-white/[0.58]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-panel rounded-[2rem] p-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/[0.38]">GitHub como prova</div>
                <p className="mt-4 text-sm leading-7 text-white/[0.58]">
                  O GitHub deixa de ser link decorativo. Ele funciona como camada de prova daquilo que a copy promete.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="section-kicker">Projetos com aplicação empresarial</div>
          <h2 className="section-heading mt-4">Cada projeto abaixo conecta problema real, arquitetura válida e impacto direto para a operação.</h2>
          <p className="section-copy mt-5">
            Em vez de explicar o que é um blog, esta página organiza projetos já realizados e mostra como a mesma lógica
            pode ser levada para financeiro, franquias, segurança, operações distribuídas, dados e automação.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="surface-panel rounded-[2.35rem] p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <project.icon className="size-6 text-white/[0.78]" strokeWidth={1.4} />
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/[0.42]">
                  {project.label}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/[0.58]">{project.summary}</p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/[0.34]">Impacto para a empresa</div>
                  <p className="mt-2 text-sm leading-7 text-white/[0.64]">{project.businessImpact}</p>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/[0.34]">Como pode ser implementado</div>
                  <p className="mt-2 text-sm leading-7 text-white/[0.64]">{project.implementation}</p>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/[0.34]">Leitura comercial</div>
                  <p className="mt-2 text-sm leading-7 text-white/[0.64]">{project.outcome}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="outline" className="h-12 px-6" asChild>
                  <Link to="/contato">Quero algo assim</Link>
                </Button>
                <Button size="lg" className="h-12 px-6" asChild>
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    Ver projeto
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="section-kicker">Arquiteturas por trás dos projetos</div>
          <h2 className="section-heading mt-4">Os mesmos fundamentos usados em operações maduras podem ser adaptados ao contexto da sua empresa.</h2>
          <p className="section-copy mt-5">
            O valor dos projetos não está só na ideia. Está em usar padrões reconhecidos de segurança, dados e IA para
            transformar um caso específico em sistema replicável para outro negócio.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {referenceBlocks.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="surface-panel rounded-[2rem] p-6"
            >
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/[0.56]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-panel-strong rounded-[2.75rem] px-6 py-8 lg:px-8 lg:py-10"
          >
            <div className="section-kicker">O que isso prova</div>
            <h2 className="section-heading mt-4">Você não está vendo ideias soltas. Está vendo capacidade técnica aplicada a problemas que geram custo, risco e atraso.</h2>
            <p className="section-copy mt-5 max-w-xl">
              O visitante desta página quer responder três perguntas: você já construiu algo relevante, isso se conecta
              ao problema dele e existe maturidade técnica suficiente para implementar com seriedade? A copy agora foi
              desenhada para responder exatamente isso.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Menos abstração e mais tradução de impacto em caixa, risco, eficiência e controle.",
                "Menos explicação sobre formato de conteúdo e mais explicação sobre aplicabilidade do projeto.",
                "Menos curiosidade técnica solta e mais conexão entre prova pública, dor operacional e contratação.",
              ].map((item) => (
                <div key={item} className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-7 text-white/[0.62]">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="surface-panel rounded-[2.75rem] px-6 py-8 lg:px-8 lg:py-10"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/[0.38]">Decisão com mais clareza</div>
            <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white">Quando a empresa enxerga o impacto do sistema, a conversa sai da curiosidade e entra na contratação.</h3>
            <p className="mt-5 text-sm leading-7 text-white/[0.58]">
              O papel desta página é encurtar o caminho entre interesse e decisão. Ela mostra que os sistemas não são
              hipotéticos e que existe repertório técnico para adaptar o que já foi construído ao contexto do próximo cliente.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] px-5 py-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/[0.34]">Se o problema é risco</div>
                <p className="mt-3 text-sm leading-7 text-white/[0.62]">
                  A conversa vai para segurança, fraude, monitoramento e governança.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] px-5 py-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/[0.34]">Se o problema é escala</div>
                <p className="mt-3 text-sm leading-7 text-white/[0.62]">
                  A conversa vai para integração, plataforma, IA aplicada e operação multiunidade.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-14 px-8" asChild>
                <Link to="/contato">
                  Agendar conversa estratégica
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8" asChild>
                <a href="https://github.com/maykonlincolnusa" target="_blank" rel="noopener noreferrer">
                  Explorar GitHub
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
