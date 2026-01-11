export type IndustryContent = {
  slug: string;
  name: string;
  hero: string;
  painPoints: string[];
  whatConverts: string[];
  services: string[];
  reviewAngles: string[];
  ctaLine: string;
};

export const industries: IndustryContent[] = [
  {
    slug: "roofing-exteriors",
    name: "Roofing & Exteriors",
    hero: "Storm and insurance leads go cold fast if nobody responds and books the inspection.",
    painPoints: [
      "Crews on roofs miss calls and voicemails stack up with no text-back.",
      "Homeowners chase status updates and get frustrated when nobody replies.",
      "No simple way to capture photos, reviews, and proof after each job.",
      "Insurance prospects shop around when follow-up stalls past day one.",
    ],
    whatConverts: [
      "Short forms and click-to-call that trigger instant text + email with next steps.",
      "Missed-call text-back that asks for address, damage type, and books inspection windows.",
      "Automated reminders so adjusters, inspections, and installs stay on calendar.",
      "Review requests with before/after photos to boost Maps placement.",
    ],
    services: ["Roof replacement", "Roof repairs", "Gutters & fascia", "Siding", "Emergency tarps"],
    reviewAngles: [
      "Speed to inspection and clear next steps",
      "Insurance paperwork help and photo proof",
      "Clean job sites and respectful crews",
    ],
    ctaLine: "Lock in storm traffic by responding in seconds and booking the inspection before competitors call back.",
  },
  {
    slug: "hvac",
    name: "HVAC",
    hero: "Summer outages and winter cold snaps demand a <60 second response or the lead moves on.",
    painPoints: [
      "After-hours and weekend emergencies roll to voicemail.",
      "No nurture for maintenance plans or tune-up reminders.",
      "Quotes and financing links sent manually and often late.",
      "Reviews only requested occasionally, hurting Maps visibility.",
    ],
    whatConverts: [
      "Instant text with service windows and dispatcher callback for every call or form.",
      "Automated follow-up with financing options and simple approvals.",
      "Tune-up and filter reminders that rebook members before peak seasons.",
      "Review and referral requests after each visit to lift star rating velocity.",
    ],
    services: ["Emergency repair", "AC install", "Heat pumps", "Maintenance plans", "Indoor air quality"],
    reviewAngles: [
      "Response time during outages",
      "Technician professionalism and clean work",
      "System performance after install",
    ],
    ctaLine: "Keep dispatch booked solid with fast responses, financing links, and scheduled maintenance renewals.",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    hero: "Burst pipes and clogged drains need immediate scheduling-no waiting for a callback.",
    painPoints: [
      "Emergency calls missed while techs are on jobs.",
      "No structured follow-up after estimates, so shoppers pick whoever replies first.",
      "No drip campaigns to promote memberships or seasonal offers.",
      "Few reviews mentioning punctuality or cleanliness.",
    ],
    whatConverts: [
      "Missed-call text-back that captures address and issue, then books the slot.",
      "Estimate follow-ups that keep plumbers top-of-mind for 14 days.",
      "Membership and seasonal offers delivered via SMS/email to past customers.",
      "Review flows that highlight on-time arrivals and tidy job sites.",
    ],
    services: ["Emergency repairs", "Water heaters", "Sewer & drain", "Leak detection", "Repipes"],
    reviewAngles: [
      "On-time arrival and clean workspace",
      "Fixed on first visit",
      "Fair pricing and clear options",
    ],
    ctaLine: "Capture every emergency call, book the visit, and keep your trucks rolling with 14-day nurture.",
  },
  {
    slug: "landscaping",
    name: "Landscaping & Lawn",
    hero: "Recurring lawn, mulch, and cleanup jobs hinge on quick replies and clear schedules.",
    painPoints: [
      "Seasonal demand spikes overwhelm the phone, so leads wait too long.",
      "Quotes sit in email with no reminders or follow-up.",
      "Route changes and weather delays aren't proactively messaged.",
      "Happy clients aren't prompted to leave Google reviews.",
    ],
    whatConverts: [
      "Instant confirmations with visit windows and upsell prompts (mulch, trimming, fertilization).",
      "Automated quote follow-ups that drive acceptance without manual chasing.",
      "Route/crew alerts by SMS when weather shifts the schedule.",
      "Review requests after each visit to strengthen local Maps rankings.",
    ],
    services: ["Lawn care", "Mulch & cleanups", "Landscape design", "Hardscaping", "Tree trimming"],
    reviewAngles: [
      "Consistent schedule and tidy crews",
      "Clear before/after photos",
      "Easy rebooking and add-ons",
    ],
    ctaLine: "Turn seasonal spikes into recurring routes with fast replies and automatic rebooking nudges.",
  },
  {
    slug: "cleaning-restoration",
    name: "Cleaning & Restoration",
    hero: "Water, fire, and mold calls are urgent-delay the response and the job is gone.",
    painPoints: [
      "Emergency calls overflow after storms and at night.",
      "Insurance coordination is slow, so homeowners shop around.",
      "Project updates aren't shared, leaving clients uneasy.",
      "Reviews rarely mention emergency handling or communication.",
    ],
    whatConverts: [
      "24/7 missed-call text-back that collects address, damage type, and photo/video links.",
      "Automated updates at each stage (onsite, drying, rebuild) to build trust.",
      "Follow-up cadences that close insurance approvals faster.",
      "Review requests that highlight speed, empathy, and documentation.",
    ],
    services: ["Water mitigation", "Mold remediation", "Fire/smoke cleanup", "Contents cleaning", "Rebuilds"],
    reviewAngles: [
      "Response during emergencies",
      "Care for belongings",
      "Documentation for insurance",
    ],
    ctaLine: "Win emergency work by responding instantly and keeping homeowners updated every step.",
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    hero: "Driveway, roof, and exterior jobs go to whoever replies first with clear timing.",
    painPoints: [
      "Calls during jobs roll to voicemail and prospects book someone else.",
      "Estimates sit with no follow-up, so homeowners keep shopping.",
      "No reminders for seasonal cleanings or sealing after the wash.",
      "Few reviews mention punctuality or care for plants and fixtures.",
    ],
    whatConverts: [
      "Missed-call text-back that asks for address and surface type, then offers booking windows.",
      "Estimate follow-ups with before/after proof and upsells like sealing or soft wash.",
      "Seasonal reminders for driveways, roofs, and pool decks to keep routes full.",
      "Review requests that prompt mentions of timeliness and careful cleanup.",
    ],
    services: ["Driveways & walkways", "Roofs & gutters", "Pool decks & screens", "House wash", "Paver sealing"],
    reviewAngles: [
      "On-time arrival and setup",
      "Care for landscaping and fixtures",
      "Results that stay clean after rain",
    ],
    ctaLine: "Book the wash fast, show proof, and keep customers on seasonal routes.",
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    hero: "Homeowners pick whoever replies first with a clear plan and easy booking.",
    painPoints: [
      "After-hours calls and weekend inquiries sit in voicemail.",
      "No nurture to convert one-time treatments into plans.",
      "Technicians forget to request reviews after service.",
      "Pricing explanations get buried in email threads.",
    ],
    whatConverts: [
      "Instant text with pricing ranges and a link to pick a slot.",
      "Plan upgrade follow-ups that explain why recurring treatments matter.",
      "Tech-triggered review flows after each visit mentioning specific pests treated.",
      "Reactivation sequences when plan payments fail or customers lapse.",
    ],
    services: ["General pest", "Termite", "Mosquito", "Rodent exclusion", "Quarterly plans"],
    reviewAngles: [
      "Fast first visit",
      "Pest-free after treatment",
      "Friendly techs who explain options",
    ],
    ctaLine: "Convert more first-time callers into quarterly plans with instant replies and review-rich proof.",
  },
  {
    slug: "pools",
    name: "Pool Service",
    hero: "Weekly routes fall apart when communication and reviews are weak.",
    painPoints: [
      "Cancellations from slow responses or unclear visit times.",
      "No reminders when chemical balances or repairs are due.",
      "Few reviews about reliability, hurting Maps visibility.",
      "Technicians don't log visits with photos for owners.",
    ],
    whatConverts: [
      "Automated SMS before visits with timing windows and gate/animal reminders.",
      "Follow-ups with chemical readings and repair recommendations.",
      "Review requests after each service mentioning clarity and reliability.",
      "Lapsed account reactivation with promo offers before summer.",
    ],
    services: ["Weekly service", "Green-to-clean", "Equipment repair", "Filter cleans", "Tile & deck care"],
    reviewAngles: [
      "On-time weekly service",
      "Clear water and balanced chemicals",
      "Photos and updates after each visit",
    ],
    ctaLine: "Keep every route booked and reviewed with proactive updates and easy rebooking.",
  },
];

export const industriesBySlug = industries.reduce<Record<string, IndustryContent>>((acc, industry) => {
  acc[industry.slug] = industry;
  return acc;
}, {});
