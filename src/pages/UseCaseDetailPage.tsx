import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import DarkFooter from "@/components/DarkFooter";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

type UseCaseSlug = "support" | "callers" | "crm" | "websites" | "apps" | "ads";

type UseCaseContent = {
  name: string;
  heroLabel: string;
  heroHeadline: string;
  heroDescription: string;
  heroMetrics: { label: string; value: string }[];
  summaryBullets: string[];
  outcomes: { title: string; description: string; metric: string }[];
  automations: string[];
  integrations: string[];
  proofPoints: string[];
  video: { src: string; poster?: string; caption: string };
  seoDescription: string;
  serviceId: string;
};

const useCaseContent: Record<UseCaseSlug, UseCaseContent> = {
  support: {
    name: "AI Customer Support & Chatbots",
    heroLabel: "Support automation",
    heroHeadline: "Resolve 70% of frontline tickets before they reach your agents",
    heroDescription:
      "Deploy an always-on AI support layer that learns from your help center, past transcripts, and macros while keeping humans in the loop for high-value conversations.",
    heroMetrics: [
      { label: "Auto-resolved tickets", value: "68%" },
      { label: "Post-automation CSAT", value: "4.7 / 5" },
      { label: "Channels", value: "Chat / Email / SMS" },
    ],
    summaryBullets: [
      "Train on help-center docs, SOPs, and transcripts in minutes with guardrails you control.",
      "Escalations include a full recap, suggested reply, and sentiment so agents can respond faster.",
      "Analytics surface trending intents, gaps in content, and automation coverage by queue.",
    ],
    outcomes: [
      {
        title: "Tier-1 deflection",
        description: "AI copilots deliver guided answers, troubleshooters, and forms without human intervention.",
        metric: "40 sec avg handling",
      },
      {
        title: "Agent assist",
        description: "When live help is needed, the copilot drafts responses and highlights next-best actions for agents.",
        metric: "-27% handle time",
      },
      {
        title: "Knowledge upkeep",
        description: "Auto-suggest content updates and fill gaps with summaries pushed back to your knowledge base.",
        metric: "+35 new articles / mo",
      },
    ],
    automations: [
      "AI autoresolution across chat, email, and SMS",
      "Escalation workflows with live channel handoff",
      "Conversation summaries synced to Zendesk or Intercom",
      "Sentiment and intent analytics for success teams",
    ],
    integrations: ["Zendesk", "Intercom", "Freshdesk"],
    proofPoints: [
      "SaaS platform cleared a 48% email backlog in the first 30 days.",
      "Global retail brand achieved 24/7 coverage with <2 minute SLA.",
      "Leaderboards track automation coverage by queue for every region.",
    ],
    video: {
      src: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
      poster: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
      caption: "Live escalation handoff from the ArtikAi support copilot inside a customer inbox.",
    },
    seoDescription: "Automate frontline support with AI chatbots that deflect tickets, summarize escalations, and keep CSAT high.",
    serviceId: "chat",
  },
  callers: {
    name: "AI Phone Callers",
    heroLabel: "Voice automation",
    heroHeadline: "Turn every missed call into a booked appointment",
    heroDescription:
      "AI voice agents answer, qualify, and follow up like your best rep while logging every interaction back to your CRM.",
    heroMetrics: [
      { label: "Outbound answer rate", value: "+31%" },
      { label: "Booked calls per rep", value: "+2.8x" },
      { label: "Follow-up speed", value: "<30 sec" },
    ],
    summaryBullets: [
      "Local presence numbers and branded voices deliver natural dialogues that stay on script.",
      "Every transcript, disposition, and next step syncs straight to HubSpot, Salesforce, or Airtable.",
      "Voicemail drops and drip sequences keep prospects warm automatically.",
    ],
    outcomes: [
      {
        title: "Inbound rescue",
        description: "Missed-call text-back and AI receptionist triage callers, capture intent, and book time instantly.",
        metric: "+19% kept meetings",
      },
      {
        title: "Outbound follow-up",
        description: "Sequenced call attempts adapt to lead status with dynamic scripts and objection handling.",
        metric: "+3.2x connect rate",
      },
      {
        title: "Post-call wrap",
        description: "Summaries, tasks, and recordings are delivered to reps with recommended next actions.",
        metric: "<60 sec logging",
      },
    ],
    automations: [
      "AI receptionist with smart transfer and scheduling",
      "Missed-call SMS + email recovery sequences",
      "Outbound nurture cadences with live CRM sync",
      "Compliance-ready call recording and transcripts",
    ],
    integrations: ["HubSpot", "Salesforce", "Aircall"],
    proofPoints: [
      "Home services network doubled show rates with reminder loops triggered by AI callers.",
      "B2B agency booked 3.2x more consults without adding headcount.",
      "Every call payload syncs to pipeline dashboards for RevOps oversight.",
    ],
    video: {
      src: "https://storage.googleapis.com/coverr-main/mp4/Skiing.mp4",
      poster: "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80",
      caption: "ArtikAi voice agent confirming an appointment and logging the transcript to the CRM.",
    },
    seoDescription: "Let AI phone callers qualify leads, follow up fast, and log every interaction automatically.",
    serviceId: "caller",
  },
  crm: {
    name: "CRM Integrations & Appointment Setting",
    heroLabel: "Revenue operations",
    heroHeadline: "Keep your pipeline up to date and calendars filled automatically",
    heroDescription:
      "Sync leads, stages, and availability across your CRM and calendars so every buyer gets a fast, on-brand response.",
    heroMetrics: [
      { label: "Lead response time", value: "<120 sec" },
      { label: "Stage accuracy", value: "98%" },
      { label: "Show-up rate", value: "+22%" },
    ],
    summaryBullets: [
      "Two-way sync with Salesforce, HubSpot, Airtable, and Google Sheets.",
      "Qualification rules score and route leads by territory, channel, or product line.",
      "Scheduling guardrails respect buffers, ownership, and round-robin weighting.",
    ],
    outcomes: [
      {
        title: "Speed-to-lead",
        description: "Instant nurture flows and AI schedulers reach out the moment a form is submitted.",
        metric: "95% touch rate",
      },
      {
        title: "Pipeline hygiene",
        description: "Stages, tasks, and notes stay synced with every customer interaction automated.",
        metric: "+18% forecast accuracy",
      },
      {
        title: "No-show prevention",
        description: "Reminder cadences adapt to channel preference and offer self-serve rescheduling.",
        metric: "-28% no-shows",
      },
    ],
    automations: [
      "Lead scoring and enrichment packets",
      "Round-robin routing with ownership rules",
      "Calendar orchestration across Google and Outlook",
      "Post-meeting task creation in CRM and Slack",
    ],
    integrations: ["Salesforce", "HubSpot", "Google Calendar"],
    proofPoints: [
      "Logistics marketplace lifted qualification quality by 33% using dynamic scoring.",
      "Professional services firm eliminated manual rescheduling with automated reminders.",
      "RevOps teams receive daily digest of stuck deals with AI-generated next steps.",
    ],
    video: {
      src: "https://storage.googleapis.com/coverr-main/mp4/SandPatterns.mp4",
      poster: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
      caption: "Scheduling assistant syncing CRM stages with live calendar availability.",
    },
    seoDescription: "Automate CRM updates and appointment scheduling with AI that keeps every lead engaged.",
    serviceId: "crm",
  },
  websites: {
    name: "AI Website Creation",
    heroLabel: "Digital experience",
    heroHeadline: "Launch conversion-ready pages in hours, not weeks",
    heroDescription:
      "Generate copy, layouts, and imagery from a structured brief, then publish to your stack with analytics baked in.",
    heroMetrics: [
      { label: "Build time", value: "-80%" },
      { label: "Variant throughput", value: "4x" },
      { label: "Organic lift", value: "+27%" },
    ],
    summaryBullets: [
      "AI drafts hero copy, sections, and visuals aligned with your brand guardrails.",
      "Experimentation hooks let you launch multivariate tests without engineering cycles.",
      "Every publish pushes tracking pixels, SEO metadata, and analytics events automatically.",
    ],
    outcomes: [
      {
        title: "Rapid publishing",
        description: "Ship production-ready Webflow, Framer, or ArtikAi-hosted pages from a single prompt.",
        metric: "5 hr average turn",
      },
      {
        title: "Experiment velocity",
        description: "Spin up tailored landing pages per campaign with AI-managed copy and creative refreshes.",
        metric: "4x test cadence",
      },
      {
        title: "Insight loop",
        description: "Performance dashboards surface winning variants and suggest next optimizations.",
        metric: "+18% CVR",
      },
    ],
    automations: [
      "Brief-to-page generation with brand guardrails",
      "One-click publishing to Webflow, Framer, or ArtikAi hosting",
      "Pixel, SEO, and analytics automation",
      "Library of reusable components linked to your CMS",
    ],
    integrations: ["Webflow", "Framer", "Google Analytics"],
    proofPoints: [
      "Growth team replaced agency retainer and ships new pages every sprint.",
      "B2B SaaS company tracks lift with automated weekly landing page reports.",
      "SEO refresh workflow updates metadata and redirects in minutes, not days.",
    ],
    video: {
      src: "https://storage.googleapis.com/coverr-main/mp4/GoldenGateBridge.mp4",
      poster: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      caption: "AI drafts a landing page hero and deploys to production in one click.",
    },
    seoDescription: "Launch conversion-focused websites with AI-generated copy, imagery, and analytics built in.",
    serviceId: "web",
  },
  apps: {
    name: "AI App Creation",
    heroLabel: "Internal tooling",
    heroHeadline: "Prototype internal apps and portals 3× faster",
    heroDescription:
      "Combine drag-and-drop UI blocks with AI-generated logic so teams can ship polished workflows without waiting on engineering queues.",
    heroMetrics: [
      { label: "Build hours saved", value: "68%" },
      { label: "Time to first version", value: "<1 week" },
      { label: "Active users", value: "+45%" },
    ],
    summaryBullets: [
      "Blueprints turn spreadsheets and APIs into secure apps with auth and audit trails.",
      "AI suggests interface patterns, validation rules, and automations as you design.",
      "Deployment pipelines ship to managed hosting or your own infra with version control.",
    ],
    outcomes: [
      {
        title: "Onboarding portals",
        description: "Give customers or partners a branded space to upload docs, sign agreements, and monitor status.",
        metric: "-9 days time-to-value",
      },
      {
        title: "Operational dashboards",
        description: "Aggregate metrics, alerts, and workflows into role-based consoles with approvals baked in.",
        metric: "+32% process adherence",
      },
      {
        title: "Workflow automation",
        description: "Trigger multi-step automations from UI actions or data changes without brittle Zapier chains.",
        metric: "-40% manual updates",
      },
    ],
    automations: [
      "Schema-aware UI generation",
      "User management with SSO and RBAC",
      "Automated deployment pipelines",
      "Observability and audit trails for compliance",
    ],
    integrations: ["Postgres", "Notion", "Slack"],
    proofPoints: [
      "Consultancy launched a client portal in 6 days with automated intake flows.",
      "Ops team replaced 14 spreadsheets with one shared control center.",
      "Security teams love the built-in RBAC and audit logging exported to SIEM.",
    ],
    video: {
      src: "https://storage.googleapis.com/coverr-main/mp4/Waves.mp4",
      poster: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      caption: "ArtikAi assembling a customer onboarding portal with automated logic blocks.",
    },
    seoDescription: "Build internal apps and portals faster with AI-generated UI, logic, and deployments.",
    serviceId: "ai-app",
  },
  ads: {
    name: "AI Ad Creatives & Marketing",
    heroLabel: "Acquisition engine",
    heroHeadline: "Launch high-performing campaigns in a fraction of the time",
    heroDescription:
      "Generate copy, creative, and landing page variants that learn from each impression so your team can focus on strategy.",
    heroMetrics: [
      { label: "Creative throughput", value: "5x" },
      { label: "ROAS lift", value: "+42%" },
      { label: "Optimization cycle", value: "Daily" },
    ],
    summaryBullets: [
      "Feed in brand guidelines and offers to generate on-brand copy, hooks, and visuals.",
      "Performance data loops back into the system to prioritize winning angles automatically.",
      "Campaign briefs sync to Meta, Google, TikTok, and email platforms with tracking links included.",
    ],
    outcomes: [
      {
        title: "Creative labs",
        description: "Spin up scripts, statics, and UGC-style concepts with channel-ready specs in minutes.",
        metric: "10 new variants / wk",
      },
      {
        title: "Offer intelligence",
        description: "AI highlights winning hooks and suggests new segments based on performance signals.",
        metric: "+18% CTR",
      },
      {
        title: "Full-funnel alignment",
        description: "Co-ordinated landing pages and nurture flows launch alongside every campaign.",
        metric: "+27% lead-to-oppty",
      },
    ],
    automations: [
      "Creative and copy generation per channel",
      "Performance dashboards with automated insights",
      "Landing page + ad set orchestration",
      "Budget pacing alerts with recommended reallocations",
    ],
    integrations: ["Meta", "Google Ads", "Klaviyo"],
    proofPoints: [
      "D2C brand cut creative refresh cycles from 3 weeks to 4 days.",
      "Agencies deliver full campaign packs including scripts, storyboards, and variants automatically.",
      "Spend pacing alerts saved 18% of ad budget from fatigue.",
    ],
    video: {
      src: "https://storage.googleapis.com/coverr-main/mp4/Typing.mp4",
      poster: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
      caption: "Campaign builder generating multi-channel ad variants and scripts in real time.",
    },
    seoDescription: "Generate and optimize ad creatives, landing pages, and nurture flows with AI insights.",
    serviceId: "ads",
  },
};

