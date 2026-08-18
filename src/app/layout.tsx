import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Maanvik Paper Co. — Self-Adhesive Labels & Barcode Solutions",
    template: "%s | Maanvik Paper Co.",
  },
  description:
    "Reliable self-adhesive labels, barcode solutions and printing products for businesses across India. Based in Delhi.",
  keywords: [
    "self-adhesive labels",
    "barcode labels",
    "thermal stickers",
    "barcode printers",
    "barcode scanners",
    "wax ribbons",
    "Delhi",
    "India",
    "Maanvik Paper Co.",
  ],
  openGraph: {
    title: "Maanvik Paper Co. — Self-Adhesive Labels & Barcode Solutions",
    description:
      "Reliable self-adhesive labels, barcode solutions and printing products for businesses across India.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/brand/symbol.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
