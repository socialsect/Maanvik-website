import type { Metadata } from "next";
import { ProductsContent } from "./products-content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our range of self-adhesive labels, barcode stickers, thermal transfer ribbons, barcode printers, scanners and printing services from Maanvik Paper Co.",
  openGraph: {
    title: "Products | Maanvik Paper Co.",
    description:
      "Explore our range of self-adhesive labels, barcode stickers, thermal transfer ribbons, barcode printers, scanners and printing services.",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
