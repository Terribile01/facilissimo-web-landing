import { motion } from "motion/react";
import { Star, Quote, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  statLabel: string;
  statVal: string;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: "rev1",
      name: "Alessia Mattei",
      role: "Founder & Creative Director",
      company: "Mattei Studio",
      text: "Lavorare con Teresa e l'efficienza di Gemini ha cambiato tutto. Il mio sito WordPress precedente caricava in 6 secondi ed era pieno di plugin costosi che crashavano continuamente. Ora ho una velocità sbalorditiva e posso aggiornare il mio catalogo in un attimo, senza scadenze SaaS bloccanti.",
      statLabel: "Caricamento",
      statVal: "0.8s"
    },
    {
      id: "rev2",
      name: "Enrico Franchi",
      role: "Consulente Finanziario",
      company: "Franchi & Partners",
      text: "Passavo ore ogni settimana a scaricare manualmente i contratti compilati sul sito e caricarli sul CRM, mandando mail di conferma. L'automazione creata da Facilissimo Web fa tutto questo da sola in un secondo. Ho ricominciato a leggere libri e a godermi i fine settimana in serenità.",
      statLabel: "Tempo Guadagnato",
      statVal: "+14h / sett."
    },
    {
      id: "rev3",
      name: "Marta Salvatori",
      role: "Co-founder & E-commerce Editor",
      company: "Atelier Salvatori",
      text: "La strategia di comunicazione sociale coordinata da Teresa è stata l'anello mancante. E il sito è leggerissimo, superando tutti i parametri dei Core Web Vitals richiesti da Google. I nostri ordini organicamente guidati da SEO sono cresciuti immediatamente.",
      statLabel: "Traffico Organico",
      statVal: "+45% SEO"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-cream border-t border-brand-slate/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 pb-6 border-b border-brand-slate/10">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-muted-lavender font-bold block mb-3">
            ESPERIENZE DI SUCCESSO REALI
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-slate mt-2 leading-tight font-medium">
            I risultati di chi ha scelto <span className="italic font-normal text-brand-muted-lavender">il Lean Approach.</span>
          </h2>
          <p className="font-sans text-brand-slate-light text-xs sm:text-sm mt-3 leading-relaxed">
            Oltre lo sviluppo tecnico: creiamo percorsi di valore digitale che restituiscono concretezza alla tua vita professionale.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {reviews.map((rev, idx) => {
            return (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-sm border border-brand-slate/10 p-8 flex flex-col justify-between hover:bg-brand-taupe/15 transition-all relative h-full min-h-[380px]"
              >
                <div>
                  {/* Quotes Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-0.5 text-[#A1917B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-brand-slate/10" />
                  </div>

                  {/* Feedback Text */}
                  <p className="font-sans text-brand-slate-light text-xs sm:text-sm italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                {/* Profile and custom badge */}
                <div className="mt-8 pt-6 border-t border-brand-slate/10">
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-serif text-base font-semibold text-brand-slate">
                        {rev.name}
                      </h4>
                      <p className="text-[10px] font-sans uppercase tracking-wider text-brand-muted-lavender mt-0.5">
                        {rev.role}, <strong className="font-bold text-brand-slate">{rev.company}</strong>
                      </p>
                    </div>

                    {/* Stat callout in the testimonial card, matching visual cues */}
                    <div className="bg-brand-beige border border-brand-slate/10 rounded-sm px-3.5 py-2 text-right font-mono text-brand-slate shrink-0">
                      <span className="block text-xs font-bold font-serif -mb-1 text-brand-slate">
                        {rev.statVal}
                      </span>
                      <span className="text-[8px] uppercase tracking-widest text-[#A1917B] font-sans font-bold block mt-1">
                        {rev.statLabel}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Brand stats footer */}
        <div className="mt-16 bg-brand-slate text-brand-beige p-8 rounded-sm border border-transparent shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-brand-muted-lavender/35 rounded-sm flex items-center justify-center text-brand-badge font-serif text-base font-bold shrink-0 bg-brand-slate-light">
              100%
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-brand-beige uppercase tracking-wider text-xs">
                Lighthouse Compliance Guarantee
              </h4>
              <p className="text-xs text-brand-taupe font-sans mt-0.5">
                Non mettiamo online nessun sito che non superi i test tecnici di prestazione e accessibilità.
              </p>
            </div>
          </div>
          <button 
            onClick={() => {
              const el = document.getElementById("interactive-auditor");
              if (el) {
                const headerOffset = 80;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
            className="w-full md:w-auto px-5 py-3.5 bg-brand-cream text-brand-slate hover:bg-white text-[10px] font-sans uppercase tracking-[0.15em] font-bold rounded-sm flex items-center justify-center gap-1.5 shrink-0 transition-all shadow-sm border border-brand-slate/10"
          >
            Fai Anche Tu il Test
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
