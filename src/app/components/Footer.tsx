import { Link } from "react-router";
import { Linkedin, Mail, Instagram, Github, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-4 pb-8 pt-16 lg:px-6 lg:pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="surface-panel rounded-[2.5rem] px-6 py-8 lg:px-10 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.8fr_0.9fr_1fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="apple-brand-mark" aria-hidden="true" />
                <div>
                  <div className="text-lg font-semibold text-white">Maykon Lincoln</div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/[0.45]">Direct Global</div>
                </div>
              </div>

              <p className="max-w-sm text-sm leading-7 text-white/[0.58]">{t("hero.subtitle")}</p>

              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/55">
                {t("footer.global_ambition")}
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/[0.45]">
                {t("footer.navigation")}
              </h4>
              <div className="space-y-3">
                <Link to="/" className="footer-link block">
                  {t("nav.home")}
                </Link>
                <Link to="/sobre" className="footer-link block">
                  {t("nav.about")}
                </Link>
                <Link to="/solucoes" className="footer-link block">
                  {t("nav.solutions")}
                </Link>
                <Link to="/blog" className="footer-link block">
                  Blog
                </Link>
                <Link to="/direct-global" className="footer-link block">
                  {t("nav.directGlobal")}
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/[0.45]">
                {t("footer.sectors")}
              </h4>
              <div className="space-y-3">
                <div className="footer-link">{t("industries.business")}</div>
                <div className="footer-link">{t("industries.franchise")}</div>
                <div className="footer-link">{t("industries.finance")}</div>
                <div className="footer-link">{t("industries.global_ops")}</div>
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/[0.45]">
                {t("footer.capabilities")}
              </h4>
              <div className="space-y-3">
                <div className="footer-link">{t("footer.capability1")}</div>
                <div className="footer-link">{t("footer.capability2")}</div>
                <div className="footer-link">{t("footer.capability3")}</div>
                <div className="footer-link">{t("footer.capability4")}</div>
              </div>
            </div>

            <div className="space-y-5">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/[0.45]">{t("nav.contact")}</h4>

              <a
                href="mailto:maykon_zero@hotmail.com"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70 hover:bg-white/[0.08] hover:text-white"
              >
                <Mail className="size-4" />
                <span>maykon_zero@hotmail.com</span>
                <ArrowUpRight className="size-4 opacity-40 transition-opacity group-hover:opacity-100" />
              </a>

              <div className="flex gap-3">
                {[
                  { href: "https://linkedin.com/in/maykon-lincoln-576a97332/", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://github.com/maykonlincolnusa", icon: Github, label: "GitHub" },
                  { href: "https://instagram.com/maykonlincoln/", icon: Instagram, label: "Instagram" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white"
                    aria-label={item.label}
                  >
                    <item.icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/6 pt-6 text-[11px] uppercase tracking-[0.2em] text-white/30 md:flex-row md:items-center md:justify-between">
            <p>{t("footer.rights")}</p>
            <div className="flex gap-5">
              <span>{t("footer.privacy")}</span>
              <span>{t("footer.terms")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
