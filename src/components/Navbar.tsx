import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  variant?: "dark" | "light";
};

const navLinks = [
  { label: "Product", to: "/product" },
  { label: "Use Cases", to: "/use-cases" },
  { label: "Templates", to: "/templates" },
  { label: "Docs", to: "/docs" },
  { label: "Pricing", to: "/pricing" },
];

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  return (
    <header className={`${headerBase} ${backgroundClass}`} aria-label="Primary">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 flex items-center justify-between">
        <div className="flex flex-1 items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/brand/artikai-icon.svg"
              alt="ArtikAi"
              width={28}
              height={28}
              className="rounded-lg"
              loading="lazy"
            />
            <span className={`text-base md:text-lg font-semibold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
              ArtikAi
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `${
                  isLight
                    ? "text-slate-700 hover:text-slate-900"
                    : "text-white/80 hover:text-white"
                } text-sm transition-colors ` +
                (isActive ? (isLight ? "text-slate-900" : "text-white") : "")
              }
            >
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
            isLight ? "bg-white/80 border-slate-200" : "supports-[backdrop-filter]:bg-white/5 border-white/10"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className={isLight ? "text-slate-800 hover:text-slate-900" : "text-white/90 hover:text-white"}
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
