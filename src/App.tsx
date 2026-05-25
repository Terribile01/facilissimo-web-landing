/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import { ArrowRight, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

// Import all pages
import Pilastri from "./pages/Pilastri";
import ChiSiamo from "./pages/ChiSiamo";
import Metodo from "./pages/Metodo";
import NuovoSito from "./pages/NuovoSito";
import Calcolatore from "./pages/Calcolatore";
import TestAI from "./pages/TestAI";
import Automazioni from "./pages/Automazioni";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

function Home() {
  return (
    <>
      <Hero />

      {/* Overview Hub Section */}
      <section className="py-24 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-slate font-bold mb-4">
              Esplora l'Universo <span className="text-brand-muted-lavender italic">Facilissimo</span>
            </h2>
            <p className="text-brand-slate-light font-sans max-w-2xl mx-auto text-lg">
              Abbiamo suddiviso la nostra offerta in sezioni dedicate per permetterti di approfondire ogni aspetto del nostro metodo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "I Tre Pilastri",
                desc: "Le fondamenta della nostra filosofia digitale.",
                path: "/pilastri",
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                title: "Chi Siamo",
                desc: "Incontra il team dietro la strategia Lean.",
                path: "/chi-siamo",
                icon: <ShieldCheck className="w-5 h-5" />
              },
              {
                title: "Metodo Lean",
                desc: "Come trasformiamo la complessità in semplicità.",
                path: "/metodo",
                icon: <Zap className="w-5 h-5" />
              },
              {
                title: "Nuovo Sito",
                desc: "La tua nuova casa digitale, veloce e scalabile.",
                path: "/nuovo-sito",
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                title: "Automazioni",
                desc: "Sistemi intelligenti per scalare il tuo business.",
                path: "/automazioni",
                icon: <Zap className="w-5 h-5" />
              },
              {
                title: "AI Test Rapido",
                desc: "Scopri subito il potenziale della tua azienda.",
                path: "/test-ai",
                icon: <ArrowRight className="w-5 h-5" />
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group p-8 bg-white border border-brand-taupe/30 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-brand-muted-lavender/10 text-brand-muted-lavender flex items-center justify-center rounded-lg mb-6 group-hover:bg-brand-muted-lavender group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-slate mb-2">{card.title}</h3>
                <p className="text-brand-slate-light text-sm font-sans mb-6">{card.desc}</p>
                <Link
                  to={card.path}
                  className="inline-flex items-center gap-2 text-brand-muted-lavender font-bold text-xs uppercase tracking-widest hover:text-brand-slate transition-colors"
                >
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Strategy session booker card */}
      <ContactForm />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-beige">
      {/* Scroll management */}
      <ScrollToTop />

      {/* Cookie compliance */}
      <CookieBanner />

      {/* Premium Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pilastri" element={<Pilastri />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/metodo" element={<Metodo />} />
          <Route path="/nuovo-sito" element={<NuovoSito />} />
          <Route path="/calcolatore" element={<Calcolatore />} />
          <Route path="/test-ai" element={<TestAI />} />
          <Route path="/automazioni" element={<Automazioni />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Visual Footer */}
      <Footer />
    </div>
  );
}
