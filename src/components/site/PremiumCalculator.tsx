export function PremiumCalculator() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl font-bold">Our office location</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            AP SHOP NO A17, PRIVIA BUSINESS CENTER SANT NAGAR, Nr NEW RTO OFFICE  MOSHI PUNE 412105 — exact location from your Google Maps link.
          </p>
        </div>
        <a
          href="https://www.google.com/maps/place/Privia+Business+Centre+Pune/@18.6549363,73.8447135,17z"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-secondary-foreground"
        >
          Open in Google Maps
        </a>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-border">
        <iframe
          title="FutureSafe location map"
          src="https://www.google.com/maps?q=Privia+Business+Centre+Pune&hl=en&z=17&output=embed"
          width="100%"
          height="420"
          loading="lazy"
          className="block w-full border-0"
        />
      </div>
    </section>
  );
}
