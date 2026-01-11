export const useCaseSlugs = ["support", "callers", "crm", "websites", "apps", "ads"] as const;

export type UseCaseSlug = (typeof useCaseSlugs)[number];
