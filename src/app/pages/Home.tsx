import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Box,
  BrainCircuit,
  Building2,
  Car,
  Database,
  GraduationCap,
  Heart,
  Layers,
  LayoutGrid,
  Microscope,
  Network,
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
      staggerChildren: 0.12,
    },
  },
};

export function Home() {
  const { t } = useTranslation();

  const industries = [
    { icon: Building2, label: t("industries.real_estate") },
    { icon: LayoutGrid, label: t("industries.construction") },
    { icon: ShoppingBag, label: t("industries.retail") },
    { icon: Truck, label: t("industries.logistics") },
    { icon: Microscope, label: t("industries.pharmacy") },
    { icon: Heart, label: t("industries.health") },
    { icon: GraduationCap, label: t("industries.edu") },
    { icon: Car, label: t("industries.franchise") },
  ];

  const steps = [
    { number: "01", title: t("home.protocol_step1_title"), desc: t("home.protocol_step1_desc"), icon: Network },
    { number: "02", title: t("home.protocol_step2_title"), desc: t("home.protocol_step2_desc"), icon: Layers },
    { number: "03", title: t("home.protocol_step3_title"), desc: t("home.protocol_step3_desc"), icon: Database },
    { number: "04", title: t("home.protocol_step4_title"), desc: t("home.protocol_step4_desc"), icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-background px-4 pb-10 pt-28 text-foreground selection:bg-white/10 lg:px-6">
      <SEO title={t("nav.home")} />

      <section className="mx-auto max-w-7xl">
        <div className="hero-shell px-6 py-10 lg:px-12 lg:py-14">
          <div className="absolute inset-0">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-[0.18] grayscale">
              <source src="/0_Tech_Electronics_1920x1080.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#070b15]/30 via-[#070b15]/65 to-[#070b15]" />
          </div>

          <motion.div
            className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/60">
              <BrainCircuit className="size-4" />
              <span>{t("hero.badge")}</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-8 text-5xl font-medium tracking-[-0.06em] text-white md:text-7xl lg:text-[6.25rem]">
              {t("hero.title1")}
              <br />
              <span className="text-white/[0.34]">{t("hero.title2")}</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-8 text-white/[0.58] md:text-xl">
              {t("hero.subtitle")}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-14 px-8" asChild>
                <Link to="/direct-global">
                  {t("hero.cta1")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8" asChild>
                <Link to="/contato">{t("hero.cta2")}</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid w-full gap-4 lg:grid-cols-3">
              {[
                { title: t("home.dg_subtitle"), desc: t("home.dg_description") },
                { title: t("home.whitestone_title"), desc: t("home.whitestone_impact") },
                { title: t("industries.title"), desc: t("industries.subtitle") },
              ].map((item) => (
                <div key={item.title} className="surface-panel rounded-[2rem] p-5 text-left">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">{item.title}</div>
                  <p className="mt-3 text-sm leading-7 text-white/[0.58]">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
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
              <Link to="/sobre" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-white/70 hover:text-white">
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
              className="h-full w-full object-cover opacity-66 mix-blend-luminosity grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b15]/75 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-panel-strong relative overflow-hidden rounded-[2.75rem] px-6 py-8 lg:px-10 lg:py-10"
        >
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#7ca9ff]/12 to-transparent" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/55">
                  <span className="size-2 rounded-full bg-[#7ca9ff]" />
                  {t("home.whitestone_case_badge")}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/55">
                  {t("home.whitestone_location")}
                </div>
              </div>

              <h3 className="text-4xl font-medium tracking-[-0.05em] text-white md:text-6xl">
                {t("home.whitestone_title")}
              </h3>

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
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/[0.38]">{t("home.whitestone_company_label")}</div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b15]/78 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">{t("home.efficiency_title")}</h2>
          <p className="section-copy mt-5">{t("home.efficiency_subtitle")}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface-panel rounded-[2.5rem] p-8 lg:p-10">
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
                  <Box className="mt-0.5 size-5 shrink-0 opacity-50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="surface-panel-strong rounded-[2.5rem] p-8 lg:p-10">
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

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="mb-10">
          <div className="section-kicker">{t("industries.title")}</div>
          <h2 className="section-heading mt-4">{t("industries.title")}</h2>
          <p className="section-copy mt-5 max-w-2xl">{t("industries.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="surface-panel rounded-[2rem] p-5"
            >
              <industry.icon className="size-6 text-white/60" />
              <div className="mt-6 text-sm uppercase tracking-[0.18em] text-white/62">{industry.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="mb-10">
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
