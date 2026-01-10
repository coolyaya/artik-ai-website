import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Page Not Found - ArtikAi</title>
      </Helmet>
      <Navbar variant="dark" />
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-24 text-center sm:py-32">
        <span className="rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200/80">
          404
        </span>
        <h1 className="text-3xl font-semibold sm:text-4xl">We couldn&apos;t find that page.</h1>
        <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
          The link might be out of date or the page may have moved. Try heading back to the home page to keep exploring
          ArtikAi.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-gray-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
