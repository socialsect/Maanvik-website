"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        href={`/products/${product.slug}`}
        className="group block h-full"
      >
        <div className="h-full border border-border bg-surface overflow-hidden hover:border-accent/30 transition-all duration-300">
          {/* Product image */}
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
          </div>

          <div className="p-5 space-y-3">
            <div className="text-[10px] font-medium tracking-[0.15em] uppercase text-accent">
              {product.category}
            </div>
            <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              {product.shortDescription}
            </p>
            <div className="flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-accent transition-colors pt-1">
              Enquire Now
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
