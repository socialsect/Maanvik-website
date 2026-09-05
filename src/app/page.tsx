import { Hero } from "@/components/hero";
import { UspStrip } from "@/components/usp-strip";
import { AboutPreview } from "@/components/about-preview";
import { ProductCategories } from "@/components/product-categories";
import { FeaturedProducts } from "@/components/featured-products";
import { TrustSection } from "@/components/trust-section";
import { WhyMaanvik } from "@/components/why-maanvik";
import { Testimonials } from "@/components/testimonials";
import { Applications } from "@/components/applications";
import { FaqSection } from "@/components/faq-section";
import { ClientLogos } from "@/components/client-logos";
import { Newsletter } from "@/components/newsletter";
import { CtaBanner } from "@/components/cta-banner";
import { ContactPreview } from "@/components/contact-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <UspStrip />
      <AboutPreview />
      <ProductCategories />
      <FeaturedProducts />
      <TrustSection />
      <WhyMaanvik />
      <ClientLogos />
      <Testimonials />
      <Applications />
      <FaqSection />
      <Newsletter />
      <CtaBanner />
      <ContactPreview />
    </>
  );
}
