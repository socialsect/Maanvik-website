import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getProductsByCategory, products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { Breadcrumb } from "@/components/breadcrumb";

const SITE_URL = "https://maanvikpaperco.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Maanvik Paper Co.`,
      description: product.description,
      type: "website",
      url: `${SITE_URL}/products/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Maanvik Paper Co.`,
      description: product.description,
      images: [product.image],
    },
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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE_URL}${product.image}`,
    brand: {
      "@type": "Brand",
      name: "Maanvik Paper Co.",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Maanvik Paper Co.",
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: {
        "@type": "Organization",
        name: "Maanvik Paper Co.",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-12 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-6">
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
                  href={`https://wa.me/7428523381?text=Hi, I'm interested in ${product.name}`}
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
