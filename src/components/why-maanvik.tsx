"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Strong Adhesion",
    description: "Designed around reliable label application.",
  },
  {
    number: "02",
    title: "Smudge-Free Printing",
    description:
      "Clear printing that helps maintain readability and presentation.",
  },
  {
    number: "03",
    title: "Quality Products",
    description:
      "A focused range of labels, consumables and barcode equipment.",
  },
  {
    number: "04",
    title: "Customer Satisfaction",
    description:
      "Focused on dependable service and meeting customer requirements.",
  },
];

const spans = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
];

export function WhyMaanvik() {
  return (
    <section className="py-20 lg:py-28 bg-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 lg:mb-20 grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
              Why Maanvik
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
              Focused on Quality. Built for Reliability.
            </h2>
          </div>
          <p className="text-white/60 leading-relaxed max-w-sm lg:text-right lg:pb-2">
            Our approach is simple: provide dependable labelling and barcode
            solutions while keeping product quality and customer satisfaction
            at the centre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative border border-white/10 bg-white/[0.02] p-8 lg:p-10 hover:border-accent/40 transition-colors duration-300 ${spans[i]}`}
            >
              <div className="absolute top-0 right-0 h-8 w-8 border-t border-r border-accent/0 group-hover:border-accent/40 transition-colors duration-300" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-5xl lg:text-6xl font-bold text-white/60 group-hover:text-accent transition-colors duration-300">
                  {feature.number}
                </span>
                <span className="text-accent/40 group-hover:text-accent transition-colors duration-300">
                  <svg
                    className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                  </svg>
                </span>
              </div>
              <div className="h-px w-12 bg-accent/60 mt-8 mb-6" />
              <h3 className="text-lg lg:text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-md">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}