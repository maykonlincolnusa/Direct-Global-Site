import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Car,
  Database,
  Globe2,
  Landmark,
  Network,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function Solutions() {
  const { t } = useTranslation();

  const solutions = [
    {
      id: "01",
      icon: ShieldCheck,
      title: t("solutions.item1_title"),
      desc: t("solutions.item1_desc"),
    },
    {
      id: "02",
      icon: Car,
      title: t("solutions.item2_title"),
      desc: t("solutions.item2_desc"),
    },
    {
      id: "03",
      icon: BrainCircuit,
      title: t("solutions.item3_title"),
      desc: t("solutions.item3_desc"),
    },
    {
      id: "04",
      icon: Database,
      title: t("solutions.item4_title"),
      desc: t("solutions.item4_desc"),
    },
    {
      id: "05",
      icon: Network,
      title: t("solutions.item5_title"),
      desc: t("solutions.item5_desc"),
    },
    {
      id: "06",
      icon: Globe2,
      title: t("solutions.item6_title"),
      desc: t("solutions.item6_desc"),
    },
  ];

  const framework = [
    {
      icon: ShieldCheck,
      title: t("solutions.framework_item1_title"),
      desc: t("solutions.framework_item1_desc"),
    },
    {
      icon: Building2,
      title: t("solutions.framework_item2_title"),
      desc: t("solutions.framework_item2_desc"),
    },
    {
      icon: Landmark,
      title: t("solutions.framework_item3_title"),
      desc: t("solutions.framework_item3_desc"),
    },
    {
      icon: Globe2,
      title: t("solutions.framework_item4_title"),
      desc: t("solutions.framework_item4_desc"),
    },
  ];

  const sectors = [
    t("industries.business"),
    t("industries.franchise"),
    t("industries.construction"),
    t("industries.edu"),
    t("industries.retail"),
    t("industries.services"),
    t("industries.fintech"),
    t("industries.finance"),
    t("industries.crypto"),
    t("industries.startups"),
    t("industries.global_ops"),
  ];

  return (
    <div className="min-h-screen bg-background px-4 pb-10 pt-28 text-foreground selection:bg-white/10 lg:px-6">
      <SEO title={t("nav.solutions")} description={t("solutions.hero_desc")} />

      <section className="mx-auto max-w-7xl text-center">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center"
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="section-kicker">
            {t("solutions.hero_badge")}
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-4 text-5xl font-medium tracking-[-0.05em] text-white md:text-7xl">
            {t("solutions.hero_title1")}
            <br />
            <span className="text-white/[0.34]">{t("solutions.hero_title2")}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="section-copy mt-6 max-w-3xl">
            {t("solutions.hero_desc")}
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="surface-panel rounded-[2.4rem] p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <solution.icon className="size-6 text-white/[0.78]" strokeWidth={1.2} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/[0.28]">{solution.id}</span>
              </div>
              <h2 className="text-2xl font-medium text-white">{solution.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/[0.56]">{solution.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="section-kicker">{t("solutions.framework_kicker")}</div>
          <h2 className="section-heading mt-4">{t("solutions.framework_title")}</h2>
          <p className="section-copy mt-5">{t("solutions.framework_subtitle")}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {framework.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="surface-panel rounded-[2rem] p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                <item.icon className="size-6 text-white/[0.78]" strokeWidth={1.3} />
              </div>
              <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/[0.56]">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {sectors.map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/[0.5]"
            >
              {sector}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl">
        <div className="surface-panel-strong rounded-[2.75rem] px-6 py-10 text-center lg:px-12 lg:py-14">
          <h2 className="text-4xl font-medium tracking-[-0.05em] text-white md:text-5xl">{t("solutions.cta_title")}</h2>
          <div className="mt-8">
            <Button size="lg" className="h-14 px-8" asChild>
              <Link to="/contato">
                {t("solutions.cta_button")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
