"use client";

import { motion } from "framer-motion";
import { Search, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "Step 1",
    title: "We Analyze Your Agency",
    description:
      "We deeply analyze your lead flow, sales process, CRM, communication channels, and bottlenecks to understand exactly how automation should be applied.",
  },
  {
    icon: Settings,
    step: "Step 2",
    title: "We Build Your AI Systems",
    description:
      "We engineer custom AI workflows tailored to your agency — from lead qualification to automated follow-ups and appointment booking.",
  },
  {
    icon: Rocket,
    step: "Step 3",
    title: "You Scale Automatically",
    description:
      "Your AI systems run 24/7, qualifying, messaging, booking, and syncing data while your agents focus only on closing.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-32 bg-bg-section overflow-hidden isolate">
      {/* Background Accent (STATIC) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />
      </div>

      {/* ✅ STATIC LAYOUT WRAPPER — NEVER MOTION */}
      <div className="mx-auto max-w-7xl px-6">
        {/* ✅ Animated Header Block ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 flex max-w-3xl flex-col gap-6"
        >
          <p className="pointer-events-none text-sm font-medium uppercase tracking-widest text-gold">
            How It Works
          </p>

          <h2 className="pointer-events-none text-4xl font-bold leading-tight text-text-heading md:text-5xl">
            From Setup To Scaled Sales In 3 Simple Steps
          </h2>

          <p className="pointer-events-none text-lg leading-relaxed text-text-body">
            You don’t need to manage tools, scripts, or integrations. We handle
            everything end-to-end while you focus on your deals.
          </p>
        </motion.div>

        {/* ✅ STATIC GRID WRAPPER */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-border-soft bg-bg-card-dark p-10 shadow-xl transition-all hover:-translate-y-2 hover:border-gold"
            >
              {/* Step Label */}
              <span className="pointer-events-none mb-4 inline-block rounded-full bg-bg-section px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                {step.step}
              </span>

              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-bg-section">
                <step.icon className="h-6 w-6 text-electric" />
              </div>

              {/* Title */}
              <h3 className="pointer-events-none mb-4 text-xl font-semibold text-text-heading">
                {step.title}
              </h3>

              {/* Description */}
              <p className="pointer-events-none text-sm leading-relaxed text-text-muted-custom">
                {step.description}
              </p>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-electric/5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Animated Bottom Authority Line ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 max-w-4xl"
        >
          <p className="pointer-events-none text-lg font-medium leading-relaxed text-text-heading">
            In under 10 days, your agency can operate with a fully automated AI
            sales engine running in the background — 24/7.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
