"use client";

import { motion } from "framer-motion";
import { Shield, Printer, CheckCircle, Globe } from "lucide-react";

const usps = [
  {
    icon: Shield,
    number: "01",
    title: "Strong Adhesion",
    description: "Reliable sticking performance for everyday labelling needs.",
  },
  {
    icon: Printer,
    number: "02",
    title: "Smudge-Free Printing",
    description: "Clear, clean printing designed for easy reading and scanning.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Quality Focused",
    description: "Products selected with quality and consistency in mind.",
  },
  {
    icon: Globe,
    number: "04",
    title: "PAN India",
    description: "Serving customers across India.",
  },
];

export function UspStrip() {
  return (
    <section className="py-16 lg:py-20 border-t border-b border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-border">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 lg:px-8 first:lg:pl-0"
            >
              <span className="text-xs font-mono text-accent/60 mt-1">
                {usp.number}
              </span>
              <div className="space-y-1.5">
                <h3 className="font-semibold text-primary text-sm">
                  {usp.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {usp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
