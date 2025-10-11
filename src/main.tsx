// src/main.tsx
import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import PlausibleAnalytics from '@/components/PlausibleAnalytics';
import { AnalyticsProvider } from './analytics/AnalyticsProvider';
import {
  loadBookPage,
  loadContactPage,
  loadHomePage,
  loadNotFoundPage,
  loadPricingPage,
  loadProductPage,
  loadServerErrorPage,
  loadServiceDetailsPage,
  loadServicesPage,
  loadTemplatesPage,
  loadUseCaseDetailPage,
  setupRoutePrefetching,
} from '@/utils/routePrefetch';
import './index.css';
import './styles/site.css';

const HomePage = lazy(loadHomePage);
const ProductPage = lazy(loadProductPage);
const BookPage = lazy(loadBookPage);
const ServicesPage = lazy(loadServicesPage);
const ServiceDetailsPage = lazy(loadServiceDetailsPage);
const PricingPage = lazy(loadPricingPage);
const ContactPage = lazy(loadContactPage);
const TemplatesPage = lazy(loadTemplatesPage);
const UseCaseDetailPage = lazy(loadUseCaseDetailPage);
const NotFoundPage = lazy(loadNotFoundPage);
const ServerErrorPage = lazy(loadServerErrorPage);

setupRoutePrefetching();

const suspenseFallback = (
  <div className="flex min-h-[40vh] items-center justify-center bg-slate-950 text-sm font-medium text-white/70">
    Loading experience&hellip;
  </div>
);

function ErrorFallback() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-16 text-center text-white">
      <h1 className="text-3xl font-semibold text-white">Something went wrong</h1>
      <p className="mt-4 max-w-sm text-sm text-white/70">
        Try refreshing the page. If the problem persists, please reach out to us via{' '}
        <a className="text-cyan-300 underline" href="mailto:hello@artikai.com">
          hello@artikai.com
        </a>
        .
      </p>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <GlobalErrorBoundary resetKey={location.pathname} fallback={<ErrorFallback />}>
      <Suspense fallback={suspenseFallback}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/use-cases" element={<Navigate to="/use-cases/support" replace />} />
          <Route path="/use-cases/:slug" element={<UseCaseDetailPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service/:id" element={<ServiceDetailsPage />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </GlobalErrorBoundary>
  );
}

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
