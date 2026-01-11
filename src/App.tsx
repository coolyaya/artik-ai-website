import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, PhoneCall, Star, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import Seo from "@/components/Seo";
import { getSiteUrl } from "@/components/Seo.helpers";
import criticalHomeCss from "@/styles/critical-home.css?raw";
import Container from "@/components/ui/Container";
import BgDecor from "@/components/ui/BgDecor";
import DarkFooter from "@/components/DarkFooter";
import { industries } from "@/data/industries";
import { locations } from "@/data/locations";
import BackToTopButton from "@/components/BackToTopButton";

const leadLeaks = [
  { title: "Missed calls", desc: "Crews are in the field, calls hit voicemail, and the lead books someone else." },
  { title: "Slow response", desc: "Forms sit in an inbox. No text-back, no booking link, no job." },
  { title: "No follow-up", desc: "Quotes go cold after day one without SMS/email nurture." },
  { title: "Weak reviews", desc: "Few Google reviews mentioning speed or quality, so Maps traffic chooses competitors." },
];

const pillars = [
  {
    title: "High-converting website",
    desc: "Built for Florida service intent with proof, service pages, and clear click-to-call + booking.",
  },
  {
    title: "Lead capture + instant response",
    desc: "Short forms and missed-call text-back collect address + service and send next steps in seconds.",
  },
  {
    title: "Follow-up automation",
    desc: "14-day nurture on estimates with financing links, FAQs, and reminders so shoppers stop comparing.",
  },
  {
    title: "Booking + Google review engine",
    desc: "Calendar routing by crew capacity and review requests after every job (4-5 to Google, 1-3 to a private fix).",
  },
];

const proofStrip = [
  { title: "<60 sec average follow-up (goal)", icon: <Zap className="h-5 w-5 text-cyan-200" /> },
  { title: "14-day follow-up sequence", icon: <PhoneCall className="h-5 w-5 text-cyan-200" /> },
  { title: "Review requests after every job", icon: <Star className="h-5 w-5 text-yellow-300" /> },
  { title: "More booked estimates", icon: <CheckCircle2 className="h-5 w-5 text-emerald-200" /> },
];

const reviewFlow = [
  "Ask for a quick 1-5 rating after every job.",
  "4-5: link to Google with cues (speed, clean crews, clarity).",
  "1-3: private feedback + manager alert to fix fast.",
];

const resultCards = [
  {
    title: "Roofing / Exteriors",
    desc: "Storm leads answered instantly with missed-call text-back and inspection booking links.",
  },
  {
    title: "HVAC",
    desc: "After-hours emergencies routed to SMS, scheduled for next-day visits, and followed up with financing links.",
  },
  {
    title: "Plumbing",
    desc: "14-day nurture keeps estimates warm and captures emergency calls with address + issue via text.",
  },
];

const processSteps = ["Install", "Launch", "Review engine", "Optimize"];

const pricingTiers = [
  { name: "Foundation", desc: "Website, tracking, forms, and booking built to convert local traffic." },
  { name: "Growth", desc: "Adds automation, pipeline, and missed-call text-back so no lead waits." },
  { name: "Dominance", desc: "Adds review engine and local SEO expansion plus monthly optimization." },
];

