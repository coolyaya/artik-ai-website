import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { submitForm } from '../utils/submitForm';

export default function ContactPage() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  // page animation handled by CSS class

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    const ok = await submitForm({ ...form, source: 'contact' });
    setStatus(ok ? 'ok' : 'err');
  }

  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Contact - ArtikAi</title>
        <meta name="description" content="Get in touch with ArtikAi to start automating." />
      </Helmet>

      <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60 bg-gray-950/80 border-b border-cyan-500/10" aria-label="Primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="text-lg font-semibold tracking-widest">ARTIK<span className="text-cyan-400">AI</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
            <a href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
            <a href="/book" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-medium text-black">Book</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="rise" style={{ animationDelay: '40ms' }}><span className="text-3xl md:text-5xl font-extrabold">Contact</span></h1>
        <p className="mt-3 text-gray-300 max-w-2xl">Tell us about your use case. Weâ€™ll get back fast.</p>

        <form onSubmit={onSubmit} className="mt-10 max-w-xl space-y-4">
          <div className="rise" style={{ animationDelay: '180ms' }}>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
              className="w-full rounded-md bg-gray-900 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your name"
            />
          </div>
          <div className="rise" style={{ animationDelay: '240ms' }}>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              required
              className="w-full rounded-md bg-gray-900 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="rise" style={{ animationDelay: '300ms' }}>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              required
              rows={5}
              className="w-full rounded-md bg-gray-900 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="What would you like to automate?"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rise inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-black disabled:opacity-70" style={{ animationDelay: '360ms' }}
          >
            {status === 'loading' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'ok' && <p className="text-green-400">Thanks! Weâ€™ll be in touch shortly.</p>}
          {status === 'err' && <p className="text-red-400">Something went wrong. Please try again.</p>}
        </form>
      </section>
    </main>
  );
}




