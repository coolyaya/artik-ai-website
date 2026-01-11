import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import DarkFooter from "@/components/DarkFooter";
import { locations } from "@/data/locations";

export default function LocationsIndexPage() {
  return (
    <>
      <Seo
        title="Locations | Florida service areas we serve"
        description="Website + Booking + Reviews system for Orlando, Melbourne FL, Rockledge, Cocoa, Cocoa Beach, Titusville, Clearwater, and Oviedo."
      />
      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-gray-950 text-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
          <div className="pointer-events-none absolute left-1/2 top-[-8rem] -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[-4rem] bottom-[-4rem] -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <header className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Locations</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Florida service areas we install and support.
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/80">
              Orlando to the Space Coast to Clearwater. We respond faster than your competitors so every click, call, and form turns into a booked job.
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locations/${city.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:border-cyan-400/60"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-semibold text-white">{city.name}</p>
                    <span className="text-xs text-cyan-200">View</span>
                  </div>
                  <p className="mt-3 text-sm text-white/80">{city.shortBlurb}</p>
                  <p className="mt-4 text-xs text-white/60">Industries: {city.fitIndustries.join(", ")}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-blue-600/10">
                <h2 className="text-2xl font-bold text-white">Why your service area needs a real system.</h2>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>- Orlando + Space Coast ad markets are competitive-speed to lead wins.</li>
                  <li>- Clearwater and beach towns pick whoever confirms first.</li>
                  <li>- Reviews tied to each city boost Maps ranking in that area.</li>
                  <li>- Routing by city/zip keeps crews efficient and reduces no-shows.</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    to="/process"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                  >
                    See our process
                  </Link>
                  <Link
                    to="/industries"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                  >
                    View industries
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-black p-8 shadow-xl shadow-cyan-500/20">
                <h3 className="text-xl font-semibold text-white">CTAs tuned for local intent</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>- Click-to-call + SMS with location-aware prompts</li>
                  <li>- City-specific landing pages and proof blocks</li>
                  <li>- Review asks that mention neighborhoods and speed</li>
                  <li>- Missed-call text-back so no city waits for a reply</li>
                </ul>
                <Link
                  to="/book"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Book a Strategy Call
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
