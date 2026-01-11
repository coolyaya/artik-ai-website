import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import DarkFooter from "@/components/DarkFooter";

const steps = [
  {
    title: "Install",
    detail: "We build the website, landing pages, forms, tracking, and routing. Your brand, your services, ready to convert.",
  },
  {
    title: "Launch",
    detail: "Missed-call text-back, instant SMS/email, booking links, and capacity rules go live so no lead waits.",
  },
  {
    title: "Review engine",
    detail: "Techs trigger 1-5 requests after every job. 4-5 to Google, 1-3 to a private fix with manager alerts.",
  },
  {
    title: "Optimize",
    detail: "We tune offers, follow-up timing, and proof blocks based on booked jobs and review velocity.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Seo
        title="Process | How we install the Website System"
        description="Four-step rollout: Install, Launch, Review engine, Optimize. Built for Florida service businesses that need booked jobs."
      />
      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-gray-950 text-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
          <div className="pointer-events-none absolute left-1/2 top-[-8rem] -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[-4rem] bottom-[-4rem] -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <header className="mx-auto max-w-5xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Process</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              A simple rollout that turns leads into booked jobs.
            </h1>
            <p className="mt-4 text-lg text-white/80">
              No endless onboarding. We install, launch, and keep tuning so every call, form, and ad click gets handled quickly and turns into revenue.
            </p>
          </header>

          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-cyan-500/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-bold text-cyan-100">
                      {idx + 1}
                    </span>
                    <p className="text-lg font-semibold text-white">{step.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-white/80">{step.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-black p-8 text-center shadow-xl shadow-cyan-500/20">
              <h2 className="text-3xl font-bold text-white">Ready to install the system?</h2>
              <p className="mt-3 text-white/80">
                We handle the build, follow-up, booking, and reviews so your team focuses on the work.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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
          </section>
        </div>
        <DarkFooter />
      </main>
    </>
  );
}
