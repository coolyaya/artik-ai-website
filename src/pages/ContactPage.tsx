import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import { loadVoiceflow, openVoiceflow } from '@/lib/voiceflow';
import { submitForm } from '../utils/submitForm';

export default function ContactPage() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const [botReady, setBotReady] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    try {
      const result = await submitForm({ ...form, source: 'contact' });
      const ok = Boolean(result);
      setStatus(ok ? 'ok' : 'err');
      if (ok) {
        setForm({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('[Contact submit] failed', error);
      setStatus('err');
    }
  }

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    let cancelled = false;

    loadVoiceflow().catch((error) => {
      console.warn('[Contact] Voiceflow load warning', error);
    });

    const checkReady = () => {
      if (cancelled) return true;
      const api = (window as any).voiceflow?.chat ?? (window as any).voiceflow;
      if (api?.open) {
        setBotReady((prev) => (prev ? prev : true));
        return true;
      }
      return false;
    };

    if (checkReady()) {
      return () => {
        cancelled = true;
      };
    }

    const interval = window.setInterval(() => {
      if (checkReady()) {
        window.clearInterval(interval);
      }
    }, 400);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  const handleVoiceflowChat = () => {
    if (!botReady) return;
    try {
      openVoiceflow();
    } catch (error) {
      console.error('[Contact] Voiceflow open failed', error);
    }
  };

  return (
    <main className="page-animate min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Contact - ArtikAi</title>
        <meta name="description" content="Get in touch with ArtikAi to start automating." />
      </Helmet>

      <Navbar variant="dark" />

      <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-gray-950 to-black">
        <div className="pointer-events-none absolute left-1/2 top-[-10rem] -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="pointer-events-none absolute right-[-6rem] bottom-[-6rem] -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <section className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
          <header className="rise max-w-3xl" style={{ animationDelay: '40ms' }}>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Contact</span>
            <h1 className="mt-3 text-3xl font-bold md:text-5xl">Tell us about your next automation.</h1>
            <p className="mt-4 text-base text-gray-300 md:text-lg">Share a bit about the use case and current tools. We'll review and get back fast with next steps.</p>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <form
              onSubmit={onSubmit}
              className="rise space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur sm:p-8"
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
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
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
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
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
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
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
                Book a short planning session and we'll map out the project, estimate platform costs, and plug you into the right package.
              </p>
              <div className="space-y-3 text-gray-300/90">
                <p><span className="font-semibold text-white">Hours:</span> Mon-Fri, 9am-5pm ET</p>
                <p><span className="font-semibold text-white">Email:</span> hello@artik.ai</p>
                <p><span className="font-semibold text-white">Slack:</span> Included for active retainers</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="/book"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/40 px-5 py-2 text-sm font-semibold text-cyan-100 transition focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:ring-offset-2 focus:ring-offset-gray-950 hover:border-cyan-400 hover:text-white"
                >
                  Book a demo slot
                </a>
                <button
                  type="button"
                  onClick={handleVoiceflowChat}
                  disabled={!botReady}
                  className={"inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition focus:outline-none disabled:opacity-70 " + (botReady
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-gray-950 shadow-lg shadow-cyan-500/20 hover:brightness-110 focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-gray-950'
                    : 'bg-white/10 text-gray-400 cursor-not-allowed')}
                >
                  Chat with the AI assistant
                </button>
              </div>
              <p className="text-xs text-gray-400">
                {botReady
                  ? 'The Voiceflow bot opens in the bottom-right corner.'
                  : 'Voiceflow assistant is loading - button activates once ready.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

