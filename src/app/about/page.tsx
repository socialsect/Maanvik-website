import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { site } from "@/data/site";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Maanvik Paper Co., a Delhi-based manufacturer of self-adhesive labels and barcode solutions. Founded in January 2026.",
  openGraph: {
    title: "About | Maanvik Paper Co.",
    description:
      "Learn about Maanvik Paper Co., a Delhi-based manufacturer of self-adhesive labels and barcode solutions.",
    type: "website",
  },
};

const strengths = [
  "Strong Adhesion",
  "Smudge-Free Printing",
  "Quality Focused",
  "Client Satisfaction",
  "PAN India Service",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
          />
          <SectionHeading
            eyebrow="About Us"
            heading="Built Around Better Labelling"
            description="Maanvik Paper Co. is a Delhi-based manufacturer and supplier of self-adhesive labels, barcode labels, thermal printing products and related barcode equipment."
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary">
                Our Story
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  Maanvik Paper Co. was founded in January 2026 with a clear
                  focus: to provide reliable self-adhesive labels, barcode
                  solutions and printing products to businesses across India.
                </p>
                <p>
                  Based in M155, Sector 2, Bawana Industrial Area, Delhi, the
                  company manufactures and supplies a range of barcode labels,
                  thermal stickers, washcare labels, ribbons and barcode
                  equipment.
                </p>
                <p>
                  Our approach is simple — focus on product quality, reliable
                  adhesion, clear printing and customer satisfaction.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary">
                What We Stand For
              </h2>
              <div className="space-y-4">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="flex items-center gap-3 text-primary"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 lg:py-20 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary mb-2">
                Location
              </h3>
              <p className="text-primary">{site.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary mb-2">
                Established
              </h3>
              <p className="text-primary">{site.established}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary mb-2">
                Market
              </h3>
              <p className="text-primary">PAN India</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
