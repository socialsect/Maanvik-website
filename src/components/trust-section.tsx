"use client";

import { motion } from "framer-motion";
import { Star, Package, Layers } from "lucide-react";

const stats = [
  {
    value: "5.00",
    icon: Star,
    label: "5 Customer Reviews",
  },
  {
    value: "300+",
    label: "Happy Customers",
  },
  {
    value: "15+",
    icon: Package,
    label: "Products Available",
  },
  {
    value: "4",
    icon: Layers,
    label: "Product Categories",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Eyebrow */}
        <div className="text-center space-y-4">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent border border-accent/20 px-4 py-1.5">
            Trusted by our customers
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-tight">
            Proven Success in Numbers
          </h2>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-border bg-surface p-8 lg:p-10 text-center hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-4xl lg:text-5xl font-bold tracking-tight text-primary">
                  {stat.value}
                </span>
                {stat.icon && (
                  <stat.icon className="w-6 h-6 lg:w-7 lg:h-7 text-accent fill-accent" />
                )}
              </div>
              <div className="h-px w-8 bg-accent/40 mx-auto mb-3" />
              <p className="text-sm text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
