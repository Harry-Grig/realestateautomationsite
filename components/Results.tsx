"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, CheckCircle, Users } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "+41%",
    label: "Lead Response Rate",
    description:
      "Agencies using AI respond to buyers instantly — massively increasing engagement.",
  },
  {
    icon: Clock,
    value: "-67%",
    label: "Manual Work",
    description:
      "Admin tasks, follow-ups, and scheduling are handled automatically.",
  },
  {
    icon: CheckCircle,
    value: "+28%",
    label: "Closing Rate",
    description: "Only qualified, high-intent buyers reach your sales agents.",
  },
  {
    icon: Users,
    value: "24/7",
    label: "Always-On Sales",
    description:
      "Your AI works non-stop — nights, weekends, and peak demand hours.",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="relative w-full py-32 bg-bg-section overflow-hidden isolate"
    >
      {/* Background Accent (STATIC) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-electric/10 blur-[140px]" />
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
            Results & Performance
          </p>

          <h2 className="pointer-events-none text-4xl font-bold leading-tight text-text-heading md:text-5xl">
            Measurable Growth From Day One
          </h2>

          <p className="pointer-events-none text-lg leading-relaxed text-text-body">
            These are the real performance improvements agencies experience
            after deploying AI automation across their sales operations.
          </p>
        </motion.div>

        {/* ✅ STATIC METRICS GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer rounded-2xl border border-border-soft bg-bg-card-dark p-8 text-center shadow-xl transition-all hover:-translate-y-2 hover:border-gold"
            >
              {/* Icon */}
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-bg-section">
                <metric.icon className="h-6 w-6 text-electric" />
              </div>

              {/* Value */}
              <p className="pointer-events-none mb-2 text-3xl font-bold text-text-heading">
                {metric.value}
              </p>

              {/* Label */}
              <p className="pointer-events-none mb-3 text-sm font-medium text-text-body">
                {metric.label}
              </p>

              {/* Description */}
              <p className="pointer-events-none text-xs leading-relaxed text-text-muted-custom">
                {metric.description}
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
            Agencies that adopt automation early dominate their local markets
            faster, leaner, and with significantly higher margins.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
