import { ReactNode, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_META,
  DEFAULT_OPEN_GRAPH,
  DEFAULT_TWITTER,
  getSiteUrl,
  isAbsoluteUrl,
  toAbsolute,
} from "./Seo.helpers";
import type { JsonLd, OpenGraphOptions, TwitterOptions } from "./Seo.helpers";

export type { JsonLd, OpenGraphOptions, TwitterOptions } from "./Seo.helpers";

export type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  openGraph?: OpenGraphOptions;
  twitter?: TwitterOptions;
  noIndex?: boolean;
  jsonLd?: JsonLd;
  children?: ReactNode;
};

export function Seo({
  title,
  description,
  canonical,
  image,
  openGraph,
  twitter,
  noIndex,
  jsonLd,
  children,
}: SeoProps) {
  const location = useLocation();
  const siteUrl = useMemo(() => getSiteUrl(), []);

  const pagePath = `${location.pathname}${location.search}${location.hash}`;
  const canonicalUrl =
    canonical ??
    (isAbsoluteUrl(pagePath)
      ? pagePath
      : siteUrl
      ? `${siteUrl}${pagePath.startsWith("/") ? "" : "/"}${pagePath}`
      : pagePath || siteUrl);

  const metaTitle = title ?? DEFAULT_META.title;
  const metaDescription = description ?? DEFAULT_META.description;

  const resolvedOg: OpenGraphOptions = {
    ...DEFAULT_OPEN_GRAPH,
    ...openGraph,
    title: openGraph?.title ?? metaTitle,
    description: openGraph?.description ?? metaDescription,
    image: openGraph?.image ?? image ?? DEFAULT_META.image,
  };

  const resolvedTwitter: TwitterOptions = {
    ...DEFAULT_TWITTER,
    ...twitter,
    title: twitter?.title ?? metaTitle,
    description: twitter?.description ?? metaDescription,
    image: twitter?.image ?? image ?? resolvedOg.image,
  };

  const ogImageAbsolute = toAbsolute(resolvedOg.image, siteUrl);
  const twitterImageAbsolute = toAbsolute(resolvedTwitter.image, siteUrl);
  const canonicalAbsolute = toAbsolute(canonicalUrl, siteUrl) ?? canonicalUrl;

  const robots = noIndex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonicalAbsolute ? <link rel="canonical" href={canonicalAbsolute} /> : null}
      <meta name="robots" content={robots} />

      {/* Open Graph */}
      <meta property="og:title" content={resolvedOg.title} />
      <meta property="og:description" content={resolvedOg.description} />
      <meta property="og:type" content={resolvedOg.type} />
      {canonicalAbsolute ? <meta property="og:url" content={canonicalAbsolute} /> : null}
      {resolvedOg.siteName ? <meta property="og:site_name" content={resolvedOg.siteName} /> : null}
      {ogImageAbsolute ? <meta property="og:image" content={ogImageAbsolute} /> : null}
      {resolvedOg.imageAlt && ogImageAbsolute ? (
        <meta property="og:image:alt" content={resolvedOg.imageAlt} />
      ) : null}

      {/* Twitter */}
      <meta name="twitter:card" content={resolvedTwitter.card ?? DEFAULT_TWITTER.card} />
      {resolvedTwitter.site ? <meta name="twitter:site" content={resolvedTwitter.site} /> : null}
      {resolvedTwitter.creator ? <meta name="twitter:creator" content={resolvedTwitter.creator} /> : null}
      <meta name="twitter:title" content={resolvedTwitter.title ?? metaTitle} />
      <meta name="twitter:description" content={resolvedTwitter.description ?? metaDescription} />
      {twitterImageAbsolute ? <meta name="twitter:image" content={twitterImageAbsolute} /> : null}
      {resolvedTwitter.imageAlt && twitterImageAbsolute ? (
        <meta name="twitter:image:alt" content={resolvedTwitter.imageAlt} />
      ) : null}

      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}

      {children}
    </Helmet>
  );
}

export default Seo;
