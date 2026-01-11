import React from "react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const bullets = [
  "We respond fast-expect a confirmation and follow-up quickly.",
  "Bring your service lines and coverage areas; we'll map the install.",
  "No generic demo. We focus on how to convert your leads into booked jobs.",
];

export default function BookPage() {
  return (
    <>
      <Seo
        title="Book a Strategy Call - ArtikAi"
        description="Want more booked jobs? Answer a few questions and schedule a call to install the Website + Booking + Reviews system."
        image="/thumbnail.jpg"
      />

      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-[#050B1A] text-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
          <div className="pointer-events-none absolute left-1/2 top-[-8rem] -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[-4rem] bottom-[-4rem] -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <section className="max-w-5xl mx-auto px-6 py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Book</p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold">Want more booked jobs?</h1>
            <p className="mt-2 text-gray-300">Answer a few questions and schedule a call. We'll map the Website + Booking + Reviews install for your service areas.</p>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-cyan-500/10">
                <h2 className="text-lg font-semibold text-white">What to expect</h2>
                <ul className="space-y-3 text-sm text-gray-200">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-gray-200">
                  <p className="font-semibold text-white">Need to talk sooner?</p>
                  <p className="mt-1 text-gray-300">Call, text, or email and mention your city + service lines.</p>
                  <p className="mt-2 text-gray-200">artikai@artikai.org</p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-white/60">
                  <Link to="/process" className="underline decoration-white/30 underline-offset-4 hover:text-white">See our process</Link>
                  <Link to="/pricing" className="underline decoration-white/30 underline-offset-4 hover:text-white">View pricing</Link>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-500/15">
                <BookingForm defaultService="Full Website System" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
