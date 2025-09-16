import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, Phone, Plug, Globe, LayoutGrid, Megaphone, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'chat',
    title: 'AI Customer Support & Chatbots',
    blurb: 'Instantly respond 24/7 with intelligent automation',
    icon: MessageSquare,
  },
  {
    id: 'caller',
    title: 'AI Phone Callers',
    blurb: 'Automated outbound & inbound calls that convert',
    icon: Phone,
  },
  {
    id: 'crm',
    title: 'CRM Integrations & Appointment Setting',
    blurb: 'Never miss a lead again with smart scheduling',
    icon: Plug,
  },
  {
    id: 'web',
    title: 'AI Website Creation',
    blurb: 'Smart, conversion-ready websites in minutes',
    icon: Globe,
  },
  {
    id: 'ai-app',
    title: 'AI App Creation',
    blurb: 'AI app creation to give your business a more professional look',
    icon: LayoutGrid,
  },
  {
    id: 'ads',
    title: 'AI Ad Creatives & Marketing',
    blurb: 'Facebook & Instagram ads that convert',
    icon: Megaphone,
  },
];

export default function ServicesPage() {
  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Services - ArtikAi</title>
        <meta name="description" content="Explore ArtikAi services: chatbots, voice callers, CRM, websites, apps, and ads." />
      </Helmet>

      {/* Nav (compact) */}
      <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60 bg-gray-950/80 border-b border-cyan-500/10" aria-label="Primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="text-lg font-semibold tracking-widest">ARTIK<span className="text-cyan-400">AI</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
            <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-medium text-black">Book <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </nav>

      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="rise" style={{ animationDelay: '40ms' }}>
          <span className="text-3xl md:text-5xl font-extrabold">Services</span>
        </h1>
        <p className="rise mt-3 text-gray-300 max-w-2xl" style={{ animationDelay: '120ms' }}>
          AI-powered automation across chat, voice, CRM, web, apps, and marketing.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.id}
              to={`/service/${s.id}`}
              className="rise group rounded-2xl border border-white/10 bg-gray-900 p-6 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.12)]"
              style={{ animationDelay: `${160 + i * 70}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                {React.createElement(s.icon, { className: 'w-6 h-6' })}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-400">{s.blurb}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-cyan-400">
                <span className="relative inline-block transition-[background-size] bg-gradient-to-r from-cyan-400 to-blue-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px]">LEARN MORE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
