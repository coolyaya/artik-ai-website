import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  CTA_ATTRIBUTE,
  CONSENT_STORAGE_KEY,
  formatDuration,
  isOutboundLink,
  loadInitialConsent,
  persistConsent,
} from "./analytics-helpers";
import {
  AnalyticsContext,
  type AnalyticsContextValue,
} from "./analytics-context";

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
