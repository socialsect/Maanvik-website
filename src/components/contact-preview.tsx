"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/data/site";

export function ContactPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Get in Touch"
            heading="Let's Talk About Your Requirements"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              {site.phone.map((p) => (
                <div key={p} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-border bg-surface flex-shrink-0">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary mb-0.5">Phone</p>
                    <a
                      href={`tel:${p}`}
                      className="text-primary font-medium hover:text-accent transition-colors"
                    >
                      {p}
                    </a>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-border bg-surface flex-shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-secondary mb-0.5">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-primary font-medium hover:text-accent transition-colors"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-border bg-surface flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-secondary mb-0.5">Address</p>
                  <p className="text-primary">{site.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-border bg-surface flex-shrink-0">
                  <Clock className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-secondary mb-0.5">
                    Business Hours
                  </p>
                  <p className="text-primary">
                    {site.hours.weekdays}
                    <br />
                    {site.hours.time}
                  </p>
                  <p className="text-sm text-secondary mt-1">
                    Sunday: {site.hours.sunday}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href={`https://wa.me/91${site.phone[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-sm font-medium text-primary hover:border-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href="https://www.google.com/maps?q=28.791838,77.053101"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full min-h-[300px] bg-surface-alt border border-border hover:border-accent/30 transition-colors relative overflow-hidden group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.053101!3d28.791838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s28.791838%2C77.053101!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maanvik Paper Co. location on Google Maps"
                className="absolute inset-0"
              />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 text-xs font-medium text-primary shadow-md">
                View on Google Maps
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
