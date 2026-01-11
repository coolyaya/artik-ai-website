import React from "react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import { CheckCircle2, ArrowRight } from "lucide-react";

type Tier = {
  name: string;
  summary: string;
  features: string[];
  note?: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Foundation",
    summary: "Website, tracking, forms, and booking built to convert local traffic.",
    features: [
      "Conversion-first website + landing pages for each service",
      "Click-to-call, SMS, and booking with buffers",
      "Lead capture collects address, service type, urgency",
      "Basic review requests after every completed job",
    ],
  },
  {
    name: "Growth",
    summary: "Adds automation, pipeline, and missed-call text-back so no lead waits.",
    features: [
      "Missed-call text-back with links to pick a time",
      "14-day nurture for estimates with financing and proof",
      "Routing rules by service/zip to keep crews efficient",
      "Reporting on lead speed and booked jobs",
    ],
    featured: true,
  },
  {
    name: "Dominance",
    summary: "Adds review engine and local SEO expansion plus monthly optimization.",
    features: [
      "Review engine: 1-3 private fix, 4-5 to Google with cues",
      "Location pages and proof for priority markets",
      "Ongoing copy and offer testing to lift close rates",
      "Monthly support option for follow-up and review velocity tuning",
    ],
    note: "For teams ready to outpace competitors on Maps with steady reviews.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing - ArtikAi"
        description="Pricing for the Website + Booking + Reviews System. Foundation, Growth, and Dominance tiers built for Florida service businesses."
        image="/thumbnail.jpg"
      />
      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-gray-950 text-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
          <div className="pointer-events-none absolute left-1/2 top-[-10rem] -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-3xl" />
          <div className="pointer-events-none absolute right-[-6rem] bottom-[-6rem] -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

          <header className="mx-auto max-w-5xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 text-center">
            <h1 className="rise text-balance text-4xl font-extrabold tracking-tight text-white md:text-5xl" style={{ animationDelay: "40ms" }}>
              Pricing built for booked jobs, not vanity metrics.
            </h1>
            <p className="rise mt-4 text-lg text-gray-300" style={{ animationDelay: "120ms" }}>
              Most clients invest $X-$Y depending on scope. Pick a tier now, add monthly support when you want ongoing optimization.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-gray-950 shadow-lg shadow-cyan-500/20"
              >
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/website-system"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
              >
                See what's included
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/60">Built for Florida service businesses: Orlando, Melbourne, Rockledge, Cocoa, Cocoa Beach, Titusville, Clearwater, Oviedo.</p>
          </header>

          <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {tiers.map((tier, idx) => {
                const delay = 160 + idx * 80;
                return (
                  <div
                    key={tier.name}
                    className={`rise flex h-full flex-col rounded-3xl border p-6 shadow-lg shadow-cyan-500/10 backdrop-blur ${tier.featured ? "border-cyan-400/50 bg-white/5" : "border-white/10 bg-white/5"}`}
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm uppercase tracking-wide text-cyan-200/80">{tier.name}</p>
                        <h2 className="mt-1 text-xl font-semibold text-white">{tier.summary}</h2>
                      </div>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-cyan-100">
                        {tier.featured ? "Recommended" : "Flexible"}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-gray-200">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {tier.note ? <p className="mt-4 text-xs text-white/70">{tier.note}</p> : null}
                    <div className="mt-auto flex items-center gap-3 pt-6">
                      <Link
                        to="/book"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-gray-950"
                      >
                        Book a Strategy Call <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link to="/contact" className="text-sm font-medium text-cyan-200 hover:text-cyan-100">
                        Ask a question
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rise mt-14 grid gap-6 md:grid-cols-2" style={{ animationDelay: "260ms" }}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Monthly support (optional)</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Keep us on retainer to tune follow-up timing, add offers, and maintain review velocity. We adjust to your crew capacity so you don't overbook.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-200">
                  <li>- Copy and offer testing to lift close rates</li>
                  <li>- Routing tweaks by service, zip, and crew availability</li>
                  <li>- Review prompt updates to highlight speed and quality</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 p-6">
                <h3 className="text-lg font-semibold text-white">What's included either way</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-200">
                  <li>- Done-for-you setup and launch</li>
                  <li>- Connection to your CRM, phones, and calendars</li>
                  <li>- Training for your team on triggers and review asks</li>
                  <li>- Reporting on response time, booked jobs, and reviews</li>
                </ul>
              </div>
            </div>

            <div className="rise mt-14 flex flex-col gap-4 rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-8 text-center" style={{ animationDelay: "320ms" }}>
              <h2 className="text-3xl font-bold text-white">Ready to map your Website + Booking + Reviews system?</h2>
              <p className="text-gray-100">Pick a tier, schedule the install, and start converting more calls, forms, and ad clicks.</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 text-sm font-semibold text-gray-950">
                  Book a Strategy Call <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/process" className="inline-flex items-center gap-2 rounded-full border border-cyan-500/60 px-6 py-2 text-sm font-semibold text-cyan-100">
                  See the rollout <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
