import { Link } from "react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
import { BrainCircuit, Database, Fingerprint, Globe2, MoveRight, Rocket, Target, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";

const generateData = () =>
  [...Array(20)].map((_, index) => ({
    time: index,
    value: 40 + Math.random() * 40,
  }));

function LiveMetrics() {
  const { t } = useTranslation();
  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData((previous) => [
        ...previous.slice(1),
        {
          time: previous[previous.length - 1].time + 1,
          value: 40 + Math.random() * 40,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full flex-col gap-4 sm:gap-6">
      <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        {[
          { label: t("dg.metrics_performance"), value: "99.8%" },
          { label: t("dg.metrics_throughput"), value: "12.4k", suffix: "req/s" },
          { label: t("dg.metrics_latency"), value: "42ms" },
        ].map((metric) => (
          <div key={metric.label} className="surface-panel rounded-[1.75rem] p-4">
            <span className="block text-[10px] uppercase tracking-[0.24em] text-white/[0.36]">
              {metric.label}
            </span>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">{metric.value}</span>
              {metric.suffix ? (
                <span className="pb-1 text-[10px] uppercase tracking-[0.2em] text-white/30">{metric.suffix}</span>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="surface-panel h-56 rounded-[2rem] p-4 opacity-80 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity={0.05} />
                <stop offset="50%" stopColor="#7ca9ff" stopOpacity={0.95} />
                <stop offset="100%" stopColor="#ffffff" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Line type="monotone" dataKey="value" stroke="url(#lineGradient)" strokeWidth={3} dot={false} isAnimationActive={false} />
            <XAxis hide />
            <YAxis hide domain={[0, 100]} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function DirectGlobal() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background px-4 pb-10 pt-28 text-foreground selection:bg-white/10 lg:px-6">
      <SEO
        title={t("nav.directGlobal")}
        description="O Motor de Escala: a infraestrutura que converte operações isoladas em sistemas de alta conversão."
      />

      <section className="mx-auto max-w-7xl">
        <div className="hero-shell px-6 py-10 lg:px-12 lg:py-14">
          <div className="absolute inset-0">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-20 grayscale">
              <source src="/0_Tech_Electronics_1920x1080.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#070b15]/30 via-[#070b15]/70 to-[#070b15]" />
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/60">
                <span className="size-2 rounded-full bg-[#7ca9ff]" />
                {t("home.dg_badge")}
              </div>

              <div className="space-y-5">
                <h1 className="text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl md:text-7xl lg:text-[5.75rem]">
                  {t("home.dg_title")}
                  <br />
                  <span className="text-white/[0.34]">{t("home.dg_subtitle")}</span>
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/[0.58] sm:text-lg sm:leading-8 md:text-xl">
                  {t("home.dg_description")}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="h-14 px-8" asChild>
                  <Link to="/solucoes">
                    {t("home.dg_cta")}
                    <MoveRight className="size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8" asChild>
                  <Link to="/contato">{t("home.dg_cta_button")}</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="surface-panel-strong rounded-[2.5rem] p-5 lg:p-6"
            >
              <LiveMetrics />
              <div className="mt-4 flex flex-col gap-2 px-2 text-center text-[10px] uppercase tracking-[0.22em] text-white/[0.32] sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <span>Integrated Intelligence</span>
                <span>Network Primary</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="section-kicker">{t("dg.integrated_systems")}</div>
          <h2 className="section-heading">
            {t("home.dg_integrated_title")}
            <br />
            <span className="text-white/[0.34]">{t("home.dg_integrated_subtitle")}</span>
          </h2>
          <p className="section-copy max-w-xl">{t("home.dg_integrated_desc")}</p>
        </motion.div>

        <div className="grid gap-4">
          {[
            { title: t("home.dg_feature1_title"), desc: t("home.dg_feature1_desc"), icon: Fingerprint },
            { title: t("home.dg_feature2_title"), desc: t("home.dg_feature2_desc"), icon: Globe2 },
            { title: t("home.dg_feature3_title"), desc: t("home.dg_feature3_desc"), icon: Zap },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="surface-panel flex flex-col gap-5 rounded-[2rem] p-6 sm:flex-row"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                <feature.icon className="size-5 text-white/75" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/[0.56]">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {[
            { name: t("dg.modules_marketing"), icon: Rocket },
            { name: t("dg.modules_sales"), icon: Target },
            { name: t("dg.modules_automations"), icon: Zap },
            { name: t("dg.modules_data"), icon: Database },
            { name: t("dg.modules_ai"), icon: BrainCircuit },
          ].map((module, index) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="surface-panel rounded-[2rem] p-5"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                <module.icon className="size-5 text-white/[0.78]" />
              </div>
              <div className="text-base font-medium text-white/[0.84]">{module.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl">
        <div className="surface-panel-strong rounded-[2.75rem] px-6 py-10 text-center lg:px-12 lg:py-14">
          <p className="section-kicker mb-5">{t("nav.directGlobal")}</p>
          <h2 className="text-4xl font-medium tracking-[-0.05em] text-white md:text-6xl">
            {t("home.dg_cta_footer")}
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="h-14 px-8" asChild>
              <Link to="/contato">{t("home.dg_cta_button")}</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8" asChild>
              <Link to="/sobre">{t("home.identity_cta")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
