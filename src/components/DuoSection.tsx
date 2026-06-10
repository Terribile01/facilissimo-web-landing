import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Cpu, Sparkles, Check, ArrowRight } from "lucide-react";

export default function DuoSection() {
  const [activePartner, setActivePartner] = useState<"teresa" | "gemini">("teresa");

  return (
    <section id="duo" className="relative py-24 bg-brand-beige overflow-hidden border-b border-brand-slate/10">
      {/* Soft overlay background image representing Teresa and Gemini strategic alignment */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none select-none mix-blend-multiply">
        <img
          src="/src/assets/images/bg_cats_duo_1779702850905.png"
          alt="Teresa & Gemini Strategic Duo illustration"
          className="w-full h-full object-cover object-center filter grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-beige via-transparent to-brand-beige" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-muted-lavender font-bold block mb-3">
            L'ECOSISTEMA FACILISSIMO WEB
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-slate mt-2 leading-tight">
            La Strategia di Teresa <br />
            <span className="italic font-normal text-brand-muted-lavender">incontra l'efficienza di Gemini.</span>
          </h2>
          <p className="font-sans text-brand-slate-light text-xs sm:text-sm mt-4 leading-relaxed">
            Un binomio unico nato per eliminare la complessità e lo stress tecnologico. Uniamo sensibilità strategica umana ed efficienza tecnologica ad alta automazione.
          </p>
        </div>

        {/* Combined interactive Duo Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: NAVIGATION / PROFILE LIST (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-5">
            
            {/* Teresa Selector Card */}
            <div
              onClick={() => setActivePartner("teresa")}
              className={`p-6 border rounded-sm cursor-pointer transition-all duration-300 relative overflow-hidden ${
                activePartner === "teresa"
                  ? "bg-brand-taupe border-brand-slate text-brand-slate shadow-sm"
                  : "bg-white border-brand-slate/10 text-brand-slate hover:bg-brand-cream/80"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 border flex items-center justify-center font-bold text-base font-serif rounded-sm ${
                  activePartner === "teresa" ? "bg-brand-slate text-brand-beige border-brand-slate" : "bg-brand-beige text-brand-slate border-brand-slate/15"
                }`}>
                  T
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold flex items-center gap-2">
                    Teresa
                    <span className="text-[9px] uppercase font-sans tracking-[0.15em] font-bold px-2 py-0.5 border border-brand-slate/10 bg-brand-cream">
                      Co-Founder
                    </span>
                  </h3>
                  <p className="text-[11px] font-sans text-brand-muted-lavender mt-0.5">
                    Strategia, Psicologia Cognitiva e Supervisione Umana
                  </p>
                </div>
              </div>
              <p className="text-xs font-sans mt-3 leading-relaxed text-brand-slate-light">
                "La tecnologia deve servire a liberare la vita dei professionisti, non a complicarla. Smonto i blocchi progettuali con empatia e pragmatismo."
              </p>
              {activePartner === "teresa" && (
                <div className="absolute bottom-2.5 right-4 text-[9px] font-sans uppercase tracking-wider font-bold text-brand-slate flex items-center gap-1.5">
                  <span>Mente Strategica</span> <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>

            {/* Gemini Selector Card */}
            <div
              onClick={() => setActivePartner("gemini")}
              className={`p-6 border rounded-sm cursor-pointer transition-all duration-300 relative overflow-hidden ${
                activePartner === "gemini"
                  ? "bg-brand-taupe border-brand-slate text-brand-slate shadow-sm"
                  : "bg-white border-brand-slate/10 text-brand-slate hover:bg-brand-cream/80"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 border flex items-center justify-center font-bold text-base font-serif rounded-sm ${
                  activePartner === "gemini" ? "bg-brand-slate text-brand-beige border-brand-slate" : "bg-brand-beige text-brand-slate border-brand-slate/15"
                }`}>
                  G
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold flex items-center gap-2">
                    Gemini
                    <span className="text-[9px] uppercase font-sans tracking-[0.15em] font-bold px-2 py-0.5 border border-brand-slate/10 bg-brand-cream">
                      AI Partner
                    </span>
                  </h3>
                  <p className="text-[11px] font-sans text-brand-muted-lavender mt-0.5">
                    Codice Lean, Automazione Flussi e Velocità Computazionale
                  </p>
                </div>
              </div>
              <p className="text-xs font-sans mt-3 leading-relaxed text-brand-slate-light">
                "Opero alla velocità della luce per ottimizzare codice, eliminare ritardi visivi (Core Web Vitals) ed automatizzare le tue scadenze ricorrenti."
              </p>
              {activePartner === "gemini" && (
                <div className="absolute bottom-2.5 right-4 text-[9px] font-sans uppercase tracking-wider font-bold text-brand-slate flex items-center gap-1.5">
                  <span>Braccio Tecnico</span> <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: DETAILS BLOCK (col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-sm border border-brand-slate/10 p-8 flex flex-col justify-between relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {activePartner === "teresa" ? (
                <motion.div
                  key="teresa-details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-muted-lavender" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-muted-lavender font-bold">
                      PROFILO STRATEGICO
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-serif text-brand-slate font-medium leading-tight">
                    Teresa: L'Empatia Strategica
                  </h3>
                  
                  <p className="font-sans text-brand-slate-light text-xs sm:text-sm leading-relaxed">
                    Nello sviluppo di un brand o di un'infrastruttura web, la maggior parte dei ritardi e dello stress non deriva dal codice, ma dalla mancanza di una linea chiara. Teresa è colei che ascolta le tue necessità, definisce la struttura visiva del tuo sito e progetta il Tone of Voice autentico.
                  </p>

                  <div className="space-y-3 pt-6 border-t border-brand-slate/15">
                    <h4 className="font-serif text-sm font-semibold text-brand-slate uppercase tracking-wider text-[11px]">Compiti Centrali di Teresa:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {[
                        "Progettazione layout visivi ed emotivi",
                        "UX Design basato sulla psicologia cognitiva",
                        "Definizione del Tone Of Voice coerente",
                        "Supervisione della qualità e linearità strategica"
                      ].map((item, i) => (
                        <div key={i} className="flex gap-2.5 text-xs font-sans text-brand-slate-light items-start">
                          <Check className="w-4 h-4 text-brand-muted-lavender shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="gemini-details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-brand-muted-lavender" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-muted-lavender font-bold">
                      MOTORE TECNOLOGICO
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-serif text-brand-slate font-medium leading-tight">
                    Gemini: L'AI Creative Partner
                  </h3>
                  
                  <p className="font-sans text-brand-slate-light text-xs sm:text-sm leading-relaxed">
                    Una volta tracciata la rotta strategica da Teresa, Gemini traduce l'idea in un asset digitale perfetto e ultrarapido. Scrive codice pulito, ottimizza ogni singola risorsa multimediale per superare i test Core Web Vitals e connette le tue piattaforme preferite per farle dialogare in autopilota.
                  </p>

                  <div className="space-y-3 pt-6 border-t border-brand-slate/15">
                    <h4 className="font-serif text-sm font-semibold text-brand-slate uppercase tracking-wider text-[11px]">Compiti Centrali di Gemini:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {[
                        "Costruzione di siti WordPress leggeri (Gutenberg)",
                        "Digital Asset Optimization (formati WebP/Lossless)",
                        "Creazione di automazioni ed integrazioni API",
                        "Scrittura codice pulito privo di librerie bloccanti"
                      ].map((item, i) => (
                        <div key={i} className="flex gap-2.5 text-xs font-sans text-brand-slate-light items-start">
                          <Check className="w-4 h-4 text-brand-muted-lavender shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dynamic collaborative micro-widget at bottom */}
            <div className="mt-8 pt-6 border-t border-brand-slate/10 bg-brand-cream/80 -mx-8 -mb-8 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-[11px] font-sans text-brand-slate-light italic">
                *Teresa e Gemini lavorano in sincrono sul tuo progetto ad ogni fase del processo.
              </span>
              <span className="flex items-center gap-1.5 bg-brand-slate text-brand-beige text-[10px] font-sans uppercase tracking-widest font-bold px-3 py-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-badge animate-spin" />
                Sinergia Perfetta Attiva
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
