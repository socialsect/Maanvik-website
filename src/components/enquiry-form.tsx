"use client";

import { useState } from "react";
import { Send, Phone, Mail } from "lucide-react";
import { site } from "@/data/site";

export function EnquiryForm() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    alert("Thank you for your enquiry. We will get back to you soon.");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="enquiry-name" className="block text-xs font-medium text-secondary mb-1.5">
              Name *
            </label>
            <input
              id="enquiry-name"
              type="text"
              required
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-surface border border-border text-primary text-sm placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="enquiry-company" className="block text-xs font-medium text-secondary mb-1.5">
              Company
            </label>
            <input
              id="enquiry-company"
              type="text"
              value={formState.company}
              onChange={(e) =>
                setFormState({ ...formState, company: e.target.value })
              }
              className="w-full px-4 py-3 bg-surface border border-border text-primary text-sm placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors"
              placeholder="Company name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="enquiry-phone" className="block text-xs font-medium text-secondary mb-1.5">
              Phone *
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              required
              value={formState.phone}
              onChange={(e) =>
                setFormState({ ...formState, phone: e.target.value })
              }
              className="w-full px-4 py-3 bg-surface border border-border text-primary text-sm placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors"
              placeholder="Phone number"
            />
          </div>
          <div>
            <label htmlFor="enquiry-email" className="block text-xs font-medium text-secondary mb-1.5">
              Email
            </label>
            <input
              id="enquiry-email"
              type="email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-surface border border-border text-primary text-sm placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors"
              placeholder="Email address"
            />
          </div>
        </div>

        <div>
          <label htmlFor="enquiry-product" className="block text-xs font-medium text-secondary mb-1.5">
            Product Interest
          </label>
          <select
            id="enquiry-product"
            value={formState.product}
            onChange={(e) =>
              setFormState({ ...formState, product: e.target.value })
            }
            className="w-full px-4 py-3 bg-surface border border-border text-primary text-sm focus:outline-none focus:border-accent transition-colors"
          >
            <option value="">Select a product category</option>
            <option value="labels">Labels & Stickers</option>
            <option value="ribbons">Ribbons</option>
            <option value="equipment">Barcode Equipment</option>
            <option value="services">Printing Services</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="enquiry-message" className="block text-xs font-medium text-secondary mb-1.5">
            Message
          </label>
          <textarea
            id="enquiry-message"
            rows={4}
            value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            className="w-full px-4 py-3 bg-surface border border-border text-primary text-sm placeholder:text-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
            placeholder="Tell us about your requirement"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <Send className="w-4 h-4" />
          Send Enquiry
        </button>
      </form>

      {/* Contact Details */}
      <div className="space-y-6">
        <div className="p-6 border border-border bg-surface-alt space-y-4">
          <h3 className="font-semibold text-primary">Quick Contact</h3>
          <div className="space-y-3">
            {site.phone.map((p) => (
              <a
                key={p}
                href={`tel:${p}`}
                className="flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                {p}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-accent" />
              {site.email}
            </a>
          </div>
        </div>

        <div className="p-6 border border-border bg-surface-alt space-y-2">
          <h3 className="font-semibold text-primary text-sm">Business Hours</h3>
          <p className="text-sm text-secondary">
            {site.hours.weekdays}: {site.hours.time}
          </p>
          <p className="text-sm text-secondary">
            Sunday: {site.hours.sunday}
          </p>
        </div>
      </div>
    </div>
  );
}
