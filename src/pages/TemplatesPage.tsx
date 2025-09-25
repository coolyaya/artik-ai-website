import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Layers3, Wand2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import DarkFooter from '@/components/DarkFooter';
import Button from '@/components/ui/Button';
import TemplatesGallery from '@/sections/TemplatesGallery';

const highlights = [
  {
    icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
    title: 'Ready on day one',
    copy: 'Launch proven automations without writing prompts from scratch.',
  },
  {
    icon: <Layers3 className="w-5 h-5 text-cyan-400" />,
    title: 'Built for your stack',
    copy: 'Each template documents inputs, data connections, and handoff steps.',
  },
  {
    icon: <Wand2 className="w-5 h-5 text-cyan-400" />,
    title: 'Fully customizable',
    copy: 'Clone, remix, and adapt flows as your team experiments.',
  },
];

export default function TemplatesPage() {
  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Templates — ArtikAi</title>
        <meta
          name="description"
          content="Browse automation templates for support, sales, marketing, and operations teams."
        />
      </Helmet>

      <Navbar variant="dark" />

      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Automation templates</h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl">
              Skip the blank canvas. Start with curated workflows for chat, voice, and internal tools that already follow
              best practices across industries.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/book">Talk to our team</Button>
              <Button variant="ghost" href="/docs">View implementation guide</Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-base font-semibold text-white/80">Included with every template</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>• Structured hand-off instructions for humans</li>
              <li>• Example CRM and calendar mappings</li>
              <li>• Guardrails and evaluation checklist</li>
            </ul>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-gray-900/60 p-6">
            <div className="flex items-center gap-2 text-sm text-white/70">
              {item.icon}
              <span>{item.title}</span>
            </div>
            <p className="mt-3 text-white/80">{item.copy}</p>
          </div>
        ))}
      </section>

      <TemplatesGallery />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/10 p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Need something bespoke?</h2>
              <p className="mt-2 text-white/70">
                Our team adapts templates for regulated industries, multilingual deployments, and complex back office flows.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Button href="/services">Explore professional services</Button>
            </div>
          </div>
        </div>
      </section>

      <DarkFooter />
    </main>
  );
}
