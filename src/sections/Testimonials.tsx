import React from "react";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar?: string;
};

const TESTIMONIALS: Testimonial[] = [
  { id: "1", quote: "ArtikAi helped us ship automations in days, not weeks.", name: "Leah", role: "Head of Ops" },
  { id: "2", quote: "We unified our stack and cut manual work by 60%.", name: "Marcus", role: "Support Lead" },
  { id: "3", quote: "The hybrid approach gives our team real flexibility.", name: "Ivy", role: "Product Manager" },
];

export default function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="py-16 md:py-24" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Loved by teams</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)] p-6">
          <div className="flex items-center justify-between">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="rounded-full bg-white/5 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              ‹
            </button>
            <div className="mx-4 flex-1 text-center">
              <blockquote className="text-lg md:text-xl text-white/90">“{TESTIMONIALS[index].quote}”</blockquote>
              <div className="mt-3 text-sm text-white/70">
                {TESTIMONIALS[index].name} • {TESTIMONIALS[index].role}
              </div>
            </div>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="rounded-full bg-white/5 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

