import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Enterprises, Delhi",
    text: "Excellent quality barcode labels. We've been ordering for 6 months now and the adhesion is consistently strong. Their team is responsive and delivers on time.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Sharma Trading Co., Noida",
    text: "Switched to Maanvik for our thermal sticker requirements. The print quality is sharp and smudge-free. Very satisfied with the product range.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Patrol Logistics, Gurgaon",
    text: "We needed custom barcode labels for our warehouse. Maanvik delivered exactly what we needed at a competitive price. Highly recommended for bulk orders.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    company: "Fashion Hub, Delhi",
    text: "The washcare labels are durable and hold up well after multiple washes. Great product for garment manufacturers.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "Singh Enterprises, Jaipur",
    text: "Reliable supplier for all our barcode equipment needs. The printers and scanners we purchased work flawlessly. Good after-sales support too.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    company: "Gupta Retail, Delhi",
    text: "Fast delivery and quality products. The e-commerce stickers for our Amazon and Flipkart shipments are always perfect. Saved us a lot of time.",
    rating: 5,
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maanvik Paper Co.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: testimonials.length.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewBody: t.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  })),
};

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent border border-accent/20 px-4 py-1.5">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-secondary leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what businesses across India have to say about our products and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="border border-border bg-surface p-6 lg:p-8 space-y-4 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-secondary leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-medium text-primary">{testimonial.name}</p>
                <p className="text-xs text-secondary">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
