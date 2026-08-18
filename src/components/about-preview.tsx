"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-surface-alt border border-border relative overflow-hidden">
              <Image
                src="/images/label-rolls.jpg"
                alt="Self-adhesive label rolls in production"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Corner accent */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-accent/20" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-accent/20" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
              About Maanvik
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-tight">
              Built Around Better Labelling
            </h2>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                Maanvik Paper Co. is a Delhi-based manufacturer and supplier of
                self-adhesive labels, barcode labels, thermal printing products
                and related barcode equipment.
              </p>
              <p>
                Founded in January 2026, the company focuses on reliable
                products, strong adhesion, clear printing and consistent quality,
                with customer satisfaction at the centre of its approach.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
