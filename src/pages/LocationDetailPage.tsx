import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import DarkFooter from "@/components/DarkFooter";
import { locationsBySlug } from "@/data/locations";

export default function LocationDetailPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? locationsBySlug[citySlug] : undefined;

  return (
    <>
      <Seo
        title={city ? `${city.name} Service Area | ArtikAi` : "Locations | ArtikAi"}
        description={
          city
            ? `Website + Booking + Reviews system for ${city.name} service businesses. Faster follow-up, more booked jobs, more reviews.`
            : "Website, booking, follow-up, and review engine across our Florida service areas."
        }
      />
      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-gray-950 text-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
          <div className="pointer-events-none absolute left-1/2 top-[-8rem] -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[-4rem] bottom-[-4rem] -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
            {city ? (
              <>
                <header className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Service area</p>
                  <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-white">
                    {city.name}
                  </h1>
                  <p className="max-w-3xl text-lg text-white/80">{city.intro}</p>
                  <div className="flex flex-wrap items-center gap-3">
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
                  <p className="text-sm text-white/60">Industries that win here: {city.fitIndustries.join(", ")}.</p>
                </header>

                <section className="mt-10 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                    <h2 className="text-xl font-semibold text-white">What works in {city.name}</h2>
                    <ul className="mt-3 space-y-3 text-sm text-white/80">
                      {city.highlights.map((highlight) => (
                        <li key={highlight}>- {highlight}</li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-cyan-100">{city.ctaLine}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                    <h2 className="text-xl font-semibold text-white">Industries we focus on</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {city.fitIndustries.map((industry) => (
                        <span
                          key={industry}
                          className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-white/85"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                    {city.nearby && city.nearby.length > 0 ? (
                      <p className="mt-4 text-xs text-white/60">Nearby: {city.nearby.join(", ")}</p>
                    ) : null}
                  </div>
                </section>

                <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 p-6 shadow-xl shadow-cyan-500/15">
                    <h3 className="text-lg font-semibold text-white">Local FAQs</h3>
                    <dl className="mt-4 space-y-4">
                      {city.faqs.map((faq) => (
                        <div key={faq.q} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                          <dt className="text-sm font-semibold text-white">{faq.q}</dt>
                          <dd className="mt-2 text-sm text-white/75">{faq.a}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                    <h3 className="text-lg font-semibold text-white">Next steps</h3>
                    <ul className="mt-3 space-y-2 text-sm text-white/80">
                      <li>- We install city-specific pages and proof.</li>
                      <li>- Routing and missed-call text-back tuned for {city.name} zip codes.</li>
                      <li>- Review asks reference neighborhoods to lift Maps visibility.</li>
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        to="/process"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                      >
                        See the rollout
                      </Link>
                      <Link
                        to="/industries"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                      >
                        View industries
                      </Link>
                    </div>
                  </div>
                </section>
              </>
            ) : (
              <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                <h1 className="text-3xl font-bold text-white">City not found</h1>
                <p className="text-white/75">Choose a service area to see how we support your crews.</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link to="/locations" className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white hover:border-cyan-400/60">
                    Back to locations
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
