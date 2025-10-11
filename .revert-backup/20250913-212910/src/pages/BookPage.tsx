import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutGrid, MessageSquare, PhoneCall, Calendar, Globe, Megaphone } from "lucide-react";
import { submitForm } from "../utils/submitForm";

type Service = {
  id: string;
  name: string;
  icon: React.ReactNode;
  blurb: string;
};

const services: Service[] = [
  { id: "ai-app", name: "AI App Creation", icon: <LayoutGrid className="w-5 h-5" />, blurb: "Custom AI-powered apps tailored to your workflow." },
  { id: "chat", name: "AI Support & Chat", icon: <MessageSquare className="w-5 h-5" />, blurb: "24/7 site chat + social DMs that qualify and convert." },
  { id: "caller", name: "AI Phone Caller", icon: <PhoneCall className="w-5 h-5" />, blurb: "Missed-call text-back + outbound AI caller that books." },
  { id: "crm", name: "CRM & Calendar", icon: <Calendar className="w-5 h-5" />, blurb: "Airtable/HubSpot with Google/Outlook scheduling." },
  { id: "web", name: "Websites & Funnels", icon: <Globe className="w-5 h-5" />, blurb: "High-converting pages with pixels and tracking." },
  { id: "ads", name: "Ads & Creatives", icon: <Megaphone className="w-5 h-5" />, blurb: "IG/FB hooks, scripts, and creatives that perform." },
];

export default function BookPage() {
  const [selected, setSelected] = useState<Service | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    notes: "",
  });
  const nav = useNavigate();
  const location = useLocation();

  // Preselect service from ?service=crm, etc.
  useEffect(() => {
    const p = new URLSearchParams(location.search);
    const q = p.get("service");
    if (!q) return;
    const found = services.find((s) => s.id === q);
    if (found) setSelected(found);
  }, [location.search]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.business) console.warn("⚠ business is empty at submit", form);

    // Safety net: harvest from form element in case UI/state desyncs
    const fd = new FormData(e.currentTarget);
    const businessFallback = (
      (fd.get("business") || fd.get("company") || fd.get("businessName") || "")
        .toString()
        .trim()
    );

    const patchedForm = !form.business && businessFallback
      ? { ...form, business: businessFallback }
      : form;

    setSubmitting(true);
    const ok = await submitForm({
      ...patchedForm,
      service: selected?.name ?? "Unspecified",
    });
    if (ok) {
      alert("Thanks! We'll reach out to schedule your demo.");
      nav("/");
    } else {
      alert("Hmm, something went wrong. Try again.");
    }
    setSubmitting(false);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Book a Call — ArtikAi</title>
        <meta
          name="description"
          content="Schedule a free strategy call to see how AI can automate your support, sales, and marketing."
        />
        {/* Compute canonical at runtime to avoid hardcoding domain */}
        {typeof window !== 'undefined' && (
          <link rel="canonical" href={`${window.location.origin}/book`} />
        )}
        {typeof window !== 'undefined' && (
          <meta property="og:url" content={`${window.location.origin}/book`} />
        )}
      </Helmet>
      <section className="max-w-5xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-cyan-300 hover:underline">&lt; Back to site</a>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold">Book a free demo</h1>
        <p className="mt-2 text-gray-400">Choose what you'd like to see, then tell us how to contact you.</p>

        {/* Service chooser */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const active = selected?.id === s.id;
            return (
              <button
                type="button"
                key={s.id}
                onClick={() => setSelected(s)}
                className={`text-left rounded-2xl border p-4 hover:bg-white/5 transition ${
                  active ? "border-cyan-400 shadow-[0_0_30px_rgba(0,212,255,.2)]" : "border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg p-2 ${active ? "bg-cyan-500/20 text-cyan-300" : "bg-white/5 text-white"}`}>
                    {s.icon}
                  </div>
                  <div className="font-medium">{s.name}</div>
                </div>
                <p className="mt-2 text-sm text-gray-400">{s.blurb}</p>
              </button>
            );
          })}
        </div>

        {/* Lead form */}
        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400">Your name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 p-2 outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-xs text-gray-400">Business</label>
              <input
                type="text"
                id="business"
                name="business"
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 p-2 outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Business name"
                autoComplete="organization"
                value={form.business}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 p-2 outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-xs text-gray-400">Phone</label>
              <input
                name="phone"
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 p-2 outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="(555) 000-0000"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-400">Notes (optional)</label>
            <textarea
              name="notes"
              rows={4}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 p-2 outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Share context, goals, timeline..."
              value={form.notes}
              onChange={handleChange}
            />
          </div>

          {/* Keep a hidden field; we also set service in payload just in case */}
          <input type="hidden" name="service" value={selected?.name ?? ""} />

          <button
            type="submit"
            disabled={submitting || !selected}
            className={`rounded-xl px-4 py-2 text-sm font-medium ${
              selected ? "bg-cyan-500/90 hover:bg-cyan-400 text-black" : "bg-white/10 text-gray-400 cursor-not-allowed"
            }`}
            title={selected ? "" : "Select a service first"}
          >
            {submitting ? "Submitting..." : "Request demo"}
          </button>
          <p className="text-[11px] text-gray-500">By submitting, you agree to our Terms and Privacy Policy.</p>
        </form>
      </section>
    </main>
  );
}
