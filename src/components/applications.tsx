"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import {
  ScanBarcode,
  Printer,
  Truck,
  FileText,
  Tag,
  Package,
} from "lucide-react";

const applications = [
  {
    icon: ScanBarcode,
    title: "Barcode Identification",
  },
  {
    icon: Printer,
    title: "Thermal Printing",
  },
  {
    icon: Truck,
    title: "E-commerce Shipping",
  },
  {
    icon: FileText,
    title: "Invoice Labelling",
  },
  {
    icon: Tag,
    title: "Washcare Labelling",
  },
  {
    icon: Package,
    title: "Product Labelling",
  },
];

export function Applications() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Applications"
          heading="Made for Practical Labelling Needs"
          description="From barcode identification to e-commerce and invoice labelling, Maanvik provides products for a range of everyday printing and labelling requirements."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {applications.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group border border-border bg-surface p-6 text-center hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-border group-hover:border-accent/30 transition-colors">
                <app.icon className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-sm font-medium text-primary leading-tight">
                {app.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
