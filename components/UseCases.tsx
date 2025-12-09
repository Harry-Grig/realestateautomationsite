"use client";

import { motion } from "framer-motion";
import {
  Home,
  PhoneCall,
  Calendar,
  MessageCircle,
  FileSearch,
  BarChart3,
} from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Buyer Lead Qualification",
    description:
      "AI instantly filters serious buyers, asks budget, location, and timeline questions, and routes only high-intent prospects to your agents.",
  },
  {
    icon: PhoneCall,
    title: "Instant Lead Follow-Up",
    description:
      "Every new lead is contacted in seconds via SMS, WhatsApp, or email — even outside office hours.",
  },
  {
    icon: Calendar,
    title: "Automated Viewing Bookings",
    description:
      "AI coordinates calendars, sends confirmations, reminders, and reschedules — no human intervention needed.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Messenger AI",
    description:
      "Your AI agent chats with buyers in real time, answers questions, shares listings, and qualifies intent automatically.",
  },
  {
    icon: FileSearch,
    title: "Listing & Property Matching",
    description:
      "AI matches buyer needs with your property database and suggests the best available options instantly.",
  },
  {
    icon: BarChart3,
    title: "Sales Performance Analytics",
    description:
      "Track response times, lead quality, booking rates, and conversion metrics in real time with AI-powered insights.",
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative w-full py-32 bg-bg-main overflow-hidden isolate"
    >
      {/* Background Accent (STATIC) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-electric/10 blur-[140px]" />
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
            Real Estate Use Cases
          </p>

          <h2 className="pointer-events-none text-4xl font-bold leading-tight text-text-heading md:text-5xl">
            Where AI Delivers Immediate ROI For Your Agency
          </h2>

          <p className="pointer-events-none text-lg leading-relaxed text-text-body">
            These are real-world, production-grade AI automations that generate
            measurable revenue impact — not experiments.
          </p>
        </motion.div>

        {/* ✅ STATIC GRID WRAPPER */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer rounded-2xl border border-border-soft bg-bg-card-dark p-8 shadow-xl transition-all hover:-translate-y-2 hover:border-gold"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-bg-section">
                <useCase.icon className="h-6 w-6 text-electric" />
              </div>

              {/* Title */}
              <h3 className="pointer-events-none mb-3 text-lg font-semibold text-text-heading">
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="pointer-events-none text-sm leading-relaxed text-text-muted-custom">
                {useCase.description}
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
            These systems work together as a single AI-powered revenue engine —
            not disconnected tools.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
