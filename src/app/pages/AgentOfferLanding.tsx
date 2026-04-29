import { type FormEvent, type LucideIcon, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Code2,
  Database,
  ExternalLink,
  FileSearch,
  GitBranch,
  Landmark,
  Network,
  Radar,
  Scale,
  ShieldCheck,
  Sparkles,
  Truck,
  Workflow,
  Zap,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";

type OfferFormState = {
  name: string;
  company: string;
  whatsapp: string;
  challenge: string;
};

type IconItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type Project = {
  name: string;
  link: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

type OfferLandingContent = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  offerName: string;
  price: string;
  duration: string;
  objective: string;
  headlineVariations: string[];
  subheadline: string;
  primaryCta: string;
  microcopy: string;
  proofLine: string;
  painIntro: string;
  technicalIntro: string;
  projects: Project[];
  receives: string[];
  benefits: IconItem[];
  authority: string[];
  faq: { question: string; answer: string }[];
  whatsappMessage: string;
  audience: string[];
  deliveryModel: string[];
};

const initialForm: OfferFormState = {
  name: "",
  company: "",
  whatsapp: "",
  challenge: "",
};

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
};

const pains: IconItem[] = [
  {
    title: "Processos manuais demais",
    text: "Equipes gastam tempo conferindo planilhas, mensagens e sistemas que deveriam conversar entre si.",
    icon: Workflow,
  },
  {
    title: "Baixa previsibilidade operacional",
    text: "O problema aparece tarde: atraso, fraude, gargalo comercial ou risco de atendimento só vira pauta depois do impacto.",
    icon: Radar,
  },
  {
    title: "Dados subutilizados",
    text: "A empresa coleta dados, mas eles não alimentam decisões, automações ou alertas acionáveis no ritmo da operação.",
    icon: Database,
  },
  {
    title: "Automação sem inteligência",
    text: "Scripts e integrações ajudam, mas não raciocinam, não priorizam risco e não explicam o motivo de uma recomendação.",
    icon: BrainCircuit,
  },
];

const technicalDifferentials: IconItem[] = [
  {
    title: "Engenharia de dados aplicada",
    text: "Modelagem de fontes, normalização, pipelines, rastreabilidade e camada analítica para transformar dados dispersos em contexto operacional.",
    icon: Database,
  },
  {
    title: "IA multi-agente",
    text: "Agentes especializados dividem responsabilidades: coleta, análise, detecção, decisão assistida, geração de resposta e auditoria do fluxo.",
    icon: Network,
  },
  {
    title: "Sistemas distribuídos",
    text: "Arquitetura preparada para integrações, processamento assíncrono, filas, APIs e evolução modular conforme o volume cresce.",
    icon: GitBranch,
  },
  {
    title: "Otimização inspirada em física",
    text: "Princípios de estados, energia, probabilidade e estabilidade são usados como metáforas práticas para busca de rotas, riscos e decisões melhores.",
    icon: Sparkles,
  },
];

