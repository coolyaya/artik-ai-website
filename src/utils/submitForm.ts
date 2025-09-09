const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzMEvPA7RmaRJIVc2bWhVSpQfmjBNPcCAGMZHdx4E_aqXcN32LpQ4WI6m3myybZDbB1HQ/exec";

export async function submitForm(data: unknown): Promise<boolean> {
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      redirect: "follow",
    });
    return true;
  } catch (err) {
    console.error("Network error:", err);
    return false;
  }
}
