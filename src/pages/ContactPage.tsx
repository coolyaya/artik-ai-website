import React from 'react';
import Seo from '@/components/Seo';
import Navbar from '@/components/Navbar';
import { submitForm, type SubmitPayload } from '../utils/submitForm';

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = React.useState<ContactFormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'ok' | 'err'>('idle');

  const handleFieldChange = (
    field: keyof ContactFormState,
  ) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    try {
      const payload: SubmitPayload = { ...form, source: 'contact' };
      const result = await submitForm(payload);
      setStatus(result.ok ? 'ok' : 'err');
      if (result.ok) {
        setForm({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('[Contact submit] failed', error);
      setStatus('err');
    }
  }

  return (
    <main id="main-content" tabIndex={-1} className="page-animate min-h-screen bg-gray-950 text-white">
      <Seo
        title="Contact - ArtikAi"
        description="Have questions about the Website + Booking + Reviews system? Contact us or book a strategy call."
        image="/thumbnail.jpg"
      />

      <Navbar variant="dark" />

      <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
        <div className="pointer-events-none absolute left-1/2 top-[-10rem] -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="pointer-events-none absolute right-[-6rem] bottom-[-6rem] -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <section className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
          <header className="rise max-w-3xl" style={{ animationDelay: '40ms' }}>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Contact</span>
            <h1 className="mt-3 text-3xl font-bold md:text-5xl">Questions about getting more booked jobs?</h1>
            <p className="mt-4 text-base text-gray-300 md:text-lg">Share your services and cities. We'll reply quickly with next steps or book you into a strategy call.</p>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <form
              onSubmit={onSubmit}
              className="rise space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-600/10 backdrop-blur sm:p-8"
              style={{ animationDelay: '160ms' }}
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleFieldChange('name')}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-gray-900/70 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleFieldChange('email')}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-gray-900/70 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleFieldChange('message')}
                  required
                  placeholder="What would you like to automate?"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-gray-900/70 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-gray-950 shadow-lg shadow-cyan-500/20 transition focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:ring-offset-2 focus:ring-offset-gray-950 disabled:opacity-70"
                >
                  {status === 'loading' ? 'Sending...' : 'Send message'}
                </button>
                {status === 'ok' && <p className="text-sm text-green-400">Thanks! We'll be in touch shortly.</p>}
                {status === 'err' && <p className="text-sm text-red-400">Something went wrong. Please try again.</p>}
              </div>
            </form>

            <div
              className="rise flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-gray-300 shadow-lg shadow-blue-600/10 backdrop-blur sm:p-8"
              style={{ animationDelay: '200ms' }}
            >
              <h2 className="text-lg font-semibold text-white">Prefer talking it through?</h2>
              <p>
                Book a short strategy call and we&apos;ll map the Website + Booking + Reviews install for your service areas.
              </p>
              <div className="space-y-3 text-gray-300/90">
                <p><span className="font-semibold text-white">Hours:</span> 24/7</p>
                <p><span className="font-semibold text-white">Email:</span> artikai@artikai.org</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="/book"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/40 px-5 py-2 text-sm font-semibold text-cyan-100 transition focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:ring-offset-2 focus:ring-offset-gray-950 hover:border-cyan-400 hover:text-white"
                  data-analytics-cta="contact-book-call"
                >
                  Book a Strategy Call
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

