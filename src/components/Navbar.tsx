import { Sparkles } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-beige/85 backdrop-blur-md border-b border-brand-taupe transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 border border-brand-slate flex items-center justify-center text-brand-slate transition-all group-hover:bg-brand-slate group-hover:text-brand-beige">
            <span className="font-serif font-bold text-xs">F</span>
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-[-0.03em] text-brand-slate block">
              FACILISSIMO<span className="text-brand-muted-lavender font-serif font-normal italic">.web</span>
            </span>
            <span className="text-[9px] font-sans tracking-[0.25em] text-brand-muted-lavender block uppercase -mt-1 font-semibold">
              Lean & AI Strategy
            </span>
          </div>
        </div>

        {/* Navigation Elements */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold">
          <button 
            onClick={() => scrollToSection("pillars")} 
            className="text-brand-slate-light hover:text-brand-slate border-b border-transparent hover:border-current pb-1 transition-all"
          >
            I Tre Pilastri
          </button>
          <button 
            onClick={() => scrollToSection("duo")} 
            className="text-brand-slate-light hover:text-brand-slate border-b border-transparent hover:border-current pb-1 transition-all"
          >
            Chi Siamo
          </button>
          <button 
            onClick={() => scrollToSection("workflow")} 
            className="text-brand-slate-light hover:text-brand-slate border-b border-transparent hover:border-current pb-1 transition-all"
          >
            Metodo Lean
          </button>
          <button 
            onClick={() => scrollToSection("calculator")} 
            className="text-brand-slate-light hover:text-brand-slate border-b border-transparent hover:border-current pb-1 transition-all"
          >
            Calcolatore Tempo
          </button>
          <button 
            onClick={() => scrollToSection("interactive-auditor")} 
            className="text-brand-slate-light hover:text-brand-slate border-b border-transparent hover:border-current pb-1 transition-all"
          >
            AI Pratica
          </button>
        </nav>

        {/* CTA Button */}
        <button 
          onClick={() => scrollToSection("interactive-auditor")}
          className="bg-brand-slate hover:bg-brand-slate-light text-brand-beige px-4 py-2 text-xs md:text-sm font-semibold rounded-xl border border-transparent hover:border-brand-muted-lavender/30 transition-all duration-300"
        >
          Fai il Test Gratis
        </button>

      </div>
    </header>
  );
}
