"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ringImages = [
  {
    src: "/images/hero-labels.jpg",
    alt: "Self-adhesive label rolls and barcode printing products",
  },
  {
    src: "/images/label-rolls.jpg",
    alt: "Label rolls on a printing machine",
  },
  {
    src: "/images/category-labels.jpg",
    alt: "Assorted self-adhesive labels",
  },
  {
    src: "/images/category-ribbons.jpg",
    alt: "Thermal transfer ribbon rolls",
  },
  {
    src: "/images/barcode-labels.jpg",
    alt: "Barcode labels close-up",
  },
  {
    src: "/images/e-commerce-stickers.jpg",
    alt: "Shipping stickers and packaging labels",
  },
  {
    src: "/images/category-services.jpg",
    alt: "Label printing equipment",
  },
];

const RING_RADIUS = 300;
const RING_STEP = 360 / ringImages.length;

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % ringImages.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-surface overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, #111 40px, #111 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #111 40px, #111 41px)",
          }}
        />
      </div>

      {/* Subtle accent shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-accent/3 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
                Self-Adhesive Labels & Barcode Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-primary">
              Labels That Stick.
              <br />
              <span className="text-accent">Quality That Shows.</span>
            </h1>

            <p className="text-lg text-secondary max-w-lg leading-relaxed">
              Reliable self-adhesive labels, barcode solutions and printing
              products for businesses across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-medium hover:bg-primary/90 transition-colors group"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-primary font-medium hover:border-primary transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* 3D Ring Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-72 xl:h-80">
              <div className="absolute inset-0" style={{ perspective: 1100 }}>
                {ringImages.map((img, i) => {
                  const raw = ((i - active) % ringImages.length + ringImages.length) % ringImages.length;
                  const rel = raw > ringImages.length / 2 ? raw - ringImages.length : raw;
                  const angle = rel * RING_STEP;
                  const rad = (angle * Math.PI) / 180;
                  const hidden = Math.abs(rel) >= 3;
                  const opacity = hidden ? 0 : Math.abs(rel) === 0 ? 1 : Math.abs(rel) === 1 ? 0.9 : 0.4;
                  return (
                    <div
                      key={img.src}
                      className="absolute left-1/2 top-1/2 w-48 xl:w-56 aspect-[3/2]"
                      style={{
                        transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${RING_RADIUS}px)`,
                        opacity,
                        zIndex: 30 - Math.abs(rel),
                        transition:
                          "opacity 700ms ease, transform 700ms cubic-bezier(0.4, 0, 0.2, 1)",
                        pointerEvents: hidden ? "none" : "auto",
                      }}
                    >
                      <div className="relative w-full h-full overflow-hidden border border-black/10 shadow-2xl shadow-black/25">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1280px) 25vw, 20vw"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/30" />
            </div>

            {/* Ring indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {ringImages.map((img, i) => (
                <button
                  key={img.src}
                  aria-label={`Show image ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1 transition-all duration-300 ${
                    i === active ? "w-8 bg-accent" : "w-4 bg-primary/20 hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}