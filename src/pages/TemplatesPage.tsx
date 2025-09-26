import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import DarkFooter from '@/components/DarkFooter';
import TemplatesGallery from '@/sections/TemplatesGallery';

const BENEFITS = [
  {
    title: 'Launch faster',
    description: 'Drop in a working flow for support, sales, or marketing in minutes and tweak it to fit your stack.',
  },
  {
    title: 'Opinionated best practices',
    description: 'Every template encodes proven prompts, fallback logic, and handoff patterns so you do not have to start from a blank page.',
  },
  {
    title: 'Integrated by default',
    description: 'Connect your CRM, calendar, or help desk and keep data in sync without re-building plumbing.',
  },
];

export default function TemplatesPage() {
  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Templates - ArtikAi</title>
        <meta
          name="description"
          content="Browse ready-to-run AI automations for support, revenue, and operations. Launch with best practices baked in."
        />
      </Helmet>

      <Navbar variant="dark" />

      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/80">Template library</p>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">Start from a proven blueprint.</h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Ship automations that reflect real-world playbooks. Templates cover the messaging, routing, and data sync so you can
          personalize and launch.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/book"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-black font-semibold shadow-[0_15px_60px_rgba(34,211,238,0.35)] hover:opacity-90"
          >
            Book a demo
          </Link>
          <Link
            to="/docs"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10"
          >
            View docs
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 grid gap-6 md:grid-cols-3">
        {BENEFITS.map((benefit) => (
          <div key={benefit.title} className="rounded-2xl border border-white/10 bg-gray-900/60 p-6">
            <h2 className="text-xl font-semibold">{benefit.title}</h2>
            <p className="mt-3 text-sm text-white/70">{benefit.description}</p>
          </div>
        ))}
      </section>

      <TemplatesGallery />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-500/15 via-blue-600/10 to-purple-600/15 p-8 border border-cyan-500/10">
          <h2 className="text-2xl md:text-3xl font-bold">Need something custom?</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Our team turns bespoke workflows into production-ready automations. Share your playbook and we will tailor a template
            to match your systems and compliance needs.
          </p>
          <div className="mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <DarkFooter />
    </main>
  );
}
