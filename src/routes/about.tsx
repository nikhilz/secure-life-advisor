import { createFileRoute } from "@tanstack/react-router";
import { Award, Heart, Scale, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — FutureSafe Insurance Services" },
      {
        name: "description",
        content:
          "Meet the independent insurance advisors at FutureSafe. 15+ years helping families and businesses find honest, well-priced cover.",
      },
      { property: "og:title", content: "About FutureSafe Insurance Services" },
      {
        property: "og:description",
        content:
          "Independent advisors. 15+ years of honest insurance guidance for families and businesses.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        kicker="About FutureSafe"
        title="Honest insurance advice, since 2008."
        copy="We started FutureSafe after watching too many friends pay for cover they didn't need and miss the cover they did. Our promise is simple: independent advice, plain English, and a real human on the other end of the phone."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-bold">Our story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded by a former claims adjuster and a financial planner,
              FutureSafe has grown from a two-person practice in Brooklyn to a
              team of 18 licensed advisors serving clients in 12 states. We
              remain independently owned — no insurer, bank, or holding company
              has a stake in our recommendations.
            </p>
            <p className="mt-4 text-muted-foreground">
              That independence is the whole point. We're paid the same whether
              you choose insurer A, B, or C — so the only question that matters
              is which policy actually fits your life.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat value="2008" label="Founded" />
            <Stat value="4,200+" label="Households served" />
            <Stat value="18" label="Licensed advisors" />
            <Stat value="$11M+" label="Claims recovered for clients" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold">What we stand for</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Value icon={<Scale />} title="Independence" copy="No insurer owns us. Our advice is yours alone." />
            <Value icon={<Heart />} title="Empathy" copy="Insurance is bought in calm and used in crisis. We're built for the crisis." />
            <Value icon={<Users />} title="Long-term" copy="Most clients stay with us for 8+ years. Renewals matter as much as the first sale." />
            <Value icon={<Award />} title="Excellence" copy="Every advisor holds active state licensing and 40+ hours of yearly CE." />
          </div>
        </div>
      </section>
    </>
  );
}

function PageHeader({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <section className="bg-brand py-20 text-brand-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-foreground/70">
          {kicker}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-brand-foreground/85 sm:text-lg">
          {copy}
        </p>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <p className="font-serif text-3xl font-bold text-brand">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

function Value({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-brand-foreground [&>svg]:h-5 [&>svg]:w-5">
        {icon}
      </span>
      <h3 className="mt-4 font-serif text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
    </div>
  );
}
