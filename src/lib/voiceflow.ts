let loaded = false;

type VFOpts = {
  projectID?: string;
  versionID?: string; // e.g., "production"
  url?: string;       // default VF runtime
  user?: { name?: string; email?: string; [k: string]: any };
};

function getVF() {
  // @ts-ignore injected by CDN bundle
  return (window as any).voiceflow?.chat ?? (window as any).voiceflow;
}

export async function loadVoiceflow(opts: VFOpts = {}) {
  if (loaded) return;

  const projectID = opts.projectID ?? import.meta.env.VITE_VF_PROJECT_ID;
  const versionID = opts.versionID ?? import.meta.env.VITE_VF_VERSION_ID;
  const url = opts.url ?? "https://general-runtime.voiceflow.com";

  if (!projectID) {
    console.warn("[Voiceflow] Missing VITE_VF_PROJECT_ID");
    return;
  }

  // inject the widget script once
  await new Promise<void>((resolve, reject) => {
    if (document.querySelector('script[src*="voiceflow.com/widget/bundle.mjs"]')) return resolve();
    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Voiceflow widget failed to load"));
    document.head.appendChild(s);
  });

  const api = getVF();
  if (!api?.load) return;

  api.load({
    verify: { projectID },
    url,
    versionID,
    user: opts.user, // optional: seed user context
  });

  loaded = true;
}

export function openVoiceflow() {
  const api = getVF();
  api?.open?.();
}

export function closeVoiceflow() {
  const api = getVF();
  api?.close?.();
}

