import { createContext } from "react";

export type AnalyticsContextValue = {
  consent: boolean;
  updateConsent: (value: boolean) => void;
  trackEvent: (eventName: string, data?: Record<string, unknown>) => void;
};

export const AnalyticsContext = createContext<AnalyticsContextValue | null>(null);
