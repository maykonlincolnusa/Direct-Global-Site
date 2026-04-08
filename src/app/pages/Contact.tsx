import { type FormEvent, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  challenge: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  company: "",
  challenge: "",
};

export function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState<ContactFormState>(initialState);

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  const handleWhatsApp = () => {
    const whatsappNumber = "5521975961920";
    const message = encodeURIComponent("Olá Maykon, gostaria de solicitar um diagnóstico executivo.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Diagnóstico executivo - ${form.company || form.name || "Lead"}`);
    const body = encodeURIComponent(
      [
        `Nome: ${form.name || "-"}`,
        `Email: ${form.email || "-"}`,
        `Empresa: ${form.company || "-"}`,
        "",
        "Desafio:",
        form.challenge || "-",
      ].join("\n"),
    );

    window.location.href = `mailto:maykon_zero@hotmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background px-4 pb-10 pt-28 text-foreground selection:bg-white/10 lg:px-6">
      <SEO title={t("nav.contact")} />

      <section className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            className="surface-panel-strong rounded-[2.75rem] px-6 py-8 lg:px-8 lg:py-10"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="section-kicker">
              {t("contact.hero_badge")}
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-4 text-5xl font-medium tracking-[-0.05em] text-white md:text-7xl">
              {t("contact.hero_title1")}
              <br />
              <span className="text-white/[0.34]">{t("contact.hero_title2")}</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="section-copy mt-6 max-w-xl">
              {t("contact.hero_desc")}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 space-y-4">
              <a
                href="mailto:maykon_zero@hotmail.com"
                className="surface-panel flex items-center gap-4 rounded-[1.75rem] px-5 py-4 text-white/[0.72] hover:text-white"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <Mail className="size-5" strokeWidth={1.5} />
                </div>
                <span className="font-light">maykon_zero@hotmail.com</span>
              </a>

              <div className="surface-panel flex items-center gap-4 rounded-[1.75rem] px-5 py-4 text-white/[0.72]">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <MapPin className="size-5" strokeWidth={1.5} />
                </div>
                <span className="font-light">{t("contact.address_tag")}</span>
              </div>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="surface-panel flex w-full items-center gap-4 rounded-[1.75rem] px-5 py-4 text-left text-white/[0.72] hover:text-white"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-[#25D366]/15">
                  <MessageCircle className="size-5 text-[#25D366]" strokeWidth={1.5} />
                </div>
                <span className="font-light">+55 21 97596-1920</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="surface-panel rounded-[2.75rem] px-6 py-8 lg:px-8 lg:py-10"
          >
            <div className="section-kicker">{t("contact.form_title")}</div>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl">
              {t("contact.form_title")}
            </h2>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-xs uppercase tracking-[0.22em] text-white/40">{t("contact.form_name")}</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    className="input-shell"
                    placeholder={t("contact.form_name_placeholder")}
                  />
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-xs uppercase tracking-[0.22em] text-white/40">{t("contact.form_email")}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    className="input-shell"
                    placeholder={t("contact.form_email_placeholder")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-xs uppercase tracking-[0.22em] text-white/40">{t("contact.form_company")}</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(event) => handleChange("company", event.target.value)}
                  className="input-shell"
                  placeholder={t("contact.form_company_placeholder")}
                />
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-xs uppercase tracking-[0.22em] text-white/40">{t("contact.form_challenge")}</label>
                <textarea
                  value={form.challenge}
                  onChange={(event) => handleChange("challenge", event.target.value)}
                  className="input-shell min-h-[170px] resize-none"
                  placeholder={t("contact.form_challenge_placeholder")}
                />
              </div>

              <Button type="submit" className="mt-3 h-14 w-full">
                {t("contact.form_button")}
                <ArrowRight className="size-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
