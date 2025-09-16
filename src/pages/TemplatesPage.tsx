import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import DarkFooter from '@/components/DarkFooter';
import { Braces, MessageSquare, Phone, Calendar, ShoppingCart, FileText } from 'lucide-react';

type Template = { icon: React.ReactNode; name: string; blurb: string };

const templates: Template[] = [
  { icon: <MessageSquare className="w-5 h-5 text-cyan-400" />, name: 'Lead Qualification Chat', blurb: 'Score, enrich, and route website leads 24/7.' },
  { icon: <Phone className="w-5 h-5 text-cyan-400" />, name: 'Outbound Demo Dialer', blurb: 'AI caller books meetings and logs notes to your CRM.' },
  { icon: <Calendar className="w-5 h-5 text-cyan-400" />, name: 'No‑Show Recovery', blurb: 'Automated reminders and rescheduling across SMS + email.' },
  { icon: <ShoppingCart className="w-5 h-5 text-cyan-400" />, name: 'Cart Recovery', blurb: 'Bring shoppers back with helpful, contextual nudges.' },
  { icon: <FileText className="w-5 h-5 text-cyan-400" />, name: 'Support Deflection', blurb: 'Instant answers + ticket summaries with handoff when needed.' },
  { icon: <Braces className="w-5 h-5 text-cyan-400" />, name: 'Webhook Orchestrator', blurb: 'Trigger flows from your app and fan out to integrations.' },
];

export default function TemplatesPage(){
  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Templates — ArtikAi</title>
        <meta name="description" content="Ready‑to‑run playbooks for chat, voice, and automations." />
      </Helmet>
      <Navbar variant="dark" />

      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Templates to ship day one</h1>
        <p className="mt-3 text-white/70 max-w-2xl">Start with a proven playbook, then tweak steps, prompts, and integrations to fit your stack.</p>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-gray-900/60 p-6">
              <div className="flex items-center gap-2 text-white/70">{t.icon}<span className="text-sm">Template</span></div>
              <h3 className="mt-2 text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-white/70">{t.blurb}</p>
              <div className="mt-4 text-sm text-white/60">Editable prompts • Variables • Branching • Human approval step</div>
            </div>
          ))}
        </div>
      </section>

      <DarkFooter />
    </main>
  );
}
