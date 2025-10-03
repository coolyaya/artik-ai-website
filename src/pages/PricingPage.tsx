import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';

const buildSellServices = [
  {
    service: 'AI App Creation',
    deliverables: 'Custom workflows/apps via Voiceflow, N8N, Make.com',
    priceRange: '$1,500 - $5,000',
  },
  {
    service: 'AI Chat & Support',
    deliverables: 'Website chatbot + social DMs integration',
    priceRange: '$1,000 - $3,500',
    featured: true,
  },
  {
    service: 'AI Phone Caller',
    deliverables: 'Outbound AI caller, missed-call text-back',
    priceRange: '$1,500 - $4,000',
  },
  {
    service: 'CRM & Calendar Setup',
    deliverables: 'HubSpot/Airtable setup, Google/Outlook sync',
    priceRange: '$1,200 - $3,500',
  },
  {
    service: 'Websites & Funnels',
    deliverables: 'Landing page, funnel, pixels/tracking',
    priceRange: '$1,500 - $4,000',
  },
  {
    service: 'Ads & Creatives',
    deliverables: 'Hook scripts, IG/FB creatives',
    priceRange: '$800 - $2,500 + % of sales option',
  },
];

const buildSellEstimateNotes = [
  'Small business MVP build: ~$1k-$2k',
  'Mid-sized workflow/system: ~$3k-$5k',
  'Custom/complex builds: $6k+',
];

const buildMaintainServices = [
  { service: 'AI App Hosting & Maintenance', priceRange: '$500 - $1,500' },
  { service: 'AI Chat/Support Maintenance', priceRange: '$400 - $1,200' },
  { service: 'AI Phone Caller Maintenance', priceRange: '$500 - $1,500' },
  { service: 'CRM/Calendar Maintenance', priceRange: '$300 - $800' },
  { service: 'Website & Funnel Maintenance', priceRange: '$400 - $1,200' },
  { service: 'Ads & Creatives', priceRange: '$600 - $2,000 + % of sales option' },
];

const retainerEstimateNotes = [
  'Light maintenance (basic fixes/updates): ~$500/month',
  'Active scaling (new features, multiple integrations): $1k-$2k/month',
  'Enterprise/high-touch: $3k+/month',
];

const retainerPackages = [
  {
    name: 'Starter',
    description: '1-2 automations + basic support',
    priceRange: '$750 - $1,000/mo',
  },
  {
    name: 'Growth',
    description: 'Multi-system support (chat + CRM + website)',
    priceRange: '$1,500 - $2,500/mo',
    featured: true,
  },
  {
    name: 'Scale',
    description: 'Full stack management (apps, CRM, callers, funnels, ads)',
    priceRange: '$3,000 - $5,000/mo',
  },
];

const platformCostNotes = [
  'One-time builds: set up subscriptions in the client\'s account so they handle the platform costs directly.',
  'Monthly retainers: roll platform fees into the invoice with a healthy markup (e.g. $150 Voiceflow -> charge $250) or have clients pay providers directly.',
  'Build-and-sell clients on your stack: add a light platform fee (~$30/client) so each deployment covers the core software subscriptions.',
];

const profitabilityTips = [
  'Never price below $1,000 for one-off builds - protect the perceived value and margin.',
  'Lead with build & sell as an easy entry offer, then position retainers as the smarter long-term safety net.',
  'Tier your options so clients feel in control while you anchor toward high-value retainers.',
  'Use retainers to fund your own recurring software stack and reinvest in growth.',
];

const tabs = [
  {
    id: 'build' as const,
    label: 'Build & Sell Projects',
    description: 'One-time systems clients own after handoff. Pass platform fees through while you focus on delivery.',
  },
  {
    id: 'retain' as const,
    label: 'Build & Maintain Retainers',
    description: 'Keep revenue steady with proactive support, optimizations, and growth work month after month.',
  },
];

type PricingView = (typeof tabs)[number]['id'];