const isUseCaseSlug = (value: string | undefined): value is UseCaseSlug => {
  return typeof value === "string" && Object.prototype.hasOwnProperty.call(useCaseContent, value);
};

export default function UseCaseDetailPage() {
  const params = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const slugParam = params.slug;
  const valid = isUseCaseSlug(slugParam);
  const slug = valid ? slugParam : undefined;
  const config = slug ? useCaseContent[slug] : null;

  useEffect(() => {
    if (!valid) {
      navigate("/use-cases/support", { replace: true });
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [valid, navigate, slug]);

  if (!config || !slug) {
    return null;
  }

  const otherCases = (Object.keys(useCaseContent) as UseCaseSlug[])
    .filter((key) => key !== slug)
    .map((key) => ({ slug: key, name: useCaseContent[key].name }));

  return (
    <main className="page-animate min-h-screen bg-[#050B1A] text-white">
      <Helmet>
        <title>{`${config.name} — Use Cases | ArtikAi`}</title>
        <meta name="description" content={config.seoDescription} />
      </Helmet>
      <Navbar variant="dark" />

      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#0B1224] via-[#070C1A] to-[#050810]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.25),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-cyan-300/80">{config.heroLabel}</p>
              <h1 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">{config.heroHeadline}</h1>
              <p className="mt-4 max-w-2xl text-base text-white/70 md:text-lg">{config.heroDescription}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/75">
                {config.summaryBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {config.heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-[0_10px_30px_rgba(8,15,35,0.35)]"
                >
                  <div className="text-2xl font-semibold text-white">{metric.value}</div>
                  <p className="mt-1 text-xs uppercase tracking-wide text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold md:text-3xl">What teams launch with {config.name}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {config.outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-white/10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">{outcome.metric}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{outcome.title}</h3>
              <p className="mt-2 text-sm text-white/70">{outcome.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <figure className="overflow-hidden rounded-3xl border border-white/10 bg-black/40">
            <video className="aspect-video w-full bg-black object-cover" controls preload="none" poster={config.video.poster}>
              <source src={config.video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <figcaption className="px-5 py-4 text-sm text-white/60">{config.video.caption}</figcaption>
          </figure>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Proof points from the field</h3>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              {config.proofPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Automations we launch for you</h3>
            <p className="mt-2 text-sm text-white/70">
              Start with a proven playbook, tailor the flows to your stack, and keep iterating with ArtikAi guidance.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {config.automations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Plays nicely with your stack</h3>
            <p className="mt-2 text-sm text-white/70">
              Prebuilt connectors and secure data syncs make it easy to launch without changing your core systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {config.integrations.map((integration) => (
                <span
                  key={integration}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80"
                >
                  {integration}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">Next step</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Ready to see {config.name} in action?</h3>
              <p className="mt-2 text-sm text-white/70">
                We will tailor a live walkthrough to your workflows and tech stack, then ship a pilot plan within 48 hours.
              </p>
            </div>
            <Link
              to={`/book?service=${config.serviceId}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Explore other use cases</h4>
          <div className="mt-4 flex flex-wrap gap-3">
            {otherCases.map((item) => (
              <Link
                key={item.slug}
                to={`/use-cases/${item.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-300/60 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DarkFooter />
    </main>
  );
}

