import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/health-insurance")({
  head: () => ({
    meta: [
      { title: "Health Insurance — Family & Individual Plans | FutureSafe" },
      {
        name: "description",
        content:
          "Compare individual, family, and group health insurance plans. In-network hospital cover, maternity, mental health, and prescriptions.",
      },
      { property: "og:title", content: "Health Insurance — FutureSafe" },
      { property: "og:description", content: "Family & individual health insurance from 30+ insurers." },
      { property: "og:url", content: "/health-insurance" },
    ],
    links: [{ rel: "canonical", href: "/health-insurance" }],
  }),
  component: () => (
    <ProductPage
      kicker="Health Insurance"
      title="Care your family can actually use."
      lead="We help you pick a health plan with the hospitals, specialists, and medicines you already rely on — not just the cheapest sticker price."
      features={[
        "In-patient & day-care hospitalization cover",
        "Maternity & newborn benefits",
        "Mental health & outpatient consultations",
        "Cashless treatment at 8,000+ network hospitals",
        "Annual preventive health check-ups",
        "Critical illness add-ons (cancer, cardiac, stroke)",
      ]}
      faqs={[
        ["Can I keep my current doctor?", "Yes — we'll filter plans to only insurers whose network includes your existing providers."],
        ["What about pre-existing conditions?", "Most plans cover them after a 2–4 year waiting period. We'll flag the shortest available."],
        ["Do you handle claims?", "We submit, follow up, and escalate on your behalf until the claim closes."],
      ]}
      defaultProduct="health"
    />
  ),
});

export function ProductPage({
  kicker,
  title,
  lead,
  features,
  faqs,
  defaultProduct,
}: {
  kicker: string;
  title: string;
  lead: string;
  features: string[];
  faqs: [string, string][];
  defaultProduct: "health" | "life" | "motor";
}) {
  return (
    <>
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-foreground/70">
              {kicker}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-brand-foreground/85 sm:text-lg">
              {lead}
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-foreground/15">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-brand-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <QuoteForm defaultProduct={defaultProduct} />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold">Frequently asked</h2>
          <dl className="mt-8 divide-y divide-border">
            {faqs.map(([q, a]) => (
              <div key={q} className="py-5">
                <dt className="font-semibold text-foreground">{q}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
