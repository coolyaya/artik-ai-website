export type LocationContent = {
  slug: string;
  name: string;
  shortBlurb: string;
  intro: string;
  fitIndustries: string[];
  highlights: string[];
  faqs: { q: string; a: string }[];
  ctaLine: string;
  nearby?: string[];
};

export const locations: LocationContent[] = [
  {
    slug: "orlando",
    name: "Orlando",
    shortBlurb: "Highly competitive home services market where fast follow-up wins.",
    intro:
      "Orlando's ad costs and competition are high. If leads sit for more than a minute, they move on to the next roofer, plumber, or HVAC company. A tight website + booking + follow-up system keeps your crews booked even during busy seasons and tourist influx.",
    fitIndustries: ["Roofing & Exteriors", "HVAC", "Plumbing", "Pest Control", "Cleaning & Restoration"],
    highlights: [
      "Rapid lead-to-booking for storm and peak-season demand",
      "Automation handles voicemails when crews are onsite",
      "Reviews after every visit to outrank bigger franchises on Maps",
    ],
    faqs: [
      { q: "Can you respond to Spanish-speaking leads?", a: "Yes. SMS/email sequences can include bilingual steps so Orlando homeowners get answers fast in their preferred language." },
      { q: "Do you integrate with existing CRMs?", a: "We connect to common home-service CRMs and calendars so dispatch stays accurate while automation handles the follow-up." },
      { q: "What about advertising?", a: "Ads work only when the booking and review engine is solid. We focus there first so every dollar spent drives booked jobs." },
    ],
    ctaLine: "Lock in Orlando leads with sub-60 second follow-up, clear booking, and a steady flow of new reviews.",
    nearby: ["Oviedo", "Cocoa", "Cocoa Beach"],
  },
  {
    slug: "melbourne-fl",
    name: "Melbourne, FL",
    shortBlurb: "Space Coast demand spikes after storms-speed to booking is everything.",
    intro:
      "Melbourne homeowners expect quick replies and clear next steps, especially after storms. Slow follow-up or weak reviews lead them to pick national brands. We install a system that replies instantly, books the visit, and requests reviews automatically.",
    fitIndustries: ["Roofing & Exteriors", "Cleaning & Restoration", "HVAC", "Pool Service"],
    highlights: [
      "Storm-response texting and scheduling",
      "Automated check-ins so customers aren't guessing about arrival times",
      "Review velocity to compete on Maps across the Space Coast",
    ],
    faqs: [
      { q: "Can you handle after-hours calls?", a: "Yes. Missed-call text-back captures details and books visits even when the office is closed." },
      { q: "How do you handle beachside addresses?", a: "Forms and SMS prompts collect access details and send reminders so crews arrive prepared." },
      { q: "Will this replace my team?", a: "No. It keeps the team focused on jobs while automation secures and warms every lead." },
    ],
    ctaLine: "Capture Space Coast leads before competitors with instant replies and scheduled follow-ups.",
    nearby: ["Cocoa", "Cocoa Beach", "Rockledge"],
  },
  {
    slug: "rockledge",
    name: "Rockledge",
    shortBlurb: "Neighborhood-driven referrals depend on fast replies and great reviews.",
    intro:
      "Rockledge homeowners often follow neighborhood recommendations. Showing up with quick responses, booked appointments, and steady review growth keeps you top-of-mind in local groups and on Maps.",
    fitIndustries: ["Landscaping & Lawn", "Plumbing", "Pest Control", "Roofing & Exteriors"],
    highlights: [
      "Rapid callback + text to capture neighborhood leads",
      "Automated follow-ups for quotes and seasonal services",
      "Review prompts that mention timeliness and cleanliness",
    ],
    faqs: [
      { q: "We rely on referrals-do we still need this?", a: "Yes. The system makes referrals stick by following up immediately and asking happy customers for public reviews." },
      { q: "Can we promote seasonal offers?", a: "We add SMS/email sequences for tune-ups, cleanups, or specials to your past customer list." },
      { q: "What if the office is closed?", a: "Missed-call text-back keeps the conversation moving until your team can jump in." },
    ],
    ctaLine: "Be the quickest to reply in Rockledge and turn referrals into booked routes with review proof.",
    nearby: ["Cocoa", "Cocoa Beach", "Titusville"],
  },
  {
    slug: "cocoa",
    name: "Cocoa",
    shortBlurb: "Mix of emergency and routine jobs-response time decides who wins.",
    intro:
      "Cocoa homeowners juggle emergencies and planned work. They choose whoever responds first with a clear slot and reassurance. Our system captures every call, books quickly, and keeps nurturing until the job is done and reviewed.",
    fitIndustries: ["Plumbing", "HVAC", "Cleaning & Restoration", "Pest Control"],
    highlights: [
      "Emergency-friendly forms with address capture",
      "14-day follow-up to close open estimates",
      "Review requests that highlight reliability",
    ],
    faqs: [
      { q: "How fast does the system engage?", a: "Within seconds-calls trigger SMS and email confirming next steps and booking links." },
      { q: "Do you handle multiple service lines?", a: "Yes. We customize messaging per service so each lead gets the right next step." },
      { q: "What about reactivating past customers?", a: "We include reactivation cadences to fill the calendar during slower weeks." },
    ],
    ctaLine: "Answer every Cocoa lead in seconds and keep following up until the job is booked and reviewed.",
    nearby: ["Cocoa Beach", "Rockledge", "Titusville"],
  },
  {
    slug: "cocoa-beach",
    name: "Cocoa Beach",
    shortBlurb: "Tourist-driven rentals expect immediate confirmations and updates.",
    intro:
      "Cocoa Beach has high expectations from vacation rentals and waterfront owners. Delays lose the job to whoever confirms first. Automation keeps guests informed, books the visit, and requests reviews that mention responsiveness.",
    fitIndustries: ["Cleaning & Restoration", "Pool Service", "Landscaping & Lawn", "Pest Control"],
    highlights: [
      "Fast confirmations with arrival windows for rentals",
      "Photo-based updates after each visit",
      "Review prompts tailored to Airbnb/VRBO owners",
    ],
    faqs: [
      { q: "Can owners get proof of work?", a: "Yes. We include photo upload prompts and send recap messages automatically." },
      { q: "How do we handle last-minute calls?", a: "Missed-call text-back plus priority booking rules move urgent jobs to the front of the line." },
      { q: "Do you integrate with booking links?", a: "We can embed calendar links so property managers pick times without back-and-forth." },
    ],
    ctaLine: "Win waterfront and rental work by confirming fast and proving every visit with updates and reviews.",
    nearby: ["Cocoa", "Melbourne, FL"],
  },
  {
    slug: "titusville",
    name: "Titusville",
    shortBlurb: "Growth from launches means more demand-only fast responders keep up.",
    intro:
      "With new development around the Space Coast, Titusville homeowners compare multiple bids. A fast booking + follow-up engine keeps you first in line and stacks reviews that mention responsiveness.",
    fitIndustries: ["Roofing & Exteriors", "HVAC", "Plumbing", "Pest Control"],
    highlights: [
      "Instant scheduling on new-construction and repair requests",
      "Follow-ups that keep bids warm for two weeks",
      "Review cadence to build trust against larger competitors",
    ],
    faqs: [
      { q: "Do you work with smaller teams?", a: "Yes. Automation fills the gaps when the owner is in the field so leads still get handled." },
      { q: "Can we pause campaigns?", a: "Yes. The system can throttle to your crew capacity while keeping follow-up running." },
      { q: "Is there training involved?", a: "We install and maintain it-your team just sees more booked jobs on the calendar." },
    ],
    ctaLine: "Beat larger competitors with sub-60-second replies and a steady stream of Titusville reviews.",
    nearby: ["Cocoa", "Rockledge"],
  },
  {
    slug: "clearwater",
    name: "Clearwater",
    shortBlurb: "Beach markets pick the provider that replies and confirms first.",
    intro:
      "In Clearwater, beach traffic and second-home owners won't wait for callbacks. A fast-response system that books, reminds, and requests reviews keeps your crews busy while ad spend converts.",
    fitIndustries: ["Roofing & Exteriors", "Pool Service", "Cleaning & Restoration", "Landscaping & Lawn"],
    highlights: [
      "Priority routing for urgent coastal jobs",
      "Follow-up sequences that keep bids warm without manual calls",
      "Review velocity to stand out on Maps near the coast",
    ],
    faqs: [
      { q: "How do you handle tourists and second homes?", a: "We collect owner/manager details and keep them updated via SMS/email with photos after each visit." },
      { q: "Can you prioritize high-value jobs?", a: "Yes. Lead routing rules can prioritize by service type or zip." },
      { q: "Do you manage reviews ethically?", a: "Yes. We request honest reviews and route low scores privately to fix issues before they hit Google." },
    ],
    ctaLine: "Turn Clearwater inquiries into scheduled jobs with instant replies and consistent review growth.",
    nearby: ["Orlando"],
  },
  {
    slug: "oviedo",
    name: "Oviedo",
    shortBlurb: "Family-heavy market where trust, speed, and reviews win.",
    intro:
      "Oviedo homeowners look for reliable, well-reviewed providers. Being first to respond, confirming the visit, and asking for reviews after each job keeps you at the top of neighborhood recommendations.",
    fitIndustries: ["HVAC", "Plumbing", "Pest Control", "Landscaping & Lawn"],
    highlights: [
      "Instant confirmations with narrowed arrival windows",
      "Membership and maintenance reminders to keep repeat revenue",
      "Review prompts that highlight professionalism and care",
    ],
    faqs: [
      { q: "Do you help with maintenance plans?", a: "Yes. We set up reminders and follow-ups that renew plans before they lapse." },
      { q: "How do you handle neighborhoods with gate codes?", a: "Forms collect access notes and the system reminds techs before arrival." },
      { q: "Is this only for ads?", a: "No. It works with referrals and organic traffic too, turning every lead into a booked visit faster." },
    ],
    ctaLine: "Become the first-choice provider in Oviedo with quick replies, solid scheduling, and constant reviews.",
    nearby: ["Orlando"],
  },
];

export const locationsBySlug = locations.reduce<Record<string, LocationContent>>((acc, city) => {
  acc[city.slug] = city;
  return acc;
}, {});
