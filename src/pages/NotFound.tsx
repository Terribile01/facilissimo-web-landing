import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="relative inline-block">
          <div className="text-9xl font-serif font-bold text-brand-slate/5">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-16 h-16 text-brand-muted-lavender" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-serif text-brand-slate font-bold">
          Pagina non trovata
        </h1>

        <p className="max-w-md mx-auto text-brand-slate-light font-sans text-lg">
          Sembra che il link che stai cercando sia stato spostato o non esista più.
          Niente paura, torniamo in pista insieme.
        </p>

        <div className="pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-slate hover:bg-brand-slate-light text-brand-beige px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
