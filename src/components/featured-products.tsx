"use client";

import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Product Range"
          heading="Solutions for Everyday Labelling Needs"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
