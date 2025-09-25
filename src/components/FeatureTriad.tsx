import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts";
import { Bot, PhoneCall, CalendarClock, Globe2, AppWindow, Megaphone, X } from "lucide-react";
import Section from "./layout/Section";

type MetricPoint = {
  label: string;
  value: number;
};

type FeatureItem = {
  icon: JSX.Element;
  title: string;
  copy: string;
  details: {
    headline: string;
    bullets: string[];
  };
  media: {
    src: string;
    poster?: string;
    caption: string;
  };
  metrics: MetricPoint[];
  metricLabel: string;
  useCaseHref: string;
};

const items: FeatureItem[] = [
  {
    icon: <Bot size={22} />,
    title: "AI Customer Support & Chatbots",
    copy: "Instantly respond 24/7 with intelligent automation",
    details: {
      headline: "Give every customer an always-on agent that speaks in your brand voice.",
      bullets: [
        "Trains on help-center articles, past tickets, and SOPs in minutes.",
        "Resolves routine questions across chat, email, SMS, and social DMs.",
        "Detects complex intent and routes to human reps with full conversation context.",
      ],
    },
    media: {
      src: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
      poster: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
      caption: "Live handoff from the ArtikAi support copilot inside a customer inbox.",
    },
    metrics: [
      { label: "Jan", value: 42 },
      { label: "Mar", value: 55 },
      { label: "May", value: 63 },
      { label: "Jul", value: 71 },
      { label: "Sep", value: 79 },
      { label: "Nov", value: 88 },
    ],
    metricLabel: "Self-serve resolution rate (%)",
    useCaseHref: "/use-cases/support",
  },
  {
    icon: <PhoneCall size={22} />,
    title: "AI Phone Callers",
    copy: "Automated outbound & inbound calls that convert",
    details: {
      headline: "Make every phone call feel personal without hiring a call center.",
      bullets: [
        "Handles inbound call triage, appointment reminders, and follow-ups automatically.",
        "Uses natural-sounding voices with language and accent options tuned to your market.",
        "Logs transcripts, call outcomes, and next steps directly inside your CRM.",
      ],
    },
    media: {
      src: "https://storage.googleapis.com/coverr-main/mp4/Skiing.mp4",
      poster: "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=800&q=80",
      caption: "Preview of ArtikAi voice agent confirming a scheduled appointment.",
    },
    metrics: [
      { label: "Jan", value: 12 },
      { label: "Mar", value: 21 },
      { label: "May", value: 36 },
      { label: "Jul", value: 44 },
      { label: "Sep", value: 57 },
      { label: "Nov", value: 66 },
    ],
    metricLabel: "Booked calls per rep (weekly)",
    useCaseHref: "/use-cases/callers",
  },
  {
    icon: <CalendarClock size={22} />,
    title: "CRM Integrations & Appointment Setting",
    copy: "Never miss a lead again with smart scheduling",
    details: {
      headline: "Keep pipelines up to date and calendars filled without manual back-and-forth.",
      bullets: [
        "Two-way sync with HubSpot, Salesforce, Airtable, and Google Sheets.",
        "Automatically qualifies leads, proposes times, and books meetings on shared calendars.",
        "Sends confirmations, reminders, and post-call tasks in Slack or email.",
      ],
    },
    media: {
      src: "https://storage.googleapis.com/coverr-main/mp4/SandPatterns.mp4",
      poster: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=800&q=80",
      caption: "Dashboard view of ArtikAi syncing CRM stages with live calendar data.",
    },
    metrics: [
      { label: "Jan", value: 18 },
      { label: "Mar", value: 32 },
      { label: "May", value: 45 },
      { label: "Jul", value: 53 },
      { label: "Sep", value: 64 },
      { label: "Nov", value: 72 },
    ],
    metricLabel: "Lead-to-meeting conversion (%)",
    useCaseHref: "/use-cases/crm",
  },
  {
    icon: <Globe2 size={22} />,
    title: "AI Website Creation",
    copy: "Smart, conversion-ready websites in minutes",
    details: {
      headline: "Launch conversion-ready web experiences in hours, not weeks.",
      bullets: [
        "Generates copy, sections, and imagery from brand guidelines or a short brief.",
        "Includes built-in SEO, analytics, and A/B testing hooks to improve performance.",
        "Hands-off publishing to Webflow, Framer, or a lightweight ArtikAi-hosted site.",
      ],
    },
    media: {
      src: "https://storage.googleapis.com/coverr-main/mp4/GoldenGateBridge.mp4",
      poster: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      caption: "AI drafts a landing page hero and instantly pushes changes to production.",
    },
    metrics: [
      { label: "Jan", value: 1.8 },
      { label: "Mar", value: 2.5 },
      { label: "May", value: 3.1 },
      { label: "Jul", value: 3.9 },
      { label: "Sep", value: 4.4 },
      { label: "Nov", value: 5.2 },
    ],
    metricLabel: "Average launch time (days)",
    useCaseHref: "/use-cases/websites",
  },
  {
    icon: <AppWindow size={22} />,
    title: "AI App Creation",
    copy: "AI app creation to give your business a more professional look",
    details: {
      headline: "Prototype internal tools and client-facing apps with AI-assisted builders.",
      bullets: [
        "Drag-and-drop UI blocks paired with code when you need deeper customization.",
        "Connects to internal databases, APIs, and auth to automate multi-step workflows.",
        "Ships responsive, branded apps with deployment pipelines managed for you.",
      ],
    },
    media: {
      src: "https://storage.googleapis.com/coverr-main/mp4/Waves.mp4",
      poster: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      caption: "Walkthrough of ArtikAi assembling a customer onboarding portal in minutes.",
    },
    metrics: [
      { label: "Jan", value: 24 },
      { label: "Mar", value: 38 },
      { label: "May", value: 49 },
      { label: "Jul", value: 63 },
      { label: "Sep", value: 71 },
      { label: "Nov", value: 82 },
    ],
    metricLabel: "Hours saved per project",
    useCaseHref: "/use-cases/apps",
  },
  {
    icon: <Megaphone size={22} />,
    title: "AI Ad Creatives & Marketing",
    copy: "Facebook & Instagram ads that convert",
    details: {
      headline: "Fill your pipeline with on-brand campaigns that learn from every iteration.",
      bullets: [
        "Produces channel-ready copy, scripts, and visuals tuned to each audience.",
        "Auto-generates variant ads and landing pages based on performance data.",
        "Feeds results back into Meta, Google, and TikTok to optimize spend automatically.",
      ],
    },
    media: {
      src: "https://storage.googleapis.com/coverr-main/mp4/Typing.mp4",
      poster: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
      caption: "Campaign builder generating multi-channel ad variants and scripts.",
    },
    metrics: [
      { label: "Jan", value: 1.3 },
      { label: "Mar", value: 1.9 },
      { label: "May", value: 2.5 },
      { label: "Jul", value: 3.1 },
      { label: "Sep", value: 3.8 },
      { label: "Nov", value: 4.6 },
    ],
    metricLabel: "Return on ad spend (x)",
    useCaseHref: "/use-cases/ads",
  },
];

