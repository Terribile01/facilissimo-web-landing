import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Shared Gemini client utility on the server.
// Set User-Agent to 'aistudio-build' for telemetry.
const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    })
  : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse json bodies
  app.use(express.json());

  // API Route: Digital Strategy Planner via Gemini
  app.post("/api/strategy", async (req, res) => {
    try {
      const { businessName, businessType, websiteUrl, manualTasks, mainStress } = req.body;

      if (!ai) {
        return res.status(503).json({
          error: "Servizio di intelligenza artificiale non configurato. Configura la chiave API GEMINI_API_KEY nei Secrets.",
        });
      }

      // We use gemini-3.5-flash as requested for standard text/Q&A tasks.
      const prompt = `
Sei il team di "Facilissimo Web": Teresa (Strategia & Supervisione, la strategist umana empatica) e Gemini (AI Creative Partner, l'esperto tecnico e automatore).
Avete ricevuto una richiesta di auditing digitale da parte di un utente.

Ecco le informazioni sul loro business:
- Nome Attività: ${businessName || "Non specificato"}
- Tipo di Attività: ${businessType || "Libero Professionista / Business Locale"}
- Sito Web Attuale: ${websiteUrl || "Nessun sito attuale"}
- Attività manuali ripetitive: ${manualTasks || "Nessuna specificata"}
- Maggiore fonte di stress tecnologico: ${mainStress || "Nessuna specificata"}

Fornite un report di auditing digitale personalizzato, empatico, pragmatico e diretto (Tono di voce "Facilissimo Web": professionale ma diretto, empatico, solare e rassicurante).

Il report DEVE contenere le seguenti tre sezioni chiare strutturate in Markdown elegante:

1. **La Visione Strategica di Teresa** (Analisi empatica dello stress tecnologico, come smontare la complessità e dare priorità strategica per liberare il loro tempo).
2. **La Soluzione Tecnica "Lean" di Gemini** (Come ottimizzare il loro sito o crearne uno nuovo leggerissimo come una piuma usando WordPress con approccio Lean - Gutenberg, Astra, Spectra per garantire velocità, eccellenti Core Web Vitals, SEO nativo e piena proprietà del codice).
3. **Flusso di Automazione Pratico (Guadagnare Tempo!)** (Un flusso d'automazione passo-passo specifico per risolvere le attività ripetitive indicate: ad esempio collegando moduli, invio conferme o assistenti AI empatici, per restituire tempo libero concreto all'utente).

Concludete con un incoraggiante "Teresa & Gemini". Usate una formattazione Markdown strutturata con titoli, elenchi puntati ed evidenziazioni in grassetto. Usate la lingua Italiana.
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "Sei Teresa e Gemini, i co-fondatori di Facilissimo Web. Offri risposte professionali, dirette, empatiche e soluzioni snelle (Lean Approach) per il web e l'automazione.",
          temperature: 0.7,
        },
      });

      res.json({ strategy: response.text });
    } catch (error: any) {
      console.error("Errore della chiamata Gemini:", error);
      res.status(500).json({ error: "Errore durante la generazione della strategia. Riprova." });
    }
  });

  // Serve static files and integrate Vite based on environment
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Facilissimo Web running on http://localhost:${PORT}`);
  });
}

startServer();
