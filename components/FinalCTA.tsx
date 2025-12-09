"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-32 bg-bg-main overflow-hidden isolate">
      {/* Background Accent (STATIC) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-30%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold/10 blur-[160px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-electric/10 blur-[140px]" />
      </div>

      {/* ✅ STATIC LAYOUT WRAPPER — NEVER MOTION */}
      <div className="mx-auto max-w-7xl px-6">
        {/* ✅ Animated Main CTA Block ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-3xl border border-border-soft bg-bg-card-dark px-10 py-20 text-center shadow-2xl"
        >
          {/* Badge */}
          <div className="pointer-events-none flex items-center gap-2 rounded-full border border-border-soft bg-bg-section px-5 py-2 text-xs font-medium tracking-widest text-gold">
            Strategy Session
          </div>

          {/* Headline */}
          <h2 className="pointer-events-none text-4xl font-bold leading-tight text-text-heading md:text-5xl">
            Book Your Free AI Strategy Call
          </h2>

          {/* Subheadline */}
          <p className="pointer-events-none max-w-2xl text-lg leading-relaxed text-text-body">
            In a 30-minute session, we’ll map out exactly how AI automation can
            increase your leads, speed up your response time, and scale your
            revenue — without adding more staff.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group cursor-pointer bg-gold text-black hover:bg-gold/90"
            >
              Book Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer border-border-soft text-text-body hover:bg-bg-section hover:text-text-heading"
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Availability
            </Button>
          </div>

          {/* Trust / Scarcity Line */}
          <div className="pointer-events-none mt-6 flex flex-col items-center gap-2 text-sm text-text-muted-custom">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success" />
              Limited weekly slots available
            </div>
            <span>For serious agencies only</span>
          </div>

          {/* Subtle Inner Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-40">
            <div className="absolute inset-0 rounded-3xl bg-electric/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