export default function PricingPage() {
  const [activeView, setActiveView] = useState<PricingView>('build');
  const activeTab = tabs.find((tab) => tab.id === activeView);

  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Pricing - ArtikAi</title>
        <meta
          name="description"
          content="Transparent pricing for ArtikAi build-and-sell projects and retainers, plus guidance on platform pass-through costs."
        />
      </Helmet>
      <Navbar variant="dark" />

      <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
        <div className="pointer-events-none absolute left-1/2 top-[-10rem] -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="pointer-events-none absolute right-[-6rem] bottom-[-6rem] -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <header className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12 pt-10 text-center sm:pb-16">
          <h1 className="rise mx-auto max-w-3xl text-balance text-3xl font-extrabold tracking-tight md:text-5xl" style={{ animationDelay: '40ms' }}>
            Build as much as you need. Scale only when the automations run.
          </h1>
          <p className="rise mx-auto mt-4 max-w-2xl text-balance text-gray-300" style={{ animationDelay: '120ms' }}>
            Every engagement is priced to cover delivery time and the software that powers it. Choose a one-time build or stay on retainer for ongoing improvements.
          </p>
        </header>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
          <div className="rise rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur" style={{ animationDelay: '160ms' }}>
            <div className="flex flex-col items-center gap-6">
              <div className="relative flex max-w-xl items-center gap-2 rounded-full bg-white/10 p-1 text-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveView(tab.id)}
                    className={`w-full rounded-full px-5 py-2 font-medium transition ${
                      activeView === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-gray-950'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {activeTab && <p className="max-w-3xl text-center text-sm text-gray-300">{activeTab.description}</p>}
            </div>

            <div className="mt-10 space-y-10">
              {activeView === 'build' ? (
                <>
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {buildSellServices.map((item) => {
                      const featured = Boolean(item.featured);
                      return (
                        <div
                          key={item.service}
                          className={`group flex h-full flex-col rounded-3xl border p-6 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20 ${
                            featured
                              ? 'border-white/10 bg-gray-900/60'
                              : 'border-white/10 bg-gray-900/60'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-sm uppercase tracking-wide text-cyan-200/80">One-time build</p>
                              <h3 className="mt-1 text-xl font-semibold text-white">{item.service}</h3>
                            </div>
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-cyan-100">
                              {item.priceRange}
                            </span>
                          </div>
                          <p className="mt-4 text-sm leading-relaxed text-gray-300">{item.deliverables}</p>
                          <div className="mt-auto flex items-center gap-3 pt-6">
                            <Link
                              to="/book"
                              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-gray-950"
                            >
                              Book a Demo <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link to="/contact" className="text-sm font-medium text-cyan-200 hover:text-cyan-100">
                              Ask a question
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {buildSellEstimateNotes.map((note) => (
                      <div
                        key={note}
                        className="flex items-start gap-3 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 text-sm text-cyan-100"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {retainerPackages.map((pkg) => {
                      const featured = Boolean(pkg.featured);
                      return (
                        <div
                          key={pkg.name}
                          className={`flex h-full flex-col rounded-3xl border p-6 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20 ${
                            featured
                              ? 'border-white/10 bg-gray-900/60'
                              : 'border-white/10 bg-gray-900/60'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-sm uppercase tracking-wide text-blue-200/80">Retainer tier</p>
                              <h3 className="mt-1 text-xl font-semibold text-white">{pkg.name}</h3>
                            </div>
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-cyan-100">
                              {pkg.priceRange}
                            </span>
                          </div>
                          <p className="mt-4 text-sm leading-relaxed text-gray-300">{pkg.description}</p>
                          <div className="mt-auto flex items-center gap-3 pt-6">
                            <Link
                              to="/book"
                              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-gray-950"
                            >
                              Book a Demo <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link to="/book" className="text-sm font-medium text-cyan-200 hover:text-cyan-100">
                              Book a strategy call
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {retainerEstimateNotes.map((note) => (
                      <div
                        key={note}
                        className="flex items-start gap-3 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 text-sm text-cyan-100"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {buildMaintainServices.map((item) => (
                      <div key={item.service} className="rounded-2xl border border-white/10 bg-gray-900/60 p-5">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-base font-semibold text-white">{item.service}</h4>
                          <span className="text-xs font-medium text-cyan-200">{item.priceRange}</span>
                        </div>
                        <p className="mt-3 text-sm text-gray-300">
                          Includes monitoring, patching, and enhancements tailored to the systems you have in production.
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="rise mt-16 grid gap-6 text-sm text-gray-200 md:grid-cols-2" style={{ animationDelay: '220ms' }}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">How to handle platform costs</h2>
              <p className="text-sm text-gray-300">Keep subscriptions like Voiceflow, Make, and N8N off your books while still delivering a premium experience.</p>
              <ul className="space-y-3">
                {platformCostNotes.map((note) => (
                  <li key={note} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-400" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Profitability tips</h2>
              <p className="text-sm text-gray-300">Price for profit, not just effort. Retainers create predictable growth capital.</p>
              <ul className="space-y-3">
                {profitabilityTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-400" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rise mt-16 grid gap-6 md:grid-cols-2" style={{ animationDelay: '260ms' }}>
            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-6">
              <h3 className="text-lg font-semibold text-white">Looking for something else?</h3>
              <p className="mt-2 text-sm text-gray-200">Need ad creatives, brand strategy, or a custom workflow bundle? Let\'s design the plan that fits your launch timeline.</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 hover:text-white">
                Talk through a custom scope <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Want to compare live?</h3>
              <p className="mt-2 text-sm text-gray-300">Bring your tech stack or funnel map to a working session. We\'ll outline the build, estimate platform spend, and plug you into the right package.</p>
              <Link to="/book" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 hover:text-white">
                Book a planning session <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rise mt-20 flex flex-col gap-4 rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-10 text-center" style={{ animationDelay: '300ms' }}>
            <h2 className="text-3xl font-bold text-white">Ready to map your next automation?</h2>
            <p className="text-gray-100">Lock in pricing, assign platform costs, and launch faster with a done-with-you build or full retainer.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 text-sm font-semibold text-gray-950">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-cyan-500/60 px-6 py-2 text-sm font-semibold text-cyan-100">
                Talk to Sales <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
