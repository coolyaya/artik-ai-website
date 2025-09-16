import React, { useEffect } from "react";
import Button from "../components/ui/Button";

// Hero layout split into media vs. content layers
export default function Hero() {
  // Toggle to true temporarily if you need to live-identify blockers
  const DEBUG_POINTERS = false;

  useEffect(() => {
    if (!DEBUG_POINTERS) return;
    const hi = document.createElement('div');
    hi.style.cssText = 'position:fixed;pointer-events:none;inset:auto 0 0 0;background:#0ff3;padding:2px 6px;font:12px ui-sans-serif;color:#001;z-index:999999;border-radius:6px 6px 0 0;opacity:.8';
    document.body.appendChild(hi);

    const handler = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (!el) return;
      hi.textContent = el.className?.toString() || el.tagName.toLowerCase();
      if (!el.closest('.spline')) el.style.pointerEvents = 'none';
    };
    window.addEventListener('mousemove', handler);
    return () => { window.removeEventListener('mousemove', handler); hi.remove(); };
  }, [DEBUG_POINTERS]);
  return (
    <section className="hero">
      {/* Interactive Spline canvas layer */}
      <div className="hero__media">
        {/* Using the web component already loaded in index.html */}
        {/* @ts-ignore web component */}
        <spline-viewer
          url="https://prod.spline.design/KoD07GiLphTFKbgv/scene.splinecode"
          loading="lazy"
          className="spline w-full h-full block"
          style={{ display: "block", touchAction: "pan-y" }}
        />
      </div>

      {/* Content sits above and stays click-through except real controls */}
      <div className="hero__content">
        <div className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left copy */}
            <div className="relative">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  Flexible AI workflow automation
                </div>

                <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight">
                  Automate with ArtikAi
                  <br />
                  Build reliable AI workflows
                </h1>
                <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
                  Orchestrate tasks, integrate your tools, and ship faster with a hybrid approach of drag-and-drop and code.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button variant="primary" href="/book" aria-label="Get started for free">
                    Get started for free
                  </Button>
                  <Button variant="ghost" href="/contact" aria-label="Talk to sales">
                    Talk to sales
                  </Button>
                </div>

                {/* Logo strip */}
                <div className="mt-8 opacity-70">
                  <p className="text-xs uppercase tracking-wider text-white/60">Trusted by forward-thinking teams</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-4 grayscale">
                    {["Shopify", "Slack", "Notion", "HubSpot", "Salesforce", "Postgres"].map((name) => (
                      <div key={name} className="text-sm text-white/70">
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right demo video */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0 hero-video">
              <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
                <video
                  className="h-full w-full object-contain"
                  src="/demo-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
