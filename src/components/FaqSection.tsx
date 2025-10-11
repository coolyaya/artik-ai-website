import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const faqs = [
  {
    question: "How quickly can ArtikAi launch new automations?",
    answer:
      "Most teams see their first live workflows in under two weeks. We reuse proven playbooks, tailor the copy and logic to your business, and iterate with you until it is production ready.",
  },
  {
    question: "Can ArtikAi connect to our existing tools?",
    answer:
      "Yes. We integrate with CRMs, support desks, data warehouses, and custom APIs. If something is missing, we ship connectors or webhook bridges so data flows both ways.",
  },
  {
    question: "Do we need in-house engineers to maintain the workflows?",
    answer:
      "No. ArtikAi handles ongoing improvements, monitoring, and upkeep. Your team can request changes in plain language and our specialists deploy updates for you.",
  },
  {
    question: "What guardrails are in place for data privacy?",
    answer:
      "We scope access per integration, redact sensitive fields before models see them, and log every action for auditability. Enterprise customers can opt for a private deployment.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-24 bg-white/5">
      <Container>
        <AnimatedSection>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Answers to common questions
            </h2>
            <p className="mt-3 text-base text-white/70">
              Details on implementation, integrations, and how ArtikAi partners
              with your team every step of the way.
            </p>

            <div className="mt-10 space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-black/30 p-6 text-left transition hover:border-cyan-400/40 [&_summary::-webkit-details-marker]:hidden"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 group-open:text-cyan-300">
                    {faq.question}
                    <span className="ml-4 flex-shrink-0 text-sm text-cyan-300 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-sm leading-relaxed text-white/70">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
