import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = "5521975961920";
  const message = encodeURIComponent("Olá Maykon, gostaria de saber mais sobre o Sistema Direct.");
  const url = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-full border border-white/10 bg-[#0f1726]/90 px-3 py-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl hover:-translate-y-1 active:scale-[0.98]"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -5 }}
      aria-label="WhatsApp"
    >
      <span className="flex size-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)]">
        <MessageCircle className="size-6" fill="currentColor" />
      </span>
      <span className="hidden pr-1 text-sm font-medium tracking-[0.02em] sm:inline">WhatsApp</span>
    </motion.a>
  );
}
