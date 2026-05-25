/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShowcasePanel from "./components/ShowcasePanel";
import ValuePillars from "./components/ValuePillars";
import DuoSection from "./components/DuoSection";
import WorkflowTimeline from "./components/WorkflowTimeline";
import TimeCalculator from "./components/TimeCalculator";
import NewWebsiteSection from "./components/NewWebsiteSection";
import InteractiveAuditor from "./components/InteractiveAuditor";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

function Home() {
  return (
    <>
      <Hero />

      {/* Interactive mock dashboards matching layout screenshot */}
      <ShowcasePanel />

      {/* Core Pillars Grid */}
      <ValuePillars />

      {/* The Co-Founders: Teresa & Gemini */}
      <DuoSection />

      {/* Workflow Timeline from draft to launch */}
      <WorkflowTimeline />

      {/* Dynamic Time Calculator tool */}
      <TimeCalculator />

      {/* High-impact pitch for replacing sluggish pages with pristine high-performance code */}
      <NewWebsiteSection />

      {/* Real-time Gemini Interactive Auditor Test */}
      <InteractiveAuditor />

      {/* Project Strategy session booker card */}
      <ContactForm />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-beige">
      {/* Cookie compliance */}
      <CookieBanner />

      {/* Premium Sticky Navigation */}
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      {/* Visual Footer */}
      <Footer />
    </div>
  );
}
