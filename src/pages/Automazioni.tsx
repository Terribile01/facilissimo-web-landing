import { Link } from "react-router-dom";
import ShowcasePanel from "../components/ShowcasePanel";
import { motion } from "motion/react";
import { Zap, Bot, BarChart3 } from "lucide-react";

export default function Automazioni() {
  return (
    <div className="pt-20 pb-12">
      {/* Hero Section for Automazioni */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-slate font-bold mb-6">
            Automazioni <span className="text-brand-muted-lavender italic">Intelligenti</span>
          </h1>
          <p className="font-sans text-brand-slate-light text-lg md:text-xl leading-relaxed">
            Elimina i task ripetitivi e libera il tuo potenziale creativo. Progettiamo flussi di lavoro che lavorano per te, 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Velocità Esecutiva",
              desc: "Riduci drasticamente i tempi di risposta e gestione dei processi aziendali."
            },
            {
              icon: <Bot className="w-6 h-6" />,
              title: "AI Integrata",
              desc: "Sfrutta i modelli linguistici più avanzati per automatizzare la comunicazione."
            },
            {
              icon: <BarChart3 className="w-6 h-6" />,
              title: "Scalabilità",
              desc: "Cresci senza aumentare il carico di lavoro manuale o il personale operativo."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm border border-brand-taupe/30 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 bg-brand-muted-lavender/10 text-brand-muted-lavender flex items-center justify-center rounded-xl mb-6">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-brand-slate font-bold mb-3">{item.title}</h3>
              <p className="font-sans text-brand-slate-light text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual Showcase integrated here */}
      <ShowcasePanel />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="bg-brand-slate text-brand-beige p-12 rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-muted-lavender/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <h2 className="text-3xl font-serif mb-6 relative z-10">Pronto ad automatizzare?</h2>
          <p className="text-brand-taupe max-w-2xl mx-auto mb-8 relative z-10">
            Analizziamo i tuoi processi attuali e costruiamo un'infrastruttura personalizzata che elimina gli sprechi di tempo.
          </p>
          <Link
            to="/test-ai"
            className="inline-block bg-brand-beige text-brand-slate px-8 py-4 rounded-xl font-bold hover:bg-brand-muted-lavender hover:text-white transition-all relative z-10"
          >
            Inizia il Test Gratuito
          </Link>
        </div>
      </div>
    </div>
  );
}
