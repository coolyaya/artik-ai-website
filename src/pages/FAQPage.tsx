import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import DarkFooter from "@/components/DarkFooter";

const faqs = [
  {
    q: "Do you replace our CRM or phones?",
    a: "No. We plug into your current CRM and phone setup. Calls and forms trigger automation while your dispatch stays in control.",
  },
  {
    q: "How fast can we launch?",
    a: "Most installs go live in days once we have your services, pricing ranges, and calendars. We prioritize follow-up speed first.",
  },
  {
    q: "What if my team is small?",
    a: "Automation fills the gaps when the owner is in the field. Missed-call text-back and nurture keep leads warm until you answer.",
  },
  {
    q: "Can you handle Spanish/English messaging?",
    a: "Yes. We can include bilingual SMS/email steps so leads get fast responses in their preferred language.",
  },
  {
    q: "Do you manage ads?",
    a: "We focus on conversion first-website, booking, follow-up, and reviews. Ads become profitable once this system is in place.",
  },
  {
    q: "How do you manage reviews ethically?",
    a: "We ask every customer to rate 1-5. Low scores go to a private fix; high scores are guided to Google with honest prompts.",
  },
  {
    q: "Can you support multiple locations?",
    a: "Yes. We route leads by city/zip, add location-specific proof, and track review velocity per market.",
  },
  {
    q: "What ongoing support exists?",
    a: "Monthly support is available to adjust follow-up timing, offers, and review prompts based on your booked jobs.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Seo
        title="FAQs | Website + Booking + Reviews system"
        description="Answers to common questions about installing the Website + Booking + Reviews system for Florida service businesses."
      />
      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-gray-950 text-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
          <div className="pointer-events-none absolute left-1/2 top-[-8rem] -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[-4rem] bottom-[-4rem] -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <header className="mx-auto max-w-5xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">FAQs</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              How the Website + Booking + Reviews system works.
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Built for Florida service businesses that need more booked jobs, not more platforms to manage.
            </p>
          </header>

          <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-cyan-500/10">
                  <h2 className="text-lg font-semibold text-white">{faq.q}</h2>
                  <p className="mt-2 text-sm text-white/80">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
          </section>
        </div>
        <DarkFooter />
      </main>
    </>
  );
}
