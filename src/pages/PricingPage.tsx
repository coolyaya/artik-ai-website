import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const plans = [
  { name: 'Starter', price: '$0', desc: 'Try the basics', features: ['Email support', 'Basic chatbot', 'Up to 1k messages/mo'] },
  { name: 'Growth', price: '$499', desc: 'Most popular', features: ['AI caller', 'CRM sync', 'Priority support'] },
  { name: 'Scale', price: 'Custom', desc: 'For high volume', features: ['Dedicated success', 'Custom workflows', 'SLAs'] },
];

export default function PricingPage() {
  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Pricing - ArtikAi</title>
        <meta name="description" content="Simple, transparent pricing for ArtikAi services." />
      </Helmet>
      <Navbar variant="dark" />

      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="rise" style={{ animationDelay: '40ms' }}>
          <span className="text-3xl md:text-5xl font-extrabold">Pricing</span>
        </h1>
        <p className="rise mt-3 text-gray-300 max-w-2xl" style={{ animationDelay: '120ms' }}>
          Start small and scale as you grow.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={p.name} className="rise rounded-2xl border border-white/10 bg-gray-900 p-6" style={{ animationDelay: `${160 + i * 80}ms` }}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="text-cyan-400 text-2xl font-bold">{p.price}</div>
              </div>
              <p className="mt-1 text-gray-400">{p.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> {f}</li>
                ))}
              </ul>
              <Link to="/book" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-medium text-black">
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
