"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="pt-32 lg:pt-40 pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <span className="text-8xl lg:text-9xl font-bold text-accent/10 font-mono">
          !
        </span>
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
            Something went wrong
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-tight">
            An unexpected error occurred
          </h1>
          <p className="text-secondary leading-relaxed">
            We&apos;re sorry for the inconvenience. Please try again or contact us if the problem persists.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-border text-primary font-medium hover:border-primary transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
