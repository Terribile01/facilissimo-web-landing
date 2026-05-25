import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Sparkles, Check, Send, Heart } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    service: "lean-sites",
    budget: "standard",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formFields.name || !formFields.email) return;

    // Simulate sending Strategy Booking Session request
    setSubmitted(true);
    // Persist in localStorage to remember they booked
    localStorage.setItem("facilissimo_booking", JSON.stringify(formFields));
  };

  return (
    <section id="contact" className="py-24 bg-brand-beige border-t border-brand-slate/10 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-muted-lavender/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info content (col-span-12 on Mobile, 5 on Desktop) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-muted-lavender font-bold block mb-3">
              SESSIONE STRATEGICA GRATUITA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-slate leading-tight font-medium">
              Prendiamoci un caffè virtuale <span className="italic font-normal text-brand-muted-lavender">di 15 minuti.</span>
            </h2>
            <p className="font-sans text-brand-slate-light text-xs sm:text-sm leading-relaxed">
              Trovare la quadra del proprio business nel digitale è possibile. Raccontaci la tua idea o descrivi i tuoi blocchi quotidiani. Teresa capirà il tuo Tone of Voice e Gemini progetterà i dettagli per rimuovere ogni stress.
            </p>

            <div className="space-y-4 pt-6 border-t border-brand-slate/10">
              <h4 className="font-serif text-sm font-semibold text-brand-slate uppercase tracking-wider text-[11px]">Cosa succederà in questa chiamata:</h4>
              
              <div className="space-y-4">
                <div className="flex gap-3.5 text-xs font-sans text-brand-slate-light items-start">
                  <div className="w-5 h-5 border border-brand-slate/15 rounded-sm flex items-center justify-center font-mono font-bold text-brand-slate-light text-[10px] bg-brand-cream/60 shrink-0">1</div>
                  <p className="leading-normal"><strong>Filtro dei blocchi</strong>: Identificheremo qual è la reale fonte di fatica tecnologica e lentezza.</p>
                </div>
                <div className="flex gap-3.5 text-xs font-sans text-brand-slate-light items-start">
                  <div className="w-5 h-5 border border-brand-slate/15 rounded-sm flex items-center justify-center font-mono font-bold text-brand-slate-light text-[10px] bg-brand-cream/60 shrink-0">2</div>
                  <p className="leading-normal"><strong>Stima dei Risparmi</strong>: Definiremo un preventivo basato sulle ore di libertà che guadagnerai realmente.</p>
                </div>
                <div className="flex gap-3.5 text-xs font-sans text-brand-slate-light items-start">
                  <div className="w-5 h-5 border border-brand-slate/15 rounded-sm flex items-center justify-center font-mono font-bold text-brand-slate-light text-[10px] bg-brand-cream/60 shrink-0">3</div>
                  <p className="leading-normal"><strong>Trasparenza al 100%</strong>: Riceverai un link fiduciario dove visualizzare il codice, senza canoni mensili nascosti.</p>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-sans text-brand-muted-lavender italic flex items-center gap-2 pt-4">
              <Heart className="w-4 h-4 text-brand-muted-lavender shrink-0" />
              <span>Teresa risponde personalmente a tutte le richieste entro 24 ore lavorative.</span>
            </div>
          </div>

          {/* Right booking Form (col-span-12 on Mobile, 7 on Desktop) */}
          <div className="lg:col-span-7 bg-white rounded-sm border border-brand-slate/10 p-6 sm:p-8 shadow-sm">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="pb-4 border-b border-brand-slate/10">
                    <h3 className="font-serif text-lg font-medium text-brand-slate flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-muted-lavender" />
                      Prenota Sessione Strategica
                    </h3>
                    <p className="text-[11px] text-brand-muted-lavender font-sans mt-0.5">
                      Compila i recapiti per bloccare lo slot in agenda con Teresa.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-slate-light">
                      Il tuo nome completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Es: Maria Teresa Rogani"
                      value={formFields.name}
                      onChange={(e) => setFormFields({...formFields, name: e.target.value})}
                      className="w-full bg-brand-beige/20 border border-brand-slate/15 rounded-sm px-4 py-3 text-xs focus:border-brand-slate focus:outline-none transition-all text-brand-slate font-sans"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-slate-light">
                      E-mail professionale *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Es: maria@studiorogani.com"
                      value={formFields.email}
                      onChange={(e) => setFormFields({...formFields, email: e.target.value})}
                      className="w-full bg-brand-beige/20 border border-brand-slate/15 rounded-sm px-4 py-3 text-xs focus:border-brand-slate focus:outline-none transition-all text-brand-slate font-sans"
                    />
                  </div>

                  {/* Service selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-slate-light">
                      Servizio Digitale Primario
                    </label>
                    <div className="relative">
                      <select
                        value={formFields.service}
                        onChange={(e) => setFormFields({...formFields, service: e.target.value})}
                        className="w-full bg-brand-beige/20 border border-brand-slate/15 rounded-sm px-4 py-3 text-xs focus:border-brand-slate focus:outline-none transition-all text-brand-slate font-sans appearance-none cursor-pointer"
                      >
                        <option value="lean-sites">Sito Web Lean WordPress (Astra/Spectra)</option>
                        <option value="automations">Automazione Flussi & Risparmio Tempo</option>
                        <option value="social-comm">Posizionamento & Strategia Social</option>
                        <option value="all-inclusive">Ecosistema Completo (Sito + Automazioni + AI)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-slate-light text-xs font-bold">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Range indicator budget */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-slate-light">
                      Priorità o Scadenza del Progetto
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: "urgent", label: "Entro 1 mese" },
                        { id: "standard", label: "Prossimi 2-3 mesi" },
                        { id: "explorer", label: "Solo Studio / Analisi" }
                      ].map((bud) => {
                        const isSelected = formFields.budget === bud.id;
                        return (
                          <button
                            key={bud.id}
                            type="button"
                            onClick={() => setFormFields({...formFields, budget: bud.id})}
                            className={`py-2 px-3 border rounded-sm text-center text-xs font-sans transition-all cursor-pointer ${
                              isSelected
                                ? "bg-brand-slate border-brand-slate text-brand-beige font-semibold shadow-sm"
                                : "bg-white border-brand-slate/15 text-brand-slate-light hover:bg-brand-beige"
                            }`}
                          >
                            {bud.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project description box */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-slate-light">
                      Parlaci brevemente del tuo progetto
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Quali canali usi? Qual è l'attuale fattore di frustrazione con il tuo sito web?"
                      value={formFields.notes}
                      onChange={(e) => setFormFields({...formFields, notes: e.target.value})}
                      className="w-full bg-brand-beige/20 border border-brand-slate/15 rounded-sm px-4 py-3 text-xs focus:border-brand-slate focus:outline-none transition-all text-brand-slate font-sans resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-slate hover:bg-brand-slate-light text-brand-beige py-4 rounded-sm text-xs font-sans uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 border border-transparent transition-all shadow-sm active:translate-y-0"
                  >
                    <span>Richiedi Chiamata Conoscitiva</span>
                    <Send className="w-3.5 h-3.5 text-brand-badge ml-1" />
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center max-w-sm mx-auto space-y-6"
                >
                  <div className="w-12 h-12 bg-brand-cream border border-brand-slate/15 rounded-sm flex items-center justify-center text-brand-slate mx-auto">
                    <Check className="w-6 h-6 font-bold" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 bg-brand-beige border border-brand-slate/10 text-brand-muted-lavender text-[9px] font-sans font-bold px-2.5 py-1.5 rounded-sm uppercase tracking-widest">
                      <Sparkles className="w-3.5 h-3.5 text-brand-badge animate-spin" />
                      Slot Riservato con Successo
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-brand-slate">
                      Grazie, {formFields.name}!
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-brand-slate-light leading-relaxed">
                    Teresa ha ricevuto i tuoi dettagli progettuali. Controllerà l'analisi tecnica di Gemini per elaborare idee pratiche e ti invierà un invito email entro 24 ore lavorative.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 hover:bg-brand-cream text-brand-slate font-sans text-[10px] uppercase tracking-wider rounded-sm border border-brand-slate/10 transition-colors mx-auto block mt-4 font-bold bg-brand-beige"
                  >
                    modifica risposte
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