const chartStroke = {
  stroke: "#22d3ee",
  strokeWidth: 2.5,
  dot: { r: 3, fill: "#22d3ee", strokeWidth: 0 },
  activeDot: { r: 5, fill: "#22d3ee", strokeWidth: 0 },
};

export default function FeatureTriad() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const activeItem = activeIndex === null ? null : items[activeIndex];
  const modalTitleId = activeIndex === null ? undefined : `feature-modal-${activeIndex}-title`;
  const modalDescId = activeIndex === null ? undefined : `feature-modal-${activeIndex}-description`;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setActiveIndex(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const timeout = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex]);

  const handleGoToUseCases = () => {
    if (!activeItem) return;
    navigate(activeItem.useCaseHref);
    setActiveIndex(null);
  };

  return (
    <Section id="features">
      <div className="space-y-10">
        <div className="text-center md:text-left max-w-2xl">
          <p className="kicker">Core Offerings</p>
          <h2 className="h2" style={{ marginTop: 12 }}>Deploy AI across every customer touchpoint</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="card min-w-0 flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-cyan-300 border border-white/10">
                {item.icon}
              </div>
              <h3 style={{ margin: "4px 0 0", fontSize: 20 }}>{item.title}</h3>
              <p className="lead flex-1">{item.copy}</p>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="inline-flex items-center gap-2 text-left text-sm font-semibold text-cyan-300 hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B1A]"
              >
                Learn more <span aria-hidden>?</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalTitleId}
            aria-describedby={modalDescId}
            className="relative z-10 w-full max-w-3xl rounded-2xl border border-white/15 bg-[#0B1120] p-6 shadow-[0_20px_60px_rgba(12,22,45,0.65)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-300">
                  {activeItem.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Product spotlight</p>
                  <h3 id={modalTitleId} className="mt-1 text-xl font-semibold text-white">
                    {activeItem.title}
                  </h3>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveIndex(null)}
                className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/30 hover:text-white"
                aria-label="Close dialog"
              >
                <X size={16} />
              </button>
            </div>
            <p id={modalDescId} className="mt-4 text-sm text-white/80">
              {activeItem.details.headline}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {activeItem.details.bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400/80" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
              <figure className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                <video
                  className="aspect-video w-full bg-black object-cover"
                  controls
                  preload="none"
                  poster={activeItem.media.poster}
                >
                  <source src={activeItem.media.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <figcaption className="px-4 py-3 text-xs text-white/60">
                  {activeItem.media.caption}
                </figcaption>
              </figure>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-cyan-300">
                  <span>Impact trend</span>
                  <span>{activeItem.metricLabel}</span>
                </div>
                <div className="mt-4 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={activeItem.metrics} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
                      <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="6 8" />
                      <XAxis dataKey="label" stroke="rgba(255,255,255,0.4)" tickLine={false} axisLine={false} fontSize={12} />
                      <YAxis stroke="rgba(255,255,255,0.3)" tickLine={false} axisLine={false} fontSize={12} width={32} />
                      <Tooltip
                        cursor={{ stroke: "rgba(34,211,238,0.35)", strokeWidth: 1 }}
                        contentStyle={{ background: "#0B1120", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "12px" }}
                        labelStyle={{ color: "rgba(255,255,255,0.7)", marginBottom: 4 }}
                      />
                      <Line type="monotone" dataKey="value" {...chartStroke} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleGoToUseCases}
                className="rounded-xl bg-cyan-500/90 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400"
              >
                Use cases
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

