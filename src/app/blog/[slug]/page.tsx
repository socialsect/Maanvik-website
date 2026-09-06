import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { Breadcrumb } from "@/components/breadcrumb";
import { CtaBanner } from "@/components/cta-banner";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

const SITE_URL = "https://maanvikpaperco.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Maanvik Paper Co.`,
      description: post.description,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    author: {
      "@type": "Organization",
      name: "Maanvik Paper Co.",
    },
    publisher: {
      "@type": "Organization",
      name: "Maanvik Paper Co.",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/primary.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
  };

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  if (relatedPosts.length < 2) {
    const more = blogPosts
      .filter((p) => p.slug !== post.slug && p.category !== post.category)
      .slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...more);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-12 bg-surface border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-secondary">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 text-accent font-medium rounded-full">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight tracking-tight">
              {post.title}
            </h1>
            <p className="text-lg text-secondary leading-relaxed">
              {post.description}
            </p>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <div>
              <p className="text-sm font-medium text-primary">Maanvik Paper Co.</p>
              <p className="text-xs text-secondary">Self-Adhesive Labels & Barcode Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-0">
          <div className="aspect-[2/1] relative overflow-hidden border border-border">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Box */}
          <div className="mt-12 p-6 lg:p-8 border border-accent/20 bg-accent/5 space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              Need the Right Labels for Your Business?
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              Maanvik Paper Co. manufactures and supplies self-adhesive labels, barcode stickers, thermal ribbons and barcode equipment across India. Get in touch for bulk orders and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Get a Quote
              </Link>
              <a
                href="https://wa.me/919996989921?text=Hi, I need labels for my business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-sm font-medium text-primary hover:border-primary transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-primary mb-6">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block"
                  >
                    <div className="border border-border overflow-hidden hover:border-accent/30 transition-all">
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-4 space-y-2">
                        <span className="text-xs text-accent font-medium">
                          {related.category}
                        </span>
                        <h4 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors leading-snug">
                          {related.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back */}
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
