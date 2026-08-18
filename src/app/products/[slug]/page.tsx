import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(
    product.category === "Labels & Stickers"
      ? "labels-stickers"
      : product.category === "Ribbons"
      ? "ribbons"
      : product.category === "Barcode Equipment"
      ? "barcode-equipment"
      : "printing-services"
  ).filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-12 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Product image */}
            <div className="aspect-[4/3] bg-surface-alt border border-border relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="space-y-6">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary">
                {product.name}
              </h1>
              <p className="text-secondary leading-relaxed text-lg">
                {product.description}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Enquire Now
                </Link>
                <a
                  href={`https://wa.me/9996989921?text=Hi, I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border text-sm font-medium text-primary hover:border-primary transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <h2 className="text-xl font-semibold text-primary">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
