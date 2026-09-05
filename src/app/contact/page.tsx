import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { EnquiryForm } from "@/components/enquiry-form";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Maanvik Paper Co. for self-adhesive labels, barcode solutions and printing products. Call us or send an enquiry.",
  openGraph: {
    title: "Contact | Maanvik Paper Co.",
    description:
      "Get in touch with Maanvik Paper Co. for self-adhesive labels, barcode solutions and printing products.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />
          <SectionHeading
            eyebrow="Contact"
            heading="Let's Talk About Your Requirements"
            description="Tell us what you need and our team can help you find the right product or printing solution."
          />
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
