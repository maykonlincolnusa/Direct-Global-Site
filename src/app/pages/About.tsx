import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";
import { ArrowRight, Code2, Database, Network, ShieldCheck, SquareTerminal, Cpu, Globe2, Zap, Github, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-white/10">
      <SEO title={t('nav.about')} />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background Video Decoration */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 aspect-square z-0 opacity-10 blur-3xl pointer-events-none">
           <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-full">
             <source src="/0_Tech_Electronics_1920x1080.mp4" type="video/mp4" />
           </video>
        </div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center relative z-10"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeUp} className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold mb-6">
              {t('about.architect')}
            </motion.div>
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.04em] mb-8"
            >
              {t('about.title1')}<br />
              <span className="text-white/40">{t('about.title2')}</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="text-xl text-white/50 font-light leading-relaxed mb-10"
            >
              {t('about.description')}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <Button size="lg" className="h-14 px-8 text-base bg-white text-black hover:bg-white/90 rounded-full font-medium w-full sm:w-auto" asChild>
                <Link to="/direct-global">{t('about.cta')}</Link>
              </Button>
              <div className="flex gap-6">
                <a href="https://linkedin.com/in/maykon-lincoln-576a97332/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                  <Linkedin className="size-6" />
                </a>
                <a href="https://github.com/maykonlincolnusa" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                  <Github className="size-6" />
                </a>
                <a href="https://instagram.com/maykonlincoln/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                  <Instagram className="size-6" />
                </a>
                <a href="https://x.com/managermaykon" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={fadeUp}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-white/5 border border-white/10"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
              alt="System Architecture"
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-[#05041a]/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-medium tracking-tight mb-8 leading-tight">
            {t('about.philosophy')}
          </h2>
          <p className="text-white/50 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {t('about.philosophy_desc')}
          </p>
        </div>
      </section>

      {/* Featured Case: Whitestone (USA) */}
      <section className="py-32 relative overflow-hidden bg-[#02010a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/5"
             >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-red-900/10 z-10" />
                <ImageWithFallback
                   src="/whitestone_dallas.png"
                   alt="Global Infrastructure"
                   className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute top-10 left-10 glass p-6 rounded-2xl border border-white/10">
                   <div className="flex items-center gap-2 mb-2">
                      <div className="size-2 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">System Online</span>
                   </div>
                   <span className="text-xl font-medium text-white">Whitestone USA</span>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
             >
                <div className="size-16 rounded-3xl glass flex items-center justify-center border border-red-900/30">
                   <Globe2 className="size-8 text-red-600" />
                </div>
                <h3 className="text-4xl lg:text-6xl font-medium tracking-tight text-white">
                   {t('home.whitestone_title')}
                </h3>
                <p className="text-xl text-white/50 font-light leading-relaxed max-w-lg">
                   {t('home.whitestone_desc')}
                </p>
                <div className="flex gap-4 pt-4">
                   <div className="px-4 py-2 glass rounded-xl border border-white/5">
                      <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-1">{t('home.whitestone_roi_label')}</span>
                      <span className="text-sm font-mono text-white/80">{t('home.whitestone_impact')}</span>
                   </div>
                   <div className="px-4 py-2 glass rounded-xl border border-white/5">
                      <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-1">Architecture</span>
                      <span className="text-sm font-mono text-white/80">Distributed</span>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Scope */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
             {[
               { icon: Globe2, title: t('about.vision_reach'), desc: t('about.vision_reach_desc') },
               { icon: Cpu, title: t('about.vision_silicon'), desc: t('about.vision_silicon_desc') },
               { icon: Zap, title: t('about.vision_roi'), desc: t('about.vision_roi_desc') }
             ].map((item, i) => (
                <div key={i} className="space-y-6">
                   <div className="size-12 rounded-2xl glass flex items-center justify-center">
                      <item.icon className="size-6 text-white" />
                   </div>
                   <h3 className="text-2xl font-medium tracking-tight">{item.title}</h3>
                   <p className="text-white/50 font-light leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-medium tracking-tight mb-6">{t('about.expertise_title')}</h2>
            <p className="text-xl text-white/50 font-light">{t('about.expertise_subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Network,
                title: t('about.expertise_ai_title'),
                desc: t('about.expertise_ai_desc')
              },
              {
                icon: Database,
                title: t('about.expertise_data_title'),
                desc: t('about.expertise_data_desc')
              },
              {
                icon: SquareTerminal,
                title: t('about.expertise_auto_title'),
                desc: t('about.expertise_auto_desc')
              },
              {
                icon: Code2,
                title: t('about.expertise_design_title'),
                desc: t('about.expertise_design_desc')
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10 bg-white/5 rounded-[2rem] hover:bg-white/10 transition-colors group"
              >
                <pillar.icon className="size-8 text-white/40 group-hover:text-white transition-colors mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium mb-3">{pillar.title}</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-32 bg-[#05041a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-medium tracking-tight mb-8">
            {t('about.cta_ready')}
          </h2>
          <Button size="lg" className="h-14 px-10 text-base bg-white text-black hover:bg-white/90 rounded-full font-medium" asChild>
            <Link to="/contato">
              {t('about.cta_start')} <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
