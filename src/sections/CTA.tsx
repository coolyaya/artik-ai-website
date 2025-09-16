import React from "react";
import Button from "../components/ui/Button";

export default function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Build faster with ArtikAi
        </h2>
        <p className="mt-3 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
          Start free, then scale with your team on Cloud or self-hosted.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button variant="primary" href="/book" aria-label="Get started for free">
            Get started for free
          </Button>
          <Button variant="ghost" href="/contact" aria-label="Talk to sales">
            Talk to sales
          </Button>
        </div>
      </div>
    </section>
  );
}

