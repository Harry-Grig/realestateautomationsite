"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-bg-main">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-electric/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 py-32 lg:grid-cols-2">
        {/* LEFT: COPY */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          {/* Badge */}
          <div className="flex w-fit items-center gap-2 rounded-full border border-border-soft bg-bg-card-dark px-5 py-2 text-sm text-text-body">
            <Sparkles size={16} className="text-gold" />
            AI Automation For Real Estate Agencies
          </div>

          {/* Headline */}
          <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-text-heading md:text-6xl">
            Close More Deals With Your{" "}
            <span className="text-gold">AI-Powered</span> Sales System
          </h1>

          {/* Subheadline */}
          <p className="max-w-xl text-lg leading-relaxed text-text-body">
            We build custom AI automations that instantly qualify your leads,
            follow up in real time, book appointments automatically, and remove
            manual work from your agency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group bg-gold text-black hover:bg-gold/90"
            >
              Book Free AI Audit
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border-soft text-text-body hover:bg-bg-card-dark"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Line */}
          <div className="flex items-center gap-4 pt-4 text-sm text-text-muted-custom">
            <div className="h-2 w-2 rounded-full bg-success" />
            Trusted by modern real estate professionals
          </div>
        </motion.div>

        {/* RIGHT: DASHBOARD MOCKUP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-2xl border border-border-soft bg-bg-card-dark p-4 shadow-2xl">
            {/* Fake AI UI Header */}
            <div className="flex items-center justify-between border-b border-border-soft pb-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-error" />
                <div className="h-2 w-2 rounded-full bg-warning" />
                <div className="h-2 w-2 rounded-full bg-success" />
              </div>
              <span className="text-xs text-text-muted-custom">
                AI Control Panel
              </span>
            </div>

            {/* Fake AI Content */}
            <div className="mt-5 grid gap-4">
              <div className="rounded-xl bg-bg-section p-4">
                <p className="text-sm text-text-muted-custom">Incoming Lead</p>
                <p className="text-text-heading font-medium">
                  New Buyer – Athens
                </p>
              </div>

              <div className="rounded-xl bg-bg-section p-4">
                <p className="text-sm text-text-muted-custom">
                  AI Qualification
                </p>
                <p className="text-success font-medium">✅ Ready For Contact</p>
              </div>

              <div className="rounded-xl bg-bg-section p-4">
                <p className="text-sm text-text-muted-custom">Appointment</p>
                <p className="text-text-heading font-medium">
                  📅 Booked Automatically
                </p>
              </div>
            </div>
          </div>

          {/* Floating Glow */}
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-electric/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
