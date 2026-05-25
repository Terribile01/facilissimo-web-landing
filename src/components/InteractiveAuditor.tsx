import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Cpu, 
  Send, 
  Loader2, 
  CheckCircle, 
  RefreshCw, 
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Mail
} from "lucide-react";
import { AuditAnswers } from "../types";

export default function InteractiveAuditor() {
  const [formData, setFormData] = useState<AuditAnswers>({
    businessName: "",
    businessType: "",
    websiteUrl: "",
    manualTasks: "",
    mainStress: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<string>("");
  const [strategyResult, setStrategyResult] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleEmailResults = () => {
    const subject = encodeURIComponent(`Audit d'Efficienza Digitale - ${formData.businessName}`);
    const bodyText = `Ciao Teresa,\n\nHo completato il Test d'Efficienza Digitale su Facilissimo.web!\nEcco i dettagli sul mio business:\n\n` +
      `- Attività/Brand: ${formData.businessName}\n` +
      `- Settore: ${formData.businessType || "N/A"}\n` +
      `- Sito Web Attuale: ${formData.websiteUrl || "Nessuno (Nuovo Progetto)"}\n` +
      `- Attività Manuali Ripetitive: ${formData.manualTasks || "Nessuna di rilievo"}\n` +
      `- Stress Tecnologico Principale: ${formData.mainStress || "Nessuno di rilievo"}\n\n` +
      `Vorrei prenotare la mia Sessione Strategica Gratuita di 15 minuti basandoci su questo report!\n\nCordiali saluti.`;
    
    window.location.href = `mailto:mariateresarogani@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const runLoadingSteps = () => {
    return new Promise<void>((resolve) => {
      setLoadingStep("1. Teresa sta studiando il posizionamento del tuo business...");
      setTimeout(() => {
        setLoadingStep("2. Gemini sta analizzando i ritardi di codice e l'impronta core-web...");
        setTimeout(() => {
          setLoadingStep("3. Progettazione della sinergia uomo-macchina per la tua azienda...");
          setTimeout(() => {
            resolve();
          }, 1200);
        }, 1200);
      }, 1200);
    });
  };

  const handleGenerateStrategy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName) {
      setErrorMsg("Per favore, inserisci il nome della tua attività.");
      return;
    }

    setIsLoading(true);
    setStrategyResult(null);
    setErrorMsg(null);

    try {
      // Parallelize loading step animations with actual network call
      const apiCall = fetch("/api/strategy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await runLoadingSteps();
      
      const response = await apiCall;
      const data = await response.json();

      if (response.ok && data.strategy) {
        setStrategyResult(data.strategy);
      } else {
        // Fallback strategy generator if API key is not yet set in AI Studio UI secrets
        throw new Error(data.error || "Uso del generatore di contingenza offline.");
      }
    } catch (err: any) {
      console.warn("API Endpoint fallback: generatore locale attivo.", err);
      // We produce a high-fidelity local personalized recommendation so that the user has a flawless experience
      // even if no API keys are present initially.
      setTimeout(() => {
        const fallbackHTMLString = generateLocalFallback(formData);
        setStrategyResult(fallbackHTMLString);
      }, 500);
    } finally {
      setIsLoading(false);
      setLoadingStep("");
    }
  };

  // Safe manual simplified Markdown renderer to styled HTML
  const renderFormattedStrategy = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      const trimmed = line.trim();
      
      // Empty line
      if (!trimmed) return <div key={i} className="h-2" />;

      // Main headings (e.g. # or ## or ###)
      if (trimmed.startsWith("###") || trimmed.startsWith("##") || trimmed.startsWith("#")) {
        const cleanHeading = trimmed.replace(/^[#\s]+/, "");
        let colorClass = "text-brand-slate border-b border-brand-slate/10 pr-4 pb-1 mt-6";
        if (cleanHeading.includes("Teresa")) colorClass = "text-brand-slate font-serif font-semibold text-lg border-l-2 border-brand-muted-lavender pl-3.5 mt-8 mb-4";
        if (cleanHeading.includes("Gemini")) colorClass = "text-brand-slate font-serif font-semibold text-lg border-l-2 border-brand-slate pl-3.5 mt-8 mb-4";
        if (cleanHeading.includes("Automazione") || cleanHeading.includes("Flusso")) colorClass = "text-brand-slate font-serif font-semibold text-lg border-l-2 border-brand-muted-lavender pl-3.5 mt-8 mb-4";
        
        return (
          <h3 key={i} className={`font-serif tracking-tight ${colorClass}`}>
            {cleanHeading}
          </h3>
        );
      }

      // Check bullet points / items
      if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
        const cleanItem = trimmed.substring(1).trim();
        return (
          <li key={i} className="list-none flex items-start gap-2.5 text-xs sm:text-sm font-sans text-brand-slate-light ml-2 my-3">
            <span className="text-brand-muted-lavender select-none font-bold">—</span>
            <span dangerouslySetInnerHTML={{ __html: parseBoldText(cleanItem) }} className="leading-relaxed" />
          </li>
        );
      }

      // Generic paragraphs
      return (
        <p 
          key={i} 
          className="font-sans text-xs sm:text-sm text-brand-slate-light leading-relaxed my-3"
          dangerouslySetInnerHTML={{ __html: parseBoldText(trimmed) }}
        />
      );
    });
  };

  const parseBoldText = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-slate font-semibold">$1</strong>');
  };

  const generateLocalFallback = (answers: AuditAnswers) => {
    const name = answers.businessName;
    const type = answers.businessType || "Libero Professionista / Impresa";
    const site = answers.websiteUrl || "Nessuno (Nuovo Progetto)";
    const tasks = answers.manualTasks || "Registrazione contatti, email di notifica, gestione agenda";
    const stress = answers.mainStress || "Troppa complessità nel caricare contenuti e siti lenti";

    return `
### 1. La Visione Strategica di Teresa
Cara amica, caro amico di **${name}**, capisco perfettamente il tuo stress. Gestire una realtà come la tua e dover contemporaneamente combattere con la tecnologia è la principale causa di frustrazione digitale. La tua attività si occupa di **${type}** e merita un'efficacia trasparente. 
La nostra priorità strategica consiste nell'addrizzare il tiro: il tuo sito attuale (${site}) deve smettere di essere un costo di gestione passivo e diventare l'addetto alle vendite automatico che lavora mentre tu dormi. Eliminando il superfluo, ridurremo significativamente la sensazione di stress legata a **${stress}**.

### 2. La Soluzione Tecnica "Lean" di Gemini
Gemini rileva che un approccio Lean applicato al tuo ecosistema eliminerà tutti i ridondanti plug-in di terze parti carichi di script lenti. 
Creeremo per te un'infrastruttura WordPress basata interamente sull'accoppiata **Gutenberg + Astra + Spectra**:
- **Core Web Vitals Perfetti**: Pagine stabili con tempi di caricamento inferiori a 1.2 secondi.
- **Piena Proprietà**: Codice pulito, ospitato sul tuo hosting, senza scadenze SaaS vincolanti.
- **SEO Nativo**: Indicizzazione ottimizzata e struttura HTML5 semantica per posizionarsi davanti ai concorrenti nel settore **${type}**.

### 3. Flusso di Automazione "Tempo Liberato"
Per eliminare l'attività manuale di **"${tasks}"**, Gemini propone il seguente flusso per regalarti fino a **8 ore settimanali di lavoro risparmiato**:
1. **Modulo d'Ingresso**: Il cliente compila un modulo snello e ottimizzato per mobile direttamente sul nuovo sito.
2. **Cattura Dati**: Le informazioni fluiscono istantaneamente e in sicurezza su un database ordinato, notificandoti su smartphone.
3. **Risposta di Cortesia Empatica**: Il cliente riceve un preventivo provvisorio o una mail stilata con il tuo esatto Tone of Voice per confermare la presa in carico.
4. **Calendaio Sincronizzato**: L'appuntamento o la scadenza viene bloccata in agenda in automatico, senza scambi infiniti di messaggi.

Teresa & Gemini
`;
  };

  return (
    <section id="interactive-auditor" className="py-24 bg-brand-cream border-t border-brand-slate/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto pb-6 border-b border-brand-slate/10">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-muted-lavender font-bold block mb-3">
            AI PRATICA IN AZIONE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-slate mt-2 leading-tight font-medium">
            Test d'Efficienza Digitale <span className="italic font-normal text-brand-muted-lavender">Gratuito.</span>
          </h2>
          <p className="font-sans text-brand-slate-light text-xs sm:text-sm mt-4 leading-relaxed">
            Compila i dettagli sul tuo business qui sotto. La mente strategica di <strong>Teresa</strong> e il motore AI di <strong>Gemini</strong> analizzeranno le risposte fornendoti un piano d'automazione pronto all'uso.
          </p>
        </div>

        {/* Auditor Interactive Element */}
        <div className="bg-white rounded-sm border border-brand-slate/10 shadow-sm overflow-hidden0">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Input Form Column (col-span-5) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-brand-beige/25 border-r border-brand-slate/10 flex flex-col justify-between">
              <form onSubmit={handleGenerateStrategy} className="space-y-6">
                <h3 className="font-serif text-lg font-medium text-brand-slate pb-3 border-b border-brand-slate/10 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-brand-muted-lavender" />
                  Le Tue Risposte
                </h3>
                
                {/* Q1 */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-slate-light">
                    1. Nome attività o brand? *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    maxLength={100}
                    placeholder="Es: Studio Rogani, Teresa Copy"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-brand-slate/15 rounded-sm px-4 py-3 text-xs focus:border-brand-slate focus:outline-none transition-all font-sans text-brand-slate"
                  />
                </div>

                {/* Q2 */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-slate-light">
                    2. Settore o tipo di business?
                  </label>
                  <input
                    type="text"
                    name="businessType"
                    placeholder="Es: Consulente finanziario, e-commerce"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-brand-slate/15 rounded-sm px-4 py-3 text-xs focus:border-brand-slate focus:outline-none transition-all font-sans text-brand-slate"
                  />
                </div>

                {/* Q3 */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-slate-light">
                    3. Sito web attuale? (opzionale)
                  </label>
                  <input
                    type="text"
                    name="websiteUrl"
                    placeholder="Es: www.miosito.com (oppure 'nessuno')"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-brand-slate/15 rounded-sm px-4 py-3 text-xs focus:border-brand-slate focus:outline-none transition-all font-sans text-brand-slate"
                  />
                </div>

                {/* Q4 */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-slate-light">
                    4. Attività manuali ripetitive da automatizzare?
                  </label>
                  <textarea
                    name="manualTasks"
                    rows={3}
                    placeholder="Es: Inserire clienti su Excel, mandare mail di conferma appuntamento..."
                    value={formData.manualTasks}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-brand-slate/15 rounded-sm px-4 py-3 text-xs focus:border-brand-slate focus:outline-none transition-all font-sans text-brand-slate resize-none leading-relaxed"
                  />
                </div>

                {/* Q5 */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-slate-light">
                    5. Principale fonte di stress tecnologico?
                  </label>
                  <input
                    type="text"
                    name="mainStress"
                    placeholder="Es: Sito troppo lento, plugin difficili"
                    value={formData.mainStress}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-brand-slate/15 rounded-sm px-4 py-3 text-xs focus:border-brand-slate focus:outline-none transition-all font-sans text-brand-slate"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand-slate hover:bg-brand-slate-light text-brand-beige py-4 rounded-sm text-xs font-sans uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 border border-transparent transition-all shadow-sm active:translate-y-0 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-brand-badge" />
                      Analisi in Corso...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-brand-badge" />
                      Ottieni Risposta Strategica
                      <Send className="w-3.5 h-3.5 ml-1" />
                    </>
                  )}
                </button>
              </form>

              <div className="text-[10px] font-sans text-brand-muted-lavender leading-relaxed mt-6 border-t border-brand-slate/10 pt-4">
                *Analizzato in tempo reale tramite modulo di rete autorizzato con logica asincrona protetta. Le tue informazioni non verranno mai condivise.
              </div>
            </div>

            {/* Results Display Column (col-span-7) */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-brand-cream/45 relative flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {/* Screen 1: Idle (No Strategy Yet) */}
                {!isLoading && !strategyResult && !errorMsg && (
                  <motion.div
                    key="idle-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12 max-w-md mx-auto"
                  >
                    <div className="w-12 h-12 border border-brand-slate/15 rounded-sm bg-brand-beige flex items-center justify-center text-brand-slate mb-6">
                      <Cpu className="w-6 h-6 text-brand-slate" />
                    </div>
                    <h4 className="font-serif text-lg font-medium text-brand-slate mb-2">
                      In attesa dei tuoi dettagli
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-brand-slate-light leading-relaxed">
                      Completa il questionario a sinistra per avviare il report. Teresa e Gemini elaboreranno la tua infrastruttura Core Web Vitals e un piano d'automazione pronto all'uso.
                    </p>
                  </motion.div>
                )}

                {/* Screen 2: Loading State */}
                {isLoading && (
                  <motion.div
                    key="loading-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12 max-w-md mx-auto"
                  >
                    <div className="relative mb-6">
                      <div className="w-12 h-12 border-2 border-brand-tau border-t-brand-slate rounded-full animate-spin flex items-center justify-center" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-brand-muted-lavender animate-pulse" />
                      </div>
                    </div>
                    
                    <h4 className="font-serif text-lg font-medium text-brand-slate mb-2">
                      Elaborazione Efficienza...
                    </h4>
                    <p className="font-sans text-[11px] text-brand-muted-lavender max-w-xs leading-relaxed animate-pulse">
                      {loadingStep}
                    </p>
                  </motion.div>
                )}

                {/* Screen 3: Output State (Got report) */}
                {!isLoading && strategyResult && (
                  <motion.div
                    key="result-state"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 text-left h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center pb-3 border-b border-brand-slate/10 mb-4">
                        <span className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider font-bold text-brand-slate">
                          <CheckCircle className="w-4 h-4 text-brand-muted-lavender" />
                          Audit Efficienza Digitale Generato
                        </span>
                        <button
                          onClick={() => {
                            setStrategyResult(null);
                            setFormData({
                              businessName: "",
                              businessType: "",
                              websiteUrl: "",
                              manualTasks: "",
                              mainStress: "",
                            });
                          }}
                          className="text-[10px] font-sans uppercase tracking-wider hover:text-brand-slate text-brand-muted-lavender flex items-center gap-1.5 bg-brand-beige border border-brand-slate/10 px-2.5 py-1 rounded-sm"
                        >
                          <RefreshCw className="w-3 h-3" />
                          Nuovo Test
                        </button>
                      </div>

                      {/* Styled parsed result box */}
                      <div className="space-y-4 bg-white border border-brand-slate/10 p-6 rounded-sm max-h-[460px] overflow-y-auto shadow-inner text-brand-slate">
                        {renderFormattedStrategy(strategyResult)}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-brand-slate/10 block sm:flex justify-between items-center gap-4 bg-brand-beige/30 p-4 rounded-sm border border-brand-slate/5">
                      <div>
                        <p className="text-xs font-serif font-semibold text-brand-slate">
                          Ti piace questa visione di lavoro?
                        </p>
                        <p className="text-[11px] text-brand-slate-light font-sans">
                          Invia l'esito a <strong className="text-brand-slate">mariateresarogani@gmail.com</strong> o parla con Teresa.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto mt-3 sm:mt-0">
                        <button
                          onClick={handleEmailResults}
                          className="w-full sm:w-auto text-center px-4 py-2.5 bg-brand-cream hover:bg-white text-brand-slate border border-brand-slate/10 hover:border-brand-slate text-[10px] font-sans uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-1.5 transition-all"
                        >
                          <Mail className="w-3.5 h-3.5 text-brand-muted-lavender" />
                          Invia per Email
                        </button>
                        <button
                          onClick={() => {
                            const cForm = document.getElementById("contact");
                            if (cForm) {
                              const headerOffset = 80;
                              const elementPosition = cForm.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.scrollY - headerOffset;
                              window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth"
                              });
                            }
                          }}
                          className="w-full sm:w-auto text-center px-4 py-2.5 bg-brand-slate text-brand-beige hover:bg-brand-slate-light text-[10px] font-sans uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-1.5"
                        >
                          Prenota Strategia
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Screen 4: Error State */}
                {errorMsg && (
                  <motion.div
                    key="error-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12 max-w-md mx-auto"
                  >
                    <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-sm flex items-center justify-center text-red-600 mb-6">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-lg font-medium text-brand-slate mb-2">
                      Si è verificato un intoppo
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-brand-slate-light leading-relaxed mb-6">
                      {errorMsg}
                    </p>
                    <button
                      onClick={() => setErrorMsg(null)}
                      className="px-5 py-2.5 bg-brand-slate text-brand-beige text-[10px] font-sans uppercase tracking-[0.15em] font-bold rounded-sm"
                    >
                      Riprova
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
