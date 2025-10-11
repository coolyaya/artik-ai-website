import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer"; // replaced by DarkFooter
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BgDecor from "@/components/ui/BgDecor";
import Container from "@/components/ui/Container";
import DemoVideo from "@/components/DemoVideo";
import IntegrationsStrip from "@/components/IntegrationsStrip";
import FeatureTriad from "@/components/FeatureTriad";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import CustomersCTA from "@/components/CustomersCTA";
import NothingYouCantAutomate from "@/components/NothingYouCantAutomate";
import TestimonialsRow from "@/components/TestimonialsRow";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FaqSection from "@/components/FaqSection";
import BackToTopButton from "@/components/BackToTopButton";
import DarkFooter from "@/components/DarkFooter";
import DemoForm from "@/components/DemoForm";
import Seo from "@/components/Seo";
import { getSiteUrl } from "@/components/Seo.helpers";
import criticalHomeCss from "@/styles/critical-home.css?raw";

export default function App() {
  const siteUrl = getSiteUrl();
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ArtikAi",
    url: siteUrl || undefined,
    description: "ArtikAi builds AI copilots that automate support, sales, and marketing workflows.",
    logo: siteUrl ? `${siteUrl}/brand/artikai-icon-512.png` : undefined,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "artikai@artikai.org",
      },
    ],
  };

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)', backgroundImage: 'var(--glow)', backgroundAttachment: 'fixed' }}>
      <Helmet>
        <style id="critical-home" data-inline-critical="home">{criticalHomeCss}</style>
      </Helmet>
      <Seo
        title="ArtikAi | Automate customer conversations and revenue workflows"
        description="Deploy AI copilots that deflect support tickets, follow up leads, and launch campaigns without losing your brand voice."
        image="/thumbnail.jpg"
        openGraph={{ imageAlt: "ArtikAi product preview dashboard" }}
        jsonLd={organizationJsonLd}
      />
      <Navbar variant="dark" />

      <main id="main-content" tabIndex={-1} className="relative">
        <div className="relative">
          <BgDecor />

          {/* HERO with video + dark-on-gradient */}
          <div className="hero-wrap">
            <header className="relative pt-24 pb-16 sm:pt-36 sm:pb-24" data-critical-hero>
              <Container>
                <AnimatedSection>
                  <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 hero-grid">
                    <div className="hero-copy">
                      <div className="inline-flex items-center gap-2 rounded-brand-pill border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 hero-badge">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        Flexible AI workflow automation
                      </div>
                      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                        <span className="block max-w-fit mt-2 sm:mt-3 lg:mt-4">
                          <span className="block">AUTOMATE</span>
                          <span className="block">EVERYTHING.</span>
                        </span>
                      </h1>
                      <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg hero-subtext">
                        AI-powered customer support, marketing, and sales tools to scale your business without limits
                      </p>
                      <div className="mt-8 flex flex-wrap items-center gap-3 hero-ctas">
                        <Link
                          to="/book"
                          className="inline-flex items-center rounded-brand-lg bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-300/50 primary"
                          data-analytics-cta="hero-book-demo"
                        >
                          Book a demo <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                          to="/pricing"
                          className="inline-flex items-center rounded-brand-lg border border-white/30 bg-white/10 px-5 py-3 text-white/90 shadow-sm hover:bg-white/15 secondary"
                          data-analytics-cta="hero-see-pricing"
                        >
                          See pricing
                        </Link>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-xs text-white/70 hero-stamp">
                        <CheckCircle2 className="h-4 w-4" /> No code needed - Cancel anytime
                      </div>
                    </div>

                    <div className="w-full max-w-2xl lg:justify-self-end">
                      <div className="relative aspect-video overflow-hidden rounded-brand-lg border border-white/20 bg-black/40 shadow-2xl ring-1 ring-white/10 hero-media">
                        <DemoVideo />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </Container>
            </header>
          </div>

          <div className="hero-edge" aria-hidden />

          {/* New dark sections below hero */}
          <div style={{ background: 'var(--bg)', color: 'var(--text)', backgroundImage: 'var(--glow)', backgroundAttachment: 'fixed' }}>
            <IntegrationsStrip />
            <FeatureTriad />
            <WhyChoose />
            <Testimonials
              hero={{
                quote: "A local service business increased qualified leads by 70% in 30 days using ArtiKai automations.",
                author: "Sarah Johnson",
                title: "CEO, TechFlow Solutions",
                avatarSrc: "/avatars/sarah.png",
              }}
              items={[
                {
                  quote: "ArtiKai transformed our lead generation. We're closing 3x more deals.",
                  author: "Mike Chen",
                  title: "Digital Marketing Pro",
                  rating: 5,
                },
                {
                  quote: "The AI chatbots handle 90% of customer inquiries. Game changer.",
                  author: "Lisa Rodriguez",
                  title: "E-commerce Ventures",
                  rating: 5,
                },
                {
                  quote: "ROI was immediate. Saved 25 hours per week on manual tasks.",
                  author: "David Park",
                  title: "Growth Consulting",
                  rating: 5,
                },
              ]}
            />
            <CustomersCTA />
            <NothingYouCantAutomate />
            <TestimonialsRow />
            <TestimonialsCarousel />
            <FaqSection />
            <section className="py-24">
              <Container>
                <div className="mx-auto max-w-2xl text-center space-y-4">
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Book a demo</h2>
                  <p className="text-base text-white/70">
                    Tell us a little about your team and preferred time. We&apos;ll confirm by email within minutes.
                  </p>
                </div>
                <div className="mt-10 flex justify-center">
                  <DemoForm />
                </div>
              </Container>
            </section>
            <DarkFooter />
          </div>
        </div>
      </main>
      <BackToTopButton />
    </div>
  );
}






