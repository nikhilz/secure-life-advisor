import { useMemo, useState } from "react";

type Product = "health" | "life" | "motor";

// Illustrative pricing models — for guidance only, not a binding quote.
const baseRates: Record<Product, number> = {
  health: 60,
  life: 18,
  motor: 45,
};

function ageFactor(age: number) {
  if (age < 25) return 0.9;
  if (age < 35) return 1.0;
  if (age < 45) return 1.15;
  if (age < 55) return 1.35;
  if (age < 65) return 1.7;
  return 2.2;
}

function coverageFactor(cover: number) {
  return 0.6 + cover / 250_000;
}

export function PremiumCalculator() {
  const [product, setProduct] = useState<Product>("health");
  const [age, setAge] = useState(32);
  const [coverage, setCoverage] = useState(100_000);
  const [smoker, setSmoker] = useState(false);

  const monthly = useMemo(() => {
    const base = baseRates[product];
    const af = ageFactor(age);
    const cf = coverageFactor(coverage);
    const sf = smoker ? 1.35 : 1.0;
    return Math.round(base * af * cf * sf);
  }, [product, age, coverage, smoker]);

  const annual = monthly * 12;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-serif text-xl font-bold">Premium calculator</h3>
        <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-secondary-foreground">
          Indicative only
        </span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Estimate your monthly premium in seconds. Final pricing depends on
        underwriting and the insurer you choose.
      </p>

      <div className="mt-6 grid gap-1.5">
        <label className="text-xs font-medium">Insurance type</label>
        <div className="grid grid-cols-3 gap-2">
          {(["health", "life", "motor"] as Product[]).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setProduct(p)}
              className={
                "h-10 rounded-md border text-sm font-medium capitalize transition " +
                (product === p
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-input bg-background text-foreground hover:bg-secondary")
              }
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-1.5">
        <div className="flex items-center justify-between text-xs">
          <label htmlFor="age" className="font-medium">Age</label>
          <span className="text-muted-foreground">{age} yrs</span>
        </div>
        <input
          id="age"
          type="range"
          min={18}
          max={75}
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className="accent-[var(--brand)]"
        />
      </div>

      <div className="mt-5 grid gap-1.5">
        <div className="flex items-center justify-between text-xs">
          <label htmlFor="cover" className="font-medium">Coverage amount</label>
          <span className="text-muted-foreground">
            ${coverage.toLocaleString()}
          </span>
        </div>
        <input
          id="cover"
          type="range"
          min={25_000}
          max={1_000_000}
          step={25_000}
          value={coverage}
          onChange={(e) => setCoverage(Number(e.target.value))}
          className="accent-[var(--brand)]"
        />
      </div>

      <label className="mt-5 flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={smoker}
          onChange={(e) => setSmoker(e.target.checked)}
          className="h-4 w-4 accent-[var(--brand)]"
        />
        I smoke / use tobacco
      </label>

      <div className="mt-6 rounded-xl bg-surface p-5">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          Estimated premium
        </p>
        <p className="mt-1 font-serif text-4xl font-bold text-brand">
          ${monthly}
          <span className="ml-1 text-base font-medium text-muted-foreground">/mo</span>
        </p>
        <p className="text-xs text-muted-foreground">
          Roughly ${annual.toLocaleString()} per year
        </p>
      </div>
    </div>
  );
}
