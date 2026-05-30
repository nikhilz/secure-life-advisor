import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "term-vs-whole-life",
    title: "Term vs. Whole Life: which one actually fits you?",
    excerpt:
      "Term is cheap and simple. Whole life is permanent and builds cash value. Here's a decision tree we use with new clients.",
    date: "May 18, 2026",
    readTime: "6 min read",
    category: "Life Insurance",
  },
  {
    slug: "health-network-checklist",
    title: "The 7-point checklist for picking a health network",
    excerpt:
      "Before you compare premiums, compare networks. These seven checks will save you from the most common health-plan regret.",
    date: "May 02, 2026",
    readTime: "5 min read",
    category: "Health Insurance",
  },
  {
    slug: "zero-dep-worth-it",
    title: "Is zero-depreciation cover worth the extra premium?",
    excerpt:
      "For cars under five years old, almost always yes. We run the numbers on a typical sedan and a typical SUV.",
    date: "Apr 21, 2026",
    readTime: "4 min read",
    category: "Motor Insurance",
  },
  {
    slug: "claim-rejected-now-what",
    title: "Your claim was rejected. What now?",
    excerpt:
      "Most rejections are appealable. Here's the exact playbook our advocacy team uses, step by step.",
    date: "Apr 08, 2026",
    readTime: "7 min read",
    category: "Claims",
  },
  {
    slug: "new-parent-insurance",
    title: "A new parent's insurance checklist (first 90 days)",
    excerpt:
      "Add the baby, revisit life cover, name guardians, update beneficiaries. Quick, practical, parent-tested.",
    date: "Mar 27, 2026",
    readTime: "5 min read",
    category: "Life Insurance",
  },
  {
    slug: "small-biz-liability",
    title: "Small-business liability cover, explained in 4 minutes",
    excerpt:
      "General, professional, and product liability — what each one actually does and which you can safely skip when starting out.",
    date: "Mar 12, 2026",
    readTime: "4 min read",
    category: "Business",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insurance Blog — Guides & Tips | FutureSafe" },
      {
        name: "description",
        content:
          "Plain-English guides on health, life, motor, and business insurance from the advisors at FutureSafe.",
      },
      { property: "og:title", content: "Insurance Blog — FutureSafe" },
      { property: "og:description", content: "Plain-English guides on insurance from real advisors." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "FutureSafe Insurance Blog",
          url: "/blog",
          description: "Plain-English guides on health, life, motor, and business insurance.",
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            articleSection: p.category,
          })),
        }),
      },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <section className="bg-brand py-20 text-brand-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-foreground/70">
            Insights
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
            Guides & opinions from real advisors.
          </h1>
          <p className="mt-5 max-w-2xl text-brand-foreground/85 sm:text-lg">
            No clickbait, no listicles. Just the thinking our team uses with
            clients, written down.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-accent hover:shadow-elegant"
              >
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-secondary-foreground">
                    {p.category}
                  </span>
                  <span>{p.readTime}</span>
                </div>
                <h2 className="mt-4 font-serif text-xl font-bold leading-snug">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center font-semibold text-brand-accent"
                  >
                    Read <ArrowRight className="ml-1 h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
