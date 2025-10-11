export default function BgDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* soft gradient blobs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-300/60 via-sky-300/40 to-purple-300/40 blur-3xl" />
      <div className="absolute -bottom-48 -right-48 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-fuchsia-300/40 via-rose-200/40 to-amber-200/40 blur-3xl" />

      {/* hero radial glow at top center */}
      <div className="absolute -top-24 left-1/2 h-[560px] w-[960px] -translate-x-1/2 rounded-full bg-[radial-gradient(60%_60%_at_50%_0%,rgba(79,70,229,0.18)_0%,rgba(14,165,233,0.14)_35%,transparent_70%)]" />

      {/* subtle grid */}
      <svg className="absolute inset-0 h-full w-full opacity-10" aria-hidden="true">
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0v24" fill="none" stroke="currentColor" strokeWidth=".5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
