import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, MessageCircle, Star, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import DarkFooter from "@/components/DarkFooter";

const proofCards = [
  { title: "<60 sec follow-up (goal)", body: "Calls and forms trigger instant SMS + email so leads stay with you." },
  { title: "14-day nurture", body: "Every estimate gets reminders, FAQs, and booking nudges without staff chasing." },
  { title: "Review requests after every job", body: "Techs finish, system sends review links, routing 4-5 stars to Google." },
  { title: "More booked estimates", body: "Site, forms, and calendar reduce back-and-forth and fill routes faster." },
];

const included = [
  {
    title: "High-converting local website",
    points: [
      "Clear service pages for Orlando and Space Coast markets",
      "Speed-optimized with click-to-call, SMS, and booking",
      "Proof blocks: reviews, before/after, guarantees",
    ],
  },
  {
    title: "Lead capture + instant response",
    points: [
      "Short forms that collect address, service type, and urgency",
      "Missed-call text-back with CTA to pick a time",
      "Routing rules by service, zip, or crew availability",
    ],
  },
  {
    title: "Follow-up automation",
    points: [
      "14-day sequences for open estimates with SMS/email steps",
      "Financing links, FAQs, and proof to stop shopping",
      "Reactivation flows for past customers and memberships",
    ],
  },
  {
    title: "Booking + Google review engine",
    points: [
      "Calendar booking with buffers and capacity guardrails",
      "Post-job review flows: 4-5 to Google, 1-3 to a private fix",
      "Reporting on lead speed, booked jobs, and review velocity",
    ],
  },
];

const steps = [
  { title: "Install", body: "Launch the website, forms, tracking, and routing in your stack." },
  { title: "Launch", body: "Turn on instant SMS/email replies and missed-call text-back." },
  { title: "Review engine", body: "Connect crews/techs to request reviews after every visit." },
  { title: "Optimize", body: "Tweak copy, offers, and follow-up timing based on booked jobs." },
];

const reviewReasons = [
  { icon: <Star className="h-5 w-5 text-yellow-300" />, title: "Rank", body: "Fresh, frequent reviews move you up in Google Maps and Local Services Ads." },
  { icon: <MessageCircle className="h-5 w-5 text-cyan-300" />, title: "Trust", body: "Reviews mention speed, cleanliness, and clarity-exactly what buyers look for." },
  { icon: <Shield className="h-5 w-5 text-emerald-300" />, title: "Close rate", body: "Proof shortens the comparison window and makes your bids stick." },
];

const adLeaks = [
  "Calls roll to voicemail with no text-back.",
  "Forms go to an inbox that nobody checks in time.",
  "No nurture-quotes get cold after day one.",
  "Few reviews, so Maps and LSA clicks pick competitors.",
];

const pricingSummary = [
  {
    name: "Foundation",
    summary: "Website, tracking, forms, and booking built for conversions.",
    outcome: "For teams needing a conversion-ready site and clear call handling.",
  },
  {
    name: "Growth",
    summary: "Everything in Foundation plus automations, pipeline, and missed-call text-back.",
    outcome: "For crews who want every lead replied to and nurtured until it books.",
  },
  {
    name: "Dominance",
    summary: "Adds review engine, local SEO expansion, and monthly optimization.",
    outcome: "For owners who want to outrank competitors on Maps with constant proof.",
  },
];

const faqs = [
  { q: "How fast can this go live?", a: "Most installs launch in days once we have your services, pricing ranges, and calendars." },
  { q: "Do you replace our CRM?", a: "No. We connect to your existing CRM and calendars so dispatch stays accurate while automation runs follow-up." },
  { q: "Do you manage ads?", a: "We start with conversion infrastructure. Ads are optional once the system is converting and reviews are climbing." },
  { q: "Can you handle multiple locations?", a: "Yes. We route by city or zip so Orlando, Melbourne, and Space Coast leads go to the right crew." },
];