const offerOne: OfferLandingContent = {
  slug: "auditoria-agentes-ia",
  seoTitle: "Auditoria Técnica + Prova de Conceito com Agentes de IA",
  seoDescription:
    "Auditoria técnica de 4 semanas com construção de um agente de IA funcional para empresas que precisam validar automação inteligente com baixo risco.",
  eyebrow: "Oferta menor | Diagnóstico técnico + PoC",
  offerName: "Auditoria Técnica + Prova de Conceito com Agentes de IA",
  price: "R$ 7.900",
  duration: "4 semanas",
  objective: "Diagnóstico técnico e construção de 1 agente de IA funcional para validar uma oportunidade real de automação.",
  headlineVariations: [
    "Valide um agente de IA funcional antes de investir em um sistema completo.",
    "Descubra onde a IA pode reduzir custo operacional na sua empresa em 4 semanas.",
    "Transforme um processo manual em uma prova de conceito com agente inteligente.",
    "Auditoria técnica para encontrar, priorizar e testar automação com IA no seu negócio.",
  ],
  subheadline:
    "Um projeto pago, objetivo e conduzido por engenharia: análise dos seus dados, desenho da oportunidade e entrega de uma PoC funcional para tomada de decisão executiva.",
  primaryCta: "Solicitar auditoria técnica",
  microcopy: "Projeto pago, escopo fechado e sem compromisso futuro.",
  proofLine: "Indicado para empresas que querem validar valor antes de contratar uma construção completa.",
  painIntro:
    "A maior parte das empresas não precisa começar com uma plataforma inteira. Precisa primeiro identificar o processo certo, medir impacto provável e testar uma automação real com segurança técnica.",
  technicalIntro:
    "A auditoria combina engenharia de dados, arquitetura de software e agentes de IA para entender onde existe retorno operacional mensurável. A referência de física aplicada entra como lógica de otimização: reduzir ruído, estabilizar decisões e encontrar caminhos de menor custo dentro do processo.",
  projects: [
    {
      name: "DeliveryWatch AI",
      link: "https://github.com/maykonlincolnusa/delivery_ia",
      description:
        "Sistema multi-agente autônomo com CrewAI para monitoramento inteligente de entregas, detecção de riscos, previsão de atrasos e automação de suporte logístico.",
      bullets: [
        "Agentes especializados para análise logística e suporte operacional.",
        "Fluxo orientado à identificação antecipada de risco em entregas.",
        "Arquitetura demonstrativa de capacidade técnica, sem afirmação de produção.",
      ],
      icon: Truck,
    },
  ],
  receives: [
    "Mapeamento técnico do processo escolhido, fontes de dados disponíveis e pontos de integração.",
    "Diagnóstico de automação com priorização por impacto, complexidade e risco operacional.",
    "Desenho de arquitetura da PoC com agente de IA, entradas, saídas, limites e critérios de sucesso.",
    "Construção de 1 agente funcional para executar uma tarefa real do processo selecionado.",
    "Relatório executivo com oportunidades, riscos, próximos passos e estimativa de evolução para sistema completo.",
    "Reuniões técnicas semanais para validação de escopo, progresso e decisões de implementação.",
  ],
  benefits: [
    {
      title: "Redução de risco antes do investimento maior",
      text: "A empresa valida viabilidade técnica e valor operacional antes de avançar para uma plataforma completa.",
      icon: ShieldCheck,
    },
    {
      title: "Clareza sobre custo e prioridade",
      text: "O diagnóstico separa automações úteis de ideias caras que não atacam gargalos relevantes.",
      icon: BarChart3,
    },
    {
      title: "Primeiro ativo funcional",
      text: "A entrega não é apenas relatório: inclui um agente operando dentro do escopo definido.",
      icon: Code2,
    },
  ],
  authority: [
    "Especialista em Engenharia de Dados, Desenvolvimento de Software e Inteligência Artificial Avançada.",
    "Experiência em arquitetura de sistemas complexos, pipelines distribuídos e automação com agentes.",
    "Estudo técnico baseado em referências de engenharia do MIT, aplicado com foco prático em sistemas reais.",
    "Uso estratégico de conceitos inspirados em Física Quântica e Nuclear para modelar estados, probabilidades, estabilidade e otimização de decisões.",
  ],
  faq: [
    {
      question: "Isso funciona para minha empresa?",
      answer:
        "Funciona quando existe um processo repetitivo, dados acessíveis e uma decisão operacional que pode ser assistida por IA. Na auditoria, o primeiro trabalho é confirmar se há um caso viável antes de construir.",
    },
    {
      question: "Quanto tempo leva?",
      answer:
        "A oferta tem duração de 4 semanas, com diagnóstico, desenho técnico e construção de 1 agente funcional dentro do escopo aprovado.",
    },
    {
      question: "Preciso ter equipe técnica?",
      answer:
        "Não é obrigatório. Ajuda se houver alguém para liberar acessos, explicar processos e validar regras de negócio, mas a condução técnica fica sob responsabilidade do especialista.",
    },
    {
      question: "Isso já vem pronto?",
      answer:
        "A entrega é uma prova de conceito funcional, não um sistema corporativo completo. Ela serve para validar viabilidade, impacto e direção técnica.",
    },
    {
      question: "É realmente pago?",
      answer:
        "Sim. É um projeto pago de R$ 7.900, com escopo definido, entrega técnica e sem obrigação de contratação futura.",
    },
  ],
  whatsappMessage: "Olá Maykon, quero solicitar a Auditoria Técnica + PoC com Agentes de IA.",
  audience: ["Logística", "Tecnologia", "Financeiro", "Imobiliário", "Jurídico"],
  deliveryModel: ["4 semanas", "1 agente funcional", "Diagnóstico + PoC", "R$ 7.900"],
};

