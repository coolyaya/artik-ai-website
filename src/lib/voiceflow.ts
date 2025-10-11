let loaded = false;

type VFOpts = {
  projectID?: string;
  versionID?: string; // e.g., "production"
  url?: string; // VF general runtime URL
  voiceURL?: string; // VF voice runtime URL
  user?: { name?: string; email?: string; [k: string]: any };
};

function getVF() {
  // Provided by the Voiceflow widget script
  return (window as any).voiceflow?.chat ?? (window as any).voiceflow;
}

export async function loadVoiceflow(opts: VFOpts = {}) {
  // If we've already called load once in this session, skip reloading
  if (loaded) return;

  const projectID = opts.projectID ?? import.meta.env.VITE_VF_PROJECT_ID ?? '68c0633002f711654c31bc3f';
  const versionID = opts.versionID ?? import.meta.env.VITE_VF_VERSION_ID ?? 'production';
  const url = opts.url ?? 'https://general-runtime.voiceflow.com';
  const voiceURL = opts.voiceURL ?? 'https://runtime-api.voiceflow.com';

  if (!projectID) {
    console.warn('[Voiceflow] Missing VITE_VF_PROJECT_ID');
    return;
  }

  // Ensure the widget-next script is present exactly once
  const widgetSrc = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
  await new Promise<void>((resolve, reject) => {
    // If widget-next already on page (or loaded by another module), resolve
    if (document.querySelector(`script[src="${widgetSrc}"]`)) return resolve();
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = widgetSrc;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Voiceflow widget failed to load'));
    const first = document.getElementsByTagName('script')[0];
    first?.parentNode?.insertBefore(s, first);
  });

  const api = getVF();
  if (!api?.load) return;

  api.load({
    verify: { projectID },
    url,
    versionID,
    voice: { url: voiceURL },
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

