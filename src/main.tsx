// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PlausibleAnalytics from '@/components/PlausibleAnalytics';
import { AnalyticsProvider } from './analytics/AnalyticsProvider';
import { AppRoutes } from './main.helpers';
import './index.css';
import './styles/site.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <AnalyticsProvider>
        <PlausibleAnalytics />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AnalyticsProvider>
    </HelmetProvider>
  </StrictMode>,
);

if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch((error) => {
      console.error('Service worker registration failed:', error);
    });
  });
}
// Voiceflow widget is now injected in index.html per official instructions.