const offerTwo: OfferLandingContent = {
  slug: "sistema-agentes-inteligentes",
  seoTitle: "Sistema de Agentes Inteligentes Customizado",
  seoDescription:
    "Construção de sistema customizado com pipelines de dados, múltiplos agentes de IA, integrações e deploy para empresas B2B.",
  eyebrow: "Oferta maior | Sistema multi-agente customizado",
  offerName: "Sistema de Agentes Inteligentes Customizado",
  price: "R$ 17.900",
  duration: "8 semanas",
  objective:
    "Construção completa de sistema com pipelines de dados, múltiplos agentes de IA, integrações, interface operacional e deploy.",
  headlineVariations: [
    "Construa um sistema de agentes inteligentes para automatizar decisões críticas da operação.",
    "Saia de processos manuais para uma arquitetura multi-agente integrada aos dados da empresa.",
    "Implante IA aplicada com engenharia, pipelines, integrações e deploy em 8 semanas.",
    "Transforme dados subutilizados em automação inteligente com sistema customizado.",
  ],
  subheadline:
    "Uma construção técnica de ponta a ponta para empresas que já enxergam o gargalo e precisam de uma solução operacional com agentes, dados e integração real.",
  primaryCta: "Solicitar construção do sistema",
  microcopy: "Projeto pago, escopo fechado e arquitetura documentada.",
  proofLine: "Indicado para empresas que precisam sair da validação e colocar IA em fluxo operacional.",
  painIntro:
    "Quando o gargalo já custa tempo, margem e previsibilidade, uma PoC isolada não basta. O sistema precisa integrar dados, raciocinar por etapas, registrar decisões e operar com controle.",
  technicalIntro:
    "A construção usa pipelines de dados, agentes especializados, arquitetura modular e deploy preparado para evolução. Princípios inspirados em física ajudam a organizar problemas complexos: estados possíveis, energia operacional, propagação de risco e busca por configurações mais estáveis.",
  projects: [
    {
      name: "AXIOM",
      link: "https://github.com/maykonlincolnusa/AXIOM",
      description:
        "Plataforma modular multi-agente para financeiro, imobiliário e jurídico, com camada compartilhada de raciocínio avançado e arquitetura escalável.",
      bullets: [
        "Estrutura modular para múltiplos domínios de negócio.",
        "Camada compartilhada de raciocínio para padronizar análise e decisão.",
        "Arquitetura demonstrativa de capacidade técnica, sem afirmação de produção.",
      ],
      icon: Landmark,
    },
    {
      name: "Fraud Master Bank FMB",
      link: "https://github.com/maykonlincolnusa/Fraud-Master-Bank-FMB-system-anti-fraud",
      description:
        "Sistema anti-fraude voltado a análise de risco financeiro, detecção de padrões suspeitos e apoio à decisão em cenários bancários simulados.",
      bullets: [
        "Raciocínio orientado a risco, sinais e priorização de eventos.",
        "Base conceitual aplicável a fraude, compliance e monitoramento financeiro.",
        "Projeto apresentado como demonstração técnica, sem afirmação de produção.",
      ],
      icon: ShieldCheck,
    },
  ],
  receives: [
    "Arquitetura técnica do sistema com módulos, agentes, fontes de dados, integrações e responsabilidades.",
    "Pipeline de dados para ingestão, limpeza, transformação e disponibilização de contexto para os agentes.",
    "Múltiplos agentes de IA com papéis definidos, memória operacional quando aplicável e fluxo de raciocínio controlado.",
    "Integração com APIs, planilhas, bancos de dados ou ferramentas internas viáveis dentro do escopo aprovado.",
    "Interface operacional ou painel técnico para execução, acompanhamento e revisão de resultados.",
    "Deploy do sistema e documentação técnica para operação, manutenção e próximos ciclos de evolução.",
    "Reuniões semanais de engenharia para decisões de escopo, validação funcional e revisão de riscos.",
  ],
  benefits: [
    {
      title: "Automação inteligente de ponta a ponta",
      text: "O sistema conecta dados, agentes e execução para reduzir trabalho manual e tempo de resposta.",
      icon: Zap,
    },
    {
      title: "Decisão orientada por dados",
      text: "Os agentes operam com contexto, histórico e critérios definidos, reduzindo decisões baseadas apenas em intuição.",
      icon: BarChart3,
    },
    {
      title: "Escalabilidade técnica",
      text: "A arquitetura modular facilita adicionar novos agentes, fontes e fluxos conforme a operação amadurece.",
      icon: Network,
    },
    {
      title: "Redução de custo operacional",
      text: "Menos retrabalho, menos tarefas repetitivas e mais previsibilidade sobre onde a equipe deve atuar.",
      icon: CheckCircle2,
    },
  ],
  authority: [
    "Especialista em Engenharia de Dados, Desenvolvimento de Software e Inteligência Artificial Avançada.",
    "Atuação em arquitetura de sistemas complexos, multi-agentes com CrewAI, pipelines distribuídos e simulações avançadas.",
    "Formação técnica orientada por referências do MIT em computação, sistemas e engenharia aplicada, sem abordagem acadêmica excessiva.",
    "Uso estratégico de conceitos inspirados em Física Quântica e Nuclear para tratar incerteza, estados de decisão, propagação de risco e otimização em escala.",
  ],
  faq: [
    {
      question: "Isso funciona para minha empresa?",
      answer:
        "Funciona melhor quando a empresa já tem um processo relevante, dados mínimos disponíveis e dor operacional clara. O desenho técnico ajusta agentes, integrações e limites ao seu contexto.",
    },
    {
      question: "Quanto tempo leva?",
      answer:
        "A oferta tem duração de 8 semanas para arquitetura, pipelines, múltiplos agentes, integração, testes e deploy dentro do escopo aprovado.",
    },
    {
      question: "Preciso ter equipe técnica?",
      answer:
        "Não necessariamente. É preciso ter responsáveis internos para liberar dados, validar regras e aprovar decisões. A implementação técnica é conduzida no projeto.",
    },
    {
      question: "Isso já vem pronto?",
      answer:
        "É uma construção customizada. O sistema é entregue pronto para o escopo definido, mas não é um produto genérico de prateleira.",
    },
    {
      question: "É realmente pago?",
      answer:
        "Sim. É um projeto pago de R$ 17.900, com duração de 8 semanas, entregáveis técnicos e escopo documentado.",
    },
  ],
  whatsappMessage: "Olá Maykon, quero solicitar o Sistema de Agentes Inteligentes Customizado.",
  audience: ["Logística", "Tecnologia", "Financeiro", "Imobiliário", "Jurídico"],
  deliveryModel: ["8 semanas", "Múltiplos agentes", "Integração + deploy", "R$ 17.900"],
};

