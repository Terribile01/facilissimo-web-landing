import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif text-brand-slate mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-slate max-w-none space-y-8 font-sans text-brand-slate/80">
          <section>
            <h2 className="text-2xl font-serif text-brand-slate mb-4">Informativa sulla Privacy</h2>
            <p>
              La tua privacy è fondamentale per noi. Questa pagina contiene informazioni su come raccogliamo,
              utilizziamo e proteggiamo i tuoi dati personali quando utilizzi il nostro sito web.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-serif text-brand-slate mb-3">1. Raccolta dei Dati</h3>
            <p>
              Raccogliamo solo i dati necessari per fornirti la migliore esperienza possibile,
              inclusi i dati forniti volontariamente tramite i nostri moduli di contatto.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-serif text-brand-slate mb-3">2. Utilizzo dei Dati</h3>
            <p>
              I dati raccolti vengono utilizzati esclusivamente per rispondere alle tue richieste,
              migliorare i nostri servizi e comunicare aggiornamenti rilevanti relativi al tuo progetto.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-serif text-brand-slate mb-3">3. Protezione dei Dati</h3>
            <p>
              Adottiamo misure di sicurezza tecniche e organizzative avanzate per proteggere i tuoi dati
              da accessi non autorizzati, perdite o alterazioni.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-serif text-brand-slate mb-3">Contatti</h3>
            <p>
              Per qualsiasi domanda relativa alla nostra Privacy Policy, puoi contattarci all'indirizzo email:
              <span className="text-brand-muted-lavender font-semibold"> info@facilissimo.web</span>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-taupe/30 text-xs text-brand-slate-light">
          Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
        </div>
      </motion.div>
    </div>
  );
}