export default function App() {
  const siteUrl = getSiteUrl();
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ArtikAi",
    url: siteUrl || undefined,
    description:
      "ArtikAi installs the Website + Booking + Reviews system for Florida home service businesses to convert more leads.",
    logo: siteUrl ? `${siteUrl}/brand/artikai-icon-512.png` : undefined,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "artikai@artikai.org",
      },
    ],
  };
  const featuredIndustries = industries.slice(0, 6);
  const pressureWashing = industries.find((industry) => industry.slug === "pressure-washing");
  if (pressureWashing && !featuredIndustries.some((industry) => industry.slug === pressureWashing.slug)) {
    featuredIndustries.push(pressureWashing);
  }

  return (
    <div
      className="relative min-h-screen"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        backgroundImage: "var(--glow)",
        backgroundAttachment: "fixed",
      }}
    >
      <Helmet>
        <style id="critical-home" data-inline-critical="home">
          {criticalHomeCss}
        </style>
      </Helmet>
      <Seo
        title="ArtikAi | Website + Booking + Reviews System for Local Service Businesses"
        description="Done-for-you website, SMS/email follow-up, booking, and Google reviews engine that turns traffic into booked jobs and improves Google Maps rankings."
        image="/thumbnail.jpg"
        openGraph={{ imageAlt: "ArtikAi Website System preview" }}
        jsonLd={organizationJsonLd}
      />
      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="relative">
        <div className="relative">
          <BgDecor />

          <header className="relative pt-24 pb-16 sm:pt-32 sm:pb-20" data-critical-hero>
            <Container>
              <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-5">
                  <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                    Stop wasting money on ads that don't turn into booked jobs.
                  </h1>
                  <p className="text-lg text-white/80">
                    We install the complete Website + SMS/Email Follow-Up + Booking + Reviews system local service
                    businesses need to convert more leads and climb Google Maps.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to="/book"
                      className="inline-flex items-center rounded-brand-lg bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
                    >
                      Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/website-system"
                      className="inline-flex items-center rounded-brand-lg border border-white/30 bg-white/10 px-5 py-3 text-white/90 shadow-sm hover:bg-white/15"
                    >
                      See the Website System
                    </Link>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      <MapPin className="h-4 w-4" /> Built for Florida service businesses (Orlando  Space Coast 
                      Clearwater).
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      <PhoneCall className="h-4 w-4" /> Missed-call text-back + booking included.
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-2xl justify-self-end">
                  <div className="relative overflow-hidden rounded-brand-lg border border-white/20 bg-black/40 shadow-2xl ring-1 ring-white/10">
                    <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                      Case Study
                    </div>
                    <div className="space-y-4 px-6 py-10 sm:px-8 sm:py-12">
                      <h3 className="text-2xl font-bold text-white">+38% booked jobs in 30 days</h3>
                      <p className="text-sm text-white/80">
                        We installed the Website + SMS follow-up + booking system. Missed calls turned into scheduled
                        jobs — automatically.
                      </p>
                      <ul className="space-y-2 text-sm text-white/85">
                        <li className="flex items-start gap-2">
                          <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>Faster lead response with SMS + email automation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>Missed-call text-back + booking link</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>Review requests that lift Google Maps visibility</span>
                        </li>
                      </ul>
                      <Link
                        to="/results"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-gray-950 shadow-lg shadow-cyan-500/30 transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
                      >
                        View Results <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </header>

          <section className="py-16">
            <Container>
              <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Problem</p>
                  <h2 className="mt-2 text-3xl font-bold text-white">Where leads leak</h2>
                  <p className="mt-2 text-white/80">
                    Florida home service businesses lose jobs when follow-up slows down. We fix the four leaks below.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {leadLeaks.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-cyan-500/10">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-2 text-sm text-white/80">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          <section className="py-16">
            <Container>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">The Website System</p>
                  <h2 className="text-3xl font-bold text-white">Four pillars that turn traffic into booked jobs.</h2>
                </div>
                <Link
                  to="/website-system#included"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                >
                  See what's included
                </Link>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-lg shadow-blue-600/10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                        <CheckCircle2 className="h-5 w-5 text-cyan-200" />
                      </div>
                      <p className="text-lg font-semibold text-white">{pillar.title}</p>
                    </div>
                    <p className="mt-3 text-sm text-white/80">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="py-12">
            <Container>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {proofStrip.map((card) => (
                  <div key={card.title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-cyan-500/10">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                      {card.icon}
                    </div>
                    <p className="text-sm font-semibold text-white">{card.title}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="py-16">
            <Container>
              <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Reviews engine</p>
                  <h3 className="text-2xl font-bold text-white">Reviews that actually lift Maps ranking and trust.</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/80">
                    {reviewFlow.map((line) => (
                      <li key={line}>- {line}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-cyan-100">Outcome: more reviews mentioning speed, quality, and clarity.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 p-4">
                    <p className="text-sm font-semibold text-white">Protect your rating</p>
                    <p className="mt-2 text-sm text-white/80">Low scores route privately to fix issues before they hit Google.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">Tech-friendly</p>
                    <p className="mt-2 text-sm text-white/80">Crews trigger the review ask with one tap after closing a job.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">Review velocity</p>
                    <p className="mt-2 text-sm text-white/80">Steady weekly reviews signal freshness to Maps and LSAs.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">Proof cues</p>
                    <p className="mt-2 text-sm text-white/80">Prompts mention speed, cleanliness, and clarity-the details buyers notice.</p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="py-16">
            <Container>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Industries</p>
                  <h3 className="text-3xl font-bold text-white">Built for home services that can't miss a lead.</h3>
                </div>
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                >
                  View all industries
                </Link>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredIndustries.map((industry) => (
                  <Link
                    key={industry.slug}
                    to={`/industries/${industry.slug}`}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:border-cyan-400/60"
                  >
                    <p className="text-sm font-semibold text-cyan-100">{industry.name}</p>
                    <p className="mt-2 text-sm text-white/80">{industry.hero}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan-200 group-hover:text-white">
                      See details 
                    </span>
                  </Link>
                ))}
              </div>
            </Container>
          </section>

          <section className="py-16">
            <Container>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Locations</p>
                  <h3 className="text-3xl font-bold text-white">Service areas we prioritize.</h3>
                </div>
                <Link
                  to="/locations"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                >
                  View all locations
                </Link>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {locations.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/locations/${city.slug}`}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:border-cyan-400/60"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-base font-semibold text-white">{city.name}</p>
                      <MapPin className="h-4 w-4 text-cyan-200" />
                    </div>
                    <p className="mt-2 text-sm text-white/80">{city.shortBlurb}</p>
                  </Link>
                ))}
              </div>
            </Container>
          </section>

          <section className="py-16">
            <Container>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Results</p>
                  <h3 className="text-3xl font-bold text-white">What happens after install.</h3>
                </div>
                <Link
                  to="/results"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                >
                  See results
                </Link>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {resultCards.map((card) => (
                  <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                    <p className="text-sm font-semibold text-cyan-100">{card.title}</p>
                    <p className="mt-2 text-sm text-white/80">{card.desc}</p>
                    <Link to="/book" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan-200 hover:text-white">
                      Book a Strategy Call 
                    </Link>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="py-16">
            <Container>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Process</p>
                  <h3 className="text-3xl font-bold text-white">Install  Launch  Review engine  Optimize.</h3>
                </div>
                <Link
                  to="/process"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                >
                  See the rollout
                </Link>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, idx) => (
                  <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-lg shadow-cyan-500/10">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-bold text-cyan-100">
                      {idx + 1}
                    </div>
                    <p className="mt-3 text-base font-semibold text-white">{step}</p>
                    <p className="mt-2 text-xs text-white/70">
                      {idx === 0 && "Conversion-ready site + forms with tracking."}
                      {idx === 1 && "Instant replies, routing, and booking turned on."}
                      {idx === 2 && "Reviews requested after every job with safe routing."}
                      {idx === 3 && "Ongoing tweaks to follow-up timing and offers."}
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="py-16">
            <Container>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Pricing</p>
                  <h3 className="text-3xl font-bold text-white">Pick the tier that fits. Grow when you're ready.</h3>
                  <p className="text-sm text-white/70">Most clients invest $X-$Y depending on scope. Monthly support available.</p>
                </div>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-gray-950"
                >
                  View pricing
                </Link>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pricingTiers.map((tier) => (
                  <div key={tier.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10">
                    <p className="text-sm font-semibold text-cyan-100">{tier.name}</p>
                    <p className="mt-2 text-sm text-white/80">{tier.desc}</p>
                    <Link to="/book" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan-200 hover:text-white">
                      Book a Strategy Call 
                    </Link>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="py-20">
            <Container>
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Let's talk</p>
                  <h3 className="text-3xl font-bold text-white">Book a Strategy Call</h3>
                  <p className="text-white/80">
                    Tell us about your service lines and where you operate. We'll map the Website + Booking + Reviews
                    install so your ads and referrals convert into booked jobs.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to="/process"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                    >
                      See the rollout
                    </Link>
                    <Link
                      to="/results"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/85 hover:border-cyan-400/60 hover:text-white"
                    >
                      View results
                    </Link>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-500/15">
                  <BookingForm defaultService="Full Website System" />
                </div>
              </div>
            </Container>
          </section>

          <DarkFooter />
        </div>
      </main>
      <BackToTopButton />
    </div>
  );
}
