import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "./health-insurance";

const lifeFaqs: [string, string][] = [
  ["Term or whole life?", "If you need affordable cover during your working years, term wins. For estate planning or guaranteed payout, whole life makes sense."],
  ["How much cover do I need?", "A common rule is 10× your annual income, but we'll model it against your debts, dependents, and existing assets."],
  ["What if I miss a payment?", "Most policies offer a 30-day grace period. We'll set up reminders so it never happens."],
];

export const Route = createFileRoute("/life-insurance")({
  head: () => ({
    meta: [
      { title: "Life Insurance — Term, Whole & ULIP Plans | FutureSafe" },
      {
        name: "description",
        content:
          "Compare term life, whole life, and savings-linked life insurance. Honest guidance, no commission pressure, payout support for your family.",
      },
      { property: "og:title", content: "Life Insurance — FutureSafe" },
      { property: "og:description", content: "Term, whole, and savings-linked life cover for your family." },
      { property: "og:url", content: "/life-insurance" },
    ],
    links: [{ rel: "canonical", href: "/life-insurance" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Life Insurance Advisory",
              serviceType: "Life Insurance",
              provider: { "@type": "InsuranceAgency", name: "FutureSafe Insurance Services" },
              description: "Compare term life, whole life, and savings-linked policies with hands-on claim support for beneficiaries.",
              areaServed: "US",
            },
            {
              "@type": "FAQPage",
              mainEntity: lifeFaqs.map(([q, a]) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <ProductPage
      kicker="Life Insurance"
      title="The simplest gift you can leave your family."
      lead="Term life is cheap, whole life is permanent, savings-linked plans do both. We'll explain the trade-offs in plain English and recommend what actually fits your goals."
      features={[
        "Pure term cover from $20/month",
        "Whole life with guaranteed cash value",
        "ULIP / savings-linked options",
        "Accidental death & disability riders",
        "Critical illness acceleration benefits",
        "Hands-on claim support for beneficiaries",
      ]}
      faqs={lifeFaqs}
      defaultProduct="life"
    />
  ),
});
