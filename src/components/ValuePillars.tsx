import { motion } from "motion/react";
import { 
  Globe, 
  MessageSquare, 
  Bot, 
  ArrowUpRight 
} from "lucide-react";
import { PillarCard } from "../types";

export default function ValuePillars() {
  const pillars: PillarCard[] = [
    {
      id: "lean-sites",
      title: "Siti Web SEO & Performance",
      description: "Creiamo siti web nativi, veloci come fulmini e privi di sovrastrutture pesanti. Non usiamo page builder costosi, preferendo l'ecosistema puro Gutenberg + Astra + Spectra.",
      details: [
        "Piena Proprietà & Indipendenza (addio canoni mensili nascosti)",
        "Zero bloatware (pagine caricate in meno di 1 secondo)",
        "Ottimizzazione totale per i Core Web Vitals",
        "SEO nativo che piace a Google"
      ],
      iconName: "globe",
      metricLabel: "Lighthouse Speed Score",
      metricVal: "99/100",
      metricDiff: "Fino a +400% di velocità"
    },
    {
      id: "social-comm",
      title: "Social Media Strategy",
      description: "La comunicazione non deve essere rumore, ma un asset coerente. Sviluppiamo piani di posizionamento ed organigrammi editoriali studiati per rispecchiare il tuo reale valore.",
      details: [
        "Tone of Voice autentico e distintivo",
        "Coerenza narrativa strategica fra social e sito",
        "Targeting empatico dei tuoi clienti ideali",
        "Immagini e grafiche ottimizzate ad alte conversioni"
      ],
      iconName: "message",
      metricLabel: "Fattore di Coinvolgimento",
      metricVal: "+34%",
      metricDiff: "Incremento tasso conversione"
    },
    {
      id: "practical-ai",
      title: "AI Pratica & Automazioni",
      description: "Smontiamo i pregiudizi sulla tecnologia. Progettiamo flussi di automazione reali e assistenti AI personalizzati che eliminano i passaggi complessi e le ore di lavoro ripetitivo.",
      details: [
        "Autopilota per email, preventivi e scadenze",
        "Chatbot empatici alimentati ufficialmente da Gemini",
        "Riduzione immediata dello stress digitale",
        "Estrazione automatica dei dati di business"
      ],
      iconName: "bot",
      metricLabel: "Ore Settimanali Liberate",
      metricVal: "15 ore",
      metricDiff: "Tempo recuperato per te"
    }
  ];

  return (
    <section id="pillars" className="py-24 bg-brand-cream border-y border-brand-slate/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left md:flex justify-between items-end mb-16 pb-8 border-b border-brand-slate/10">
          <div className="max-w-2xl">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-muted-lavender font-bold block mb-3">
              I PILASTRI DEL SUCCESSO DIGITALE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-slate leading-tight font-medium">
              Mettere ordine nel digitale, <span className="italic font-normal">un pilastro alla volta.</span>
            </h2>
          </div>
          <p className="font-sans text-brand-slate-light text-xs sm:text-sm mt-4 md:mt-0 max-w-sm leading-relaxed">
            Eliminiamo il peso e la confusione dalle soluzioni tecnologiche, creando ecosistemi snelli e performanti di tua esclusiva proprietà.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white rounded-sm border border-brand-slate/10 p-8 flex flex-col justify-between hover:bg-brand-taupe/10 transition-all duration-300 relative group overflow-hidden"
              >
                
                <div>
                  {/* Icon with sharp border */}
                  <div className="w-10 h-10 border border-brand-slate/15 flex items-center justify-center text-brand-slate mb-8 rounded-sm bg-brand-beige">
                    {pillar.iconName === "globe" && <Globe className="w-5 h-5 text-brand-slate" />}
                    {pillar.iconName === "message" && <MessageSquare className="w-5 h-5 text-brand-slate" />}
                    {pillar.iconName === "bot" && <Bot className="w-5 h-5 text-brand-slate" />}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-brand-slate leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-brand-slate-light text-xs sm:text-sm mt-3 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bullet points list (Editorial Style using neat dashes) */}
                  <ul className="mt-8 space-y-3.5 border-t border-brand-slate/10 pt-6">
                    {pillar.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs font-sans text-brand-slate-light">
                        <span className="text-brand-muted-lavender select-none font-bold">—</span>
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Simulated lightweight Widget Metrics */}
                <div className="mt-10 pt-6 border-t border-brand-slate/10">
                  <div className="flex justify-between items-center text-[10px] font-sans uppercase tracking-wider mb-2">
                    <span className="text-brand-muted-lavender font-bold">
                      {pillar.metricLabel}
                    </span>
                    <span className="text-brand-slate font-bold tracking-widest text-[9px] border border-brand-slate/10 px-1.5 py-0.5 uppercase bg-brand-cream font-sans">
                      CORE ASSET
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl md:text-3xl font-serif text-brand-slate font-medium">
                      {pillar.metricVal}
                    </span>
                    <span className="text-[10px] font-sans text-brand-muted-lavender font-semibold flex items-center gap-0.5">
                      <ArrowUpRight className="w-3 h-3" />
                      {pillar.metricDiff}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
