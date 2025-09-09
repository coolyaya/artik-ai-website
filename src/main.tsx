// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import BookPage from './pages/BookPage';
import ServiceDetails from './pages/ServiceDetails';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
// Voiceflow chat widget loader (HMR-safe)
(() => {
  const widgetSrc = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';

  const loadChat = () => {
    // window.voiceflow is provided by the widget script
    (window as any).voiceflow?.chat?.load?.({
      verify: { projectID: '68c0633002f711654c31bc3f' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
      voice: { url: 'https://runtime-api.voiceflow.com' },
    });
  };

  // If the widget already exists (e.g., after HMR), just load the chat
  if ((window as any).voiceflow?.chat) {
    loadChat();
    return;
  }

  const init = () => {
    // If script is already on the page, attach to its load event
    const existing = document.querySelector(`script[src="${widgetSrc}"]`) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', loadChat, { once: true });
      return;
    }
    // Otherwise, inject the script and initialize on load
    const script = document.createElement('script');
    script.src = widgetSrc;
    script.type = 'text/javascript';
    script.addEventListener('load', loadChat, { once: true });
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
