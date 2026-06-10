import { Zap, ShieldCheck, Sparkles, AlertCircle, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

export default function NewWebsiteSection() {
  const scrollToAuditor = () => {
    const element = document.getElementById("interactive-auditor");
    if (element) {
      const headerOffset = 70;
      let actualTop = 0;
      let currentElem: HTMLElement | null = element;
      while (currentElem) {
        actualTop += currentElem.offsetTop;
        currentElem = currentElem.offsetParent as HTMLElement | null;
      }
      const offsetPosition = actualTop - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="new-website" className="relative bg-[#1a181b] py-20 px-4 sm:px-6 lg:px-8 text-stone-100 overflow-hidden">
      {/* Soft overlay background image representing organized focus and Notion setup */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none select-none mix-blend-lighten">
        <img
          src="/src/assets/images/bg_cats_focus_1779702833665.png"
          alt="Organized focus and Notion setup"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a181b] via-transparent to-[#1a181b]" />
      </div>

      {/* Decorative premium radial glow */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-muted-lavender/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full bg-brand-badge/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Intro Tag */}
        <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-muted-lavender animate-pulse" />
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-stone-400 font-bold">
            IL PUNTO DI SVOLTA
          </span>
        </div>

        {/* Two-column major container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Core Pitch & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center md:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-50 leading-tight">
              Il tuo sito attuale è un <span className="italic font-normal text-brand-muted-lavender underline decoration-brand-muted-lavender/30 decoration-wavy underline-offset-8">freno</span> o un <span className="font-serif text-brand-badge">motore</span>?
            </h2>

            <p className="text-sm sm:text-base font-sans text-stone-300 leading-relaxed font-medium">
              Se ti vergogni a condividere il tuo link o se ogni piccola modifica ti sembra un'impresa impossibile, è il momento di resettare.
            </p>

            <p className="text-xs sm:text-sm font-sans text-stone-100/90 leading-relaxed max-w-2xl">
              Non ti serve un "nuovo sito" nel senso tradizionale. Ti serve una piattaforma di crescita. Con Facilissimo Web, eliminiamo le zavorre tecniche (codice sporco, lentezza, complessità) e costruiamo uno spazio che puoi gestire, aggiornare e vivere con serenità.
            </p>

            {/* Simplicity Guarantee Box */}
            <div className="mt-8 border-l-2 border-brand-muted-lavender/40 pl-4 py-3 bg-brand-slate-light/10 rounded-r-md text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-badge font-bold block mb-1">
                La Garanzia di Semplicità
              </span>
              <p className="text-[11px] font-sans text-stone-300 leading-relaxed">
                La nostra missione è la tua libertà. Se dopo la consegna ti sembra ancora complicato o non sai come muoverti, non abbiamo fatto bene il nostro lavoro. Ti prendiamo per mano finché non ti sentirai perfettamente a tuo agio.
              </p>
            </div>

            {/* CTA & Microcopy */}
            <div className="pt-6 flex flex-col items-center md:items-start gap-3">
              <button
                onClick={scrollToAuditor}
                className="w-full sm:w-auto text-center px-8 py-4 bg-stone-50 hover:bg-stone-200 text-[#1a181b] text-xs font-sans uppercase tracking-[0.2em] font-bold rounded-sm shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Rivoluziona il tuo spazio online
              </button>
              <span className="text-[10px] text-stone-400 font-sans italic tracking-wide">
                (Consulenza gratuita, zero impegno, massima chiarezza)
              </span>
            </div>
          </div>

          {/* Column 2: Bullet points highlights & Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Value Point 1 */}
            <div className="bg-[#242125] p-5 rounded-md border border-stone-800 flex gap-4 transition-all hover:border-stone-700">
              <div className="w-10 h-10 rounded-sm bg-brand-slate/30 border border-stone-700 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-stone-300" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-semibold text-stone-100">
                  Velocità Reale
                </h3>
                <p className="text-[11px] font-sans text-stone-400 leading-relaxed mt-1">
                  Niente più tempi di caricamento infiniti. I tuoi visitatori restano, non scappano.
                </p>
              </div>
            </div>

            {/* Value Point 2 */}
            <div className="bg-[#242125] p-5 rounded-md border border-stone-800 flex gap-4 transition-all hover:border-stone-700">
              <div className="w-10 h-10 rounded-sm bg-brand-slate/30 border border-stone-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-stone-300" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-semibold text-stone-100">
                  Proprietà Totale
                </h3>
                <p className="text-[11px] font-sans text-stone-400 leading-relaxed mt-1">
                  Il sito è tuo. Zero vincoli, zero abbonamenti a piattaforme che ti tengono in ostaggio.
                </p>
              </div>
            </div>

            {/* Value Point 3 */}
            <div className="bg-[#242125] p-5 rounded-md border border-stone-800 flex gap-4 transition-all hover:border-stone-700">
              <div className="w-10 h-10 rounded-sm bg-brand-slate/30 border border-stone-700 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-stone-300" />
              </div>
              <div>
                <h3 className="font-serif text-sm font-semibold text-stone-100">
                  Facilità di Gestione
                </h3>
                <p className="text-[11px] font-sans text-stone-400 leading-relaxed mt-1">
                  Ti insegno a renderlo vivo. Senza mal di testa.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
