/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShowcasePanel from "./components/ShowcasePanel";
import ValuePillars from "./components/ValuePillars";
import DuoSection from "./components/DuoSection";
import WorkflowTimeline from "./components/WorkflowTimeline";
import TimeCalculator from "./components/TimeCalculator";
import InteractiveAuditor from "./components/InteractiveAuditor";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-beige">
      {/* Premium Sticky Navigation */}
      <Navbar />

      {/* Hero Section of Facilissimo Web */}
      <main className="flex-grow">
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

        {/* Real-time Gemini Interactive Auditor Test */}
        <InteractiveAuditor />

        {/* Customer reviews and Lighthouse score badge */}
        <Testimonials />

        {/* Project Strategy session booker card */}
        <ContactForm />
      </main>

      {/* Visual Footer */}
      <Footer />
    </div>
  );
}
