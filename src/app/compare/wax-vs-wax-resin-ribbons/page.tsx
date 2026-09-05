import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Breadcrumb } from "@/components/breadcrumb";

const SITE_URL = "https://maanvikpaperco.com";

export const metadata: Metadata = {
  title: "Wax vs Wax Resin Ribbons — Which Should You Use?",
  description:
    "Detailed comparison of wax and wax resin ribbons for thermal transfer barcode printing. Learn the differences, use cases and cost implications.",
  openGraph: {
    title: "Wax vs Wax Resin Ribbons | Maanvik Paper Co.",
    description:
      "Detailed comparison of wax and wax resin ribbons for thermal transfer barcode printing.",
    type: "article",
    url: `${SITE_URL}/compare/wax-vs-wax-resin-ribbons`,
  },
};

const comparisonTable = [
  { feature: "Composition", wax: "Mostly wax", waxResin: "Wax and resin blend" },
  { feature: "Durability", wax: "Standard", waxResin: "High" },
  { feature: "Smudge Resistance", wax: "Good", waxResin: "Excellent" },
  { feature: "Scratch Resistance", wax: "Fair", waxResin: "Good" },
  { feature: "Print Quality", wax: "Good", waxResin: "Excellent" },
  { feature: "Cost", wax: "Lower", waxResin: "Moderate" },
  { feature: "Best For", wax: "Paper labels, shipping", waxResin: "Product labels, synthetic" },
  { feature: "Lifespan", wax: "6-12 months", waxResin: "1-3 years" },
];

export default function WaxVsWaxResinPage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-surface border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Compare" },
              { label: "Wax vs Wax Resin Ribbons" },
            ]}
          />
          <SectionHeading
            eyebrow="Comparison"
            heading="Wax vs Wax Resin Ribbons"
            description="A detailed comparison to help you choose the right thermal transfer ribbon for your barcode printing needs."
          />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Comparison Table */}
          <div className="border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt border-b border-border">
                  <th className="text-left p-4 font-semibold text-primary">Feature</th>
                  <th className="text-left p-4 font-semibold text-primary">Wax Ribbons</th>
                  <th className="text-left p-4 font-semibold text-primary">Wax Resin Ribbons</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-surface" : "bg-surface-alt"}>
                    <td className="p-4 font-medium text-primary">{row.feature}</td>
                    <td className="p-4 text-secondary">{row.wax}</td>
                    <td className="p-4 text-secondary">{row.waxResin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* When to Use Wax */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">When to Use Wax Ribbons</h2>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>High-volume printing where cost per label matters most</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>Paper-based shipping and inventory labels</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>Labels that don&apos;t need to last more than a year</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>Indoor warehouse environments</span>
              </li>
            </ul>
          </div>

          {/* When to Use Wax Resin */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">When to Use Wax Resin Ribbons</h2>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>Product labels that need to look professional for months</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>Labels handled frequently by customers</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>Small barcodes that need crisp, scannable edges</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>Synthetic or coated label materials</span>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-accent/20 bg-accent/5 space-y-4">
            <h3 className="font-semibold text-primary">Need Help Choosing?</h3>
            <p className="text-sm text-secondary leading-relaxed">
              Not sure which ribbon is right for your application? Contact our team and we&apos;ll help you pick the best option based on your printer model, label material, and use case.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
