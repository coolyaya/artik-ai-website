import { useEffect, useState } from 'react';
import { Clock, TrendingUp, Scale, Shield } from 'lucide-react';
import Section from './layout/Section';

const benefits = [
  {
    icon: Clock,
    title: 'SAVE TIME',
    body: 'Automate repetitive tasks and focus on growth',
  },
  {
    icon: TrendingUp,
    title: 'INCREASE REVENUE',
    body: 'Capture and convert more leads automatically',
  },
  {
    icon: Scale,
    title: 'SCALE SMARTER',
    body: 'Growth without adding headcount or overhead',
  },
  {
    icon: Shield,
    title: 'STAY AHEAD',
    body: 'AI tools designed for modern businesses',
  },
] as const;

const metrics = [
  { label: 'LEADS GENERATED', progress: 0.68, suffix: '+247%' },
  { label: 'AUTOMATION EFFICIENCY', progress: 0.997, suffix: '99.7%' },
  { label: 'TIME SAVED', progress: 0.8, suffix: '40 HRS/WK' },
] as const;

export default function WhyChoose() {
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimateBars(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <Section id="why-choose">
      <div className="relative overflow-hidden rounded-brand-xl border border-white/10 bg-gradient-to-br from-white/[0.12] via-white/[0.05] to-white/[0.02] p-6 md:p-10 lg:p-12 shadow-[0_45px_120px_-60px_rgba(8,12,32,0.95)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_top_left,black,transparent_65%)] bg-[radial-gradient(120%_90%_at_0%_0%,rgba(56,189,248,0.25),transparent),radial-gradient(120%_90%_at_80%_0%,rgba(217,70,239,0.18),transparent)]" aria-hidden="true" />
        <div className="relative grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white/90 md:text-5xl">
              WHY CHOOSE <span className="text-cyan-400">ARTIKAI</span>?
            </h2>
            <div className="space-y-6 md:space-y-8">
              {benefits.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4 md:gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-brand-md border border-white/10 bg-white/10 text-cyan-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-lg font-semibold text-white/90 md:text-xl">{title}</div>
                    <p className="text-sm text-white/80 md:text-base">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-brand-xl border border-white/10 bg-gradient-to-br from-white/15 via-white/10 to-white/[0.04] p-6 md:p-8 shadow-[0_0_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
              AI DASHBOARD ACTIVE
            </div>
            <div className="mt-6 space-y-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-brand-lg border border-white/10 bg-white/10 p-4 md:p-5 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.7)] backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold tracking-tight text-white/90">{metric.label}</p>
                    <span className="text-sm font-semibold text-emerald-300">{metric.suffix}</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 ${animateBars ? 'bar-anim' : ''}`}
                      style={{ width: `${Math.round(metric.progress * 1000) / 10}%`, transform: animateBars ? undefined : 'scaleX(0)' }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
