import { motion } from "motion/react";
import { ArrowRight, Clock, Zap, Cpu, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToAuditor = () => {
    const element = document.getElementById("interactive-auditor");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToWorkflow = () => {
    const element = document.getElementById("workflow");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-brand-beige border-b border-brand-slate/10">
      
      {/* Decorative Editorial Background card box */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-80 h-96 bg-brand-taupe -z-10 border border-white/20 hidden lg:block opacity-60 rounded-sm shadow-sm" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Grid Layout for Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
          
          {/* Left indicator column (hidden on mobile, matches Editorial style) */}
          <div className="hidden lg:flex lg:col-span-1 border-r border-brand-slate/10 py-6 flex-col justify-between items-start text-left">
            <span className="rotate-180 [writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] font-sans text-brand-slate/40">
              FACILISSIMO WEB ● 2026
            </span>
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-brand-slate">
              ED. 01
            </span>
          </div>

          {/* Main Hero content */}
          <div className="lg:col-span-11 lg:pl-16 flex flex-col justify-center text-left">
            
            {/* Tag block */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 text-[10px] font-sans uppercase tracking-[0.25em] text-brand-muted-lavender font-bold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-muted-lavender" />
              <span>SITI WEB VELOCI ● AUTOMAZIONI INTELLIGENTI</span>
            </motion.div>

            {/* Giant class editorial headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-serif text-brand-slate tracking-tight font-medium max-w-4xl leading-[1.05] mb-6"
            >
              Costruisco <span className="italic font-normal text-brand-muted-lavender">intelligenza digitale</span> per la tua attività.
            </motion.h1>

            {/* Subtext description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sans text-brand-slate-light text-base sm:text-lg max-w-2xl leading-[1.7] mb-10"
            >
              Riduci lo stress tecnologico e focalizzati sul tuo business reale. Ti offro un approccio{" "}
              <strong className="text-brand-slate font-semibold underline decoration-brand-muted-lavender/40 decoration-2 underline-offset-4">Lean</strong>: siti web leggeri come una piuma e flussi automatici intelligenti integrati con l'AI di Gemini per riconquistare la tua libertà.
            </motion.p>

            {/* Premium action buttons with linear accents */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-8"
            >
              <button 
                onClick={scrollToAuditor}
                className="inline-flex items-center justify-center gap-2 bg-brand-slate hover:bg-brand-slate-light text-brand-beige px-8 py-4 text-xs font-sans uppercase tracking-[0.25em] font-semibold border border-transparent transition-all duration-300 shadow-sm"
              >
                Fai il Test Digitale Gratis
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              
              {/* Editorial line trigger */}
              <div 
                onClick={scrollToWorkflow}
                className="flex items-center gap-4 group cursor-pointer py-3"
              >
                <div className="w-12 h-[1px] bg-brand-slate group-hover:w-16 transition-all duration-300" />
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-brand-slate">
                  Scopri il Metodo Lean
                </span>
              </div>
            </motion.div>

            {/* Footer markers */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.65 }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-brand-slate/10 max-w-3xl"
            >
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-muted-lavender mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-slate">Salva +15 Ore</h4>
                  <p className="text-[11px] font-sans text-brand-slate-light leading-snug mt-0.5">Automazioni intelligenti che lavorano al posto tuo.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-brand-muted-lavender mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-slate">Core Web Vitals</h4>
                  <p className="text-[11px] font-sans text-brand-slate-light leading-snug mt-0.5">Siti ultra-veloci pensati per convertire da subito.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cpu className="w-4 h-4 text-brand-muted-lavender mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-slate">Copilota Gemini</h4>
                  <p className="text-[11px] font-sans text-brand-slate-light leading-snug mt-0.5">Integrazione intelligente per testi e flussi operativi.</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
}
