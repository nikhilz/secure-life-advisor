import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "./health-insurance";

export const Route = createFileRoute("/motor-insurance")({
  head: () => ({
    meta: [
      { title: "Motor Insurance — Car & Two-Wheeler Cover | FutureSafe" },
      {
        name: "description",
        content:
          "Comprehensive and third-party motor insurance with cashless garages, zero-depreciation add-ons, and 24/7 roadside assistance.",
      },
      { property: "og:title", content: "Motor Insurance — FutureSafe" },
      { property: "og:description", content: "Car and two-wheeler cover with 24/7 roadside assistance." },
      { property: "og:url", content: "/motor-insurance" },
    ],
    links: [{ rel: "canonical", href: "/motor-insurance" }],
  }),
  component: () => (
    <ProductPage
      kicker="Motor Insurance"
      title="On the road, never on your own."
      lead="From a scraped bumper to a total loss, we make sure your motor policy actually pays — and pays fast. Compare comprehensive and third-party cover across top insurers."
      features={[
        "Comprehensive & third-party cover",
        "Zero-depreciation add-on",
        "24/7 roadside assistance & rental car",
        "Cashless repairs at 4,500+ garages",
        "No-claim bonus protection",
        "Personal accident cover for owner-driver",
      ]}
      faqs={[
        ["What's the difference between comprehensive and third-party?", "Third-party only covers damage you cause to others. Comprehensive also pays for damage to your own vehicle, theft, and natural disasters."],
        ["Is zero-depreciation worth it?", "For cars under 5 years old, almost always yes — it bumps your claim payout by 30–50%."],
        ["How fast are claims?", "Cashless repairs at network garages typically clear within 48 hours."],
      ]}
      defaultProduct="motor"
    />
  ),
});
