import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import DarkFooter from "@/components/DarkFooter";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About | ArtikAi"
        description="We install the Website + Booking + Reviews system for Florida home service businesses so every lead gets a fast response and books."
      />
      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-gray-950 text-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
          <div className="pointer-events-none absolute left-1/2 top-[-8rem] -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[-4rem] bottom-[-4rem] -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="mx-auto max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">About</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              We build the foundation local service businesses need to convert.
            </h1>
            <p className="mt-4 text-lg text-white/80">
              ArtikAi focuses on one outcome: more booked jobs from the traffic you already have. We install and maintain the Website +
              Booking + Reviews system so Florida crews answer faster, follow up longer, and earn more reviews without changing how they work.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                <h2 className="text-xl font-semibold text-white">What we believe</h2>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>- Speed-to-lead beats bigger marketing budgets.</li>
                  <li>- Reviews mentioning speed and quality drive Maps visibility.</li>
                  <li>- Clear booking and reminders prevent wasted dispatch time.</li>
                  <li>- Automation should feel like a helpful coordinator, not spam.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-black p-6 shadow-xl shadow-cyan-500/15">
                <h2 className="text-xl font-semibold text-white">How we work</h2>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>- Done-for-you build with your branding and offers.</li>
                  <li>- Connects to your CRM, phones, and calendars.</li>
                  <li>- Monthly optimizations available as you scale.</li>
                  <li>- Transparent reporting on response time, booked jobs, and reviews.</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-gray-950 shadow-lg shadow-cyan-500/25"
              >
                Book a Strategy Call
              </Link>
              <Link
                to="/website-system"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
              >
                See the Website System
              </Link>
            </div>
          </div>
        </div>
        <DarkFooter />
      </main>
    </>
  );
}
