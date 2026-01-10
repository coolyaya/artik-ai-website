import React from "react";
import { Github, Slack, Zap, Database, Cloud, MessageSquare, Server, Globe, Layers, Box } from "lucide-react";

const icons = [Github, Slack, Zap, Database, Cloud, MessageSquare, Server, Globe, Layers, Box];

export default function IntegrationsMarquee() {
  const Row = () => (
    <div className="flex items-center gap-10 px-4">
      {icons.map((Icon, i) => (
        <Icon key={i} className="h-6 w-6 text-white/70" />
      ))}
    </div>
  );

  return (
    <section className="py-16 md:py-24" aria-label="Integrations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden group">
          <div className="relative">
            <div className="overflow-hidden py-8">
              <div className="flex items-center gap-10 text-white/60">
                <div className="marquee flex shrink-0">
                  <Row />
                  <Row />
                  <Row />
                  <Row />
                </div>
                <div className="marquee flex shrink-0" aria-hidden>
                  <Row />
                  <Row />
                  <Row />
                  <Row />
                </div>
              </div>
            </div>
          </div>

          {/* local styles for marquee */}
          <style>
            {`
              .marquee { animation: marquee 30s linear infinite; }
              .group:hover .marquee { animation-play-state: paused; }
              @media (prefers-reduced-motion: reduce) {
                .marquee { animation: none; }
              }
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
}

