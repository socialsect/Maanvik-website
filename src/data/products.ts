export interface Product {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: string;
  featured: boolean;
  image: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  includes: string[];
  image: string;
}

export const categories: Category[] = [
  {
    slug: "labels-stickers",
    name: "Labels & Stickers",
    description:
      "Barcode labels, thermal stickers, washcare labels and other self-adhesive labelling solutions.",
    includes: [
      "Barcode Labels",
      "Thermal Stickers",
      "Direct Thermal Stickers",
      "Taffeta Washcare Labels",
      "Amazon Printing Stickers",
      "Flipkart Printing Stickers",
      "Amazon Invoice Stickers",
      "Flipkart Invoice Stickers",
      "Mantes Billing Stickers",
    ],
    image: "/images/category-labels.jpg",
  },
  {
    slug: "ribbons",
    name: "Ribbons",
    description:
      "Thermal transfer ribbons for reliable and clear barcode printing.",
    includes: ["Wax Ribbons", "Wax Resin Ribbons"],
    image: "/images/category-ribbons.jpg",
  },
  {
    slug: "barcode-equipment",
    name: "Barcode Equipment",
    description:
      "Essential equipment for barcode printing, scanning and labelling.",
    includes: ["Barcode Printers", "Barcode Scanners", "Hand Labellers"],
    image: "/images/category-equipment.jpg",
  },
  {
    slug: "printing-services",
    name: "Printing Services",
    description:
      "Barcode printing services for business and labelling requirements.",
    includes: ["Barcode Printing Service"],
    image: "/images/category-services.jpg",
  },
];

export const products: Product[] = [
  {
    slug: "barcode-labels",
    name: "Barcode Labels",
    description:
      "Reliable self-adhesive barcode labels for identification and inventory needs.",
    shortDescription: "Reliable adhesive barcode labels",
    category: "Labels & Stickers",
    featured: true,
    image: "/images/barcode-labels.jpg",
  },
  {
    slug: "thermal-stickers",
    name: "Thermal Stickers",
    description:
      "Thermal transfer stickers for clear and smudge-free printing results.",
    shortDescription: "Smudge-free thermal stickers",
    category: "Labels & Stickers",
    featured: true,
    image: "/images/thermal-stickers.jpg",
  },
  {
    slug: "direct-thermal-stickers",
    name: "Direct Thermal Stickers",
    description:
      "Direct thermal stickers that print clearly without ribbons or toner.",
    shortDescription: "Ribbon-free direct thermal stickers",
    category: "Labels & Stickers",
    featured: true,
    image: "/images/direct-thermal.jpg",
  },
  {
    slug: "taffeta-washcare-labels",
    name: "Taffeta Washcare Labels",
    description:
      "Durable taffeta washcare labels for garment and textile labelling.",
    shortDescription: "Durable garment washcare labels",
    category: "Labels & Stickers",
    featured: true,
    image: "/images/washcare-labels.jpg",
  },
  {
    slug: "amazon-printing-stickers",
    name: "Amazon Printing Stickers",
    description:
      "Printing stickers designed for Amazon shipping and labelling needs.",
    shortDescription: "Stickers for Amazon shipments",
    category: "Labels & Stickers",
    featured: false,
    image: "/images/e-commerce-stickers.jpg",
  },
  {
    slug: "flipkart-printing-stickers",
    name: "Flipkart Printing Stickers",
    description:
      "Printing stickers designed for Flipkart shipping and labelling needs.",
    shortDescription: "Stickers for Flipkart shipments",
    category: "Labels & Stickers",
    featured: false,
    image: "/images/e-commerce-stickers.jpg",
  },
  {
    slug: "amazon-invoice-stickers",
    name: "Amazon Invoice Stickers",
    description:
      "Invoice stickers for Amazon orders and documentation.",
    shortDescription: "Invoice stickers for Amazon",
    category: "Labels & Stickers",
    featured: false,
    image: "/images/barcode-labels.jpg",
  },
  {
    slug: "flipkart-invoice-stickers",
    name: "Flipkart Invoice Stickers",
    description:
      "Invoice stickers for Flipkart orders and documentation.",
    shortDescription: "Invoice stickers for Flipkart",
    category: "Labels & Stickers",
    featured: false,
    image: "/images/barcode-labels.jpg",
  },
  {
    slug: "mantes-billing-stickers",
    name: "Mantes Billing Stickers",
    description:
      "Billing stickers for Mantes POS and billing systems.",
    shortDescription: "Billing stickers for Mantes POS",
    category: "Labels & Stickers",
    featured: false,
    image: "/images/thermal-stickers.jpg",
  },
  {
    slug: "wax-ribbons",
    name: "Wax Ribbons",
    description:
      "Thermal transfer wax ribbons for clear and cost-effective barcode printing.",
    shortDescription: "Cost-effective wax ribbons",
    category: "Ribbons",
    featured: true,
    image: "/images/wax-ribbons.jpg",
  },
  {
    slug: "wax-resin-ribbons",
    name: "Wax Resin Ribbons",
    description:
      "Wax resin ribbons for durable and high-resolution barcode printing.",
    shortDescription: "High-resolution wax resin ribbons",
    category: "Ribbons",
    featured: false,
    image: "/images/wax-ribbons.jpg",
  },
  {
    slug: "barcode-printers",
    name: "Barcode Printers",
    description:
      "Reliable barcode printers for labels, stickers and shipping documentation.",
    shortDescription: "Reliable label printers",
    category: "Barcode Equipment",
    featured: true,
    image: "/images/barcode-printers.jpg",
  },
  {
    slug: "barcode-scanners",
    name: "Barcode Scanners",
    description:
      "Accurate barcode scanners for inventory and point-of-sale needs.",
    shortDescription: "Accurate barcode scanners",
    category: "Barcode Equipment",
    featured: true,
    image: "/images/barcode-scanners.jpg",
  },
  {
    slug: "hand-labellers",
    name: "Hand Labellers",
    description:
      "Manual hand labellers for quick and efficient price and product tagging.",
    shortDescription: "Quick manual labelling tools",
    category: "Barcode Equipment",
    featured: true,
    image: "/images/hand-labellers.jpg",
  },
  {
    slug: "barcode-printing-service",
    name: "Barcode Printing Service",
    description:
      "Professional barcode printing service for businesses and labelling requirements.",
    shortDescription: "Professional barcode printing",
    category: "Printing Services",
    featured: false,
    image: "/images/printing-service.jpg",
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => {
    const cat = categories.find((c) => c.slug === categorySlug);
    return cat && p.category === cat.name;
  });
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
