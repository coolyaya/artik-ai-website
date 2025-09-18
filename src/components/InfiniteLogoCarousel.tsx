import React, { useMemo } from 'react';

type LogoItem = {
  name: string;
  icon: string;
};

interface InfiniteLogoCarouselProps {
  logos: LogoItem[];
  className?: string;
}

const bubbleClassName = 'rounded-2xl border border-white/10 bg-white/5 px-4 py-3 flex items-center gap-3 min-w-[160px] md:min-w-[200px]';

const InfiniteLogoCarousel: React.FC<InfiniteLogoCarouselProps> = ({ logos, className }) => {
  const duplicatedLogos = useMemo(() => logos.concat(logos), [logos]);

  if (!logos.length) {
    return null;
  }

  const containerClassName = ['logo-carousel relative overflow-hidden mask-fade', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassName}>
      <div className="flex flex-col gap-6">
        <div className="logo-row">
          <div className="logo-track">
            {duplicatedLogos.map((logo, index) => (
              <div key={`row-1-${index}-${logo.name}`} className={bubbleClassName}>
                <img
                  src={logo.icon}
                  alt={logo.name}
                  loading="lazy"
                  className="h-6 w-6 object-contain"
                />
                <span className="text-sm font-medium text-white/80">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="logo-row">
          <div className="logo-track logo-track--reverse">
            {duplicatedLogos.map((logo, index) => (
              <div key={`row-2-${index}-${logo.name}`} className={bubbleClassName}>
                <img
                  src={logo.icon}
                  alt={logo.name}
                  loading="lazy"
                  className="h-6 w-6 object-contain"
                />
                <span className="text-sm font-medium text-white/80">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export type { LogoItem };
export default InfiniteLogoCarousel;