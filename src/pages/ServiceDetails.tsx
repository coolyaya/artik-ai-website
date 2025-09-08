import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  LayoutGrid, MessageSquare, PhoneCall, Calendar, Globe, Megaphone,
  ArrowRight, Check, BarChart3, LineChart as LineIcon
} from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar
} from "recharts";

type ServiceId = "chat" | "caller" | "crm" | "web" | "ai-app" | "ads";

type ServiceContent = {
  id: ServiceId;
  name: string;
  icon: React.ReactNode;        // ← changed
  summary: string;
  heroImg: string;
  bullets: string[];
  features: string[];
  metrics: { month: string; value: number }[];
  chart: "line" | "bar";
  metricLabel: string;
};

const S: Record<ServiceId, ServiceContent> = {
  chat: {
    id: "chat",
    name: "AI Customer Support & Chatbots",
    icon: <MessageSquare className="w-6 h-6" />,
    summary:
      "24/7 AI chat that answers FAQs, qualifies leads, and books calls—trained on your docs, past tickets, and site content.",
    heroImg:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Trains on PDFs, site pages, and knowledge bases",
      "Escalation rules with handoff to human agents",
      "Omnichannel: website, Instagram DMs, Facebook",
    ],
    features: [
      "Intent detection & lead capture",
      "Multi-language support",
      "CSAT tracking & transcripts",
    ],
    metrics: [
      { month: "Jan", value: 120 },
      { month: "Feb", value: 180 },
      { month: "Mar", value: 240 },
      { month: "Apr", value: 330 },
      { month: "May", value: 420 },
      { month: "Jun", value: 560 },
    ],
    chart: "line",
    metricLabel: "Conversations handled",
  },
  caller: {
    id: "caller",
    name: "AI Phone Caller",
    icon: <PhoneCall className="w-6 h-6" />,
    summary:
      "Missed-call text-back and outbound AI caller that confirms appointments and closes the loop on new leads.",
    heroImg:
      "https://images.unsplash.com/photo-1519669556878-63bdad8a1a16?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Answers missed calls with SMS + call-back",
      "Reads availability and books automatically",
      "Local presence numbers & call recording",
    ],
    features: [
      "Voicemail drop & follow-ups",
      "Lead routing by schedule",
      "CRM/ticket ID attachment",
    ],
    metrics: [
      { month: "Jan", value: 8 },
      { month: "Feb", value: 15 },
      { month: "Mar", value: 18 },
      { month: "Apr", value: 25 },
      { month: "May", value: 28 },
      { month: "Jun", value: 34 },
    ],
    chart: "bar",
    metricLabel: "Appointments booked / wk",
  },
  crm: {
    id: "crm",
    name: "CRM Integrations & Appointment Setting",
    icon: <Calendar className="w-6 h-6" />,
    summary:
      "Two-way sync with your CRM and calendars so leads never slip—auto-qualify, schedule, and track pipeline.",
    heroImg:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Google/Outlook calendar sync",
      "HubSpot / Airtable / RepairDesk connectors",
      "No-show recovery & reminders",
    ],
    features: [
      "Lead scoring & tags",
      "Multi-location rules",
      "Pipeline dashboards",
    ],
    metrics: [
      { month: "Jan", value: 45 },
      { month: "Feb", value: 52 },
      { month: "Mar", value: 60 },
      { month: "Apr", value: 74 },
      { month: "May", value: 81 },
      { month: "Jun", value: 95 },
    ],
    chart: "line",
    metricLabel: "Show-up rate (%)",
  },
  web: {
    id: "web",
    name: "AI Website Creation",
    icon: <Globe className="w-6 h-6" />,
    summary:
      "Conversion-first sites and funnels generated from your offers and brand—pixels, forms, and tracking included.",
    heroImg:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "SEO-friendly, blazing fast Vite/React",
      "Auto A/B test headlines & CTAs",
      "Meta/GA4 pixel-ready blocks",
    ],
    features: [
      "Landing pages & thank-you flows",
      "Schema & OG tags",
      "Copy suggestions with variants",
    ],
    metrics: [
      { month: "Jan", value: 1.2 },
      { month: "Feb", value: 1.7 },
      { month: "Mar", value: 2.4 },
      { month: "Apr", value: 2.9 },
      { month: "May", value: 3.2 },
      { month: "Jun", value: 3.8 },
    ],
    chart: "bar",
    metricLabel: "Conversion rate (%)",
  },
  "ai-app": {
    id: "ai-app",
    name: "AI App Creation",
    icon: <LayoutGrid className="w-6 h-6" />,
    summary:
      "Custom internal or customer-facing apps powered by AI—workflows, dashboards, and secure user roles.",
    heroImg:
      "https://images.unsplash.com/photo-1551281044-8afc5a4b7f87?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Role-based access & audit trails",
      "Fast CRUD + AI summarization",
      "Deploy to web, desktop, or mobile PWAs",
    ],
    features: [
      "Auth (email, SSO, OTP)",
      "File uploads & embeddings",
      "Realtime events & webhooks",
    ],
    metrics: [
      { month: "Jan", value: 12 },
      { month: "Feb", value: 19 },
      { month: "Mar", value: 26 },
      { month: "Apr", value: 33 },
      { month: "May", value: 44 },
      { month: "Jun", value: 58 },
    ],
    chart: "line",
    metricLabel: "Active users (×100)",
  },
  ads: {
    id: "ads",
    name: "AI Ad Creatives & Marketing",
    icon: <Megaphone className="w-6 h-6" />,
    summary:
      "High-performing IG/FB creatives from hooks to captions—auto-posting and performance learning built-in.",
    heroImg:
      "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Hook/caption generation with brand voice",
      "Creative variants & automatic sizing",
      "Auto-post schedule & comment guardrails",
    ],
    features: [
      "Pixel events & UTMs",
      "Creative fatigue detection",
      "Weekly insights with suggestions",
    ],
    metrics: [
      { month: "Jan", value: 1400 },
      { month: "Feb", value: 2200 },
      { month: "Mar", value: 3000 },
      { month: "Apr", value: 4200 },
      { month: "May", value: 5100 },
      { month: "Jun", value: 6500 },
    ],
    chart: "bar",
    metricLabel: "Impressions (×1k)",
  },
};

