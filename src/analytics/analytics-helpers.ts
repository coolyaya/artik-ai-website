export const CONSENT_STORAGE_KEY = "artikai.analytics.consent";
export const CONSENT_COOKIE_NAME = "analytics_consent";
export const CTA_ATTRIBUTE = "data-analytics-cta";

export type ConsentState = {
  value: boolean;
  source: "storage" | "cookie" | null;
};

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export function readConsentCookie(): string | null {
  if (typeof document === "undefined") {
    return null;
  }
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE_NAME}=([^;]*)`),
  );
  return match ? decodeURIComponent(match[1]) : null;
}

export function loadInitialConsent(): ConsentState {
  if (typeof window === "undefined") {
    return { value: false, source: null };
  }

  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === "granted" || stored === "denied") {
      return { value: stored === "granted", source: "storage" };
    }
  } catch {
    // Ignore storage access errors (e.g. Safari private mode).
  }

  const cookie = readConsentCookie();
  if (cookie === "granted" || cookie === "denied") {
    return { value: cookie === "granted", source: "cookie" };
  }

  return { value: false, source: null };
}

export function persistConsent(value: boolean): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      value ? "granted" : "denied",
    );
  } catch {
    // Ignore storage write failures; cookie still reflects latest state.
  }

  if (typeof document === "undefined") {
    return;
  }

  const base = `${CONSENT_COOKIE_NAME}=${value ? "granted" : "denied"}; path=/; SameSite=Lax`;
  const retention = value ? `; max-age=${ONE_YEAR_SECONDS}` : "; max-age=0";
  document.cookie = `${base}${retention}`;
}

export function isOutboundLink(link: HTMLAnchorElement): boolean {
  if (!link.href) {
    return false;
  }

  const href = link.href;
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return true;
  }

  if (typeof window === "undefined") {
    return false;
  }

  try {
    const currentOrigin = window.location.origin;
    const linkUrl = new URL(href, currentOrigin);
    return linkUrl.origin !== currentOrigin;
  } catch {
    return false;
  }
}

export function formatDuration(ms: number): string {
  const seconds = Math.round(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  if (minutes === 0) {
    return `${seconds}s`;
  }
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}
