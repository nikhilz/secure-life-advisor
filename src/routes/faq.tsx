import { createFileRoute } from "@tanstack/react-router";

const faqs: [string, string][] = [
  ["Are you tied to any insurance company?", "No. FutureSafe is independently owned and works with 30+ insurers. We get paid the same regardless of which insurer you pick, so our recommendation reflects your needs — not our commission."],
  ["How much does your advice cost?", "Nothing. Our service is free to you; we're compensated by the insurer when you decide to buy a policy through us, at the same rate they pay any other broker."],
  ["How long does it take to get a quote?", "Most quotes are back within 24 hours. Complex cases (large life-insurance amounts, business cover) can take 2–3 business days because they require underwriter input."],
  ["Can you help with an existing policy?", "Yes. We frequently review policies bought elsewhere and either confirm they're a good fit or suggest a switch at renewal. There's no charge for a policy review."],
  ["What happens when I need to claim?", "Call your advisor directly. We collect the paperwork, submit the claim, and chase the insurer until it closes. You won't be passed around a call center."],
  ["Is my data safe?", "Yes. We use bank-grade encryption and only share your information with the insurers you've authorized us to approach for quotes."],
  ["Which states do you serve?", "We're currently licensed in PAN India. Submit the form on the contact page and we'll confirm coverage in your area."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Insurance FAQ — Common Questions Answered | FutureSafe" },
      {
        name: "description",
        content:
          "Honest answers to the most common questions about working with an independent insurance advisor — fees, quotes, claims, and more.",
      },
      { property: "og:title", content: "FAQ — FutureSafe Insurance Services" },
      { property: "og:description", content: "Honest answers about working with an independent insurance advisor." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <>
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-foreground/70">
            FAQ
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
            Questions, answered honestly.
          </h1>
          <p className="mt-5 max-w-2xl text-brand-foreground/85 sm:text-lg">
            The most common things people ask before working with us. Don't see
            yours? Drop us a line on the contact page.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <dl className="divide-y divide-border">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-foreground">
                  <span>{q}</span>
                  <span className="mt-1 text-brand-accent transition group-open:rotate-45">+</span>
                </summary>
                <dd className="mt-3 text-sm text-muted-foreground">{a}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
