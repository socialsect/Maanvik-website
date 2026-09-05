import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SkipToContent } from "@/components/skip-to-content";
import { site } from "@/data/site";

const SITE_URL = "https://maanvikpaperco.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
    siteName: "Maanvik Paper Co.",
    images: [
      {
        url: "/images/og-share.jpg",
        width: 1200,
        height: 630,
        alt: "Maanvik Paper Co. — Self-Adhesive Labels & Barcode Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maanvik Paper Co. — Self-Adhesive Labels & Barcode Solutions",
    description:
      "Reliable self-adhesive labels, barcode solutions and printing products for businesses across India.",
    images: ["/images/og-share.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/symbol.png", type: "image/png", sizes: "any" },
    ],
    apple: "/brand/symbol.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/primary.png`,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "M155, Sector 2, Bawana Industrial Area",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    contactPoint: site.phone.map((p) => ({
      "@type": "ContactPoint",
      telephone: `+91${p}`,
      contactType: "sales",
    })),
    sameAs: [site.social.instagram, site.social.facebook],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: SITE_URL,
    telephone: `+91${site.phone[0]}`,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "M155, Sector 2, Bawana Industrial Area",
      addressLocality: "Delhi",
      addressRegion: "DL",
      postalCode: "110039",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.791838,
      longitude: 77.053101,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    image: `${SITE_URL}/images/og-share.jpg`,
    priceRange: "$$",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/products?category={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SkipToContent />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
