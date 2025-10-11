import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type AnalyticsContextValue = {
  consent: boolean;
  updateConsent: (value: boolean) => void;
  trackEvent: (eventName: string, data?: Record<string, unknown>) => void;
};

const AnalyticsContext = createContext<AnalyticsContextValue | null>(null);

const CONSENT_STORAGE_KEY = "artikai.analytics.consent";
const CONSENT_COOKIE_NAME = "analytics_consent";
const CTA_ATTRIBUTE = "data-analytics-cta";

type ConsentState = {
  value: boolean;
  source: "storage" | "cookie" | null;
};

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

function readConsentCookie(): string | null {
  if (typeof document === "undefined") {
    return null;
  }
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE_NAME}=([^;]*)`),
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function loadInitialConsent(): ConsentState {
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

function persistConsent(value: boolean) {
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

  const base = `${CONSENT_COOKIE_NAME}=${value ? "granted" : "denied"}; path=/; SameSite=Lax`;
  const retention = value ? `; max-age=${ONE_YEAR_SECONDS}` : "; max-age=0";
  document.cookie = `${base}${retention}`;
}

function isOutboundLink(link: HTMLAnchorElement): boolean {
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

function formatDuration(ms: number) {
  const seconds = Math.round(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  if (minutes === 0) {
    return `${seconds}s`;
  }
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}

export function AnalyticsProvider({ children }: PropsWithChildren) {
  const initialConsent = useMemo(loadInitialConsent, []);
  const [consent, setConsent] = useState<boolean>(initialConsent.value);
  const [hasStoredValue, setHasStoredValue] = useState(
    initialConsent.source !== null,
  );
  const [panelOpen, setPanelOpen] = useState(initialConsent.source === null);
  const sessionStartRef = useRef<number>(
    typeof performance !== "undefined" ? performance.now() : Date.now(),
  );
  const sessionLoggedRef = useRef(false);

  const logEvent = useCallback(
    (eventName: string, data?: Record<string, unknown>) => {
      if (!consent || typeof window === "undefined") {
        return;
      }

      const payload = {
        event: eventName,
        data: data ?? {},
        path: window.location.pathname + window.location.search,
        userAgent: window.navigator.userAgent,
        timestamp: new Date().toISOString(),
      };

      if (import.meta.env.DEV) {
        console.info("[analytics]", payload);
        return;
      }

      if (typeof window !== "undefined") {
        const w = window as unknown as {
          dataLayer?: Array<Record<string, unknown>>;
        };
        if (Array.isArray(w.dataLayer)) {
          w.dataLayer.push(payload);
          return;
        }
      }

      if (typeof window !== "undefined" && window.navigator?.sendBeacon) {
        try {
          window.navigator.sendBeacon(
            "/api/analytics",
            JSON.stringify(payload),
          );
        } catch {
          // Silently ignore beacon failures; nothing critical to surface yet.
        }
      }
    },
    [consent],
  );

  const updateConsent = useCallback(
    (value: boolean) => {
      setConsent(value);
      setHasStoredValue(true);
      persistConsent(value);
    },
    [setConsent],
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== CONSENT_STORAGE_KEY) {
        return;
      }
      if (event.newValue === "granted" || event.newValue === "denied") {
        setConsent(event.newValue === "granted");
        setHasStoredValue(true);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    if (!consent) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }

      const ctaElement = target.closest<HTMLElement>(`[${CTA_ATTRIBUTE}]`);
      if (ctaElement) {
        const identifier =
          ctaElement.getAttribute(CTA_ATTRIBUTE) ??
          ctaElement.getAttribute("aria-label") ??
          ctaElement.textContent?.trim() ??
          "cta";
        logEvent("cta_click", {
          id: identifier,
          role: ctaElement.tagName.toLowerCase(),
        });
      }

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (link && isOutboundLink(link)) {
        logEvent("outbound_link_click", {
          href: link.href,
          label: link.textContent?.trim() || link.getAttribute("aria-label") || "",
          target: link.target || "_self",
        });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [consent, logEvent]);

  useEffect(() => {
    if (!import.meta.env.DEV || typeof window === "undefined") {
      return;
    }

    const initialStart =
      typeof performance !== "undefined" ? performance.now() : Date.now();
    sessionStartRef.current = initialStart;

    const logSessionDuration = (reason: string) => {
      if (sessionLoggedRef.current) {
        return;
      }
      sessionLoggedRef.current = true;
      const now =
        typeof performance !== "undefined" ? performance.now() : Date.now();
      const durationMs = now - sessionStartRef.current;
      console.info("[analytics][session-duration]", {
        durationMs,
        formatted: formatDuration(durationMs),
        reason,
      });
    };

    const handleBeforeUnload = () => logSessionDuration("beforeunload");

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      logSessionDuration("cleanup");
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (!hasStoredValue) {
      setPanelOpen(true);
    }
  }, [hasStoredValue]);

  const value = useMemo<AnalyticsContextValue>(
    () => ({
      consent,
      updateConsent,
      trackEvent: logEvent,
    }),
    [consent, updateConsent, logEvent],
  );

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
      <AnalyticsConsentPanel
        consent={consent}
        panelOpen={panelOpen}
        setPanelOpen={setPanelOpen}
        updateConsent={updateConsent}
      />
    </AnalyticsContext.Provider>
  );
}

type PanelProps = {
  consent: boolean;
  panelOpen: boolean;
  setPanelOpen: (open: boolean) => void;
  updateConsent: (value: boolean) => void;
};

function AnalyticsConsentPanel({
  consent,
  panelOpen,
  setPanelOpen,
  updateConsent,
}: PanelProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs text-sm">
      {panelOpen ? (
        <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-xl backdrop-blur">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-white">
                Analytics cookies
              </p>
              <p className="mt-1 text-xs text-white/70">
                Enable anonymous usage analytics to help improve the experience.
              </p>
            </div>
            <button
              type="button"
              aria-label="Hide analytics toggle"
              onClick={() => setPanelOpen(false)}
              className="rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
          </div>

          <label className="mt-3 flex items-center justify-between rounded-full bg-white/5 px-3 py-2 text-xs text-white/80">
            <span>Allow analytics cookies</span>
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => updateConsent(event.target.checked)}
              className="h-4 w-4 cursor-pointer accent-cyan-400"
              aria-label="Toggle analytics cookies consent"
            />
          </label>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setPanelOpen(true)}
          className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 shadow-md backdrop-blur transition hover:border-white/30 hover:text-white"
          aria-label="Show analytics consent toggle"
        >
          Analytics settings
        </button>
      )}
    </div>
  );
}

export function useAnalytics(): AnalyticsContextValue {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error("useAnalytics must be used within AnalyticsProvider");
  }
  return context;
}
