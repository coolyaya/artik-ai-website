export type JsonLd = Record<string, unknown> | Record<string, unknown>[];

export type OpenGraphOptions = {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  type?: string;
  siteName?: string;
};

export type TwitterOptions = {
  card?: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
  creator?: string;
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
};

export const DEFAULT_META = {
  title: "ArtikAi | Website + Booking + Reviews System for Local Service Businesses",
  description:
    "Done-for-you website, SMS/email follow-up, booking, and Google reviews engine that turns traffic into booked jobs and improves Google Maps rankings.",
  image: "/thumbnail.jpg",
};

export const DEFAULT_OPEN_GRAPH: Required<
  Pick<OpenGraphOptions, "type" | "siteName">
> = {
  type: "website",
  siteName: "ArtikAi",
};

export const DEFAULT_TWITTER: Required<Pick<TwitterOptions, "card">> &
  Partial<TwitterOptions> = {
  card: "summary_large_image",
  site: "@ArtikAi",
};

const ABSOLUTE_URL_REGEX = /^https?:\/\//i;

export function isAbsoluteUrl(url: string): boolean {
  return ABSOLUTE_URL_REGEX.test(url);
}

export function getSiteUrl(): string {
  const env = import.meta.env as Record<string, string | undefined>;
  const raw =
    env.VITE_SITE_URL ||
    env.SITE_URL ||
    (typeof window !== "undefined" ? window.location.origin : "");
  return raw ? raw.replace(/\/+$/, "") : "";
}

export function toAbsolute(
  url: string | undefined,
  siteUrl: string,
): string | undefined {
  if (!url) return undefined;
  if (isAbsoluteUrl(url)) return url;
  if (!siteUrl) return url;
  return `${siteUrl}${url.startsWith("/") ? "" : "/"}${url}`;
}
