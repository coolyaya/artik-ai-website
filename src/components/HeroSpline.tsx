import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section className="hero">
      <div className="hero__media">
        {/* @ts-ignore - custom element provided via global web component */}
        <spline-viewer
          url="https://prod.spline.design/KoD07GiLphTFKbgv/scene.splinecode"
          loading="eager"
          className="spline"
        />
      </div>

      <div className="hero__content">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[560px] sm:min-h-[640px] md:min-h-[740px] lg:min-h-[800px]">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">AI Automation Without Limits</h1>
            <p className="mt-4 text-lg md:text-xl text-white/80">Chat, voice, and workflows that scale revenue while you sleep.</p>
            <Link
              to="/book"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-black shadow-[0_15px_60px_rgba(34,211,238,0.35)] hover:opacity-90"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

