import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Bot, Compass, Database, Infinity } from "lucide-react";

import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function Solutions() {
  const solutions = [
    {
      id: "01",
      icon: Infinity,
      title: "Automação Operacional",
      desc: "Elimine o trabalho braçal da sua equipe. Criamos workflows que conectam CRMs, plataformas financeiras e ERPs, automatizando a esteira de atendimento e as rotinas do back-office em segundos.",
      tags: ["Workflows", "Integrações", "SaaS Sync"],
    },
    {
      id: "02",
      icon: Database,
      title: "Data Intelligence",
      desc: "Consolidamos os dados fragmentados da sua empresa em Data Lakes seguros e os transformamos em painéis claros para líderes tomarem decisão com velocidade.",
      tags: ["Data Pipelines", "Dashboards", "Business Analytics"],
    },
    {
      id: "03",
      icon: Bot,
      title: "Agentes de Inteligência Artificial",
      desc: "Desenvolvemos modelos e agentes com contexto operacional do seu negócio para atuar em vendas, suporte e rotinas internas de alto volume.",
      tags: ["LLMs Corporativos", "Customer Success", "Previsões"],
    },
    {
      id: "04",
      icon: Compass,
      title: "Sistemas de Aquisição Digital",
      desc: "Mais do que sites: construímos experiências de alta performance com UI premium, automação comercial e tracking fino de conversão.",
      tags: ["Web Apps", "Premium UI", "CRO Estratégico"],
    },
  ];

  return (
    <div className="min-h-screen bg-background px-4 pb-10 pt-28 text-foreground selection:bg-white/10 lg:px-6">
      <SEO title="Soluções" />

      <section className="mx-auto max-w-7xl text-center">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center"
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="section-kicker">
            Soluções e aplicações
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-4 text-5xl font-medium tracking-[-0.05em] text-white md:text-7xl">
            Aplicações
            <br />
            <span className="text-white/[0.34]">do sistema.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="section-copy mt-6 max-w-3xl">
            Módulos integrados que resolvem aquisição, operação e análise para acelerar a maturidade tecnológica do seu negócio.
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="surface-panel rounded-[2.5rem] p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <solution.icon className="size-6 text-white/[0.78]" strokeWidth={1.2} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/[0.28]">{solution.id}</span>
              </div>
              <h2 className="text-2xl font-medium text-white">{solution.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/[0.56]">{solution.desc}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {solution.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/[0.48]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl">
        <div className="surface-panel-strong rounded-[2.75rem] px-6 py-10 text-center lg:px-12 lg:py-14">
          <h2 className="text-4xl font-medium tracking-[-0.05em] text-white md:text-5xl">
            Cada negócio exige uma arquitetura única.
          </h2>
          <div className="mt-8">
            <Button size="lg" className="h-14 px-8" asChild>
              <Link to="/contato">
                Iniciar avaliação
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
