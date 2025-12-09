"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <section className="relative w-full bg-bg-main py-12 overflow-hidden isolate border-t border-border-soft">
      {/* ✅ STATIC LAYOUT WRAPPER */}
      <div className="mx-auto max-w-7xl px-6">
        {/* ✅ Only this inner block animates */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
        >
          {/* LEFT — BRAND */}
          <div className="flex flex-col gap-2">
            <span className="pointer-events-none text-sm font-semibold text-text-heading">
              AI Automation for Real Estate
            </span>
            <span className="pointer-events-none text-xs text-text-muted-custom">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          {/* CENTER — LEGAL */}
          <div className="flex items-center gap-6 text-xs">
            <a
              href="/privacy"
              className="cursor-pointer text-text-body transition-colors hover:text-text-heading"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="cursor-pointer text-text-body transition-colors hover:text-text-heading"
            >
              Terms
            </a>
            <a
              href="/cookies"
              className="cursor-pointer text-text-body transition-colors hover:text-text-heading"
            >
              Cookies
            </a>
          </div>

          {/* RIGHT — CONTACT */}
          <div className="flex flex-col items-center gap-3 text-xs md:items-end">
            <div className="flex items-center gap-2 text-text-body">
              <Mail className="h-3.5 w-3.5 text-electric" />
              <a
                href="mailto:contact@youragency.com"
                className="cursor-pointer transition-colors hover:text-text-heading"
              >
                contact@youragency.com
              </a>
            </div>

            <div className="flex items-center gap-2 text-text-body">
              <Phone className="h-3.5 w-3.5 text-electric" />
              <a
                href="tel:+301234567890"
                className="cursor-pointer transition-colors hover:text-text-heading"
              >
                +30 123 456 7890
              </a>
            </div>

            <div className="flex items-center gap-2 text-text-body">
              <MapPin className="h-3.5 w-3.5 text-electric" />
              <span className="pointer-events-none">Athens, Greece</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
