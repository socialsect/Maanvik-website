import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our range of self-adhesive labels, barcode stickers, printing products and our manufacturing facility in Delhi.",
  openGraph: {
    title: "Gallery | Maanvik Paper Co.",
    description:
      "View our range of self-adhesive labels, barcode stickers, printing products and our manufacturing facility.",
    type: "website",
  },
};

const galleryItems = [
  { title: "Barcode Labels", category: "Labels", image: "/images/gallery-1.jpg" },
  { title: "Thermal Stickers", category: "Labels", image: "/images/gallery-2.jpg" },
  { title: "Washcare Labels", category: "Labels", image: "/images/gallery-3.jpg" },
  { title: "Wax Ribbons", category: "Ribbons", image: "/images/gallery-4.jpg" },
  { title: "Barcode Printers", category: "Equipment", image: "/images/gallery-5.jpg" },
  { title: "E-commerce Stickers", category: "Labels", image: "/images/gallery-6.jpg" },
  { title: "Invoice Stickers", category: "Labels", image: "/images/gallery-7.jpg" },
  { title: "Hand Labellers", category: "Equipment", image: "/images/gallery-8.jpg" },
];

const factoryItems = [
  { title: "Factory", category: "Production Unit", image: "/images/factory-1.jpeg" },
  { title: "Factory", category: "Production Unit", image: "/images/factory-2.jpeg" },
  { title: "Factory", category: "Production Unit", image: "/images/factory-3.jpeg" },
  { title: "Factory", category: "Production Unit", image: "/images/factory-4.jpeg" },
  { title: "Factory", category: "Production Unit", image: "/images/factory-5.jpeg" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Gallery" },
            ]}
          />
          <SectionHeading
            eyebrow="Gallery"
            heading="Our Products in Detail"
            description="A look at our range of self-adhesive labels, barcode stickers, ribbons and equipment."
          />
        </div>
      </section>

      {/* Featured Factory */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Our Factory"
            heading="Inside the Production Unit"
            description="A look at our manufacturing facility behind the labels, ribbons and printing services we deliver."
          />
          <div className="space-y-4">
            <div className="group relative aspect-[16/9] lg:aspect-[21/8] bg-surface-alt border border-border overflow-hidden hover:border-accent/30 transition-all">
              <Image
                src={factoryItems[4].image}
                alt="Our production unit"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <p className="text-sm lg:text-base font-medium text-white">
                  Our Production Unit
                </p>
                <p className="text-xs text-white/70">Factory</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {factoryItems.slice(0, 4).map((item, i) => (
                <div
                  key={i}
                  className="group aspect-square bg-surface-alt border border-border overflow-hidden hover:border-accent/30 transition-all relative"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group aspect-square bg-surface-alt border border-border overflow-hidden hover:border-accent/30 transition-all relative"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/70">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
