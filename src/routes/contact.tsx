import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FutureSafe Insurance Services" },
      {
        name: "description",
        content:
          "Talk to a licensed insurance advisor. Free 15-minute consultation by phone, email, WhatsApp, or in-person at our NYC office.",
      },
      { property: "og:title", content: "Contact FutureSafe" },
      { property: "og:description", content: "Free 15-minute consultation with a licensed advisor." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-foreground/70">
            Contact us
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
            Talk to a real advisor.
          </h1>
          <p className="mt-5 max-w-2xl text-brand-foreground/85 sm:text-lg">
            Submit the form and we'll reply within one business day. Prefer to
            chat now? Use any channel below.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:px-8">
          <div className="space-y-6 lg:col-span-2">
            <ContactBlock
              icon={<Phone />}
              label="Phone"
              value="+1 (555) 010-2030"
              href="tel:+15550102030"
            />
            <ContactBlock
              icon={<Mail />}
              label="Email"
              value="hello@futuresafe.example"
              href="mailto:hello@futuresafe.example"
            />
            <ContactBlock
              icon={<MapPin />}
              label="Office"
              value="221 Atlantic Ave, Suite 400, New York, NY 10001"
            />
            <ContactBlock
              icon={<Clock />}
              label="Hours"
              value="Mon–Fri 9am–7pm · Sat 10am–2pm"
            />
          </div>
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactBlock({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground [&>svg]:h-5 [&>svg]:w-5">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 font-medium text-foreground">{value}</p>
      </div>
    </>
  );
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
      {href ? (
        <a href={href} className="flex items-start gap-4 hover:text-brand-accent">
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}
