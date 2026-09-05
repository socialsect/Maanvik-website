import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export default function NotFound() {
  return (
    <section className="pt-32 lg:pt-40 pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <span className="text-8xl lg:text-9xl font-bold text-accent/10 font-mono">
          404
        </span>
        <SectionHeading
          eyebrow="Page Not Found"
          heading="Looks like this page doesn't exist"
          description="The page you're looking for may have been moved or removed. Let's get you back on track."
          align="center"
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-border text-primary font-medium hover:border-primary transition-colors"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
