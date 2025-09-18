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
        <div className="flex snap-x snap-mandatory gap-6 px-4 md:px-6 pb-2">
          {items.map((item, index) => {
            const isExternal = /^https?:\/\//i.test(item.href);

            return (
              <article
                key={item.title + index}
                className="snap-start shrink-0 w-[85%] sm:w-[420px] md:w-[520px] rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 text-left shadow-lg transition hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  {item.icon && (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cyan-300">
                      {item.icon}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm leading-none text-white/80">
                    <span>Feature</span>
                  </span>
                </div>
                <h3 className="mt-5 text-xl md:text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm md:text-base text-white/80">{item.body}</p>
                {isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    Explore feature
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    Explore feature
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureRail;
