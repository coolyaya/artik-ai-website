// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import BookPage from './pages/BookPage';
import ServiceDetails from './pages/ServiceDetails';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import UseCaseDetailPage from './pages/UseCaseDetailPage';
import DocsPage from './pages/DocsPage';
import TemplatesPage from './pages/TemplatesPage';
import './index.css';
import './styles/site.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/use-cases" element={<Navigate to="/use-cases/support" replace />} />
          <Route path="/use-cases/:slug" element={<UseCaseDetailPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
// Voiceflow widget is now injected in index.html per official instructions.
