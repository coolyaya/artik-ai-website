import { Suspense, lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import GlobalErrorBoundary from "@/components/GlobalErrorBoundary";
import {
  loadBookPage,
  loadContactPage,
  loadHomePage,
  loadIndustriesIndexPage,
  loadIndustryDetailPage,
  loadLocationsIndexPage,
  loadLocationDetailPage,
  loadNotFoundPage,
  loadPricingPage,
  loadProductPage,
  loadProcessPage,
  loadResultsPage,
  loadServerErrorPage,
  loadServiceDetailsPage,
  loadServicesPage,
  loadTemplatesPage,
  loadUseCaseDetailPage,
  loadWebsiteSystemPage,
  loadFAQPage,
  loadAboutPage,
  setupRoutePrefetching,
} from "@/utils/routePrefetch";

setupRoutePrefetching();

const HomePage = lazy(loadHomePage);
const ProductPage = lazy(loadProductPage);
const BookPage = lazy(loadBookPage);
const ServicesPage = lazy(loadServicesPage);
const ServiceDetailsPage = lazy(loadServiceDetailsPage);
const PricingPage = lazy(loadPricingPage);
const ContactPage = lazy(loadContactPage);
const TemplatesPage = lazy(loadTemplatesPage);
const UseCaseDetailPage = lazy(loadUseCaseDetailPage);
const WebsiteSystemPage = lazy(loadWebsiteSystemPage);
const IndustriesIndexPage = lazy(loadIndustriesIndexPage);
const IndustryDetailPage = lazy(loadIndustryDetailPage);
const LocationsIndexPage = lazy(loadLocationsIndexPage);
const LocationDetailPage = lazy(loadLocationDetailPage);
const ResultsPage = lazy(loadResultsPage);
const ProcessPage = lazy(loadProcessPage);
const FAQPage = lazy(loadFAQPage);
const AboutPage = lazy(loadAboutPage);
const NotFoundPage = lazy(loadNotFoundPage);
const ServerErrorPage = lazy(loadServerErrorPage);

export function SuspenseFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-slate-950 text-sm font-medium text-white/70">
      Loading experience&hellip;
    </div>
  );
}

export function ErrorFallback() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-16 text-center text-white">
      <h1 className="text-3xl font-semibold text-white">Something went wrong</h1>
      <p className="mt-4 max-w-sm text-sm text-white/70">
        Try refreshing the page. If the problem persists, please reach out to us via{" "}
        <a className="text-cyan-300 underline" href="mailto:hello@artikai.com">
          hello@artikai.com
        </a>
        .
      </p>
    </div>
  );
}

export function AppRoutes() {
  const location = useLocation();

  return (
    <GlobalErrorBoundary resetKey={location.pathname} fallback={<ErrorFallback />}>
      <Suspense fallback={<SuspenseFallback />}>
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
          <Route path="/website-system" element={<WebsiteSystemPage />} />
          <Route path="/industries" element={<IndustriesIndexPage />} />
          <Route path="/industries/:industrySlug" element={<IndustryDetailPage />} />
          <Route path="/locations" element={<LocationsIndexPage />} />
          <Route path="/locations/:citySlug" element={<LocationDetailPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </GlobalErrorBoundary>
  );
}
