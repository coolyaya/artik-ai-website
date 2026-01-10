export interface SubmitPayload {
  [key: string]: string | File | undefined;
  source?: string | File;
  name?: string | File;
  fullName?: string | File;
  email?: string | File;
  phone?: string | File;
  service?: string | File;
  message?: string | File;
  notes?: string | File;
  business?: string | File;
  company?: string | File;
  businessName?: string | File;
}

export interface SubmitResult {
  ok: boolean;
  data?: unknown;
  error?: string;
}

function toStringValue(value: string | File | undefined): string {
  if (typeof value === "string") return value;
  if (value instanceof File) return value.name;
  return "";
}

function toBusiness(form: SubmitPayload): string {
  return toStringValue(form.business ?? form.company ?? form.businessName).trim();
}

function normalisePayload(payload: SubmitPayload): Record<string, string> {
  return Object.entries(payload).reduce<Record<string, string>>((acc, [key, value]) => {
    acc[key] = toStringValue(value);
    return acc;
  }, {});
}

async function withTimeout<T>(promise: Promise<T>, ms = 8000): Promise<T> {
  let timeoutId: ReturnType<typeof setTimeout>;
  const timeout = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error("Timeout")), ms);
  });
  try {
    return await Promise.race([promise, timeout]);
  } finally {
    clearTimeout(timeoutId);
  }
}

async function tryJson(url: string, payload: SubmitPayload) {
  const body = normalisePayload(payload);
  return withTimeout(
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
  );
}

async function tryForm(url: string, payload: SubmitPayload) {
  const body = new URLSearchParams();
  Object.entries(normalisePayload(payload)).forEach(([key, value]) => body.append(key, value));
  // No headers → simple request → no preflight
  return withTimeout(fetch(url, { method: "POST", body }));
}

const safeParse = async (res: Response): Promise<unknown> => {
  const ct = res.headers.get("content-type") || "";
  const text = await res.text();
  try {
    if (ct.includes("application/json")) return JSON.parse(text);
    return JSON.parse(text); // Apps Script often returns JSON without header; try anyway
  } catch {
    return { raw: text };
  }
};

export async function submitForm(form: SubmitPayload): Promise<SubmitResult> {
  const url = import.meta.env.VITE_BOOK_WEBAPP_URL as string | undefined;
  if (!url) {
    throw new Error("Missing VITE_BOOK_WEBAPP_URL");
  }

  const business = toBusiness(form);

  const payload: SubmitPayload = {
    source: toStringValue(form.source ?? "book"),
    name: toStringValue(form.name ?? form.fullName).trim(),
    email: toStringValue(form.email).trim(),
    phone: toStringValue(form.phone).trim(),
    service: toStringValue(form.service).trim(),
    message: toStringValue(form.message ?? form.notes).trim(),
    business,
    company: business,
    businessName: business,
  };

  console.log("[Book submit] URL:", url);
  console.log("[Book submit] Payload ->", payload);

  // 1) Try JSON (fast path)
  try {
    const res = await tryJson(url, payload);
    const data = await safeParse(res);
    console.log("[Book submit] JSON status:", res.status, "data:", data);
    if (!res.ok) {
      throw new Error(`Non-OK JSON response: ${res.status}`);
    }
    return { ok: true, data };
  } catch (error) {
    console.warn("[Book submit] JSON failed, falling back to form-encoded. Reason:", error);
  }

  // 2) Fallback to URL-encoded (no preflight)
  const res2 = await tryForm(url, payload);
  const data2 = await safeParse(res2);
  console.log("[Book submit] FORM status:", res2.status, "data:", data2);
  if (!res2.ok) {
    throw new Error(`Non-OK FORM response: ${res2.status}`);
  }
  return { ok: true, data: data2 };
}
