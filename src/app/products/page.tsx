"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { categories, products } from "@/data/products";
import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("category");

  const filteredProducts = categorySlug
    ? products.filter((p) => {
        const cat = categories.find((c) => c.slug === categorySlug);
        return cat && p.category === cat.name;
      })
    : products;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products"
            heading="Everything You Need to Label, Print & Identify"
            description="Explore our range of labels, printing consumables and barcode equipment."
          />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="text-xl font-semibold text-primary">Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, i) => (
              <CategoryCard key={category.slug} category={category} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-20 bg-surface-alt border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-primary">
              {categorySlug
                ? categories.find((c) => c.slug === categorySlug)?.name ||
                  "Products"
                : "All Products"}
            </h2>
            <span className="text-sm text-secondary">
              {filteredProducts.length} products
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
