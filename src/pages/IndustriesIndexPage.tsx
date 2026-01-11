import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import DarkFooter from "@/components/DarkFooter";
import { industries } from "@/data/industries";

export default function IndustriesIndexPage() {
  return (
    <>
      <Seo
        title="Industries | Local service businesses we install for"
        description="Website, booking, follow-up, and reviews system tailored to Florida home services: roofing, HVAC, plumbing, lawn, cleaning, pest, and more."
      />
      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-gray-950 text-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
          <div className="pointer-events-none absolute left-1/2 top-[-8rem] -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[-4rem] bottom-[-4rem] -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <header className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Industries</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Built for Florida home service businesses that need booked jobs.
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/80">
              We install the Website + Booking + Reviews system for crews that can&apos;t afford to miss a lead:
              roofing, HVAC, plumbing, restoration, lawn, pest, and pool service.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/website-system"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-gray-950"
              >
                See the Website System
              </Link>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
              >
                Book a Strategy Call
              </Link>
            </div>
          </header>

          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:border-cyan-400/60"
                >
                  <p className="text-sm font-semibold text-cyan-100">{industry.name}</p>
                  <p className="mt-3 text-sm text-white/80">{industry.hero}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 group-hover:text-white">
                    View details <span aria-hidden>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-blue-600/10">
                <h2 className="text-2xl font-bold text-white">Why conversions and reviews matter for home services.</h2>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>- Homeowners pick whoever replies first with a clear slot and proof.</li>
                  <li>- Google Maps and LSAs reward fresh reviews that mention speed and quality.</li>
                  <li>- Automated follow-up wins the second-chance jobs competitors forget.</li>
                  <li>- Booking + reminders cut no-shows so your crews stay busy.</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    to="/results"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                  >
                    See results
                  </Link>
                  <Link
                    to="/locations"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                  >
                    View service areas
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-black p-8 shadow-xl shadow-cyan-500/20">
                <h3 className="text-xl font-semibold text-white">What we install for every industry</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>- Conversion-focused website + landing pages</li>
                  <li>- Lead capture, missed-call text-back, and routing</li>
                  <li>- 14-day nurture for estimates and past customers</li>
                  <li>- Booking calendars tied to crew capacity</li>
                  <li>- Review engine that protects your rating and lifts Maps ranking</li>
                </ul>
                <Link
                  to="/website-system#included"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
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
