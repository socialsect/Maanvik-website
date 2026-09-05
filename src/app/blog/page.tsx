import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Breadcrumb } from "@/components/breadcrumb";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert guides on barcode labels, thermal printing, ribbons, barcode equipment and e-commerce labelling solutions from Maanvik Paper Co.",
  openGraph: {
    title: "Blog | Maanvik Paper Co.",
    description:
      "Expert guides on barcode labels, thermal printing, ribbons, barcode equipment and e-commerce labelling solutions.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog" },
            ]}
          />
          <SectionHeading
            eyebrow="Blog"
            heading="Labelling Insights & Guides"
            description="Expert advice on labels, printing, barcodes and everything you need to know about labelling solutions."
          />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="border border-border bg-surface overflow-hidden hover:border-accent/30 transition-all duration-300">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-secondary">
                      <span className="text-accent font-medium">{post.category}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-secondary leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
