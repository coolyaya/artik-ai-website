import React, { PropsWithChildren } from 'react';

type SectionProps = {
  id?: string;
  className?: string;
};

export default function Section({
  id,
  className,
  children,
}: PropsWithChildren<SectionProps>) {
  const baseClasses =
    'py-section-xs sm:py-section-sm lg:py-section bg-transparent';
  const mergedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return (
    <section id={id} className={mergedClasses}>
      <div className="mx-auto max-w-7xl px-gutter md:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}

