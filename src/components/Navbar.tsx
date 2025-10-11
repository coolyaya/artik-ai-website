import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import SkipLink from "./SkipLink";

type NavbarProps = {
  variant?: "dark" | "light";
};

const navLinks = [
  { label: "Templates", to: "/templates" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

const useCaseItems = [
  { title: "AI Customer Support & Chatbots", to: "/use-cases/support" },
  { title: "AI Phone Callers", to: "/use-cases/callers" },
  { title: "CRM Integrations & Appointment Setting", to: "/use-cases/crm" },
  { title: "AI Website Creation", to: "/use-cases/websites" },
  { title: "AI App Creation", to: "/use-cases/apps" },
  { title: "AI Ad Creatives & Marketing", to: "/use-cases/ads" },
];

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        window.clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const isLight = variant === "light";
  const headerBase = `h-14 md:h-16 flex items-center sticky top-0 z-50 border-b transition-colors ${
    isLight ? "border-slate-200" : "border-white/10"
  }`;
  const backgroundClass = scrolled
    ? isLight
      ? "bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur"
      : "bg-white/5 supports-[backdrop-filter]:bg-white/5 backdrop-blur"
    : isLight
    ? "bg-white"
    : "bg-white/5 supports-[backdrop-filter]:bg-white/5 backdrop-blur";

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${isLight ? "text-slate-700 hover:text-slate-900" : "text-white/80 hover:text-white"} text-sm transition-colors ` +
    (isActive ? (isLight ? "text-slate-900" : "text-white") : "");

  const cancelHoverClose = () => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const scheduleHoverClose = () => {
    cancelHoverClose();
    hoverTimeoutRef.current = window.setTimeout(() => {
      setUseCasesOpen(false);
      hoverTimeoutRef.current = null;
    }, 120);
  };

  return (
    <header className={`${headerBase} ${backgroundClass}`} aria-label="Primary" data-critical-nav="true">
      <SkipLink />
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 flex items-center justify-between nav-inner">
        <div className="flex flex-1 items-center">
          <Link to="/" className="flex items-center gap-3 brand">
            <img
              src="/brand/artikai-icon.svg"
              alt="ArtikAi"
              width={28}
              height={28}
              className="rounded-lg"
              loading="eager"
              decoding="async"
            />
            <span
              className={`text-base md:text-lg font-semibold tracking-tight ${
                isLight ? "text-slate-900" : "text-white"
              }`}
            >
              ArtikAi
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 links" aria-label="Main navigation">
          <NavLink to="/product" className={desktopLinkClass}>
            Product
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => {
              cancelHoverClose();
              setUseCasesOpen(true);
            }}
            onMouseLeave={() => {
              if (!useCasesOpen) return;
              scheduleHoverClose();
            }}
            onFocus={() => {
              cancelHoverClose();
              setUseCasesOpen(true);
            }}
            onBlur={(event) => {
              const nextFocus = event.relatedTarget as Node | null;
              if (!nextFocus || !event.currentTarget.contains(nextFocus)) {
                cancelHoverClose();
                setUseCasesOpen(false);
              }
            }}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1 text-sm transition-colors ${
                isLight ? "text-slate-700 hover:text-slate-900" : "text-white/80 hover:text-white"
              }`}
              aria-haspopup="true"
              aria-expanded={useCasesOpen}
              onClick={() => {
                cancelHoverClose();
                setUseCasesOpen((prev) => !prev);
              }}
            >
              Use Cases
              <ChevronDown className={`h-4 w-4 transition-transform ${useCasesOpen ? "rotate-180" : ""}`} />
            </button>

            {useCasesOpen && (
              <div
                onMouseEnter={cancelHoverClose}
                onMouseLeave={scheduleHoverClose}
                className={`absolute left-0 mt-3 w-60 rounded-2xl border shadow-xl backdrop-blur ${
                  isLight
                    ? "border-slate-200 bg-white/95"
                    : "border-white/10 bg-slate-950/95"
                }`}
              >
                <ul className="flex flex-col py-2">
                  {useCaseItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.to}
                        className={`block px-4 py-2 text-sm font-semibold transition-colors ${
                          isLight ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/5"
                        }`}
                        onClick={() => {
                          cancelHoverClose();
                          setUseCasesOpen(false);
                        }}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <NavLink key={l.label} to={l.to} className={desktopLinkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end">
          <div className="hidden md:flex items-center gap-3" aria-hidden="true" />
          <button
            className={`md:hidden inline-flex items-center justify-center rounded-full p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              isLight ? "text-slate-900" : "text-white"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`md:hidden backdrop-blur border-t ${
            isLight
              ? "bg-white/80 border-slate-200"
              : "supports-[backdrop-filter]:bg-white/5 border-white/10"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
            <Link
              to="/product"
              onClick={() => setOpen(false)}
              className={
                isLight
                  ? "text-slate-800 hover:text-slate-900"
                  : "text-white/90 hover:text-white"
              }
            >
              Product
            </Link>

            <div>
              <button
                type="button"
                className={`flex w-full items-center justify-between gap-2 text-left text-base ${
                  isLight ? "text-slate-800" : "text-white/90"
                }`}
                onClick={() => setMobileUseCasesOpen((prev) => !prev)}
                aria-expanded={mobileUseCasesOpen}
              >
                <span>Use Cases</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    mobileUseCasesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileUseCasesOpen && (
                <ul
                  className={`mt-3 flex flex-col overflow-hidden rounded-2xl border ${
                    isLight
                      ? "border-slate-200 bg-white"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {useCaseItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.to}
                        onClick={() => {
                          setOpen(false);
                          setMobileUseCasesOpen(false);
                        }}
                        className={`block px-4 py-2 text-sm font-semibold ${
                          isLight ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className={
                  isLight
                    ? "text-slate-800 hover:text-slate-900"
                    : "text-white/90 hover:text-white"
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

