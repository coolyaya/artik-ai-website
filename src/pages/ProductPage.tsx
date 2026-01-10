import React from 'react';
import Seo from '@/components/Seo';
import Navbar from '@/components/Navbar';
import DarkFooter from '@/components/DarkFooter';
import { CheckCircle2, ArrowRight, Bot, PhoneCall, CalendarClock, Globe2, AppWindow, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductPage() {
  const features = [
    {
      id: 'support',
      icon: <Bot className="w-5 h-5 text-cyan-400" />,
      title: 'AI Customer Support & Chatbots',
      desc: 'Instantly respond to customers around the clock with intelligent automation.',
      bullets: [
        'Resolve tickets across chat, email, and social channels',
        'Escalate to humans with full context and conversation logs',
        'Train on your help center, docs, and product data',
      ],
    },
    {
      id: 'voice',
      icon: <PhoneCall className="w-5 h-5 text-cyan-400" />,
      title: 'AI Phone Callers',
      desc: 'Automated outbound and inbound calls that convert.',
      bullets: [
        'Launch proactive campaigns with dynamic personalization',
        'Answer inbound calls with CRM records at hand',
        'Deliver call summaries and playbacks instantly',
      ],
    },
    {
      id: 'crm',
      icon: <CalendarClock className="w-5 h-5 text-cyan-400" />,
      title: 'CRM Integrations & Appointment Setting',
      desc: 'Never miss a lead thanks to unified scheduling and data sync.',
      bullets: [
        'Connect HubSpot, Salesforce, and other CRMs in minutes',
        'Auto-book appointments with two-way calendar sync',
        'Route leads to reps based on territory or availability',
      ],
    },
    {
      id: 'sites',
      icon: <Globe2 className="w-5 h-5 text-cyan-400" />,
      title: 'AI Website Creation',
      desc: 'Spin up conversion-ready sites without touching code.',
      bullets: [
        'Launch landing pages and microsites in hours',
        'Personalize copy and CTAs for every audience',
        'Track performance with built-in analytics hooks',
      ],
    },
    {
      id: 'apps',
      icon: <AppWindow className="w-5 h-5 text-cyan-400" />,
      title: 'AI App Creation',
      desc: 'Build internal tools and customer-facing apps faster.',
      bullets: [
        'Assemble UI blocks with AI-assisted layout suggestions',
        'Securely connect to your databases and APIs',
        'Publish to web or embed inside existing portals',
      ],
    },
    {
      id: 'marketing',
      icon: <Megaphone className="w-5 h-5 text-cyan-400" />,
      title: 'AI Ad Creatives & Marketing',
      desc: 'Generate campaigns that ship faster and perform better.',
      bullets: [
        'Produce on-brand copy for every channel',
        'Generate high-performing visual assets automatically',
        'Optimize spend with live performance insights',
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Product - ArtikAi"
        description="Chat, voice, and workflow automation built for growth teams."
      />

      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-gray-950 text-white">
        <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">One platform. Three superpowers.</h1>
        <p className="mt-3 text-white/70 max-w-2xl">Ship AI chat, voice, and end-to-end workflows without cobbling tools together. Designed for reliability, observability, and speed.</p>
        <div className="mt-6">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-black font-semibold shadow-[0_15px_60px_rgba(34,211,238,0.35)] hover:opacity-90"
            data-analytics-cta="product-book-demo"
          >
            Book a demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.id} id={f.id} className="rounded-2xl border border-white/10 bg-gray-900/60 p-6">
              <div className="flex items-center gap-2">{f.icon}<span className="text-sm text-white/70">{f.title}</span></div>
              <h3 className="mt-2 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {f.bullets.map((point) => (
                  <li key={point} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" />{point}</li>
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
          <div className="mt-4 text-sm text-white/60">HubSpot | Salesforce | Slack | Notion | Google Calendar | Postgres</div>
        </div>
      </section>

      <DarkFooter />
      </main>
    </>
  );
}
