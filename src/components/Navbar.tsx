import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "I Tre Pilastri", path: "/pilastri" },
    { name: "Chi Siamo", path: "/chi-siamo" },
    { name: "Metodo Lean", path: "/metodo" },
    { name: "Nuovo Sito ✨", path: "/nuovo-sito", highlight: true },
    { name: "Automazioni", path: "/automazioni" },
    { name: "Calcolatore", path: "/calcolatore" },
    { name: "AI Pratica", path: "/test-ai" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-beige/90 backdrop-blur-md border-b border-brand-taupe transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => handleNavClick("/")}
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
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`text-brand-slate-light hover:text-brand-slate border-b border-transparent hover:border-current pb-1 transition-all ${
                link.highlight ? "text-brand-slate font-bold decoration-brand-badge/40 underline decoration-2 underline-offset-4" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/test-ai"
            onClick={() => handleNavClick("/test-ai")}
            className="bg-brand-slate hover:bg-brand-slate-light text-brand-beige px-4 py-2 text-xs font-semibold rounded-xl border border-transparent hover:border-brand-muted-lavender/30 transition-all duration-300"
          >
            Fai il Test Gratis
          </Link>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex items-center gap-3 xl:hidden">
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden border-t border-brand-tau bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4 max-w-lg mx-auto flex flex-col items-stretch text-center">
              
              <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-brand-muted-lavender font-bold border-b border-brand-slate/10 pb-2">
                Menu Di Navigazione
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`py-2.5 px-4 font-sans text-xs uppercase tracking-wider font-semibold text-brand-slate hover:bg-brand-cream/60 rounded-sm text-left transition-all ${
                    link.highlight ? "font-bold bg-brand-cream/40 border-l-2 border-brand-muted-lavender" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t border-brand-slate/10 pt-4 mt-2 flex flex-col gap-3">
                <Link
                  to="/test-ai"
                  onClick={() => handleNavClick("/test-ai")}
                  className="w-full bg-brand-slate hover:bg-brand-slate-light text-brand-beige py-3.5 text-xs font-sans uppercase tracking-widest font-bold rounded-sm text-center shadow-sm"
                >
                  Fai il Test Gratis
                </Link>

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
