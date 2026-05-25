import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ClipboardList, ArrowRight } from "lucide-react";
import { WorkflowStep } from "../types";

export default function WorkflowTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: WorkflowStep[] = [
    {
      phase: "Fase 01",
      title: "Auditing & Bozza d'Integrazione",
      description: "Analizziamo attentamente la tua configurazione attuale. Definiamo quali compiti ripetitivi rimuovere e creiamo una bozza strategica dei flussi e del layout del sito, approvata in collaborazione con Teresa.",
      deliverables: [
        "Mappa strutturale del sito (Site Map & UX Flow)",
        "Audit di velocità del sito precedente o della concorrenza",
        "Pianificazione dei moduli di automazione desiderati"
      ]
    },
    {
      phase: "Fase 02",
      title: "Sviluppo Lean WordPress",
      description: "Costruiamo il tuo sito usando la filosofia Lean su WordPress. Evitiamo page builder pesanti come Elementor o Divi, assemblando il tutto tramite Gutenberg Nativo con Astra e Spectra per un codice puro, ultra-rapido e ottimizzato per i motori di ricerca.",
      deliverables: [
        "Installazione tema Astra ultra-performante",
        "Progettazione layout moderni con blocchi Spectra",
        "Assenza totale di plugin pesanti e bloatware",
        "Garanzia di totale proprietà intellettuale sul codice"
      ]
    },
    {
      phase: "Fase 03",
      title: "Sezione Automazione Flussi",
      description: "Rolleggiamo moduli, account e CRM in modo che dialoghino fluidamente. Le richieste di contatto o i lead passano automaticamente a fogli di calcolo, inviano mail di conferma personalizzate o notificano il tuo team sul telefono.",
      deliverables: [
        "Integrazione moduli intelligenti senza stress",
        "Configurazione autoinvio email e preventivi",
        "Sincronizzazione dati clienti in autopilota",
        "Integrazione assistenti personalizzati AI Gemini"
      ]
    },
    {
      phase: "Fase 04",
      title: "Ottimizzazione Asset e Lancio",
      description: "Prima di andare online, Gemini esegue una 'Digital Asset Optimization' totale: compressione delle immagini in WebP, compressione video lossless, pulizia del database e audit Core Web Vitals per garantire caricamenti fulminei.",
      deliverables: [
        "Velocità di caricamento inferiore a 1.2 secondi",
        "Punteggio Lighthouse vicino al 100/100",
        "SEO nativo predisposto all'indicizzazione immediata",
        "Consegna chiavi in mano con supporto iniziale dedicato"
      ]
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-brand-cream border-b border-brand-slate/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto pb-6 border-b border-brand-slate/10">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-muted-lavender font-bold block mb-3">
            IL PERCORSO CHIAVI IN MANO
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-slate mt-2 leading-tight font-medium">
            Come portiamo online il tuo progetto <span className="italic font-normal">in pochi giorni.</span>
          </h2>
          <p className="font-sans text-brand-slate-light text-xs sm:text-sm mt-3 leading-relaxed">
            Un metodo di lavoro lineare, chiaro e testato per toglierti qualsiasi mal di testa tecnologico.
          </p>
        </div>

        {/* Workflow Component: Tabs and Content side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Timeline Steps Accordion Panel */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-sm border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? "bg-white border-brand-slate shadow-sm"
                      : "bg-brand-beige/40 border-brand-slate/10 hover:bg-brand-cream/80"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-[9px] uppercase font-bold text-brand-muted-lavender tracking-[0.15em]">
                      {step.phase}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-slate animate-ping" />
                    )}
                  </div>
                  <h3 className="font-serif text-base font-semibold text-brand-slate mt-1">
                    {step.title}
                  </h3>
                  
                  {isActive && (
                    <p className="font-sans text-brand-slate-light text-xs mt-2 leading-relaxed">
                      {step.description.substring(0, 120)}...
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Timeline Detailed Content Display with Anim */}
          <div className="lg:col-span-7 bg-white rounded-sm border border-brand-slate/10 p-8 lg:p-10 min-h-[440px] flex flex-col justify-between shadow-sm relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <span className="inline-flex items-center gap-1 bg-brand-beige border border-brand-slate/10 text-brand-muted-lavender text-[10px] font-sans uppercase tracking-widest font-bold px-3 py-1.5 rounded-sm">
                    {steps[activeStep].phase}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brand-slate mt-4 leading-tight">
                    {steps[activeStep].title}
                  </h3>
                </div>

                <p className="font-sans text-brand-slate-light text-xs sm:text-sm leading-relaxed">
                  {steps[activeStep].description}
                </p>

                <div className="pt-6 border-t border-brand-slate/10">
                  <h4 className="font-serif text-sm font-semibold text-brand-slate mb-4 flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-brand-muted-lavender" />
                    Deliverables Rilasciati in questa fase:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {steps[activeStep].deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex gap-2.5 text-xs font-sans text-brand-slate-light items-start">
                        <span className="text-brand-muted-lavender select-none font-bold">—</span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Simulated Bottom Navigation */}
            <div className="mt-10 pt-6 border-t border-brand-slate/10 flex justify-between items-center">
              <span className="text-[10px] font-sans uppercase tracking-wider text-brand-muted-lavender font-bold">
                Passo {activeStep + 1} di {steps.length}
              </span>
              <div className="flex gap-4">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="px-4 py-2 border border-brand-slate/10 hover:border-brand-slate rounded-sm text-xs font-sans font-semibold hover:bg-brand-beige transition-all disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  Indietro
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="px-4 py-2 bg-brand-slate text-brand-beige text-xs font-sans font-semibold hover:bg-brand-slate-light transition-all flex items-center gap-2 rounded-sm"
                >
                  Avanti
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
