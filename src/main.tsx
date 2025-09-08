import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import BookDemo from './pages/BookDemo';
import './index.css';
import ServiceDetails from './pages/ServiceDetails';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/book" element={<BookDemo />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
