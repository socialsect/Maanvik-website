# Maanvik-website

Website for **Maanvik Paper Co.** — self-adhesive labels, barcode stickers, thermal transfer ribbons and barcode equipment for businesses across India.

Built with [Next.js](https://nextjs.org) (App Router), Tailwind CSS v4, framer-motion and lucide-react.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — pages (home, products, gallery, about, contact, services)
- `src/components` — sections and UI components
- `src/data` — site config, products, categories
- `public/images` — label/ribbon/equipment product imagery
- `public/brand` — logo variations and brand assets
- `image-mapping.json` — image inventory + intended subject for each asset

## SEO Features

- Structured data (JSON-LD): Organization, LocalBusiness, Product, BreadcrumbList, WebSite
- Sitemap generation (`src/app/sitemap.ts`)
- robots.txt
- Open Graph + Twitter Card metadata
- Canonical URLs
- Breadcrumb navigation with schema
- Product metadata with `generateStaticParams`
- Security headers configured in `next.config.ts`