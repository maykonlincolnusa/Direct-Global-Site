import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Car,
  Database,
  Globe2,
  GraduationCap,
  Heart,
  Landmark,
  Layers,
  LayoutGrid,
  Microscope,
  Network,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
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

export function Home() {
  const { t } = useTranslation();

  const heroMetrics = [
    { label: t("hero.metric1_label"), value: t("hero.metric1_value") },
    { label: t("hero.metric2_label"), value: t("hero.metric2_value") },
    { label: t("hero.metric3_label"), value: t("hero.metric3_value") },
  ];

  const clients = [
    { name: "ADMAV Sede", src: "/client-logos/cliente-01.png" },
    { name: "SM Supermarket", src: "/client-logos/sm-supermarket.jpg" },
    { name: "Universo AGV", src: "/client-logos/universo-agv.jpg" },
    { name: "DU ES", src: "/client-logos/du-es.jpg" },
    { name: "Ableton", src: "/client-logos/ableton.jpg" },
    { name: "Cliente 07", src: "/client-logos/cliente-07.png" },
    { name: "HD Construtora", src: "/client-logos/hd-construtora.png" },
    { name: "HD Brasil", src: "/client-logos/hd-brasil.jpg" },
    { name: "Souza", src: "/client-logos/souza.jpg" },
    { name: "MAV Church", src: "/client-logos/mav-church.jpg" },
    { name: "Prover", src: "/client-logos/prover.jpg" },
    { name: "Whitestone", src: "/client-logos/whitestone-logo.jpg" },
  ];

  const services = [
    {
      icon: ShieldCheck,
      title: t("home.services_security_title"),
      desc: t("home.services_security_desc"),
    },
    {
      icon: BrainCircuit,
      title: t("home.services_ai_title"),
      desc: t("home.services_ai_desc"),
    },
    {
      icon: Database,
      title: t("home.services_data_title"),
      desc: t("home.services_data_desc"),
    },
    {
      icon: Network,
      title: t("home.services_platform_title"),
      desc: t("home.services_platform_desc"),
    },
    {
      icon: Car,
      title: t("home.services_franchise_title"),
      desc: t("home.services_franchise_desc"),
    },
    {
      icon: Globe2,
      title: t("home.services_global_title"),
      desc: t("home.services_global_desc"),
    },
  ];

  const franchisePillars = [
    {
      icon: Car,
      title: t("home.franchise_item1_title"),
      desc: t("home.franchise_item1_desc"),
    },
    {
      icon: Building2,
      title: t("home.franchise_item2_title"),
      desc: t("home.franchise_item2_desc"),
    },
    {
      icon: Database,
      title: t("home.franchise_item3_title"),
      desc: t("home.franchise_item3_desc"),
    },
    {
      icon: ShieldCheck,
      title: t("home.franchise_item4_title"),
      desc: t("home.franchise_item4_desc"),
    },
  ];

  const securityLayers = [
    {
      icon: ShieldCheck,
      title: t("home.security_item1_title"),
      desc: t("home.security_item1_desc"),
    },
    {
      icon: Layers,
      title: t("home.security_item2_title"),
      desc: t("home.security_item2_desc"),
    },
    {
      icon: Network,
      title: t("home.security_item3_title"),
      desc: t("home.security_item3_desc"),
    },
    {
      icon: Database,
      title: t("home.security_item4_title"),
      desc: t("home.security_item4_desc"),
    },
  ];

  const engineeringPillars = [
    {
      icon: BrainCircuit,
      title: t("home.engineering_item1_title"),
      desc: t("home.engineering_item1_desc"),
    },
    {
      icon: Network,
      title: t("home.engineering_item2_title"),
      desc: t("home.engineering_item2_desc"),
    },
    {
      icon: Database,
      title: t("home.engineering_item3_title"),
      desc: t("home.engineering_item3_desc"),
    },
  ];

  const industries = [
    { icon: Building2, label: t("industries.business") },
    { icon: Car, label: t("industries.franchise") },
    { icon: LayoutGrid, label: t("industries.construction") },
    { icon: GraduationCap, label: t("industries.edu") },
    { icon: ShoppingBag, label: t("industries.retail") },
    { icon: Truck, label: t("industries.services") },
    { icon: Landmark, label: t("industries.fintech") },
    { icon: ShieldCheck, label: t("industries.finance") },
    { icon: BrainCircuit, label: t("industries.crypto") },
    { icon: Rocket, label: t("industries.startups") },
    { icon: Globe2, label: t("industries.global_ops") },
    { icon: Microscope, label: t("industries.pharmacy") },
    { icon: Heart, label: t("industries.health") },
  ];

  const differentials = [
    {
      icon: ShieldCheck,
      title: t("home.differential1_title"),
      desc: t("home.differential1_desc"),
    },
    {
      icon: Layers,
      title: t("home.differential2_title"),
      desc: t("home.differential2_desc"),
    },
    {
      icon: Globe2,
      title: t("home.differential3_title"),
      desc: t("home.differential3_desc"),
    },
    {
      icon: BrainCircuit,
      title: t("home.differential4_title"),
      desc: t("home.differential4_desc"),
    },
  ];

  const steps = [
    { number: "01", title: t("home.protocol_step1_title"), desc: t("home.protocol_step1_desc"), icon: Network },
    { number: "02", title: t("home.protocol_step2_title"), desc: t("home.protocol_step2_desc"), icon: Layers },
    { number: "03", title: t("home.protocol_step3_title"), desc: t("home.protocol_step3_desc"), icon: Database },
    { number: "04", title: t("home.protocol_step4_title"), desc: t("home.protocol_step4_desc"), icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-background px-4 pb-10 pt-28 text-foreground selection:bg-white/10 lg:px-6">
      <SEO title={t("nav.home")} description={t("hero.subtitle")} />

      <section className="mx-auto max-w-7xl">
        <div className="hero-shell premium-shell px-6 py-10 lg:px-12 lg:py-14">
          <div className="absolute inset-0">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-[0.16] grayscale">
              <source src="/0_Tech_Electronics_1920x1080.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0614]/18 via-[#090510]/78 to-[#08030d]" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(129,79,255,0.18),transparent_42%)]" />
          </div>

          <div className="relative z-10 grid gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:items-end">
            <motion.div initial="initial" animate="animate" variants={stagger} className="max-w-4xl">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/68"
              >
                <ShieldCheck className="size-4" />
                <span>{t("hero.badge")}</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-8 max-w-4xl text-5xl font-medium tracking-[-0.06em] text-white md:text-7xl lg:text-[5.9rem]"
              >
                {t("hero.positioning_title1")}
                <br />
                <span className="text-white/[0.48]">{t("hero.positioning_title2")}</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-white/[0.68] md:text-xl">
                {t("hero.subtitle")}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="h-14 px-8" asChild>
                  <Link to="/contato">
                    {t("hero.cta1")}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8" asChild>
                  <Link to="/direct-global">{t("hero.cta2")}</Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                {[t("hero.chip1"), t("hero.chip2"), t("hero.chip3")].map((chip) => (
                  <div
                    key={chip}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/52"
                  >
                    {chip}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4"
            >
              <div className="surface-panel-strong rounded-[2.5rem] p-6 lg:p-7">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/[0.4]">
                  {t("hero.signal_strategy_label")}
                </div>
                <h2 className="mt-6 text-3xl font-medium tracking-[-0.05em] text-white md:text-4xl">
                  {t("hero.title1")}
                  <br />
                  <span className="text-white/[0.36]">{t("hero.title2")}</span>
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/[0.6]">{t("hero.signal_strategy_desc")}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="surface-panel rounded-[2rem] p-5">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/[0.38]">
                    {t("hero.signal_platform_label")}
                  </div>
                  <div className="mt-4 text-2xl font-medium tracking-[-0.04em] text-white">{t("home.dg_subtitle")}</div>
                  <p className="mt-3 text-sm leading-7 text-white/[0.56]">{t("home.dg_description")}</p>
                </div>

                <div className="surface-panel rounded-[2rem] p-5">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/[0.38]">
                    {t("hero.signal_case_label")}
                  </div>
                  <div className="mt-4 text-2xl font-medium tracking-[-0.04em] text-white">{t("home.whitestone_title")}</div>
                  <p className="mt-3 text-sm leading-7 text-white/[0.56]">{t("home.whitestone_impact")}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="surface-panel rounded-[1.75rem] px-4 py-5">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-white/[0.34]">{metric.label}</div>
                    <div className="mt-3 text-lg font-medium tracking-[-0.03em] text-white">{metric.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="clients" className="mx-auto mt-24 max-w-7xl">
        <div className="surface-panel-strong rounded-[2.75rem] px-6 py-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-2xl">
              <div className="section-kicker">Nossos clientes</div>
              <h2 className="section-heading mt-4">Marcas, operacoes e redes que ja confiaram no trabalho.</h2>
              <p className="section-copy mt-5">
                Esta base reune clientes atendidos em diferentes contextos, do mercado local a operacoes com alcance
                internacional. A proposta aqui e simples: mostrar prova real de relacionamento e execucao.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Base atendida", value: "13 clientes" },
                { label: "Perfil", value: "Multiindustria" },
                { label: "Escopo", value: "Local e global" },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] px-5 py-5">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/[0.34]">{item.label}</div>
                  <div className="mt-3 text-lg font-medium tracking-[-0.03em] text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {clients.map((client, index) => (
              <motion.div
                key={client.name + client.src}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="surface-panel rounded-[2rem] p-5 hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="relative flex min-h-[168px] items-center justify-center overflow-hidden rounded-[1.6rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(137,94,255,0.16),transparent_42%),linear-gradient(180deg,rgba(18,10,29,0.96),rgba(8,4,14,0.98))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_40px_rgba(0,0,0,0.28)]">
                  <div className="pointer-events-none absolute inset-x-8 top-4 h-14 rounded-full bg-[rgba(137,94,255,0.12)] blur-3xl" />
                  <ImageWithFallback
                    src={client.src}
                    alt={`${client.name} logo`}
                    className="relative z-10 max-h-24 w-full object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
                  />
                </div>
                <div className="mt-5 text-sm uppercase tracking-[0.18em] text-white/70">{client.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto mt-24 max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="section-kicker">{t("home.services_kicker")}</div>
          <h2 className="section-heading mt-4">{t("home.services_title")}</h2>
          <p className="section-copy mt-5">{t("home.services_subtitle")}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="surface-panel group rounded-[2.25rem] p-6 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05]">
                <service.icon className="size-6 text-white/[0.78]" strokeWidth={1.4} />
              </div>
              <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/[0.58]">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="section-kicker">
              {t("home.identity_cta")}
            </motion.div>
            <motion.h2 variants={fadeUp} className="section-heading mt-4">
              {t("home.identity_title1")}
              <br />
              <span className="text-white/[0.34]">{t("home.identity_title2")}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-copy mt-6 max-w-xl">
              {t("home.identity_desc")}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-white/70 hover:text-white"
              >
                {t("home.identity_cta")}
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="surface-panel-strong relative aspect-[4/3] overflow-hidden rounded-[2.5rem]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Technology abstraction"
              className="h-full w-full object-cover opacity-[0.66] mix-blend-luminosity grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09040f]/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <section id="franchises" className="mx-auto mt-24 max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-panel-strong rounded-[2.75rem] px-6 py-8 lg:px-8 lg:py-10"
          >
            <div className="section-kicker">{t("home.franchise_kicker")}</div>
            <h2 className="section-heading mt-4">{t("home.franchise_title")}</h2>
            <p className="section-copy mt-5 max-w-xl">{t("home.franchise_subtitle")}</p>

            <div className="mt-8 space-y-4">
              {[t("home.global_item1"), t("home.global_item2"), t("home.global_item3")].map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-5 py-4">
                  <div className="mt-1 size-2 rounded-full bg-[rgba(149,103,255,0.95)]" />
                  <span className="text-sm leading-7 text-white/[0.62]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button size="lg" variant="outline" className="h-14 px-8" asChild>
                <Link to="/solucoes">{t("home.franchise_cta")}</Link>
              </Button>
            </div>
          </motion.div>

          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              {franchisePillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="surface-panel rounded-[2rem] p-5"
                >
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05]">
                    <pillar.icon className="size-5 text-white/[0.76]" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-5 text-xl text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.56]">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="surface-panel rounded-[2.25rem] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05]">
                  <Globe2 className="size-5 text-white/[0.78]" strokeWidth={1.4} />
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/[0.38]">{t("home.global_card_title")}</div>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/[0.6]">{t("home.global_card_desc")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="security" className="mx-auto mt-24 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-kicker">{t("home.security_kicker")}</div>
            <h2 className="section-heading mt-4">{t("home.security_title")}</h2>
            <p className="section-copy mt-5 max-w-xl">{t("home.security_subtitle")}</p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/[0.38]">{t("home.security_note_label")}</div>
              <p className="mt-4 text-sm leading-7 text-white/[0.62]">{t("home.security_note")}</p>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {securityLayers.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="surface-panel rounded-[2rem] p-6"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05]">
                  <item.icon className="size-6 text-white/[0.78]" strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/[0.56]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-panel-strong relative overflow-hidden rounded-[2.75rem] px-6 py-8 lg:px-10 lg:py-10"
        >
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[rgba(130,80,255,0.16)] to-transparent" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/55">
                  <span className="size-2 rounded-full bg-[rgba(130,80,255,0.95)]" />
                  {t("home.whitestone_case_badge")}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/55">
                  {t("home.whitestone_location")}
                </div>
              </div>

              <h3 className="text-4xl font-medium tracking-[-0.05em] text-white md:text-6xl">{t("home.whitestone_title")}</h3>

              <p className="section-copy max-w-xl">{t("home.whitestone_desc")}</p>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Button size="lg" className="h-14 px-8" asChild>
                  <a href="https://github.com/maykonlincolnusa" target="_blank" rel="noopener noreferrer">
                    {t("home.whitestone_cta")}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/[0.38]">
                      {t("home.whitestone_company_label")}
                    </div>
                    <div className="mt-2 text-sm text-white/[0.72]">{t("home.whitestone_company_value")}</div>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/[0.38]">{t("home.whitestone_roi_label")}</div>
                    <div className="mt-2 text-sm text-white/[0.72]">{t("home.whitestone_impact")}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-panel relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <ImageWithFallback
                src="/whitestone_dallas.png"
                alt="Whitestone Concrete case study"
                className="h-full w-full object-cover opacity-72 grayscale transition-transform duration-1000 hover:scale-105 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09040f]/78 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </section>

      <section id="engineering" className="mx-auto mt-24 max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="section-kicker">{t("home.engineering_kicker")}</div>
          <h2 className="section-heading mt-4">{t("home.engineering_title")}</h2>
          <p className="section-copy mt-5">{t("home.engineering_subtitle")}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {engineeringPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="surface-panel rounded-[2rem] p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05]">
                <pillar.icon className="size-6 text-white/[0.78]" strokeWidth={1.4} />
              </div>
              <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-white">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/[0.56]">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-panel rounded-[2.5rem] p-8 lg:p-10"
          >
            <div className="mb-6 text-[11px] uppercase tracking-[0.22em] text-white/[0.38]">{t("home.efficiency_before_title")}</div>
            <ul className="space-y-5">
              {[
                t("home.efficiency_before_item1"),
                t("home.efficiency_before_item2"),
                t("home.efficiency_before_item3"),
                t("home.efficiency_before_item4"),
                t("home.efficiency_before_item5"),
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-white/[0.52]">
                  <Building2 className="mt-0.5 size-5 shrink-0 opacity-50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="surface-panel-strong rounded-[2.5rem] p-8 lg:p-10"
          >
            <div className="mb-6 text-[11px] uppercase tracking-[0.22em] text-white/55">{t("home.efficiency_after_title")}</div>
            <ul className="space-y-5">
              {[
                t("home.efficiency_after_item1"),
                t("home.efficiency_after_item2"),
                t("home.efficiency_after_item3"),
                t("home.efficiency_after_item4"),
                t("home.efficiency_after_item5"),
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-white/[0.72]">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="industries" className="mx-auto mt-24 max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="section-kicker">{t("industries.title")}</div>
          <h2 className="section-heading mt-4">{t("industries.title")}</h2>
          <p className="section-copy mt-5">{t("industries.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="surface-panel rounded-[2rem] p-5 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <industry.icon className="size-6 text-white/60" strokeWidth={1.6} />
              <div className="mt-6 text-sm uppercase tracking-[0.18em] text-white/62">{industry.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="differentials" className="mx-auto mt-24 max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="section-kicker">{t("home.differentials_kicker")}</div>
          <h2 className="section-heading mt-4">{t("home.differentials_title")}</h2>
          <p className="section-copy mt-5">{t("home.differentials_subtitle")}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="surface-panel rounded-[2rem] p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05]">
                <item.icon className="size-6 text-white/[0.78]" strokeWidth={1.4} />
              </div>
              <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/[0.56]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="section-kicker">{t("home.protocol_title")}</div>
          <h2 className="section-heading mt-4">{t("home.protocol_title")}</h2>
          <p className="section-copy mt-5">{t("home.protocol_subtitle")}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="surface-panel rounded-[2rem] p-6"
            >
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/[0.32]">{step.number}</div>
              <step.icon className="mt-6 size-7 text-white/[0.72]" strokeWidth={1.4} />
              <h3 className="mt-6 text-xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/[0.54]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl">
        <div className="surface-panel-strong rounded-[2.75rem] px-6 py-10 text-center lg:px-12 lg:py-14">
          <h2 className="text-4xl font-medium tracking-[-0.05em] text-white md:text-6xl">{t("home.cta_ready")}</h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">{t("home.cta_desc")}</p>
          <div className="mt-8">
            <Button size="lg" className="h-14 px-8" asChild>
              <Link to="/contato">
                {t("home.cta_button")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
