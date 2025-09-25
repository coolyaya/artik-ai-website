import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';
import DemoVideo from '../components/DemoVideo';
import HeroSpline from '../components/HeroSpline';
import FeatureRail from '../components/FeatureRail';
import InfiniteLogoCarousel from '../components/InfiniteLogoCarousel';
import WhyChoose from '../components/WhyChoose';

const integrationLogos = [
  { name: 'OpenAI', icon: '/integrations/openai-color.svg' },
  { name: 'Slack', icon: '/integrations/slack-color.svg' },
  { name: 'Notion', icon: '/integrations/notion-color.svg' },
  { name: 'Google Drive', icon: '/integrations/google-drive-color.svg' },
  { name: 'Airtable', icon: '/integrations/airtable-color.svg' },
  { name: 'Zapier', icon: '/integrations/zapier-color.svg' },
  { name: 'Instagram', icon: '/integrations/instagram-2016-logo-svgrepo-com.svg' },
  { name: 'Facebook', icon: '/integrations/facebook-icon-logo-svgrepo-com.svg' },
  { name: 'Apple', icon: '/integrations/apple-logo-svgrepo-com.svg' },
  { name: 'Messenger', icon: '/integrations/facebook-messenger-3-logo-svgrepo-com.svg' },
  { name: 'Google', icon: '/integrations/google-icon-logo-svgrepo-com.svg' },
  { name: 'Snapchat', icon: '/integrations/snapchat-logo-svgrepo-com.svg' },
  { name: 'SoundCloud', icon: '/integrations/soundcloud-logo-svgrepo-com.svg' },
  { name: 'Airbnb', icon: '/integrations/airbnb-2-logo-svgrepo-com.svg' },
];
function LandingPage() {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = origin ? `${origin}/` : undefined;

  const featureItems = [
    {
      title: 'Run AI workflows',
      body: 'Automate ops with reliable, observable flows triggered by webhooks, forms, or schedules.',
      href: '/features/workflows',
    },
    {
      title: 'Chat with your data',
      body: 'Connect your KB, files, or DBs and let models answer with citations and guardrails.',
      href: '/features/chat-with-your-data',
    },
    {
      title: 'Ship UIs or just code',
      body: 'Start with simple UI blocks. When you need control, drop to code without rewrites.',
      href: '/features/ship-uis-or-code',
    },
  ];


  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>ArtikAi - AI Automation Without Limits</title>
        <meta name="description" content="Chat, voice, and workflows that scale revenue while you sleep." />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta property="og:title" content="ArtikAi - AI Automation Without Limits" />
        <meta property="og:description" content="AI chat, voice, and workflow automation for modern businesses." />
        <meta property="og:image" content="/thumbnail.jpg" />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ArtikAi - AI Automation Without Limits" />
        <meta name="twitter:description" content="AI chat, voice, and workflow automation for modern businesses." />
        <meta name="twitter:image" content="/thumbnail.jpg" />
      </Helmet>

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60 bg-gray-950/80 border-b border-cyan-500/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_24px_rgba(34,211,238,0.5)]" />
            <span className="text-lg font-semibold tracking-widest">ARTIK<span className="text-cyan-400">AI</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
            <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-medium text-black shadow-[0_8px_30px_rgba(34,211,238,0.35)] hover:opacity-90">Book<ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <HeroSpline />

      {/* Integrations */}
      <section id="integrations" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400/70">Integrations</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Connect your stack in minutes</h2>
            <p className="mt-3 text-gray-400">Sync ArtikAI with the tools your team already relies on across ops, sales, and support.</p>
          </div>
          <InfiniteLogoCarousel logos={integrationLogos} className="mt-10" />
        </div>
      </section>

      {/* CTA integrated under headline (no absolute or negative margins) */}

      {/* Demo Video Section */}
      <section className="mt-0 md:mt-16 px-4 md:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#0B1B2A] p-6 shadow-2xl">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold">Watch This Video To Learn</h2>
          <p className="mt-2 text-center text-white/70">See how ArtikAI automates chat, voice and workflows.</p>

          <div className="mt-12 mx-auto w-full max-w-5xl relative">
            {/* Ambient glow orbs */}
            <div className="pointer-events-none absolute -inset-8 z-0">
              <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl" />
            </div>

            {/* Video frame */}
            <div
              className="group relative z-10 w-full overflow-hidden rounded-2xl shadow-[0_20px_120px_rgba(34,211,238,0.25)] ring-1 ring-white/10 backdrop-blur-sm"
              style={{ paddingTop: '56.25%' }}
            >
              {/* Subtle border and corner accents on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl border border-cyan-400/20" />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute left-6 top-6 h-px w-16 bg-gradient-to-r from-cyan-400/80 to-transparent" />
                <div className="absolute right-6 bottom-6 h-px w-16 bg-gradient-to-l from-purple-400/80 to-transparent" />
              </div>

              <DemoVideo />
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section id="services" className="py-12 md:py-16 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Powerful Automations, Simple Setup</h2>
          <p className="mt-3 text-gray-300 text-center max-w-2xl mx-auto">Deploy AI across your customer journey in days, not months.</p>

          <div className="mt-10 md:mt-12">
            <FeatureRail items={featureItems} />
          </div>
        </div>
      </section>


      <WhyChoose />


      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-gray-200">"ArtikAi helped us automate support and outbound calls. We booked more demos in 2 weeks than the prior quarter."</blockquote>
          <div className="mt-6 text-gray-400">- Jamie Rivera, COO at Brightwave</div>
        </div>
      </section>

      {/* Pricing anchor */}
      <div id="pricing" className="h-2" />

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-8 border border-cyan-500/10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to scale? Start automating today.</h3>
            <p className="mt-2 text-gray-300">Let's design your AI workflows in a quick call.</p>
            <div className="mt-6">
              <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-black shadow-[0_15px_60px_rgba(34,211,238,0.35)] hover:opacity-90">Book a Demo<ArrowRight className="w-5 h-5" /></Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold tracking-widest">ARTIK<span className="text-cyan-400">AI</span></span>
              <span className="text-gray-600">(c) {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-cyan-400"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-cyan-400"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-cyan-400"><Github className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

