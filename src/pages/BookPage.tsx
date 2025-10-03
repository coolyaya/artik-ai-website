import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
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
  const [showThanks, setShowThanks] = useState(false);
  const [form, setForm] = useState<{ 
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    business: string;
    source: string;
  }>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    business: "",
    source: "book",
  });
  const navigate = useNavigate?.() as any; // tolerate absence if not using router
  const location = useLocation();

  // Preselect service from ?service=crm, etc.
  useEffect(() => {
    const p = new URLSearchParams(location.search);
    const q = p.get("service");
    if (!q) return;
    const found = services.find((s) => s.id === q);
    if (found) setSelected(found);
  }, [location.search]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      // Safety net: read from the actual form so we never miss the field
      const fd = new FormData(e.currentTarget);
      const biz = (fd.get("business") || fd.get("company") || fd.get("businessName") || "").toString().trim();
      if (!form.business && biz) (form as any).business = biz;

      // Sync selected service into payload from UI selection
      const serviceName = selected?.name ?? "Unspecified";
      (form as any).service = serviceName;

      console.log("[Book submit] final form →", form);
      const r = await submitForm(form as any);
      console.log("[Book submit] done:", r);
      setShowThanks(true);   // open the message bubble/modal
      // Reset form after success
      setForm({ name: "", email: "", phone: "", service: "", message: "", business: "", source: "book" });
    } catch (err) {
      console.error("[Book submit] error:", err);
    } finally {
      setSubmitting(false); // ALWAYS clear loading
    }
  };

  // navigation helper
  const redirectHome = () => {
    if (navigate) {
      navigate("/");
    } else {
      window.location.href = "/";
    }
  };

  // helper for OK button in the bubble
  const handleThanksOk = () => {
    setShowThanks(false);
    // add a short delay before redirect
    setTimeout(redirectHome, 50);
  };

  // Optional: auto-close + redirect after ~2.5s
  useEffect(() => {
    if (!showThanks) return;
    const t = setTimeout(() => {
      setShowThanks(false);
      // auto-close redirects without extra delay
      redirectHome();
    }, 2500);
    return () => clearTimeout(t);
  }, [showThanks]);

  return (
    <main className="page-animate min-h-screen bg-[#050B1A] text-white">
      <Helmet>
        <title>Book a Call – ArtikAi</title>
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

      <Navbar variant="dark" />

      <section className="max-w-5xl mx-auto px-6 py-10">
          <a href="/" className="text-sm text-cyan-300 hover:underline">&lt; Back to site</a>
        <h1 className="rise mt-3 text-3xl md:text-4xl font-semibold" style={{ animationDelay: '40ms' }}>Book a free demo</h1>
        <p className="rise mt-2 text-gray-400" style={{ animationDelay: '120ms' }}>Choose what you'd like to see, then tell us how to contact you.</p>

        {/* Service chooser */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const active = selected?.id === s.id;
            return (
              <button
                type="button"
                key={s.id}
                onClick={() => setSelected(s)}
                className={`rise text-left rounded-2xl border p-4 hover:bg-white/5 transition ${
                  active ? "border-cyan-400 shadow-[0_0_30px_rgba(0,212,255,.2)]" : "border-white/10"
                }`}
                style={{ animationDelay: `${160 + i * 80}ms` }}
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
        <form onSubmit={onSubmit} className="mt-10 grid gap-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rise" style={{ animationDelay: '200ms' }}>
              <label className="text-xs text-gray-400" htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 p-2 outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Your name"
              />
            </div>
            <div className="rise" style={{ animationDelay: '240ms' }}>
              <label className="text-xs text-gray-400" htmlFor="business">Business</label>
              <input
                id="business"
                name="business"
                type="text"
                required
                value={form.business}
                onChange={onChange}
                autoComplete="organization"
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 p-2 outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Business name"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rise" style={{ animationDelay: '280ms' }}>
              <label className="text-xs text-gray-400" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 p-2 outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="you@company.com"
              />
            </div>
            <div className="rise" style={{ animationDelay: '320ms' }}>
              <label className="text-xs text-gray-400" htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 p-2 outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="(555) 000-0000"
              />
            </div>
          </div>
          <div className="rise" style={{ animationDelay: '360ms' }}>
            <label className="text-xs text-gray-400" htmlFor="message">Notes (optional)</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 p-2 outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Share context..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting || !selected}
            className={`rise rounded-xl px-4 py-2 text-sm font-medium ${
              selected ? "bg-cyan-500/90 hover:bg-cyan-400 text-black" : "bg-white/10 text-gray-400 cursor-not-allowed"
            }`}
            style={{ animationDelay: '420ms' }}
            title={selected ? "" : "Select a service first"}
          >
            {submitting ? "Submitting..." : "Request demo"}
          </button>
          <p className="rise text-[11px] text-gray-500" style={{ animationDelay: '460ms' }}>By submitting, you agree to our Terms and Privacy Policy.</p>
        </form>
      </section>
      {/* Thank-you bubble/modal */}
      {showThanks && (
        <div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowThanks(false)}
          />
          {/* bubble */}
          <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-3 text-lg font-semibold">Thanks for reaching out!</div>
            <p className="mb-6 text-sm text-gray-700">
              We got your request. We'll review it and get back to you shortly.
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="rounded-xl border px-4 py-2 text-sm"
                onClick={() => setShowThanks(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-xl bg-black px-4 py-2 text-sm text-white"
                onClick={handleThanksOk}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
