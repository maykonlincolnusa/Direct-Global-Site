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
    { code: "pt", label: "Português" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  const currentLanguage = i18n.language.split("-")[0];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="apple-nav-shell flex items-center justify-between px-4 py-3 lg:px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="apple-brand-mark" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.02em] text-foreground">Maykon Lincoln</span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Direct Global</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] p-1">
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

          <div className="hidden lg:flex items-center gap-3">
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
                    onClick={() => i18n.changeLanguage(lang.code)}
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
            className="lg:hidden rounded-full border border-white/10 bg-white/[0.06] p-2 text-foreground"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
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

              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`flex-1 rounded-full border px-3 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                      currentLanguage === lang.code
                        ? "border-white bg-white text-black"
                        : "border-white/10 bg-white/5 text-white/60"
                    }`}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>

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
