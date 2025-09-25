import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

export type FeatureRailItem = {
  title: string;
  body: string;
  href: string;
  icon?: ReactNode;
};

interface FeatureRailProps {
  items: FeatureRailItem[];
}

const FeatureRail: React.FC<FeatureRailProps> = ({ items }) => {
  return (
    <div className="mask-fade">
      <div className="relative overflow-x-auto no-scrollbar">
        <div className="flex snap-x snap-mandatory gap-6 px-4 md:px-8 pb-6">
          {items.map((item, index) => {
            const isExternal = /^https?:\/\//i.test(item.href);

            const content = (
              <article
                key={item.title + index}
                className="snap-start shrink-0 w-[85%] sm:w-[380px] md:w-[520px] rounded-3xl border border-white/10 bg-white/[0.06] p-6 md:p-8 text-left shadow-lg shadow-cyan-500/5 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  Feature
                </span>
                <div className="mt-4 flex items-start gap-4">
                  {item.icon && (
                    <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                      {item.icon}
                    </span>
                  )}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-white/80">{item.body}</p>
                  </div>
                </div>
                {isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    Explore feature
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    Explore feature
                  </Link>
                )}
              </article>
            );

            return content;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureRail;
