import { Star } from "lucide-react";

const items = [
  {
    quote:
      "FutureSafe found us a family health plan that saved us ₹18,000 a year and actually covers our pediatrician. Painless process from start to finish.",
    name: "Priya & Mohan R.",
    role: "Family of 4, Brooklyn",
  },
  {
    quote:
      "After a fender-bender my agent had a rental arranged before I left the scene. That's the difference a real advisor makes.",
    name: "Amit L.",
    role: "Motor policyholder",
  },
  {
    quote:
      "They walked me through term vs. whole life without any pressure. I finally understand what I'm paying for.",
    name: "Aisha N.",
    role: "Life insurance client",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Client stories
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Trusted by 4,200+ families & businesses
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
