import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const PHONE = "917066493999"; // E.164 without "+"
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  product: z.enum(["health", "life", "motor", "other"]),
  message: z.string().trim().max(600).optional(),
});

type Props = { compact?: boolean; defaultProduct?: "health" | "life" | "motor" | "other" };

export function QuoteForm({ compact, defaultProduct = "health" }: Props) {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      product: fd.get("product"),
      message: fd.get("message") || undefined,
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    const values = parsed.data;
    const productLabel = {
      health: "Health insurance",
      life: "Life insurance",
      motor: "Motor insurance",
      other: "Other",
    }[values.product];

    const message = [
      "New quote request",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Insurance type: ${productLabel}`,
      values.message ? `Message: ${values.message}` : "Message: (none)",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!opened) {
      toast.error("Unable to open WhatsApp. Please try again.");
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("WhatsApp chat opened with your quote details.");
  }

  return (
    <form
      onSubmit={onSubmit}
      className={
        "rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-soft " +
        (compact ? "" : "sm:p-8")
      }
    >
      <h3 className="font-serif text-xl font-bold">Request a free quote</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        No obligation. We compare top insurers and reply within 24 hours.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Full name" placeholder="John Doe" required />
        <Field name="email" type="email" label="Email" placeholder="john@example.com" required />
        <Field name="phone" label="Phone" placeholder="+91 9876543210" required />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="product" className="text-xs font-medium text-foreground">
            Insurance type
          </label>
          <select
            id="product"
            name="product"
            defaultValue={defaultProduct}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="health">Health insurance</option>
            <option value="life">Life insurance</option>
            <option value="motor">Motor insurance</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-foreground">
          Anything we should know? <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          maxLength={600}
          className="rounded-md border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          placeholder="Family of 4, looking for full hospital cover…"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-md bg-brand px-6 text-sm font-semibold text-brand-foreground shadow-soft transition hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Get my free quote"}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
