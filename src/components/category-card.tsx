"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Category } from "@/data/products";

interface CategoryCardProps {
  category: Category;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/products?category=${category.slug}`}
        className="group block h-full"
      >
        <div className="h-full border border-border bg-surface p-6 lg:p-8 hover:border-accent/30 transition-all duration-300">
          {/* Category image */}
          <div className="w-full aspect-[4/3] mb-5 relative overflow-hidden border border-border">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-secondary leading-relaxed mb-5">
            {category.description}
          </p>

          <div className="space-y-1.5 mb-6">
            {category.includes.slice(0, 4).map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs text-secondary"
              >
                <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                {item}
              </div>
            ))}
            {category.includes.length > 4 && (
              <div className="text-xs text-accent">
                +{category.includes.length - 4} more
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-accent transition-colors">
            View Products
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
