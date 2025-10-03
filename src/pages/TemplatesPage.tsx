import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import DarkFooter from '@/components/DarkFooter';
import TemplatesGallery from '@/sections/TemplatesGallery';

const BENEFITS = [
  {
    title: 'Launch faster',
    description: 'Drop in a working flow for support, sales, or marketing in minutes and tweak it to fit your stack.',
  },
  {
    title: 'Opinionated best practices',
    description: 'Every template encodes proven prompts, fallback logic, and handoff patterns so you do not have to start from a blank page.',
  },
  {
    title: 'Integrated by default',
    description: 'Connect your CRM, calendar, or help desk and keep data in sync without re-building plumbing.',
  },
];

type ShowcaseItem = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
};

type ShowcaseCategory = {
  id: string;
  title: string;
  blurb: string;
  items: ShowcaseItem[];
};

const SHOWCASE_SECTIONS: ShowcaseCategory[] = [
  {
    id: 'websites',
    title: 'Websites we\'ve shipped',
    blurb: 'Conversion-ready marketing and product sites with analytics, automations, and CRM workflows baked in.',
    items: [
      {
        name: 'LaunchLabs AI',
        description: 'Story-driven SaaS site with gated resource library, Stripe trial sign-up, and HubSpot CRM sync.',
        tags: ['Next.js', 'HubSpot', 'Segment'],
        href: '/book?service=web',
      },
      {
        name: 'Cobalt Staffing',
        description: 'Recruiting microsite that pipes qualified leads into Greenhouse with automated follow-up sequences.',
        tags: ['Webflow', 'Make.com', 'Greenhouse'],
        href: '/book?service=web',
      },
      {
        name: 'Vela Clinics',
        description: 'HIPAA-aware clinic site with intake forms, eligibility checks, and SMS reminders tied to a patient portal.',
        tags: ['Framer', 'Twilio', 'Airtable'],
        href: '/book?service=web',
      },
    ],
  },
  {
    id: 'voiceflow',
    title: 'Voiceflow bots in production',
    blurb: 'Multichannel assistants that answer questions, qualify leads, and hand off to humans without losing context.',
    items: [
      {
        name: 'Support Desk Copilot',
        description: 'Handles Tier 1 questions on chat, escalates edge cases with full transcript summaries to Zendesk.',
        tags: ['Voiceflow', 'Zendesk', 'OpenAI'],
        href: '/book?service=chat',
      },
      {
        name: 'Appointment Setter',
        description: 'Voice + SMS bot that calls inbound leads, proposes times, and books meetings straight onto shared calendars.',
        tags: ['Voiceflow', 'Twilio Voice', 'Google Calendar'],
        href: '/book?service=caller',
      },
      {
        name: 'Product Onboarding Guide',
        description: 'Guides new users through setup, surfaces adoption blockers, and nudges CSMs when intervention is needed.',
        tags: ['Voiceflow', 'Slack', 'Notion'],
        href: '/book?service=chat',
      },
    ],
  },
  {
    id: 'other-products',
    title: 'Other automation products',
    blurb: 'Internal tools and revenue ops automations that tie AI workflows into the rest of the stack.',
    items: [
      {
        name: 'RevOps Automation Console',
        description: 'Single pane to monitor automations, retry errors, and push data fixes back to Salesforce.',
        tags: ['N8N', 'Salesforce', 'Postgres'],
        href: '/book?service=crm',
      },
      {
        name: 'Creative Brief Generator',
        description: 'Marketing pod tool that drafts ad briefs, routes approvals, and syncs assets into shared drives.',
        tags: ['Make.com', 'Google Drive', 'OpenAI'],
        href: '/book?service=ads',
      },
      {
        name: 'Field Ops Daily Digest',
        description: 'Automated morning briefing that aggregates CRM changes, support escalations, and inventory alerts.',
        tags: ['Zapier', 'HubSpot', 'Slack'],
        href: '/book?service=crm',
      },
    ],
  },
];

export default function TemplatesPage() {
  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Templates - ArtikAi</title>
        <meta
          name="description"
          content="Browse ready-to-run AI automations for support, revenue, and operations. Launch with best practices baked in."
        />
      </Helmet>

      <Navbar variant="dark" />

      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/80">Template library</p>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">Start from a proven blueprint.</h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Ship automations that reflect real-world playbooks. Templates cover the messaging, routing, and data sync so you can
          personalize and launch.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/book"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-black font-semibold shadow-[0_15px_60px_rgba(34,211,238,0.35)] hover:opacity-90"
          >
            Book a demo
          </Link>
          <a
            href="#showcase"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10"
          >
            See examples
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 grid gap-6 md:grid-cols-3">
        {BENEFITS.map((benefit) => (
          <div key={benefit.title} className="rounded-2xl border border-white/10 bg-gray-900/60 p-6">
            <h2 className="text-xl font-semibold">{benefit.title}</h2>
            <p className="mt-3 text-sm text-white/70">{benefit.description}</p>
          </div>
        ))}
      </section>

      <TemplatesGallery />

      <section id="showcase" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/80">Recent delivery</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">A glimpse at what we build.</h2>
          <p className="mt-3 text-white/70">
            Explore live engagements across marketing sites, Voiceflow assistants, and revenue tooling. Every project below started
            as a template and was customized alongside the client team.
          </p>
        </div>
        <div className="mt-10 space-y-8">
          {SHOWCASE_SECTIONS.map((category) => (
            <article
              key={category.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm text-white/70">{category.blurb}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group relative rounded-2xl border border-white/10 bg-gray-900/60 p-5 transition hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                      {item.href && (
                        <a
                          href={item.href}
                          className="text-xs font-semibold text-cyan-300 hover:text-cyan-200"
                        >
                          View
                        </a>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-white/70">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-500/15 via-blue-600/10 to-purple-600/15 p-8 border border-cyan-500/10">
          <h2 className="text-2xl md:text-3xl font-bold">Need something custom?</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Our team turns bespoke workflows into production-ready automations. Share your playbook and we will tailor a template
            to match your systems and compliance needs.
          </p>
          <div className="mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <DarkFooter />
    </main>
  );
}
