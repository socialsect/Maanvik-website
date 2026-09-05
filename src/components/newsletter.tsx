"use client";

import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-16 lg:py-20 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="w-12 h-12 mx-auto flex items-center justify-center border border-border">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-primary">
              Stay Updated
            </h2>
            <p className="text-sm text-secondary leading-relaxed">
              Get notified about new products, offers and industry insights. No spam, unsubscribe anytime.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-surface-alt border border-border text-primary text-sm placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
