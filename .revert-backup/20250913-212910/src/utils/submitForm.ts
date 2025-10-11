const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzMEvPA7RmaRJIVc2bWhVSpQfmjBNPcCAGMZHdx4E_aqXcN32LpQ4WI6m3myybZDbB1HQ/exec";

type AnyRecord = Record<string, any>;

type Payload = {
  source?: string;
  name?: string;
  fullName?: string;
  email?: string;
  service?: string;
  message?: string;
  notes?: string;
  phone?: string;
  business?: string;
  company?: string;
  businessName?: string;
};

export async function submitForm(form: AnyRecord): Promise<boolean> {
  try {
    // Defensive normalization for business fields
    const business = (
      form?.business?.toString()?.trim() ||
      form?.company?.toString()?.trim() ||
      form?.businessName?.toString()?.trim() ||
      ""
    );

    const payload: Payload = {
      source: form?.source?.toString()?.trim() || "book",
      name: (form?.name || form?.fullName || "").toString().trim(),
      email: (form?.email || "").toString().trim(),
      service: (form?.service || "").toString().trim(),
      message: (form?.message || form?.notes || "").toString().trim(),
      phone: (form?.phone || "").toString().trim(),
      business,
      company: business,
      businessName: business,
    };

    // DEBUG: log the payload before sending
    console.log("[Book submit] Payload:", payload);

    const url = (import.meta as any)?.env?.VITE_BOOK_WEBAPP_URL || APPS_SCRIPT_URL;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // DEBUG: log response
    let data: any = null;
    try {
      data = await res.json();
    } catch {}
    console.log("[Book submit] Status:", res.status, "Response:", data);
    return res.ok;
  } catch (err) {
    console.error("[Book submit] Network error:", err);
    return false;
  }
}
