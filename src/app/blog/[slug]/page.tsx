import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowLeft } from "lucide-react";

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
            <div className="flex items-center gap-3 text-xs text-secondary">
              <span className="text-accent font-medium">{post.category}</span>
              <span>·</span>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-secondary leading-relaxed">
              {post.description}
            </p>
          </div>
        </div>
      </section>

      <article className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] relative overflow-hidden mb-10 border border-border">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-secondary prose-li:text-secondary prose-strong:text-primary prose-table:border-collapse"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
