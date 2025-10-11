import React from "react";
import { Blocks, Cloud, Plug, Database, ShieldCheck, Library } from "lucide-react";

const features = [
  {
    icon: Blocks,
    title: "Hybrid build (drag-drop + code)",
    copy: "Design flows visually and extend with code when you need precision.",
  },
  { icon: Cloud, title: "Self-host or Cloud", copy: "Run on your infra or use ArtikAi Cloud for zero ops." },
  { icon: Plug, title: "500+ integrations", copy: "Connect your stack — CRMs, DBs, messaging, and more." },
  { icon: Database, title: "AI on your data", copy: "Ground LLMs in your knowledge base and data sources." },
  { icon: ShieldCheck, title: "RBAC & SSO", copy: "Granular roles, SSO, and audit logs for teams." },
  { icon: Library, title: "Templates library", copy: "Start fast with ready-to-use recipes for common flows." },
];

export default function FeatureGrid() {
  return (
    <section className="py-16 md:py-24" id="product">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Build powerful workflows</h2>
        <p className="mt-2 text-base md:text-lg text-white/80 max-w-2xl">
          Everything you need to orchestrate AI tasks end to end.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)] p-6 hover:scale-[1.01] transition-transform"
            >
              <f.icon className="h-6 w-6 text-white/80" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/80">{f.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