function openWhatsApp(content: OfferLandingContent, form?: OfferFormState) {
  const whatsappNumber = "5521975961920";
  const lines = [
    content.whatsappMessage,
    "",
    `Oferta: ${content.offerName}`,
    form ? `Nome: ${form.name || "-"}` : "",
    form ? `Empresa: ${form.company || "-"}` : "",
    form ? `WhatsApp: ${form.whatsapp || "-"}` : "",
    form ? "Desafio:" : "",
    form ? form.challenge || "-" : "",
  ].filter(Boolean);

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
}

function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#91f2d2]/80">{kicker}</div>
      <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-white/62 md:text-lg">{description}</p> : null}
    </div>
  );
}

function SignalPanel({ content }: { content: OfferLandingContent }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {content.deliveryModel.map((item) => (
        <div key={item} className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/34">Escopo</div>
          <div className="mt-2 text-lg font-medium text-white">{item}</div>
        </div>
      ))}
    </div>
  );
}

function ContactForm({ content }: { content: OfferLandingContent }) {
  const [form, setForm] = useState<OfferFormState>(initialForm);

  const handleChange = (field: keyof OfferFormState, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openWhatsApp(content, form);
  };

  return (
    <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/42">Nome</span>
          <input
            required
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className="input-shell rounded-lg"
            placeholder="Seu nome"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/42">Empresa</span>
          <input
            required
            value={form.company}
            onChange={(event) => handleChange("company", event.target.value)}
            className="input-shell rounded-lg"
            placeholder="Nome da empresa"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-white/42">WhatsApp</span>
        <input
          required
          value={form.whatsapp}
          onChange={(event) => handleChange("whatsapp", event.target.value)}
          className="input-shell rounded-lg"
          placeholder="DDD + número"
          inputMode="tel"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-white/42">Descrição do desafio</span>
        <textarea
          required
          value={form.challenge}
          onChange={(event) => handleChange("challenge", event.target.value)}
          className="input-shell min-h-[170px] resize-none rounded-lg"
          placeholder="Explique o processo, gargalo, dados disponíveis ou resultado esperado."
        />
      </label>

      <Button type="submit" className="h-14 w-full rounded-lg">
        Enviar briefing pelo WhatsApp
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
}

export function AgentOfferLanding({ content }: { content: OfferLandingContent }) {
  const activeHeadline = content.headlineVariations[0];

  return (
    <div className="min-h-screen bg-[#06100f] px-4 pb-12 pt-28 text-foreground selection:bg-[#91f2d2]/20 lg:px-6">
      <SEO
        title={content.seoTitle}
        description={content.seoDescription}
        keywords="agentes de IA, engenharia de dados, automação inteligente, CrewAI, IA multi-agente, Maykon Lincoln"
        url={`https://maykonlincoln.com/${content.slug}`}
      />

      <section className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(11,31,29,0.96),rgba(7,12,18,0.98)_52%,rgba(25,28,16,0.96))] px-5 py-8 shadow-[0_28px_90px_rgba(0,0,0,0.38)] md:px-8 md:py-12 lg:px-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#91f2d2]/70 to-transparent" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.08 } } }}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-lg border border-[#91f2d2]/20 bg-[#91f2d2]/8 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#b9ffe7]">
                <BrainCircuit className="size-4" />
                {content.eyebrow}
              </motion.div>

              <motion.h1 variants={fadeUp} className="mt-7 max-w-5xl text-4xl font-medium tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                {activeHeadline}
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
                {content.subheadline}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="h-14 rounded-lg px-7" asChild>
                  <a href="#formulario">
                    {content.primaryCta}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button variant="outline" className="h-14 rounded-lg px-7" asChild>
                  <button type="button" onClick={() => openWhatsApp(content)}>
                    Conversar no WhatsApp
                  </button>
                </Button>
              </motion.div>

              <motion.p variants={fadeUp} className="mt-4 text-sm text-white/50">
                {content.microcopy}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
                {content.audience.map((item) => (
                  <span key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/56">
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4"
            >
              <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-white/38">Oferta</div>
                    <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white">{content.offerName}</h2>
                  </div>
                  <div className="rounded-lg border border-[#f8d36b]/25 bg-[#f8d36b]/10 px-3 py-2 text-sm font-medium text-[#ffe7a1]">
                    {content.price}
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-white/62">{content.objective}</p>
              </div>

              <SignalPanel content={content} />

              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/38">Leitura executiva</div>
                <p className="mt-4 text-sm leading-7 text-white/64">
                  A proposta não é vender IA como conceito. É transformar um processo crítico em arquitetura mensurável,
                  com dados, agentes, integração e critério claro de validação.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <SectionTitle kicker="Dores do cliente" title="O custo real não está só na ferramenta. Está no processo que continua manual." description={content.painIntro} />
        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pains.map((pain, index) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <pain.icon className="size-6 text-[#91f2d2]" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-medium text-white">{pain.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/56">{pain.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <div className="grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <SectionTitle kicker="Diferencial técnico" title="IA aplicada com engenharia, arquitetura e critério de negócio." description={content.technicalIntro} />
          <div className="grid gap-4 md:grid-cols-2">
            {technicalDifferentials.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <item.icon className="size-6 text-[#7dd3fc]" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/56">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <SectionTitle
          kicker="Projetos | Prova técnica"
          title="Exemplos de arquiteturas que desenvolvo"
          description="Os projetos abaixo são apresentados como demonstração de capacidade técnica, arquitetura e raciocínio de engenharia. Não há afirmação de que estejam em produção."
        />
        <div className={`mt-9 grid gap-5 ${content.projects.length > 1 ? "lg:grid-cols-2" : ""}`}>
          {content.projects.map((project) => (
            <div key={project.name} className="rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-lg border border-white/10 bg-black/20">
                    <project.icon className="size-6 text-[#f8d36b]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white">{project.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/36">Arquitetura demonstrativa</p>
                  </div>
                </div>
                <Button variant="outline" className="h-11 rounded-lg" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver GitHub
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-base leading-8 text-white/66">{project.description}</p>
              <div className="mt-6 grid gap-3">
                {project.bullets.map((bullet) => (
                  <div key={bullet} className="flex gap-3 rounded-lg border border-white/8 bg-black/15 p-3 text-sm leading-6 text-white/58">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#91f2d2]" />
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle kicker="O que você recebe" title="Entregáveis técnicos, específicos e úteis para decisão executiva." />
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
            <div className="grid gap-3">
              {content.receives.map((item, index) => (
                <div key={item} className="grid gap-3 rounded-lg border border-white/8 bg-black/15 p-4 sm:grid-cols-[44px_1fr]">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-[#91f2d2]/10 text-sm font-semibold text-[#b9ffe7]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm leading-7 text-white/66">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <SectionTitle kicker="Benefícios e resultados" title="Resultado esperado: menos custo escondido, mais previsibilidade e melhor uso dos dados." />
        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <benefit.icon className="size-6 text-[#f8d36b]" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-medium text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/56">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <div className="rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(14,36,33,0.9),rgba(8,12,18,0.94))] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <SectionTitle kicker="Autoridade" title="Maykon Lincoln: engenharia, dados e IA avançada aplicadas a problemas de negócio." />
            <div className="grid gap-3">
              {content.authority.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-white/8 bg-white/[0.035] p-4 text-sm leading-7 text-white/66">
                  <FileSearch className="mt-1 size-4 shrink-0 text-[#7dd3fc]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="formulario" className="mx-auto mt-20 max-w-7xl scroll-mt-28">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#91f2d2]/80">CTA com formulário</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-white md:text-5xl">Descreva o desafio e receba o próximo passo técnico.</h2>
            <p className="mt-5 text-base leading-7 text-white/62">
              O formulário envia uma mensagem estruturada para o WhatsApp com contexto suficiente para qualificar escopo, prioridade e viabilidade.
            </p>
            <div className="mt-8 grid gap-3">
              <div className="flex items-center gap-3 text-sm text-white/58">
                <Clock3 className="size-4 text-[#f8d36b]" />
                {content.duration}
              </div>
              <div className="flex items-center gap-3 text-sm text-white/58">
                <Scale className="size-4 text-[#f8d36b]" />
                Escopo fechado e proposta técnica objetiva
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[rgba(3,7,10,0.55)] p-6 md:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">{content.offerName}</div>
            <ContactForm content={content} />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <SectionTitle kicker="FAQ" title="Perguntas frequentes antes de contratar." />
        <div className="mt-9 grid gap-4 lg:grid-cols-2">
          {content.faq.map((item) => (
            <details key={item.question} className="group rounded-lg border border-white/10 bg-white/[0.04] p-5 open:bg-white/[0.06]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-medium text-white">
                {item.question}
                <ArrowRight className="size-4 shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-white/58">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl">
        <div className="rounded-xl border border-[#91f2d2]/20 bg-[#91f2d2]/8 p-6 text-center md:p-9">
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-white md:text-5xl">{content.proofLine}</h2>
          <div className="mt-7">
            <Button className="h-14 rounded-lg px-8" asChild>
              <a href="#formulario">
                {content.primaryCta}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function AiAuditPocLanding() {
  return <AgentOfferLanding content={offerOne} />;
}

export function CustomAgentSystemLanding() {
  return <AgentOfferLanding content={offerTwo} />;
}
