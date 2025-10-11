let loaded = false;

export interface VFRequest {
  query: string;
  sessionId?: string;
  [key: string]: unknown;
}

export interface VFResponse {
  text?: string;
  data?: unknown;
  [key: string]: unknown;
}

export interface VoiceflowUser {
  name?: string;
  email?: string;
  [key: string]: unknown;
}

export interface VoiceflowOptions {
  projectID?: string;
  versionID?: string;
  url?: string;
  voiceURL?: string;
  user?: VoiceflowUser;
}

interface VoiceflowApi {
  load?: (config: {
    verify: { projectID: string };
    url: string;
    versionID: string;
    voice: { url: string };
    user?: VoiceflowUser;
  }) => void;
  open?: () => void;
  close?: () => void;
}

type VoiceflowWindow = Window & {
  voiceflow?: VoiceflowApi & { chat?: VoiceflowApi };
};

export function getVoiceflowClient(): VoiceflowApi | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }
  const vfWindow = window as VoiceflowWindow;
  return vfWindow.voiceflow?.chat ?? vfWindow.voiceflow ?? undefined;
}

export async function loadVoiceflow(opts: VoiceflowOptions = {}) {
  if (loaded) return;

  const projectID =
    opts.projectID ?? import.meta.env.VITE_VF_PROJECT_ID ?? "68c0633002f711654c31bc3f";
  const versionID = opts.versionID ?? import.meta.env.VITE_VF_VERSION_ID ?? "production";
  const url = opts.url ?? "https://general-runtime.voiceflow.com";
  const voiceURL = opts.voiceURL ?? "https://runtime-api.voiceflow.com";

  if (!projectID) {
    console.warn("[Voiceflow] Missing VITE_VF_PROJECT_ID");
    return;
  }

  if (typeof document === "undefined") {
    return;
  }

  const widgetSrc = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
  await new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${widgetSrc}"]`)) return resolve();
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = widgetSrc;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Voiceflow widget failed to load"));
    const first = document.getElementsByTagName("script")[0];
    first?.parentNode?.insertBefore(script, first);
  });

  const api = getVoiceflowClient();
  if (!api?.load) return;

  api.load({
    verify: { projectID },
    url,
    versionID,
    voice: { url: voiceURL },
    user: opts.user,
  });

  loaded = true;
}

export function openVoiceflow() {
  const api = getVoiceflowClient();
  api?.open?.();
}

export function closeVoiceflow() {
  const api = getVoiceflowClient();
  api?.close?.();
}

