import { useEffect } from 'react';
import { useAnalytics } from '@/analytics/AnalyticsProvider';

const scriptId = 'plausible-analytics';
const analyticsEnvFlag = String(import.meta.env.VITE_ENABLE_ANALYTICS ?? '').toLowerCase() === 'true';
const defaultScriptSrc = import.meta.env.VITE_PLAUSIBLE_SCRIPT_SRC ?? 'https://plausible.io/js/script.js';

export default function PlausibleAnalytics() {
  const { consent } = useAnalytics();
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
  const scriptSrc = defaultScriptSrc;
  const shouldLoad = analyticsEnvFlag && Boolean(domain) && consent;

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    if (!shouldLoad) {
      const existing = document.getElementById(scriptId);
      existing?.remove();
      return;
    }

    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.defer = true;
    script.dataset.domain = domain!;
    script.src = scriptSrc;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [shouldLoad, domain, scriptSrc]);

  return null;
}
