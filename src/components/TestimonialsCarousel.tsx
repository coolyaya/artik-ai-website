import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const AUTOPLAY_DELAY_MS = 8000;

type Testimonial = (typeof testimonialsData)[number] & {
  avatar?: string | null;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2) || "A";
}

export default function TestimonialsCarousel() {
  const testimonials = useMemo(
    () => testimonialsData as Testimonial[],
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) {
      return;
    }
    const ticker = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_DELAY_MS);

    return () => window.clearInterval(ticker);
  }, [testimonials]);

  if (!testimonials.length) {
    return null;
  }

  const activeTestimonial = testimonials[activeIndex];

  const goTo = (index: number) => {
    const nextIndex = (index + testimonials.length) % testimonials.length;
    setActiveIndex(nextIndex);
  };

  return (
    <section className="py-24 bg-black/20 backdrop-blur">
      <Container>
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Teams automate with confidence
            </h2>
            <p className="mt-3 text-base text-white/70">
              Hear how revenue, marketing, and support teams ship outcomes with
              ArtikAi automations.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg">
            <figure className="space-y-6">
              <blockquote className="text-lg font-medium text-white sm:text-xl">
                “{activeTestimonial.quote}”
              </blockquote>
              <figcaption className="flex items-center justify-center gap-4 text-left sm:justify-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                  {getInitials(activeTestimonial.name)}
                </div>
                <div>
                  <div className="text-base font-semibold text-white">
                    {activeTestimonial.name}
                  </div>
                  <div className="text-sm text-white/60">
                    {activeTestimonial.role} · {activeTestimonial.company}
                  </div>
                  <div className="mt-1 flex items-center text-cyan-200">
                    {Array.from({ length: activeTestimonial.rating }).map(
                      (_, idx) => (
                        <Star
                          key={idx}
                          size={16}
                          className="fill-cyan-300 text-cyan-300"
                        />
                      )
                    )}
                  </div>
                </div>
              </figcaption>
            </figure>

            {testimonials.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(activeIndex - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white/80 transition hover:bg-black/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(activeIndex + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 p-2 text-white/80 transition hover:bg-black/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>

          {testimonials.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition ${
                    index === activeIndex
                      ? "w-8 bg-cyan-400"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`View testimonial from ${testimonial.name}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
}
