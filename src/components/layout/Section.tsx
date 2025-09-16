import React, { PropsWithChildren } from 'react';

export default function Section({ id, children }: PropsWithChildren<{ id?: string }>) {
  return (
    <section id={id} className="section">
      <div className="container">{children}</div>
    </section>
  );
}

