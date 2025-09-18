import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"; // replaced by DarkFooter
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BgDecor from "@/components/ui/BgDecor";
import Container from "@/components/ui/Container";
import DemoVideo from "./components/DemoVideo";
import IntegrationsStrip from './components/IntegrationsStrip';
import FeatureTriad from './components/FeatureTriad';
import CodeVsUI from './components/CodeVsUI';
import RunTweakRepeat from './components/RunTweakRepeat';
import CaseStudies from './components/CaseStudies';
import CustomersCTA from './components/CustomersCTA';
import NothingYouCantAutomate from './components/NothingYouCantAutomate';
import TestimonialsRow from './components/TestimonialsRow';
import DarkFooter from './components/DarkFooter';

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)', backgroundImage: 'var(--glow)', backgroundAttachment: 'fixed' }}>
      <Navbar variant="dark" />

      <main className="relative">
        <div className="relative">
          <BgDecor />

          {/* HERO with video + dark-on-gradient */}
          <div className="hero-wrap">
            <header className="relative pt-24 pb-16 sm:pt-36 sm:pb-24">
              <Container>
                <AnimatedSection>
                  <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        Flexible AI workflow automation
                      </div>
                      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                        <span className="block max-w-fit mx-auto rounded-2xl bg-black/50 px-4 py-3 ring-1 ring-white/10 backdrop-blur-md shadow-[0_8px_30px_rgba(2,6,23,0.45)] mt-2 sm:mt-3 lg:mt-4">
                          <span className="block">Automate the busywork.</span>
                          <span className="block">Grow what matters.</span>
                        </span>
                      </h1>
                      <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
                        AI apps, chat, and calling that turn clicks into customers-without adding headcount.
                      </p>
                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                          to="/book"
                          className="inline-flex items-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 text-white shadow-lg transition hover:translate-y-[-1px] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
                        >
                          Book a demo <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                          to="/pricing"
                          className="inline-flex items-center rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-white/90 shadow-sm transition hover:bg-white/15"
                        >
                          See pricing
                        </Link>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle2 className="h-4 w-4" /> No code needed - Cancel anytime
                      </div>
                    </div>

                    <div className="w-full max-w-2xl lg:justify-self-end">
                      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-2xl ring-1 ring-white/10">
                        <DemoVideo />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </Container>
            </header>
          </div>

          <div className="hero-edge" aria-hidden />

          {/* New dark sections below hero */}
          <div style={{ background: 'var(--bg)', color: 'var(--text)', backgroundImage: 'var(--glow)', backgroundAttachment: 'fixed' }}>
            <IntegrationsStrip />
            <FeatureTriad />
            <CodeVsUI />
            <RunTweakRepeat />
            <CaseStudies />
            <CustomersCTA />
            <NothingYouCantAutomate />
            <TestimonialsRow />
            <DarkFooter />
          </div>
        </div>
      </main>
    </div>
  );
}
