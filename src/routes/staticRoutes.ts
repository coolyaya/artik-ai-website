export const staticRoutes = [
  "/",
  "/product",
  "/templates",
  "/book",
  "/services",
  "/pricing",
  "/contact",
  "/website-system",
  "/industries",
  "/locations",
  "/results",
  "/process",
  "/faq",
  "/about",
] as const;

export type StaticRoute = (typeof staticRoutes)[number];
