type Loader = () => Promise<unknown>;

export const loadHomePage: Loader = () => import('../App');
export const loadProductPage: Loader = () => import('../pages/ProductPage');
export const loadBookPage: Loader = () => import('../pages/BookPage');
export const loadServicesPage: Loader = () => import('../pages/ServicesPage');
export const loadServiceDetailsPage: Loader = () => import('../pages/ServiceDetails');
export const loadPricingPage: Loader = () => import('../pages/PricingPage');
export const loadContactPage: Loader = () => import('../pages/ContactPage');
export const loadTemplatesPage: Loader = () => import('../pages/TemplatesPage');
export const loadUseCaseDetailPage: Loader = () => import('../pages/UseCaseDetailPage');
export const loadNotFoundPage: Loader = () => import('../pages/404');
export const loadServerErrorPage: Loader = () => import('../pages/500');

type PrefetchMatcher = {
  match: (path: string) => boolean;
  load: Loader;
};

const matchers: PrefetchMatcher[] = [
  { match: (path) => path === '/', load: loadHomePage },
  { match: (path) => path === '/product', load: loadProductPage },
  { match: (path) => path === '/book', load: loadBookPage },
  { match: (path) => path === '/services', load: loadServicesPage },
  { match: (path) => path.startsWith('/service/'), load: loadServiceDetailsPage },
  { match: (path) => path === '/pricing', load: loadPricingPage },
  { match: (path) => path === '/contact', load: loadContactPage },
  { match: (path) => path === '/templates', load: loadTemplatesPage },
  { match: (path) => path === '/use-cases', load: loadUseCaseDetailPage },
  { match: (path) => path.startsWith('/use-cases/'), load: loadUseCaseDetailPage },
  { match: (path) => path === '/500', load: loadServerErrorPage },
  { match: (path) => path === '/404' || path === '/not-found', load: loadNotFoundPage },
];

const prefetched = new Set<string>();

const normalizePath = (pathname: string) => {
  if (!pathname) {
    return '/';
  }

  const [base] = pathname.split(/[?#]/);
  if (!base || base === '/') {
    return '/';
  }

  return base.endsWith('/') && base !== '/' ? base.slice(0, -1) : base;
};

export function prefetchRoute(path: string) {
  const normalized = normalizePath(path);

  if (prefetched.has(normalized)) {
    return;
  }

  const entry = matchers.find(({ match }) => match(normalized));
  if (!entry) {
    return;
  }

  prefetched.add(normalized);

  entry
    .load()
    .catch(() => {
      prefetched.delete(normalized);
    });
}

let listenersAttached = false;

function shouldSkipPrefetch(anchor: HTMLAnchorElement) {
  if (anchor.target && anchor.target !== '_self') {
    return true;
  }
  if (anchor.hasAttribute('download')) {
    return true;
  }
  const rel = anchor.getAttribute('rel');
  if (rel && /\bexternal\b/i.test(rel)) {
    return true;
  }
  if (anchor.dataset.prefetch === 'off' || anchor.dataset.noPrefetch === 'true') {
    return true;
  }
  const href = anchor.getAttribute('href');
  if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
    return true;
  }
  return false;
}

function resolveInternalPath(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute('href');
  if (!href) {
    return null;
  }

  try {
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) {
      return null;
    }
    return url.pathname;
  } catch (error) {
    console.warn('Failed to parse link href for prefetch', error);
    return null;
  }
}

function handlePrefetchEvent(event: Event) {
  const target = (event.target as HTMLElement | null)?.closest('a');
  if (!target || !(target instanceof HTMLAnchorElement)) {
    return;
  }

  if (shouldSkipPrefetch(target)) {
    return;
  }

  const path = resolveInternalPath(target);
  if (!path) {
    return;
  }

  prefetchRoute(path);
}

export function setupRoutePrefetching() {
  if (typeof window === 'undefined' || listenersAttached) {
    return;
  }

  window.addEventListener('pointerenter', handlePrefetchEvent, true);
  window.addEventListener('focusin', handlePrefetchEvent, true);
  listenersAttached = true;
}
