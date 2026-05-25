import { useState } from "react";
import { Sparkles, Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70; // Precise offset for sticky header height
      
      // Recursively calculate precise coordinate relative to document body
      let actualTop = 0;
      let currentElem: HTMLElement | null = element;
      while (currentElem) {
        actualTop += currentElem.offsetTop;
        currentElem = currentElem.offsetParent as HTMLElement | null;
      }
      const offsetPosition = actualTop - headerOffset;

      // Close the mobile menu drawer first so layout doesn't jitter during scrolling
      setIsOpen(false);

      // Perform smooth scroll after a tiny microtask delay to allow the React state change to initiate collapse
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 10);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-beige/90 backdrop-blur-md border-b border-brand-taupe transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo - beautifully handles mobile space */}
        <div 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }} 
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-8 h-8 border border-brand-slate flex items-center justify-center text-brand-slate transition-all group-hover:bg-brand-slate group-hover:text-brand-beige">
            <span className="font-serif font-bold text-xs">F</span>
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[-0.03em] text-brand-slate block">
              FACILISSIMO<span className="text-brand-muted-lavender font-serif font-normal italic">.web</span>
            </span>
            <span className="text-[8px] sm:text-[9px] font-sans tracking-[0.2em] sm:tracking-[0.25em] text-brand-muted-lavender block uppercase -mt-0.5 font-semibold">
              Lean & AI Strategy
            </span>
          </div>
        </div>

        {/* Desktop Navigation Elements (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold">
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

        {/* Desktop Call to Action Button (hidden on mobile to prevent overlapping) */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => scrollToSection("interactive-auditor")}
            className="bg-brand-slate hover:bg-brand-slate-light text-brand-beige px-4 py-2 text-xs font-semibold rounded-xl border border-transparent hover:border-brand-muted-lavender/30 transition-all duration-300"
          >
            Fai il Test Gratis
          </button>
        </div>

        {/* Mobile menu and triggers (hamburger icon) */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Quick Support Direct WhatsApp Callout on mobile */}
          <a
            href="https://wa.me/393791038253"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 border border-[#25D366]/20 bg-[#25D366]/10 text-brand-slate hover:bg-[#25D366]/20 px-2.5 py-1.5 rounded-sm text-[10px] font-sans font-bold uppercase tracking-wider transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Chat</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border border-brand-slate/15 hover:bg-brand-cream text-brand-slate rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-slate"
            aria-label="Open Mobile Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Expanded Animated Mobile Dropdown Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-brand-tau bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4 max-w-lg mx-auto flex flex-col items-stretch text-center">
              
              <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-brand-muted-lavender font-bold border-b border-brand-slate/10 pb-2">
                Menu Di Navigazione
              </div>

              <button
                onClick={() => scrollToSection("pillars")}
                className="py-2.5 px-4 font-sans text-xs uppercase tracking-wider font-semibold text-brand-slate hover:bg-brand-cream/60 rounded-sm text-left transition-all"
              >
                I Tre Pilastri
              </button>
              
              <button
                onClick={() => scrollToSection("duo")}
                className="py-2.5 px-4 font-sans text-xs uppercase tracking-wider font-semibold text-brand-slate hover:bg-brand-cream/60 rounded-sm text-left transition-all"
              >
                Chi Siamo (Teresa & Gemini)
              </button>

              <button
                onClick={() => scrollToSection("workflow")}
                className="py-2.5 px-4 font-sans text-xs uppercase tracking-wider font-semibold text-brand-slate hover:bg-brand-cream/60 rounded-sm text-left transition-all"
              >
                Il Metodo Lean
              </button>

              <button
                onClick={() => scrollToSection("calculator")}
                className="py-2.5 px-4 font-sans text-xs uppercase tracking-wider font-semibold text-brand-slate hover:bg-brand-cream/60 rounded-sm text-left transition-all"
              >
                Calcolatore Tempo Liberato
              </button>

              <button
                onClick={() => scrollToSection("interactive-auditor")}
                className="py-2.5 px-4 font-sans text-xs uppercase tracking-wider font-semibold text-brand-slate hover:bg-brand-cream/60 rounded-sm text-left transition-all"
              >
                AI Test Rapido
              </button>

              <div className="border-t border-brand-slate/10 pt-4 mt-2 flex flex-col gap-3">
                <button
                  onClick={() => scrollToSection("interactive-auditor")}
                  className="w-full bg-brand-slate hover:bg-brand-slate-light text-brand-beige py-3.5 text-xs font-sans uppercase tracking-widest font-bold rounded-sm text-center shadow-sm"
                >
                  Fai il Test Gratis
                </button>

                {/* Additional support trigger inside list */}
                <a
                  href="https://wa.me/393791038253"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-brand-cream text-brand-slate py-3 text-xs font-sans uppercase tracking-wider font-semibold rounded-sm border border-brand-slate/10 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Contattaci Ora su WhatsApp
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
