"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of self-adhesive labels do you offer?",
    answer:
      "We offer a wide range including barcode labels, thermal stickers, direct thermal stickers, washcare labels, e-commerce shipping stickers (Amazon, Flipkart), invoice stickers, and custom label printing. All labels are available in various sizes and formats.",
  },
  {
    question: "What is the difference between thermal and direct thermal stickers?",
    answer:
      "Thermal stickers use a thermal transfer ribbon for printing, which produces durable, smudge-resistant labels ideal for long-term use. Direct thermal stickers print without ribbons using heat-sensitive paper, making them cost-effective for short-term applications like shipping labels.",
  },
  {
    question: "Do you provide barcode printers and scanners?",
    answer:
      "Yes, we supply barcode printers, barcode scanners, and hand labellers. We carry reliable brands suitable for small businesses to large warehouses. Our team can help you choose the right equipment for your specific needs.",
  },
  {
    question: "What are wax ribbons and when should I use them?",
    answer:
      "Wax ribbons are thermal transfer ribbons used for printing barcodes and labels. They are cost-effective and ideal for printing on paper-based label materials. Use wax ribbons for everyday barcode labels, shipping labels, and inventory tags.",
  },
  {
    question: "Do you serve customers outside Delhi?",
    answer:
      "Yes, we serve customers across India (PAN India). While we are based in Delhi, we ship our products to businesses throughout the country. Contact us for shipping details and bulk order pricing.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "We cater to both small and large businesses. Contact us with your specific requirements and we'll provide pricing and MOQ details based on the product type and quantity you need.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Standard delivery within Delhi NCR is typically 2-3 business days. For other parts of India, delivery usually takes 5-7 business days. Bulk orders may have slightly longer lead times which we communicate upfront.",
  },
  {
    question: "Can you print custom logos or designs on labels?",
    answer:
      "Yes, we offer custom label printing services. You can share your logo, design, or artwork and we'll print it on labels in your preferred size, shape, and material. Contact us to discuss your custom requirements.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-surface-alt">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent border border-accent/20 px-4 py-1.5">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border bg-surface overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-alt transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-primary pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-secondary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-sm text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
