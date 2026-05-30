import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, HeartPulse, Car, Users, Clock, Award, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-advisor.jpg";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Testimonials } from "@/components/site/Testimonials";
import { PremiumCalculator } from "@/components/site/PremiumCalculator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FutureSafe — Independent Insurance Advisors" },
      {
        name: "description",
        content:
          "Compare health, life, and motor insurance from top insurers. Free expert guidance, instant premium calculator, and claims support.",
      },
      { property: "og:title", content: "FutureSafe Insurance — Independent Advisor Comparison" },
      {
        property: "og:description",
        content:
          "Independent insurance advisors. Free quotes on health, life, and motor cover.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand text-brand-foreground">
        <div className="absolute inset-0 opacity-25">
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/85 to-brand/40" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:py-28 lg:px-8">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Licensed independent brokerage
            </p>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Insurance advice that<br />
              actually puts <em className="text-gold">you</em> first.
            </h1>
            <p className="mt-5 max-w-xl text-base text-brand-foreground/85 sm:text-lg">
              We're independent advisors — not tied to any insurer. We compare
              30+ providers to find the right health, life, or motor cover for
              your situation, then stay with you for every renewal and claim.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-brand-foreground px-6 text-sm font-semibold text-brand shadow-elegant transition hover:opacity-90"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold text-brand-foreground transition hover:bg-white/10"
              >
                Explore services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
              <Stat label="Families covered" value="4,200+" />
              <Stat label="Insurers compared" value="30+" />
              <Stat label="Avg. customer rating" value="4.9★" />
            </dl>
          </div>
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              What we cover
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Cover for every chapter of life
            </h2>
            <p className="mt-3 text-muted-foreground">
              From your first car to your family's future — we tailor protection
              that scales with you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ServiceCard
              to="/health-insurance"
              icon={<HeartPulse className="h-6 w-6" />}
              title="Health Insurance"
              copy="Individual, family, and group health plans with the hospitals you trust."
            />
            <ServiceCard
              to="/life-insurance"
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Life Insurance"
              copy="Term, whole, and savings-linked policies to secure your family's tomorrow."
            />
            <ServiceCard
              to="/motor-insurance"
              icon={<Car className="h-6 w-6" />}
              title="Motor Insurance"
              copy="Comprehensive and third-party cover with 24/7 roadside assistance."
            />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Why FutureSafe
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
                A real advisor in your corner — not a call center.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Buying insurance shouldn't feel like reading a contract in a
                foreign language. Our advisors translate the fine print, fight
                for fair claims, and only earn when you're genuinely covered.
              </p>

              <ul className="mt-8 space-y-4">
                <Feature
                  icon={<Users className="h-5 w-5" />}
                  title="Independent & unbiased"
                  copy="We compare 30+ insurers and recommend what's best for you — not what pays us most."
                />
                <Feature
                  icon={<Clock className="h-5 w-5" />}
                  title="Quotes in 24 hours"
                  copy="Submit once and receive tailored options the next business day."
                />
                <Feature
                  icon={<Award className="h-5 w-5" />}
                  title="Claims advocacy"
                  copy="When something goes wrong, your advisor handles the paperwork and follows up daily."
                />
              </ul>
            </div>

            <PremiumCalculator />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-brand p-10 text-center text-brand-foreground shadow-elegant sm:p-14">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-foreground/85">
              Book a 15-minute consultation. We'll review what you have, spot
              the gaps, and tell you honestly if you even need more cover.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-brand-foreground px-6 text-sm font-semibold text-brand transition hover:opacity-90"
              >
                Book a free consultation
              </Link>
              <Link
                to="/faq"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold text-brand-foreground transition hover:bg-white/10"
              >
                Read common questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-serif text-2xl font-bold sm:text-3xl">{value}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-brand-foreground/70">
        {label}
      </dd>
    </div>
  );
}

function ServiceCard({
  to,
  icon,
  title,
  copy,
}: {
  to: "/health-insurance" | "/life-insurance" | "/motor-insurance";
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-brand-accent hover:shadow-elegant"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-brand-foreground">
        {icon}
      </span>
      <h3 className="mt-5 font-serif text-xl font-bold">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{copy}</p>
      <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-accent">
        Learn more
        <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function Feature({
  icon,
  title,
  copy,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground">
        {icon}
      </span>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{copy}</p>
      </div>
    </li>
  );
}
