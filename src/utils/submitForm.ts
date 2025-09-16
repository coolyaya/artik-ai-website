type AnyObj = Record<string, any>;

function toBusiness(form: AnyObj) {
  return (form.business ?? form.company ?? form.businessName ?? "").toString().trim();
}

async function withTimeout<T>(p: Promise<T>, ms = 8000): Promise<T> {
  let t: any;
  const timeout = new Promise<never>((_, reject) => {
    t = setTimeout(() => reject(new Error("Timeout")), ms);
  });
  try {
    return await Promise.race([p, timeout]);
  } finally {
    clearTimeout(t);
  }
}

async function tryJson(url: string, payload: AnyObj) {
  return withTimeout(
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }),
    8000
  );
}

async function tryForm(url: string, payload: AnyObj) {
  const body = new URLSearchParams();
  Object.entries(payload).forEach(([k, v]) => body.append(k, (v ?? "").toString()));
  // No headers → simple request → no preflight
  return withTimeout(
    fetch(url, { method: "POST", body }),
    8000
  );
}

const safeParse = async (res: Response) => {
  const ct = res.headers.get("content-type") || "";
  const text = await res.text();
  try {
    if (ct.includes("application/json")) return JSON.parse(text);
    return JSON.parse(text); // Apps Script often returns JSON without header; try anyway
  } catch {
    return { raw: text };
  }
};

export async function submitForm(form: AnyObj) {
  const url = import.meta.env.VITE_BOOK_WEBAPP_URL as string | undefined;
  if (!url) throw new Error("Missing VITE_BOOK_WEBAPP_URL");

  const business = toBusiness(form);

  const payload: AnyObj = {
    source: (form.source ?? "book").toString(),
    name: (form.name ?? form.fullName ?? "").toString().trim(),
    email: (form.email ?? "").toString().trim(),
    phone: (form.phone ?? "").toString().trim(),
    service: (form.service ?? "").toString().trim(),
    message: (form.message ?? form.notes ?? "").toString().trim(),
    // send all three keys
    business,
    company: business,
    businessName: business,
  };

  console.log("[Book submit] URL:", url);
  console.log("[Book submit] Payload →", payload);

  // 1) Try JSON (fast path)
  try {
    const res = await tryJson(url, payload);
    const data = await safeParse(res);
    console.log("[Book submit] JSON status:", res.status, "data:", data);
    if (!res.ok) throw new Error("Non-OK JSON response: " + res.status);
    return { ok: true, data };
  } catch (e) {
    console.warn("[Book submit] JSON failed, falling back to form-encoded. Reason:", e);
  }

  // 2) Fallback to URL-encoded (no preflight)
  const res2 = await tryForm(url, payload);
  const data2 = await safeParse(res2);
  console.log("[Book submit] FORM status:", res2.status, "data:", data2);
  if (!res2.ok) throw new Error("Non-OK FORM response: " + res2.status);
  return { ok: true, data: data2 };
}
