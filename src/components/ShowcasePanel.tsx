import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Users, 
  Mail, 
  MousePointer, 
  Heart, 
  ArrowLeft, 
  ArrowRight, 
  ChevronDown, 
  Sparkles,
  Zap,
  Clock,
  Code
} from "lucide-react";

export default function ShowcasePanel() {
  const [activeTab, setActiveTab] = useState<"performance" | "usability" | "code">("performance");
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null);

  return (
    <div id="visual-showcase" className="w-full max-w-6xl mx-auto px-4 py-20 border-b border-brand-slate/10">
      <div className="text-center mb-16">
        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-muted-lavender font-bold block mb-3">
          ESTETICA & EFFICIENZA FUNZIONALE
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-slate mt-2 leading-tight">
          Un design scattante, <span className="italic font-normal text-brand-muted-lavender">leggero come una piuma</span>
        </h2>
        <p className="font-sans text-brand-slate-light mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Ispirato ai principi del <strong>"Lean Approach"</strong>, creiamo interfacce che uniscono una gerarchia visiva impeccabile alle massime prestazioni di caricamento (Core Web Vitals). Naviga l'anteprima interattiva qui sotto.
        </p>
      </div>

      {/* Tabs - Editorial Line Style */}
      <div className="flex justify-center border-b border-brand-slate/10 mb-12 max-w-2xl mx-auto">
        {[
          { id: "performance", label: "Core Web Vitals", desc: "Ottimizzazione e Velocità", icon: Zap },
          { id: "usability", label: "UI Intuitiva", desc: "Esperienza d'uso fluida", icon: Heart },
          { id: "code", label: "Codice Proprietario", desc: "Gutenberg nativo senza bloat", icon: Code }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 text-center py-4 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 relative ${
                isActive
                  ? "text-brand-slate font-bold text-xs"
                  : "text-brand-slate/40 hover:text-brand-slate text-[11px]"
              }`}
            >
              {tab.label}
              {isActive && (
                <motion.div 
                  layoutId="active-showcase-tab"
                  className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-slate" 
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Board */}
      <div className="bg-white rounded-3xl border border-brand-taupe p-4 lg:p-8 shadow-sm relative overflow-hidden">
        {/* Floating details banner explaining what you click */}
        <AnimatePresence>
          {selectedWidget && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="absolute bottom-4 left-4 right-4 md:left-8 md:right-8 bg-brand-slate text-brand-beige p-4 rounded-xl shadow-lg z-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div>
                <h4 className="font-serif text-base font-semibold text-brand-beige">
                  {selectedWidget === "stats" && "Moduli di Analitica Leggeri"}
                  {selectedWidget === "actions" && "Componenti ad Alta Conversione"}
                  {selectedWidget === "calendar" && "Gestione Temporale Smart"}
                  {selectedWidget === "creative" && "Ottimizzazione delle Risorse Visive"}
                </h4>
                <p className="text-xs font-sans text-brand-taupe mt-1">
                  {selectedWidget === "stats" && "Caricamento asincrono dei dati d'analitica con zero script di terze parti bloccanti."}
                  {selectedWidget === "actions" && "Stati d'interazione studiati al pixel. Pulsanti e form ottimizzati per massimizzare i click."}
                  {selectedWidget === "calendar" && "Calendari ed elementi interattivi leggeri, pronti all'uso senza librerie esterne pesanti."}
                  {selectedWidget === "creative" && "Immagini convertite dinamicamente in formato WebP compresso e caricate con lazy-loading nativo."}
                </p>
              </div>
              <button 
                onClick={() => setSelectedWidget(null)}
                className="px-3 py-1 bg-brand-muted-lavender/30 text-brand-beige hover:bg-brand-muted-lavender/50 text-xs font-semibold rounded-lg transition-colors border border-brand-muted-lavender/40"
              >
                Chiudi info
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Highlight overlays depending on activeTab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12">
          
          {/* TOP METRICS STATS BAR */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Metric Card 1 */}
            <div 
              onClick={() => setSelectedWidget("stats")}
              className={`bg-brand-beige/50 border rounded-2xl p-5 cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                activeTab === "performance" ? "ring-2 ring-brand-muted-lavender border-brand-slate-light" : "border-brand-taupe"
              } hover:shadow-sm`}
            >
              <div className="absolute top-2 right-2 bg-brand-muted-lavender/10 text-brand-slate text-[9px] px-1.5 py-0.5 rounded font-mono">
                HTML Nativo
              </div>
              <p className="text-xs text-brand-muted-lavender font-semibold uppercase tracking-wider flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> Total Subscribers
              </p>
              <p className="text-2xl md:text-3xl font-serif text-brand-slate mt-1.5 font-semibold">
                71,842{" "}
                <span className="text-xs font-sans text-brand-muted-lavender font-light">
                  from 70,946
                </span>
              </p>
              <div className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-700 border border-green-100">
                +12%
              </div>
            </div>

            {/* Metric Card 2 */}
            <div 
              onClick={() => setSelectedWidget("stats")}
              className={`bg-brand-beige/50 border rounded-2xl p-5 cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                activeTab === "performance" ? "ring-2 ring-brand-muted-lavender border-brand-slate-light" : "border-brand-taupe"
              } hover:shadow-sm`}
            >
              <div className="absolute top-2 right-2 bg-brand-muted-lavender/10 text-brand-slate text-[9px] px-1.5 py-0.5 rounded font-mono">
                Zero Jitter
              </div>
              <p className="text-xs text-brand-muted-lavender font-semibold uppercase tracking-wider flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> Avg. Open Rate
              </p>
              <p className="text-2xl md:text-3xl font-serif text-brand-slate mt-1.5 font-semibold">
                58.16%{" "}
                <span className="text-xs font-sans text-brand-muted-lavender font-light">
                  from 56.14%
                </span>
              </p>
              <div className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-700 border border-green-100">
                +2.02%
              </div>
            </div>

            {/* Metric Card 3 */}
            <div 
              onClick={() => setSelectedWidget("stats")}
              className={`bg-brand-beige/50 border rounded-2xl p-5 cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                activeTab === "performance" ? "ring-2 ring-brand-muted-lavender border-brand-slate-light" : "border-brand-taupe"
              } hover:shadow-sm`}
            >
              <div className="absolute top-2 right-2 bg-brand-muted-lavender/10 text-brand-slate text-[9px] px-1.5 py-0.5 rounded font-mono">
                SEO Ready
              </div>
              <p className="text-xs text-brand-muted-lavender font-semibold uppercase tracking-wider flex items-center gap-1">
                <MousePointer className="w-3.5 h-3.5" /> Avg. Click Rate
              </p>
              <p className="text-2xl md:text-3xl font-serif text-brand-slate mt-1.5 font-semibold">
                24.57%{" "}
                <span className="text-xs font-sans text-brand-muted-lavender font-light">
                  from 28.62%
                </span>
              </p>
              <div className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100">
                -4.05%
              </div>
            </div>

          </div>

          {/* LOWER BODY: CARDS & BUTTONS */}
          
          {/* Grid Side Left: Custom Slate Actions */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Action Item 1: Team access */}
            <div 
              onClick={() => setSelectedWidget("actions")}
              className={`md:col-span-4 bg-brand-muted-lavender/25 rounded-2xl p-4 border cursor-pointer hover:bg-brand-muted-lavender/30 transition-all ${
                activeTab === "usability" ? "ring-2 ring-brand-slate border-brand-slate" : "border-brand-taupe"
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-white/40 flex items-center justify-center text-brand-slate mb-3">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm font-semibold text-brand-slate">
                Team Access
              </h4>
              <p className="text-[10px] font-sans text-brand-slate-light mt-1.5 leading-relaxed">
                Control who can edit and approve your content setup.
              </p>
            </div>

            {/* Action Item 2: Notifications */}
            <div 
              onClick={() => setSelectedWidget("actions")}
              className={`md:col-span-4 bg-brand-muted-lavender/25 rounded-2xl p-4 border cursor-pointer hover:bg-brand-muted-lavender/30 transition-all ${
                activeTab === "usability" ? "ring-2 ring-brand-slate border-brand-slate" : "border-brand-taupe"
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-white/40 flex items-center justify-center text-brand-slate mb-3">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm font-semibold text-brand-slate">
                Notification
              </h4>
              <p className="text-[10px] font-sans text-brand-slate-light mt-1.5 leading-relaxed">
                Customize alert dispatchers when tasks get automated.
              </p>
            </div>

            {/* Action Item 3: Reports */}
            <div 
              onClick={() => setSelectedWidget("actions")}
              className={`md:col-span-4 bg-brand-muted-lavender/25 rounded-2xl p-4 border cursor-pointer hover:bg-brand-muted-lavender/30 transition-all ${
                activeTab === "usability" ? "ring-2 ring-brand-slate border-brand-slate" : "border-brand-taupe"
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-white/40 flex items-center justify-center text-brand-slate mb-3">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm font-semibold text-brand-slate">
                Web Reports
              </h4>
              <p className="text-[10px] font-sans text-brand-slate-light mt-1.5 leading-relaxed">
                Export website response rate as a unified asset file.
              </p>
            </div>

            {/* Simulated Buttons matrix below */}
            <div className="md:col-span-12 bg-brand-beige/40 rounded-2xl border border-brand-taupe p-4">
              <h5 className="text-[10px] font-mono text-brand-muted-lavender uppercase tracking-widest mb-3">
                Stati dei Pulsanti Ottimizzati HTML5
              </h5>
              <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono mb-2 text-brand-muted-lavender border-b border-brand-taupe pb-1.5">
                <div>Default</div>
                <div>Hover</div>
                <div>Active</div>
                <div>Disabled</div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 items-center">
                {/* Primary Button Flow */}
                <button className="bg-brand-slate-light text-brand-beige py-1.5 text-xs font-semibold rounded-lg transition-all cursor-default text-[10px]">
                  Primary
                </button>
                <button className="bg-brand-slate text-brand-beige py-1.5 text-xs font-semibold rounded-lg shadow-sm cursor-default text-[10px]">
                  Primary
                </button>
                <button className="bg-neutral-900 text-brand-beige py-1.5 text-xs font-semibold rounded-lg shadow-inner ring-1 ring-white/20 cursor-default text-[10px]">
                  Primary
                </button>
                <button className="bg-brand-muted-lavender/35 text-white/80 py-1.5 text-xs font-semibold rounded-lg cursor-not-allowed text-[10px]" disabled>
                  Primary
                </button>

                {/* Secondary Button Flow */}
                <button className="bg-brand-taupe text-brand-slate py-1.5 text-xs font-semibold rounded-lg transition-all cursor-default text-[10px]">
                  Secondary
                </button>
                <button className="bg-brand-muted-lavender/20 text-brand-slate py-1.5 text-xs font-semibold rounded-lg cursor-default text-[10px]">
                  Secondary
                </button>
                <button className="bg-brand-muted-lavender/30 text-brand-slate py-1.5 text-xs font-semibold rounded-lg shadow-inner cursor-default text-[10px]">
                  Secondary
                </button>
                <button className="bg-brand-taupe/50 text-brand-muted-lavender/60 py-1.5 text-xs font-semibold rounded-lg cursor-not-allowed text-[10px]" disabled>
                  Secondary
                </button>
              </div>
            </div>

          </div>

          {/* Grid Side Right: Calendar / Creative Illustration */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* July Calendar card */}
            <div 
              onClick={() => setSelectedWidget("calendar")}
              className={`bg-white rounded-2xl p-4 border cursor-pointer hover:shadow-sm transition-all flex flex-col justify-between ${
                activeTab === "usability" ? "ring-2 ring-brand-slate border-brand-slate" : "border-brand-taupe"
              }`}
            >
              <div className="flex justify-between items-center mb-2 border-b border-brand-taupe pb-2">
                <button className="p-1 rounded-md hover:bg-brand-beige text-brand-slate">
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-semibold text-brand-slate">July 2026</span>
                <button className="p-1 rounded-md hover:bg-brand-beige text-brand-slate">
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-mono text-brand-muted-lavender">
                <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                <div className="text-brand-taupe">28</div><div className="text-brand-taupe">29</div><div className="text-brand-taupe">30</div><div className="text-brand-taupe">1</div><div>2</div><div>3</div><div>4</div>
                <div>5</div><div>6</div><div>7</div><div className="bg-brand-slate text-brand-beige rounded p-0.5 font-bold">8</div><div>9</div><div>10</div><div>11</div>
                <div>12</div><div>13</div><div>14</div><div className="bg-brand-muted-lavender/30 text-brand-slate rounded p-0.5">15</div><div>16</div><div>17</div><div>18</div>
              </div>
              <div className="mt-3 text-[10px] font-sans text-brand-muted-lavender text-center">
                Autopilota impostato su <strong>8 Luglio</strong>
              </div>
            </div>

            {/* Design Principles / Abstract visual Card */}
            <div 
              onClick={() => setSelectedWidget("creative")}
              className={`bg-brand-muted-lavender/10 rounded-2xl p-4 border cursor-pointer overflow-hidden flex flex-col justify-between relative transition-all min-h-[160px] ${
                activeTab === "code" || activeTab === "performance" ? "ring-2 ring-brand-slate border-brand-slate" : "border-brand-taupe"
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-muted-lavender/40 to-transparent rounded-full blur-xl -z-10" />
              <div className="flex gap-2 mb-2">
                <div className="w-5 h-5 bg-purple-200 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-6 h-4 bg-teal-100 rounded" />
                <div className="w-4 h-4 bg-orange-100 rounded-full" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-brand-muted-lavender">Page 22 of 197</span>
                <h4 className="font-serif text-sm font-semibold text-brand-slate mt-0.5">Design Strategy</h4>
              </div>
              <p className="text-[10px] font-sans text-brand-slate-light leading-relaxed mt-1">
                Combining human empathy & AI code efficiency. Native Astra/Spectra template layout.
              </p>
            </div>

          </div>

        </div>

        {/* Footer info showing why this visual layout rocks */}
        <div className="border-t border-brand-taupe pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
            <span className="font-mono text-brand-slate-light">Stato Core Web Vitals: <span className="text-green-600 font-bold">Eccellente (Veloce come una piuma)</span></span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-brand-muted-lavender">
            <span>● Google Lighthouse Score: 100/100</span>
          </div>
        </div>

      </div>
    </div>
  );
}
