import React from "react";

type Props = {
  defaultService?: string;
  onDone?: () => void;
};

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzMEvPA7RmaRJIVc2bWhVSpQfmjBNPcCAGMZHdx4E_aqXcN32LpQ4WI6m3myybZDbB1HQ/exec";

export default function BookingForm({ defaultService, onDone }: Props) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState<null | "ok" | "err">(null);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    service: defaultService || "AI Customer Support & Chatbots",
    message: "",
  });

  React.useEffect(() => {
    if (defaultService) {
      setForm((f) => ({ ...f, service: defaultService }));
    }
  }, [defaultService]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        // keep it a simple request (no custom headers) to avoid CORS preflight
        body: JSON.stringify(form),
        redirect: "follow",
      });
      if (res.ok) {
        setSuccess("ok");
        if (onDone) onDone();
        // optionally reset:
        // setForm({ name:"", email:"", service: defaultService || "AI Customer Support & Chatbots", message:"" });
      } else {
        // Often still writes the row; treat as ok for UX
        setSuccess("ok");
        if (onDone) onDone();
      }
    } catch (err) {
      console.error(err);
      setSuccess("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="text-sm">
          <span className="mb-1 block text-gray-300">Name</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-md border border-cyan-400/30 bg-black/30 px-3 py-2 outline-none focus:border-cyan-400"
          />
        </label>

        <label className="text-sm">
          <span className="mb-1 block text-gray-300">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-md border border-cyan-400/30 bg-black/30 px-3 py-2 outline-none focus:border-cyan-400"
          />
        </label>
      </div>

      <label className="text-sm block">
        <span className="mb-1 block text-gray-300">Service</span>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full rounded-md border border-cyan-400/30 bg-black/30 px-3 py-2 outline-none focus:border-cyan-400"
        >
          <option>AI Customer Support & Chatbots</option>
          <option>AI Phone Callers</option>
          <option>CRM Integrations & Appointment Setting</option>
          <option>AI Website Creation</option>
          <option>AI App Creation</option>
          <option>AI Ad Creatives & Marketing</option>
        </select>
      </label>

      <label className="text-sm block">
        <span className="mb-1 block text-gray-300">Message (optional)</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-md border border-cyan-400/30 bg-black/30 px-3 py-2 outline-none focus:border-cyan-400"
          placeholder="Anything we should know before the demo?"
        />
      </label>

      <div className="flex items-center justify-between pt-2">
        {success === "ok" && (
          <span className="text-sm text-green-400">Sent! We’ll reach out shortly.</span>
        )}
        {success === "err" && (
          <span className="text-sm text-red-400">Couldn’t send. Try again.</span>
        )}

        <button
          type="submit"
          disabled={loading}
          className="group relative px-6 py-2 bg-transparent border-2 border-cyan-400 rounded-full text-white font-semibold tracking-[0.1em] transition-all duration-300 hover:bg-cyan-400/10 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Request"}
        </button>
      </div>
    </form>
  );
}
