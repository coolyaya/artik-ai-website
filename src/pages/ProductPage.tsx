import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import DarkFooter from '@/components/DarkFooter';
import { CheckCircle2, ArrowRight, Plug, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductPage() {
  const features = [
    {
      icon: <MessageSquare className="w-5 h-5 text-cyan-400" />, 
      title: 'AI Chat',
      desc: 'Website and in‑app chat that answers, qualifies, and routes in seconds.'
    },
    {
      icon: <Phone className="w-5 h-5 text-cyan-400" />, 
      title: 'AI Voice',
      desc: 'Outbound + inbound calling with CRM context and real‑time notes.'
    },
    {
      icon: <Plug className="w-5 h-5 text-cyan-400" />, 
      title: 'Workflows',
      desc: 'Drag‑and‑drop + code steps. Webhooks, schedulers, and human‑in‑the‑loop.'
    },
  ];

  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Product — ArtikAi</title>
        <meta name="description" content="Chat, voice, and workflow automation built for growth teams." />
      </Helmet>

      <Navbar variant="dark" />

      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">One platform. Three superpowers.</h1>
        <p className="mt-3 text-white/70 max-w-2xl">Ship AI chat, voice, and end‑to‑end workflows without cobbling tools together. Designed for reliability, observability, and speed.</p>
        <div className="mt-6">
          <Link to="/book" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-black font-semibold shadow-[0_15px_60px_rgba(34,211,238,0.35)] hover:opacity-90">
            Book a demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-gray-900/60 p-6">
              <div className="flex items-center gap-2">{f.icon}<span className="text-sm text-white/70">{f.title}</span></div>
              <h3 className="mt-2 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {['Production ready', 'Low drift responses', 'CRM + data aware', 'Full audit trail'].map((i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" />{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-8 border border-cyan-500/10">
          <h2 className="text-2xl md:text-3xl font-bold">Integrates with your stack</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Bring your CRM, help desk, calendar, and data warehouse. Our plugins and webhooks keep everything in sync.</p>
          <div className="mt-4 text-sm text-white/60">HubSpot • Salesforce • Slack • Notion • Google Calendar • Postgres</div>
        </div>
      </section>

      <DarkFooter />
    </main>
  );
}
