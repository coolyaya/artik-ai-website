import type { FC } from 'react';

type TestimonialHero = {
  quote: string;
  author: string;
  title: string;
  avatarSrc?: string;
};

type TestimonialItem = {
  quote: string;
  author: string;
  title: string;
  rating?: number;
};

type TestimonialsProps = {
  hero: TestimonialHero;
  items: TestimonialItem[];
};

const clampRating = (rating = 0) => Math.max(0, Math.min(5, Math.round(rating)));
const STAR_FILLED = '\u2605';
const STAR_EMPTY = '\u2606';

const Testimonials: FC<TestimonialsProps> = ({ hero, items }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <p className="anim-in text-center text-[0.7rem] font-semibold tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400/80 via-blue-500/80 to-purple-500/80 md:text-xs">
          PROVEN RESULTS, REAL GROWTH
        </p>

        <article className="anim-in relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-6 md:p-10 shadow-[0_0_60px_-20px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/15 via-white/0 to-transparent opacity-60" aria-hidden="true" />
          <blockquote className="text-xl md:text-3xl font-semibold text-white/90">
            "{hero.quote}"
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            {hero.avatarSrc ? (
              <img
                src={hero.avatarSrc}
                alt=""
                loading="lazy"
                className="h-12 w-12 rounded-full border border-white/15 object-cover shadow-lg"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 text-lg font-semibold text-white/80">
                {hero.author.charAt(0)}
              </div>
            )}
            <div>
              <div className="font-semibold text-white">{hero.author}</div>
              <div className="text-sm text-white/70">{hero.title}</div>
            </div>
          </div>
        </article>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {items.map((item, index) => {
            const hasRating = typeof item.rating === 'number';
            const rating = clampRating(item.rating);

            return (
              <article
                key={`${item.author}-${index}`}
                className="anim-in rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.07] to-white/[0.02] p-6 shadow-lg backdrop-blur"
              >
                {hasRating ? (
                  <div className="flex items-center gap-1 text-amber-300" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex} className="star text-lg leading-none">
                        {starIndex < rating ? STAR_FILLED : STAR_EMPTY}
                      </span>
                    ))}
                  </div>
                ) : null}
                {hasRating ? (
                  <span className="sr-only">Rated {rating} out of 5 stars</span>
                ) : null}
                <p className="mt-3 text-white/85">"{item.quote}"</p>
                <div className="mt-5">
                  <div className="font-semibold text-white">{item.author}</div>
                  <div className="text-sm text-white/70">{item.title}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
