export const serviceIds = ["chat", "caller", "crm", "web", "ai-app", "ads"] as const;

export type ServiceId = (typeof serviceIds)[number];
