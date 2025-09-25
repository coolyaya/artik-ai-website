import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import DarkFooter from '@/components/DarkFooter';
import Button from '@/components/ui/Button';
import TemplatesGallery from '@/sections/TemplatesGallery';

export default function TemplatesPage() {
  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Templates — ArtikAi</title>
        <meta
          name="description"
          content="Browse ArtikAi's prebuilt automations to launch high-impact workflows in minutes."
        />
      </Helmet>

      <Navbar variant="dark" />

      <header className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <span className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200/90">
          Template library
        </span>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
          Ship production-ready automations without starting from scratch
        </h1>
        <p className="mt-4 max-w-3xl text-base md:text-lg text-white/70">
          Pick a template that matches your use case, connect your stack, and launch reliable AI workflows in a few
          clicks. Every template follows best practices for handoffs, guardrails, and analytics so your team can focus
          on outcomes.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/book">Talk to experts</Button>
          <Button variant="ghost" href="/docs">
            View implementation guide
          </Button>
        </div>
      </header>

      <TemplatesGallery />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Need something tailored?</h2>
              <p className="mt-3 text-white/70">
                We partner with go-to-market, support, and operations teams to adapt templates to their exact flows.
                From multi-step approvals to deep CRM syncs, we can help you launch faster with confidence.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-500/20 bg-black/40 p-5 text-sm text-white/80 shadow-inner">
              <p className="font-semibold text-white">Popular customizations</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Injecting product usage or billing data into outreach</li>
                <li>Escalation routing with live agent context</li>
                <li>Human review checkpoints for sensitive actions</li>
              </ul>
              <Button href="/contact" className="mt-5 w-full">
                Start a custom project
              </Button>
            </div>
          </div>
        </div>
      </section>

      <DarkFooter />
    </main>
  );
}
