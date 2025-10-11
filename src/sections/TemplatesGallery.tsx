import React from "react";
import Button from "@/components/ui/Button";

type Template = {
  id: string;
  title: string;
  brief: string;
  tags: string[];
};

const TEMPLATES: Template[] = [
  { id: "lead-capture", title: "Lead capture bot", brief: "Qualify and route new leads automatically.", tags: ["sales", "crm"] },
  { id: "support-triage", title: "Support triage", brief: "Categorize, prioritize, and summarize tickets.", tags: ["support", "ops"] },
  { id: "churn-alerts", title: "Churn alerts", brief: "Detect risk and notify account owners.", tags: ["success", "ml"] },
  { id: "daily-digest", title: "Daily digest", brief: "Summarize activity from tools you use.", tags: ["product", "internal"] },
  { id: "crm-sync", title: "CRM sync", brief: "Keep contacts up to date across systems.", tags: ["crm", "ops"] },
  { id: "social-reply", title: "Social reply", brief: "Auto-respond with on-brand messaging.", tags: ["marketing"] },
];

const TAGS = ["all", "sales", "support", "ops", "crm", "marketing", "ml", "internal", "product", "success"];

export default function TemplatesGallery() {
  const [active, setActive] = React.useState("all");

  const filtered = React.useMemo(() => {
    if (active === "all") return TEMPLATES;
    return TEMPLATES.filter((t) => t.tags.includes(active));
  }, [active]);

  return (
    <section className="py-16 md:py-24" id="templates">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Templates</h2>
            <p className="mt-2 text-base md:text-lg text-white/80">Start from proven patterns and ship faster.</p>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Template filters">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                role="tab"
                aria-selected={active === t}
                className={
                  (active === t ? "bg-cyan-500 text-black" : "bg-white/5 text-white/80") +
                  " rounded-full px-3 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                }
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tpl) => (
            <div
              key={tpl.id}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)] p-5 hover:scale-[1.01] transition-transform"
            >
              <h3 className="text-lg font-semibold">{tpl.title}</h3>
              <p className="mt-2 text-sm text-white/80">{tpl.brief}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tpl.tags.map((tag) => (
                  <span key={tag} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="ghost" href="/book" aria-label={`Use template ${tpl.title}`}>
                  Use template
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