export default function ServiceDetails() {
  const { id } = useParams<{ id: ServiceId }>();
  const nav = useNavigate();

  const svc = id && S[id as ServiceId];
  if (!svc) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="text-center">
          <p className="text-xl">Service not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative">
        <img
          src={svc.heroImg}
          alt={`${svc.name} hero`}
          className="w-full h-72 object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10">{svc.icon}</div>
            <h1 className="text-2xl md:text-3xl font-semibold">{svc.name}</h1>
          </div>
          <p className="mt-2 text-gray-300 max-w-3xl">{svc.summary}</p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-10">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Bullets */}
          <div className="grid sm:grid-cols-2 gap-4">
            {svc.bullets.map((b) => (
              <div key={b} className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/5">
                <Check className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {svc.chart === "line" ? <LineIcon className="w-5 h-5 text-cyan-400" /> : <BarChart3 className="w-5 h-5 text-cyan-400" />}
                <span className="text-sm text-gray-300">{svc.metricLabel} (last 6 months)</span>
              </div>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                {svc.chart === "line" ? (
                  <LineChart data={svc.metrics} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                    <CartesianGrid strokeOpacity={0.1} />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip contentStyle={{ background: "#111", border: "1px solid #222" }} />
                    <Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={2} dot={false} />
                  </LineChart>
                ) : (
                  <BarChart data={svc.metrics} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                    <CartesianGrid strokeOpacity={0.1} />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip contentStyle={{ background: "#111", border: "1px solid #222" }} />
                    <Bar dataKey="value" fill="#22d3ee" />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          {/* Feature list */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold mb-4">What you get</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
              {svc.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column / CTA */}
        <aside className="space-y-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-semibold">Ready to see {svc.name}?</h4>
            <p className="text-sm text-gray-400 mt-1">
              We’ll tailor the demo to your use case.
            </p>
            <button
              onClick={() => nav(`/book?service=${svc.id}`)}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-black px-4 py-2 text-sm font-medium"
            >
              Book a demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-0 overflow-hidden">
            <img
              src={svc.heroImg + "&sat=-20"}
              alt={`${svc.name} preview`}
              className="w-full h-36 object-cover opacity-80"
            />
            <div className="p-4 text-sm text-gray-300">
              Real implementation screenshots available during the call.
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
