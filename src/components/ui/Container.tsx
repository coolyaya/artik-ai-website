import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return (
    <div
      data-critical-container="true"
      className="mx-auto max-w-7xl px-gutter md:px-8 lg:px-12"
    >
      {children}
    </div>
  );
}

