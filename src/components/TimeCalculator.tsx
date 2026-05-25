import { useState } from "react";
import { Clock, Gift, Smile, Coffee, Sparkles } from "lucide-react";

export default function TimeCalculator() {
  // Slider states
  const [socialHours, setSocialHours] = useState<number>(4);
  const [dataEntryHours, setDataEntryHours] = useState<number>(3);
  const [emailHours, setEmailHours] = useState<number>(5);
  const [invoiceHours, setInvoiceHours] = useState<number>(2);

  const totalWeeklyWasted = socialHours + dataEntryHours + emailHours + invoiceHours;
  
  // Automations can save on average 75% of this time
  const weeklyHoursSaved = Math.round(totalWeeklyWasted * 0.75 * 10) / 10;
  const yearlyHoursSaved = Math.round(weeklyHoursSaved * 48); // 48 working weeks

  // Equivalents
  const vacationDays = Math.round(yearlyHoursSaved / 8); // 8-hour working days
  const booksRead = Math.round(yearlyHoursSaved / 6);   // average 6 hours per book
  const espressoEnjoyed = Math.round(yearlyHoursSaved * 4); // 15 mins per relaxing coffee

  return (
    <section id="calculator" className="py-24 bg-brand-beige border-b border-brand-slate/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto pb-6 border-b border-brand-slate/10">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-muted-lavender font-bold block mb-3">
            CALCOLATORE DEL TEMPO LIBERATO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-slate mt-2 leading-tight font-medium">
            Quanto tempo ti costa <span className="italic font-normal text-brand-muted-lavender">la complessità digitale?</span>
          </h2>
          <p className="font-sans text-brand-slate-light text-xs sm:text-sm mt-4 leading-relaxed">
            Usa i cursori qui sotto per stimare le ore che sprechi attualmente ogni settimana in compiti manuali e scopri cosa potresti fare con il tempo recuperato.
          </p>
        </div>

        {/* Calculator layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Sliders Panel */}
          <div className="lg:col-span-6 bg-white rounded-sm border border-brand-slate/10 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-serif text-lg font-medium text-brand-slate mb-8 leading-tight">
                Le tue attività manuali ricorrenti (ore/settimana)
              </h3>

              <div className="space-y-6">
                {/* Slider 1 */}
                <div className="space-y-2.5">
                  <div className="flex justify-between text-xs font-semibold text-brand-slate font-sans uppercase tracking-wider text-[11px]">
                    <span className="flex items-center gap-2">
                      📱 Pubblicazione social media
                    </span>
                    <span className="font-mono text-brand-muted-lavender">{socialHours} ORE</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={socialHours}
                    onChange={(e) => setSocialHours(parseInt(e.target.value))}
                    className="w-full h-1 bg-brand-taupe rounded-sm appearance-none cursor-pointer accent-brand-slate"
                  />
                  <p className="text-[10px] font-sans text-brand-muted-lavender/85 italic leading-normal">
                    Scrittura post, ricerca hashtag e caricamento su diverse piattaforme.
                  </p>
                </div>

                {/* Slider 2 */}
                <div className="space-y-2.5">
                  <div className="flex justify-between text-xs font-semibold text-brand-slate font-sans uppercase tracking-wider text-[11px]">
                    <span className="flex items-center gap-2">
                      🗄️ Inserimento dati & CRM
                    </span>
                    <span className="font-mono text-brand-muted-lavender">{dataEntryHours} ORE</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={dataEntryHours}
                    onChange={(e) => setDataEntryHours(parseInt(e.target.value))}
                    className="w-full h-1 bg-brand-taupe rounded-sm appearance-none cursor-pointer accent-brand-slate"
                  />
                  <p className="text-[10px] font-sans text-brand-muted-lavender/85 italic leading-normal">
                    Spostare lead dal sito a fogli di calcolo, sistemare rubriche o note clienti.
                  </p>
                </div>

                {/* Slider 3 */}
                <div className="space-y-2.5">
                  <div className="flex justify-between text-xs font-semibold text-brand-slate font-sans uppercase tracking-wider text-[11px]">
                    <span className="flex items-center gap-2">
                      ✉️ Scrittura email ripetitive
                    </span>
                    <span className="font-mono text-brand-muted-lavender">{emailHours} ORE</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={emailHours}
                    onChange={(e) => setEmailHours(parseInt(e.target.value))}
                    className="w-full h-1 bg-brand-taupe rounded-sm appearance-none cursor-pointer accent-brand-slate"
                  />
                  <p className="text-[10px] font-sans text-brand-muted-lavender/85 italic leading-normal">
                    Inviare conferme d'appuntamento, mandare cataloghi o sollecitare feedback.
                  </p>
                </div>

                {/* Slider 4 */}
                <div className="space-y-2.5">
                  <div className="flex justify-between text-xs font-semibold text-brand-slate font-sans uppercase tracking-wider text-[11px]">
                    <span className="flex items-center gap-2">
                      🧾 Creazione manuale preventivi
                    </span>
                    <span className="font-mono text-brand-muted-lavender">{invoiceHours} ORE</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={invoiceHours}
                    onChange={(e) => setInvoiceHours(parseInt(e.target.value))}
                    className="w-full h-1 bg-brand-taupe rounded-sm appearance-none cursor-pointer accent-brand-slate"
                  />
                  <p className="text-[10px] font-sans text-brand-muted-lavender/85 italic leading-normal">
                    Digitare importi, compilare PDF preventivi, scadenze dei pagamenti.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-brand-slate/10 pt-6 mt-10 flex justify-between items-center text-[10px] font-sans uppercase tracking-wider text-brand-muted-lavender">
              <span>*Stima conservativa basata su automazioni standard</span>
              <span className="font-bold text-brand-slate">Totale: {totalWeeklyWasted} ore / sett.</span>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-6 bg-brand-slate text-brand-beige rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-brand-muted-lavender/10 rounded-full blur-2xl" />
            
            <div className="space-y-8">
              <span className="inline-flex items-center gap-1.5 bg-brand-muted-lavender/25 text-brand-beige border border-brand-muted-lavender/30 text-[9px] font-sans font-bold px-2.5 py-1.5 rounded-sm uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-brand-badge animate-spin" />
                RISPARMIO STIMATO METODO LEAN
              </span>

              <div>
                <h3 className="font-serif text-base text-brand-taupe leading-tight">Ore liberate dal lavoro manuale:</h3>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-5xl sm:text-6xl font-serif font-bold text-brand-beige tracking-tight">
                    {weeklyHoursSaved}
                  </span>
                  <span className="text-xs sm:text-sm font-sans uppercase tracking-wider text-brand-taupe font-semibold">
                    ore risparmiate / sett.
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-xl font-serif font-semibold text-brand-muted-lavender">
                    ~{yearlyHoursSaved}
                  </span>
                  <span className="text-xs font-sans text-brand-taupe font-light">
                    ore totali risparmiate ogni anno
                  </span>
                </div>
              </div>

              {/* Free Time Gained Equivalents */}
              <div className="pt-6 border-t border-brand-muted-lavender/20 space-y-4">
                <h4 className="font-serif text-sm font-semibold text-brand-taupe flex items-center gap-2 uppercase tracking-wider text-[11px]">
                  <Gift className="w-4 h-4 text-brand-badge" />
                  Equivalente Gained Time:
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Vacation card */}
                  <div className="bg-white/5 border border-white/10 p-4 rounded-sm text-center">
                    <Smile className="w-4 h-4 mx-auto text-brand-badge" />
                    <span className="block text-xl font-serif font-bold text-brand-room-stats mt-2">
                      {vacationDays}
                    </span>
                    <span className="block text-[9px] uppercase font-sans tracking-wider text-brand-taupe/80 mt-1 leading-tight font-semibold">
                      giorni di vacanza
                    </span>
                  </div>

                  {/* Books card */}
                  <div className="bg-white/5 border border-white/10 p-4 rounded-sm text-center">
                    <Coffee className="w-4 h-4 mx-auto text-brand-badge" />
                    <span className="block text-xl font-serif font-bold text-brand-room-stats mt-2">
                      {booksRead}
                    </span>
                    <span className="block text-[9px] uppercase font-sans tracking-wider text-brand-taupe/80 mt-1 leading-tight font-semibold">
                      libri letti
                    </span>
                  </div>

                  {/* Coffee card */}
                  <div className="bg-white/5 border border-white/10 p-4 rounded-sm text-center">
                    <Clock className="w-4 h-4 mx-auto text-brand-badge" />
                    <span className="block text-xl font-serif font-bold text-brand-room-stats mt-2">
                      {espressoEnjoyed}
                    </span>
                    <span className="block text-[9px] uppercase font-sans tracking-wider text-brand-taupe/80 mt-1 leading-tight font-semibold">
                      caffè in relax
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-brand-muted-lavender/25 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-[11px] text-brand-taupe font-sans italic leading-none">
                La semplicità paga sempre.
              </span>
              <button
                onClick={() => {
                  const el = document.getElementById("interactive-auditor");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-5 py-3 bg-brand-cream hover:bg-white text-brand-slate text-[10px] font-sans uppercase tracking-[0.15em] font-bold rounded-sm text-center transition-all shadow-sm"
              >
                Inizia ora a salvare tempo
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
