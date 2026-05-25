import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, X, Sparkles } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already made a preference
    const consent = localStorage.getItem("facilissimo_cookie_consent");
    if (!consent) {
      // Small delay for natural entrance feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("facilissimo_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem("facilissimo_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-white border border-brand-slate/15 p-5 shadow-xl rounded-sm flex flex-col gap-4 font-sans text-xs"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-sm bg-brand-beige border border-brand-slate/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-muted-lavender" />
              </div>
              <span className="font-serif text-sm font-semibold text-brand-slate">
                Trasparenza Cookie<span className="text-brand-muted-lavender">.it</span>
              </span>
            </div>
            <button
              onClick={handleDeclineAll}
              className="text-brand-slate-light hover:text-brand-slate transition-colors"
              aria-label="Chiudi e rifiuta"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-brand-slate-light leading-relaxed text-[11px]">
            Facilissimo.web rispetta il tuo tempo e la tua privacy. Utilizziamo cookie tecnici per salvare le risposte del tuo test di efficienza digitale o per ricollegare le tue automatizzazioni Notion & Make con Teresa.
          </p>

          {/* Footer controls */}
          <div className="flex items-center justify-between gap-3 border-t border-brand-slate/5 pt-3 mt-1">
            <button
              onClick={handleDeclineAll}
              className="px-3 py-2 bg-brand-beige hover:bg-brand-cream text-brand-slate font-bold uppercase tracking-wider text-[9px] rounded-sm transition-colors border border-transparent"
            >
              Rifiuta
            </button>
            <div className="flex gap-2">
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-brand-slate hover:bg-brand-slate-light text-brand-beige font-bold uppercase tracking-widest text-[9px] rounded-sm transition-all shadow-sm flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-brand-badge animate-pulse" />
                Accetta Tutti
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
