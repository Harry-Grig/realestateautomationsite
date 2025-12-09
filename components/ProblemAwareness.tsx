"use client";

import { motion } from "framer-motion";
import {
  Clock,
  PhoneMissed,
  FileSpreadsheet,
  TrendingDown,
} from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    title: "Missed Leads",
    description:
      "Potential buyers contact your agency — but no one answers in time. The deal is already lost.",
  },
  {
    icon: Clock,
    title: "Slow Follow-Ups",
    description:
      "Speed wins in real estate. Every minute of delay drops your closing probability dramatically.",
  },
  {
    icon: FileSpreadsheet,
    title: "Manual Admin Work",
    description:
      "Your agents waste hours every day on CRM updates, emails, and repetitive data entry.",
  },
  {
    icon: TrendingDown,
    title: "Lost Revenue",
    description:
      "Leads go cold, prospects disappear, and your competitors close deals you should own.",
  },
];

export default function ProblemAwareness() {
  return (
    <motion.section
      id="problem"
      className="relative w-full bg-bg-section py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 flex max-w-3xl flex-col gap-6"
        >
          <p className="pointer-events-none text-sm font-medium uppercase tracking-widest text-gold">
            The Reality Most Agencies Face
          </p>

          <h2 className="pointer-events-none text-4xl font-bold leading-tight text-text-heading md:text-5xl">
            Every Day Without Automation Is Costing You Deals
          </h2>

          <p className="pointer-events-none text-lg leading-relaxed text-text-body">
            Real estate has become a speed game. Buyers expect instant replies,
            intelligent follow-ups, and frictionless communication — yet most
            agencies still operate manually.
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer rounded-2xl border border-border-soft bg-bg-card-dark p-8 shadow-xl transition-all hover:-translate-y-2 hover:border-gold"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-bg-section">
                <problem.icon className="h-6 w-6 text-electric" />
              </div>

              {/* Title */}
              <h3 className="pointer-events-none mb-3 text-lg font-semibold text-text-heading">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="pointer-events-none text-sm leading-relaxed text-text-muted-custom">
                {problem.description}
              </p>

              {/* Hover Glow Accent */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-electric/5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Emphasis Line */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 max-w-4xl"
        >
          <p className="pointer-events-none text-lg font-medium leading-relaxed text-text-heading">
            While your competitors automate their sales engines, most agencies
            are still chasing leads manually — losing deals before they even
            begin.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
