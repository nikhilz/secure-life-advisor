import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartPulse, ShieldCheck, Car, Briefcase, Home, Plane, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Insurance Services — FutureSafe" },
      {
        name: "description",
        content:
          "Health, life, motor, business, home, and travel insurance from a single independent advisor. Compare 30+ insurers.",
      },
      { property: "og:title", content: "Insurance Services — FutureSafe" },
      {
        property: "og:description",
        content:
          "Health, life, motor, business, home, and travel cover from one trusted advisor.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "FutureSafe Insurance Services",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Health Insurance", url: "/health-insurance" },
            { "@type": "ListItem", position: 2, name: "Life Insurance", url: "/life-insurance" },
            { "@type": "ListItem", position: 3, name: "Motor Insurance", url: "/motor-insurance" },
            { "@type": "ListItem", position: 4, name: "Home Insurance", url: "/contact" },
            { "@type": "ListItem", position: 5, name: "Business Insurance", url: "/contact" },
            { "@type": "ListItem", position: 6, name: "Travel Insurance", url: "/contact" },
          ],
        }),
      },
    ],
  }),
  component: Services,
});

type Service = {
  to: "/health-insurance" | "/life-insurance" | "/motor-insurance" | "/contact";
  icon: typeof HeartPulse;
  title: string;
  copy: string;
  featured?: boolean;
};

const services: Service[] = [
  { to: "/health-insurance", icon: HeartPulse, title: "Health Insurance", copy: "Individual, family and group plans with the hospitals you trust.", featured: true },
  { to: "/life-insurance", icon: ShieldCheck, title: "Life Insurance", copy: "Term, whole, and savings-linked policies built around your family.", featured: true },
  { to: "/motor-insurance", icon: Car, title: "Motor Insurance", copy: "Comprehensive and third-party cover with 24/7 roadside assistance.", featured: true },
  { to: "/contact", icon: Home, title: "Home Insurance", copy: "Building, contents, and landlord cover for owners and renters." },
  { to: "/contact", icon: Briefcase, title: "Business Insurance", copy: "Liability, property, and group benefits for teams of all sizes." },
  { to: "/contact", icon: Plane, title: "Travel Insurance", copy: "Single-trip, multi-trip, and student travel plans with medical evac." },
];

function Services() {
  return (
    <>
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-foreground/70">
            Our services
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
            One advisor. Every kind of cover.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-brand-foreground/85 sm:text-lg">
            Stop juggling policies across half a dozen insurers. We consolidate
            your protection under one roof — and one phone number when you need it.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ to, icon: Icon, title, copy, featured }) => (
              <Link
                key={title}
                to={to}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-brand-accent hover:shadow-elegant"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-serif text-xl font-bold">{title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{copy}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-accent">
                  {featured ? "Learn more" : "Talk to an advisor"}
                  <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
