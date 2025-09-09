import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import BookPage from './pages/BookPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/book" element={<BookPage />} />
        {/* keep your other routes, e.g. service details */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
