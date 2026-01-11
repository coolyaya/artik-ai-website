import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import DarkFooter from "@/components/DarkFooter";
import { industriesBySlug, industries } from "@/data/industries";

export default function IndustryDetailPage() {
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const industry = industrySlug ? industriesBySlug[industrySlug] : undefined;

  return (
    <>
      <Seo
        title={industry ? `${industry.name} Website System | ArtikAi` : "Industries | ArtikAi"}
        description={
          industry
            ? `${industry.name} Website + Booking + Reviews system for Florida service businesses. Faster follow-up, more booked jobs, more reviews.`
            : "Website, booking, follow-up, and review engine for Florida home services."
        }
      />
      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-gray-950 text-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
          <div className="pointer-events-none absolute left-1/2 top-[-8rem] -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[-4rem] bottom-[-4rem] -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
            {industry ? (
              <>
                <header className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Industry</p>
                  <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-white">
                    {industry.name}
                  </h1>
                  <p className="max-w-3xl text-lg text-white/80">{industry.hero}</p>
                  <div className="flex flex-wrap items-center gap-3">
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
                  <p className="text-sm text-white/60">
                    Serving Orlando, Melbourne, Rockledge, Cocoa, Cocoa Beach, Titusville, Clearwater, Oviedo.
                  </p>
                </header>

                <section className="mt-10 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                    <h2 className="text-xl font-semibold text-white">Where leads leak</h2>
                    <ul className="mt-3 space-y-3 text-sm text-white/80">
                      {industry.painPoints.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                    <h2 className="text-xl font-semibold text-white">What converts</h2>
                    <ul className="mt-3 space-y-3 text-sm text-white/80">
                      {industry.whatConverts.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 p-6 shadow-xl shadow-cyan-500/15">
                    <h3 className="text-lg font-semibold text-white">Example services</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-white/85"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-white/80">{industry.ctaLine}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                    <h3 className="text-lg font-semibold text-white">Reviews engine relevance</h3>
                    <p className="mt-2 text-sm text-white/80">
                      We prompt customers to mention the moments that sell future jobs.
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-white/80">
                      {industry.reviewAngles.map((angle) => (
                        <li key={angle}>- {angle}</li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs text-white/60">
                      1-3 star feedback routes privately for a fast fix. 4-5 goes straight to Google.
                    </p>
                  </div>
                </section>

                <section className="mt-10 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                    <h3 className="text-lg font-semibold text-white">Next steps</h3>
                    <ul className="mt-3 space-y-2 text-sm text-white/80">
                      <li>- We install the Website + Booking + Reviews system for your crews.</li>
                      <li>- Follow-up sequences tuned for your services and Florida markets.</li>
                      <li>- Reporting on response time, booked jobs, and review velocity.</li>
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        to="/book"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-gray-950"
                      >
                        Book a Strategy Call
                      </Link>
                      <Link
                        to="/process"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                      >
                        See the rollout
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                    <h3 className="text-lg font-semibold text-white">Other industries we serve</h3>
                    <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/85">
                      {industries
                        .filter((item) => item.slug !== industry.slug)
                        .slice(0, 6)
                        .map((item) => (
                          <Link
                            key={item.slug}
                            to={`/industries/${item.slug}`}
                            className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 hover:border-cyan-400/60 hover:text-white"
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </section>
              </>
            ) : (
              <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                <h1 className="text-3xl font-bold text-white">Industry not found</h1>
                <p className="text-white/75">Choose an industry to see how we install the Website System.</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link to="/industries" className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white hover:border-cyan-400/60">
                    Back to industries
                  </Link>
                  <Link to="/book" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-gray-950">
                    Book a Strategy Call
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <DarkFooter />
      </main>
    </>
  );
}
