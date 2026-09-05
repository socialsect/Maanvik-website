import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { Printer, ScanBarcode, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional barcode printing services, custom label printing and e-commerce label printing from Maanvik Paper Co. for businesses across India.",
  openGraph: {
    title: "Services | Maanvik Paper Co.",
    description:
      "Professional barcode printing services, custom label printing and e-commerce label printing.",
    type: "website",
  },
};

const services = [
  {
    icon: Printer,
    title: "Barcode Printing",
    description:
      "Professional barcode printing services for labels, stickers and shipping documentation. We produce clear, scannable barcodes for your business needs.",
  },
  {
    icon: ScanBarcode,
    title: "Custom Label Printing",
    description:
      "Custom self-adhesive label printing in various sizes and formats. Suitable for product labelling, branding and identification.",
  },
  {
    icon: Tag,
    title: "E-commerce Label Printing",
    description:
      "Printing labels and stickers for Amazon, Flipkart and other e-commerce platforms. Invoice stickers, shipping labels and more.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />
          <SectionHeading
            eyebrow="Services"
            heading="Professional Printing Solutions"
            description="From barcode printing to custom labels, we provide professional printing services for businesses across India."
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 border border-border bg-surface hover:border-accent/30 transition-colors space-y-5"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border">
                  <service.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            eyebrow="How It Works"
            heading="Simple and Straightforward"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Tell Us What You Need",
                description:
                  "Share your requirements via phone, email or our enquiry form.",
              },
              {
                step: "02",
                title: "Get a Quote",
                description:
                  "We provide pricing and timelines based on your specific needs.",
              },
              {
                step: "03",
                title: "Receive Your Order",
                description:
                  "Your labels, barcodes or printed materials are delivered to you.",
              },
            ].map((item) => (
              <div key={item.step} className="space-y-3">
                <span className="text-3xl font-bold text-primary/10 font-mono">
                  {item.step}
                </span>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