export default function WebsiteSystemPage() {
  return (
    <>
      <Seo
        title="Website System | Turn clicks into booked jobs"
        description="Done-for-you website, lead capture, automated follow-up, booking, and Google reviews engine built for Florida service businesses."
      />
      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-gray-950 text-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
          <div className="pointer-events-none absolute left-1/2 top-[-10rem] -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-3xl" />
          <div className="pointer-events-none absolute right-[-6rem] bottom-[-6rem] -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

          <header className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Website System</p>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  Turn clicks into booked jobs - automatically.
                </h1>
                <p className="text-lg text-white/80">
                  Website + lead capture + automated follow-ups + booking + reviews engine installed done-for-you.
                  Built for Florida home service teams that need more booked estimates from every ad dollar.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-gray-950 shadow-lg shadow-cyan-500/20"
                  >
                    Book a Strategy Call <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 hover:border-cyan-400/60 hover:text-white"
                  >
                    See pricing
                  </Link>
                </div>
                <p className="text-xs text-white/60">
                  Built for Florida service businesses (Orlando → Space Coast → Clearwater).
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-blue-600/20">
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 p-4">
                    <p className="text-sm font-semibold text-cyan-100">System snapshot</p>
                    <ul className="mt-3 space-y-2 text-sm text-white/80">
                      <li>- Lead capture routes to SMS + email within seconds</li>
                      <li>- Booking links respect crew capacity and buffers</li>
                      <li>- Reviews auto-requested after every completed job</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/80">
                    <p className="font-semibold text-white">What you get</p>
                    <p className="mt-2">Conversion-first website, tracking, follow-up, booking, and review engine installed for you.</p>
                    <p className="mt-3 text-cyan-200/90">No DIY mess. We build, connect, and maintain it.</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {proofCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-cyan-500/10"
                >
                  <p className="text-sm font-semibold text-cyan-100">{card.title}</p>
                  <p className="mt-2 text-sm text-white/80">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="included" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-blue-600/10">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">What's included</p>
                  <h2 className="text-3xl font-bold text-white">Built for booked jobs, not vanity metrics.</h2>
                </div>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 px-5 py-2 text-sm font-semibold text-cyan-100 hover:border-cyan-300 hover:text-white"
                >
                  Book a Strategy Call <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {included.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20">
                        <CheckCircle2 className="h-5 w-5 text-cyan-200" />
                      </div>
                      <p className="text-lg font-semibold text-white">{item.title}</p>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                      {item.points.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-black p-8 shadow-xl shadow-cyan-500/15">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">How it works</p>
                  <h2 className="text-3xl font-bold text-white">Four steps to a conversion-ready system.</h2>
                  <p className="text-white/80">
                    We install, launch, and keep optimizing so your ads and referrals turn into booked jobs and steady reviews.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {steps.map((step) => (
                    <div key={step.title} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                      <p className="text-sm font-semibold text-cyan-100">{step.title}</p>
                      <p className="mt-2 text-sm text-white/80">{step.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Reviews engine</p>
                <h2 className="text-2xl font-bold text-white">Ask 1-5. Route the response. Protect the brand.</h2>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li>- Ask for a quick 1-5 rating after every job.</li>
                  <li>- 4-5: link to Google with pre-written cues (speed, clean crews, clarity).</li>
                  <li>- 1-3: private feedback + manager alert to fix the issue before it hits the web.</li>
                </ul>
                <p className="mt-4 text-sm text-cyan-100">Outcome: steady review velocity that lifts Maps ranking and close rate.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {reviewReasons.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      {item.icon}
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-xs text-white/70">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-8 shadow-lg shadow-red-500/20">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-red-200/80">Why ads fail without this</p>
                  <h2 className="text-2xl font-bold text-white">Four leaks that burn budget.</h2>
                </div>
                <Link
                  to="/process"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-100 underline decoration-red-200/70 decoration-2 underline-offset-4"
                >
                  See the rollout <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {adLeaks.map((leak) => (
                  <div key={leak} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/80">
                    - {leak}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/15">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Pricing summary</p>
                  <h2 className="text-3xl font-bold text-white">Start with the foundation. Scale when ready.</h2>
                  <p className="text-sm text-white/70">Most clients invest $X-$Y based on scope. Monthly support available.</p>
                </div>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-gray-950"
                >
                  View pricing <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {pricingSummary.map((tier) => (
                  <div key={tier.name} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <p className="text-sm font-semibold text-cyan-100">{tier.name}</p>
                    <p className="mt-2 text-sm text-white/80">{tier.summary}</p>
                    <p className="mt-3 text-xs text-white/60">{tier.outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-blue-600/10">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">FAQs</p>
                  <h2 className="text-2xl font-bold text-white">What most owners ask.</h2>
                </div>
                <Link to="/faq" className="text-sm font-semibold text-cyan-100 hover:text-white">
                  See all FAQs
                </Link>
              </div>
              <dl className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <dt className="text-sm font-semibold text-white">{faq.q}</dt>
                    <dd className="mt-2 text-sm text-white/75">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-black p-8 text-center shadow-xl shadow-cyan-500/20">
              <h2 className="text-3xl font-bold text-white">Ready to turn traffic into booked jobs?</h2>
              <p className="mt-3 text-white/80">
                We install the Website + Booking + Reviews system for Florida service businesses.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-gray-950 shadow-lg shadow-cyan-500/25"
                >
                  Book a Strategy Call <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/website-system#included"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                >
                  See what's included
                </Link>
              </div>
            </div>
          </section>
        </div>
        <DarkFooter />
      </main>
    </>
  );
}
