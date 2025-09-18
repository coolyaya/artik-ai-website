import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSpline() {
  const highlights = [
    'Personalized AI chat and voice agents for every buyer journey',
    'Workflows that trigger actions across your entire stack',
    'Live human handoff the moment intent is high-value',
    'Insights that show what your automation is closing'
  ];

  const metrics = [
    { label: 'Qualified demos', value: '3.2x', helper: 'increase after 60 days' },
    { label: 'Response time', value: '54s', helper: 'avg. across channels' },
    { label: 'Automation coverage', value: '82%', helper: 'common workflows automated' }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-12 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-28 left-8 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Automate revenue conversations
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                AI Automation Without Limits
              </h1>
              <p className="max-w-xl text-lg md:text-xl text-white/80">
                Chat, voice, and workflows that scale revenue while you sleep. ArtikAi coordinates every touchpoint so your team focuses on closing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-base font-semibold text-black shadow-[0_20px_60px_rgba(34,211,238,0.35)] transition hover:opacity-90"
              >
                Book a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-base font-semibold text-white/80 transition hover:border-cyan-500/40 hover:text-white"
              >
                Talk to us
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 text-sm text-white/70 max-w-xl">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative ml-auto w-full max-w-lg">
            <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-2xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_80px_rgba(15,23,42,0.6)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">Pipeline</p>
                  <p className="mt-2 text-3xl font-semibold text-white">$1.8M</p>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">+42%</span>
              </div>

              <div className="mt-8 space-y-5">
                {metrics.map(({ label, value, helper }) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-4">
                    <div>
                      <p className="text-sm font-medium text-white/70">{label}</p>
                      <p className="text-xs text-white/50">{helper}</p>
                    </div>
                    <p className="text-2xl font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-5 text-sm text-cyan-100">
                "Our reps jump in as soon as ArtikAi flags a high-intent buyer. The handoff is seamless."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
