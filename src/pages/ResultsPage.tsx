import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import DarkFooter from "@/components/DarkFooter";

const caseStudies = [
  {
    title: "Roofing & Exteriors",
    summary: "Storm-season leads replied to in under a minute with missed-call text-back and booking links.",
    outcomes: [
      "More inspection bookings during peak storms",
      "Homeowners mentioned speed in new Google reviews",
      "Sales team worked only the warmest, pre-qualified calls",
    ],
  },
  {
    title: "HVAC",
    summary: "After-hours emergencies flowed into SMS + scheduling instead of voicemail.",
    outcomes: [
      "Weekend and evening calls converted to next-day visits",
      "Financing links in follow-ups kept quotes alive",
      "Review velocity improved Maps visibility before summer",
    ],
  },
  {
    title: "Plumbing",
    summary: "14-day nurture on estimates stopped shoppers from choosing slower competitors.",
    outcomes: [
      "More booked dispatches from the same ad spend",
      "Technicians triggered review asks after each job",
      "Reactivation fills slower days with past customers",
    ],
  },
];

const reviewGrowth = [
  { label: "Review requests per job", detail: "Automation asks after each completed visit with service-specific cues." },
  { label: "4-5 star routing", detail: "High scores go straight to Google; low scores alert a manager to fix privately." },
  { label: "Maps impact", detail: "Fresh reviews mentioning speed, cleanliness, and clarity lift local rankings." },
];

export default function ResultsPage() {
  return (
    <>
      <Seo
        title="Results | Booked jobs and review growth"
        description="Proof from Florida service businesses using the Website + Booking + Reviews system to convert more leads and grow Google reviews."
      />
      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-gray-950 text-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
          <div className="pointer-events-none absolute left-1/2 top-[-8rem] -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[-4rem] bottom-[-4rem] -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <header className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Results</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              More booked jobs. Faster follow-up. Steady review velocity.
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/80">
              Here's how Florida home service teams use the Website + Booking + Reviews system to turn traffic into revenue without promising impossible rankings.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-gray-950"
              >
                Book a Strategy Call
              </Link>
              <Link
                to="/website-system"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
              >
                See the Website System
              </Link>
            </div>
          </header>

          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-cyan-500/10">
                  <p className="text-sm font-semibold text-cyan-100">{cs.title}</p>
                  <p className="mt-2 text-sm text-white/80">{cs.summary}</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    {cs.outcomes.map((outcome) => (
                      <li key={outcome}>- {outcome}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-blue-600/10">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Review growth</p>
                  <h2 className="text-2xl font-bold text-white">A review engine built for Maps and trust.</h2>
                </div>
                <Link to="/process" className="text-sm font-semibold text-cyan-100 hover:text-white">
                  See the rollout →
                </Link>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {reviewGrowth.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-2 text-sm text-white/75">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-black p-8 text-center shadow-xl shadow-cyan-500/20">
              <h2 className="text-3xl font-bold text-white">Let's turn more of your leads into booked jobs.</h2>
              <p className="mt-3 text-white/80">
                No hype-just faster follow-up, clearer booking, and review growth that improves Maps visibility.
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
