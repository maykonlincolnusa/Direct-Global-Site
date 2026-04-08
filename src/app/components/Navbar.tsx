import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/sobre", label: t("nav.about") },
    { href: "/solucoes", label: t("nav.solutions") },
    { href: "/direct-global", label: t("nav.directGlobal") },
  ];

  const languages = [
    { code: "pt", label: "Português", shortLabel: "PT" },
    { code: "en", label: "English", shortLabel: "EN" },
    { code: "es", label: "Español", shortLabel: "ES" },
  ];

  const currentLanguage = i18n.language.split("-")[0];
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="apple-nav-shell px-4 py-3 lg:px-6">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <div className="apple-brand-mark" aria-hidden="true" />
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-semibold tracking-[0.02em] text-foreground">Maykon Lincoln</span>
                <span className="truncate text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Direct Global</span>
              </div>
            </Link>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] p-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-full px-4 py-2 text-sm transition-all ${
                    location.pathname === link.href
                      ? "bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.16)]"
                      : "text-muted-foreground hover:bg-white/8 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="apple-language-trigger">
                    <Globe className="size-4" />
                    <span>{currentLanguage.toUpperCase()}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass min-w-[160px] rounded-2xl border-white/10 bg-black/70 p-2 backdrop-blur-2xl">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="cursor-pointer rounded-xl px-3 py-2 hover:bg-white/10"
                    >
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button asChild className="px-6">
                <Link to="/contato">{t("nav.contact")}</Link>
              </Button>
            </div>

            <button
              className="rounded-full border border-white/10 bg-white/[0.06] p-2 text-foreground lg:hidden"
              onClick={() => setMobileMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>

          <div className="mt-3 lg:hidden">
            <div className="grid grid-cols-3 gap-1 rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => changeLanguage(lang.code)}
                  aria-label={`Change language to ${lang.label}`}
                  className={`rounded-[1rem] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${
                    currentLanguage === lang.code
                      ? "bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.16)]"
                      : "text-white/62 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {lang.shortLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden px-4 lg:hidden lg:px-6"
          >
            <div className="apple-nav-shell space-y-4 px-5 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-base transition-all ${
                    location.pathname === link.href
                      ? "bg-white text-black"
                      : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Button asChild className="w-full">
                <Link to="/contato" onClick={() => setMobileMenuOpen(false)}>
                  {t("nav.contact")}
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
