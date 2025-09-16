import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import DarkFooter from '@/components/DarkFooter';

export default function DocsPage(){
  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Docs — ArtikAi</title>
        <meta name="description" content="Get started, integrate, and ship reliable AI automations with ArtikAi." />
      </Helmet>
      <Navbar variant="dark" />

      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Documentation</h1>
        <p className="mt-3 text-white/70 max-w-2xl">From quick start to APIs and webhooks. Everything you need to build with confidence.</p>
      </header>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 bg-gray-900/60 p-6">
          <h2 className="text-xl font-semibold">1) Quick Start</h2>
          <ol className="mt-3 list-decimal list-inside text-white/80 space-y-1">
            <li>Create a project</li>
            <li>Connect CRM + calendar</li>
            <li>Import a template and test</li>
          </ol>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gray-900/60 p-6">
          <h2 className="text-xl font-semibold">2) API</h2>
          <p className="mt-2 text-white/70">Use REST to trigger flows, fetch logs, and manage variables.</p>
          <pre className="mt-3 rounded-lg bg-black/50 p-4 text-xs overflow-auto"><code>{`POST /v1/flows/{id}/run
Authorization: Bearer <token>
Content-Type: application/json
{
  "inputs": { "email": "user@acme.com", "plan": "growth" },
  "metadata": { "source": "signup" }
}`}</code></pre>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gray-900/60 p-6">
          <h2 className="text-xl font-semibold">3) Webhooks</h2>
          <p className="mt-2 text-white/70">Receive events for runs, calls, and messages to keep your systems in sync.</p>
          <pre className="mt-3 rounded-lg bg-black/50 p-4 text-xs overflow-auto"><code>{`POST https://yourapp.com/webhooks/artikai
X-Signature: sha256=...`}</code></pre>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-8 border border-cyan-500/10">
          <h2 className="text-2xl md:text-3xl font-bold">SDKs</h2>
          <p className="mt-2 text-white/70">Drop‑in helpers for TypeScript and Python to call flows and verify signatures.</p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg border border-white/10 p-4 bg-black/30"><pre className="text-xs overflow-auto"><code>{`import { runFlow } from '@artikai/sdk';
await runFlow('flow_123', { email: 'user@acme.com' });`}</code></pre></div>
            <div className="rounded-lg border border-white/10 p-4 bg-black/30"><pre className="text-xs overflow-auto"><code>{`from artikai import run_flow
run_flow('flow_123', { 'email': 'user@acme.com' })`}</code></pre></div>
          </div>
        </div>
      </section>

      <DarkFooter />
    </main>
  );
}
