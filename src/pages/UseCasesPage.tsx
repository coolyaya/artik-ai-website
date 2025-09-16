import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import DarkFooter from '@/components/DarkFooter';
import { Building2, ShoppingCart, Headphones, BarChart3, CalendarClock, MailCheck } from 'lucide-react';

type Case = { icon: React.ReactNode; title: string; results: string; desc: string };

const cases: Case[] = [
  { icon: <Building2 className="w-5 h-5 text-cyan-400" />, title: 'B2B SaaS', results: '+35% demo bookings', desc: 'Qualify, schedule, and remind prospects across chat, voice, and email.' },
  { icon: <ShoppingCart className="w-5 h-5 text-cyan-400" />, title: 'E‑commerce', results: '-18% cart abandonment', desc: 'Recover carts, answer product questions, and route VIP customers instantly.' },
  { icon: <Headphones className="w-5 h-5 text-cyan-400" />, title: 'Support', results: '-40% first response time', desc: 'Deflect FAQs, summarize tickets, and escalate with full context.' },
  { icon: <BarChart3 className="w-5 h-5 text-cyan-400" />, title: 'Sales', results: '+22% pipeline', desc: 'Outbound calling and follow‑ups with CRM‑aware scripts and notes.' },
  { icon: <CalendarClock className="w-5 h-5 text-cyan-400" />, title: 'Scheduling', results: 'No‑show rate down', desc: 'Coordinate calendars, confirmations, and reminders automatically.' },
  { icon: <MailCheck className="w-5 h-5 text-cyan-400" />, title: 'Lead Ops', results: 'SLA under 2 min', desc: 'Speed‑to‑lead routing with scoring, enrichment, and alerts.' },
];

export default function UseCasesPage(){
  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Use Cases — ArtikAi</title>
        <meta name="description" content="Proven AI automations for SaaS, ecommerce, support, and sales." />
      </Helmet>
      <Navbar variant="dark" />

      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Where teams win with AI</h1>
        <p className="mt-3 text-white/70 max-w-2xl">Plug ArtikAi into your revenue workflows. Start with one play, then scale.</p>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article key={c.title} className="rounded-2xl border border-white/10 bg-gray-900/60 p-6">
              <div className="flex items-center gap-2 text-white/70">{c.icon}<span className="text-sm">{c.title}</span></div>
              <h3 className="mt-2 text-xl font-semibold">{c.results}</h3>
              <p className="mt-2 text-white/70">{c.desc}</p>
              <div className="mt-4 text-sm text-white/60">Playbooks: Qualification • Cart Recovery • Ticket Triage • Outbound • Reminders</div>
            </article>
          ))}
        </div>
      </section>

      <DarkFooter />
    </main>
  );
}
