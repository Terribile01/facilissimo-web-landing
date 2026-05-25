import { Sparkles, Heart, Linkedin, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-slate text-brand-beige border-t border-brand-slate-light/80 pt-20 pb-12 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-10 w-64 h-64 bg-brand-muted-lavender/5 rounded-full blur-3xl text-brand-muted-lavender" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-brand-slate-light/50 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-brand-beige flex items-center justify-center text-brand-slate border border-brand-beige">
                <Sparkles className="w-4 h-4 text-brand-slate" />
              </div>
              <span className="font-serif text-lg font-semibold text-brand-beige tracking-tight">
                Facilissimo<span className="text-brand-muted-lavender">.web</span>
              </span>
            </div>
            
            <p className="font-sans text-brand-taupe/80 text-xs sm:text-sm max-w-sm leading-relaxed">
              Costruiamo soluzioni digitali veloci come fulmini e automazioni intelligenti progettate per farti riprendere in mano il controllo del tuo tempo libero.
            </p>

            <div className="flex gap-3 text-brand-taupe pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-brand-beige transition-colors p-2.5 bg-brand-slate-light/40 rounded-sm border border-brand-slate-light/60 block"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/393791038253" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-brand-beige transition-colors p-2.5 bg-brand-slate-light/40 rounded-sm border border-brand-slate-light/60 block"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-sans text-[10px] uppercase font-bold text-brand-muted-lavender tracking-[0.25em] mb-4">
                L'APPROCCIO
              </h4>
              <ul className="space-y-3 text-xs text-brand-taupe font-sans font-medium">
                <li>
                  <a href="#pillars" className="hover:text-brand-beige transition-colors">I Tre Pilastri</a>
                </li>
                <li>
                  <a href="#duo" className="hover:text-brand-beige transition-colors">Chi Siamo</a>
                </li>
                <li>
                  <a href="#workflow" className="hover:text-brand-beige transition-colors">Il Metodo Lean</a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-brand-beige transition-colors">Calcola Risparmi</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-[10px] uppercase font-bold text-brand-muted-lavender tracking-[0.25em] mb-4">
                STRUMENTI AI
              </h4>
              <ul className="space-y-3 text-xs text-brand-taupe font-sans font-medium">
                <li>
                  <a href="#interactive-auditor" className="hover:text-brand-beige transition-colors">AI Test Rapido</a>
                </li>
                <li>
                  <a href="#visual-showcase" className="hover:text-brand-beige transition-colors">Core Web Vitals</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-brand-beige transition-colors">Strategia 15 min</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Tech specs callout (col-span-3) */}
          <div className="md:col-span-3 bg-brand-slate-light/20 border border-brand-slate-light/60 rounded-sm p-5 space-y-4">
            <h4 className="font-sans text-[10px] uppercase font-bold text-brand-muted-lavender tracking-[0.2em]">
              TECHNICAL STACK NATIVE
            </h4>
            <div className="flex flex-wrap gap-1.5 font-sans text-[9px] text-brand-taupe uppercase tracking-wider font-bold">
              <span className="bg-brand-slate px-2 py-0.5 rounded-sm border border-brand-slate-light/50">WordPress Lean</span>
              <span className="bg-brand-slate px-2 py-0.5 rounded-sm border border-brand-slate-light/50">Gutenberg</span>
              <span className="bg-brand-slate px-2 py-0.5 rounded-sm border border-brand-slate-light/50">Astra Theme</span>
              <span className="bg-brand-slate px-2 py-0.5 rounded-sm border border-brand-slate-light/50">Spectra Blocks</span>
              <span className="bg-brand-slate px-2 py-0.5 rounded-sm border border-brand-slate-light/50">Gemini AI</span>
            </div>
            <p className="text-[10px] font-sans text-brand-muted-lavender leading-relaxed">
              Soluzioni senza canoni di blocco, progettate con standard di prestazione di livello enterprise.
            </p>
          </div>

        </div>

        {/* Bottom Credits Block */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-brand-taupe/70">
          <p>© {new Date().getFullYear()} Facilissimo Web. All rights reserved.</p>
          
          <div className="flex items-center gap-1.5">
            <span>Disegnato con</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-current hover:scale-110 transition-transform cursor-pointer" />
            <span>da Teresa & Gemini</span>
          </div>

          <button
            onClick={handleScrollTop}
            className="p-2.5 border border-brand-slate-light hover:border-brand-taupe rounded-sm bg-brand-slate-light/10 text-brand-taupe hover:text-brand-beige transition-all group shrink-0"
            aria-label="Torna in cima"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
