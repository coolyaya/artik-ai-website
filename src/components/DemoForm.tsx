import { useState } from "react";

export default function DemoForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch("/api/book-demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setStatus(res.ok ? "ok" : "err");
  }

  return (
    <form onSubmit={submit} className="grid gap-3 max-w-md">
      <input name="name" placeholder="Your name" required />
      <input name="email" type="email" placeholder="you@example.com" required />
      <input name="company" placeholder="Company" />
      <input name="timeslot" type="datetime-local" />
      <textarea name="notes" placeholder="Anything else?" />
      <button type="submit">Book demo</button>
      {status === "ok" && <p>Request received. Check your email.</p>}
      {status === "err" && <p>Something went wrong.</p>}
    </form>
  );
}
