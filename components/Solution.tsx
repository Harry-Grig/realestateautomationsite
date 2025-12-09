"use client";

import { motion } from "framer-motion";
import {
  Bot,
  CalendarCheck,
  MessageSquare,
  Database,
  Workflow,
  Users,
} from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "AI Lead Qualification",
    description:
      "Your AI instantly qualifies every new lead, filters serious buyers, and routes only high-intent prospects to your agents.",
  },
  {
    icon: MessageSquare,
    title: "Instant AI Follow-Ups",
    description:
      "Every lead gets contacted in seconds via WhatsApp, SMS, or email — even outside business hours.",
  },
  {
    icon: CalendarCheck,
    title: "Auto Appointment Booking",
    description:
      "Your calendar fills automatically with qualified buyers without manual coordination.",
  },
  {
    icon: Database,
    title: "CRM Sync & Data Enrichment",
    description:
      "All conversations, lead data, and actions sync directly into your CRM in real time.",
  },
  {
    icon: Workflow,
    title: "Custom Automation Workflows",
    description:
      "We build fully custom logic based on how your agency actually operates — not templates.",
  },
  {
    icon: Users,
    title: "Multi-Agent AI Systems",
    description:
      "Multiple AI agents work together across sales, support, and operations for full automation.",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative w-full bg-bg-main py-32 overflow-hidden"
    >
      {/* Background Accent (STATIC) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-electric/10 blur-[140px]" />
      </div>

      {/* ✅ STATIC layout wrapper — NEVER motion */}
      <div className="mx-auto max-w-7xl px-6">
        {/* ✅ ONLY THIS HEADER BLOCK IS ANIMATED */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 flex max-w-3xl flex-col gap-6"
        >
          <p className="pointer-events-none text-sm font-medium uppercase tracking-widest text-gold">
            The Solution
          </p>

          <h2 className="pointer-events-none text-4xl font-bold leading-tight text-text-heading md:text-5xl">
            A Complete AI Automation Stack Built For Real Estate
          </h2>

          <p className="pointer-events-none text-lg leading-relaxed text-text-body">
            We don’t sell chatbots. We engineer full AI-powered sales systems
            that replace manual work, accelerate response times, and scale your
            revenue without scaling your team.
          </p>
        </motion.div>

        {/* ✅ STATIC GRID WRAPPER */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer rounded-2xl border border-border-soft bg-bg-card-dark p-8 shadow-xl transition-all hover:-translate-y-2 hover:border-gold"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-bg-section">
                <solution.icon className="h-6 w-6 text-electric" />
              </div>

              <h3 className="pointer-events-none mb-3 text-lg font-semibold text-text-heading">
                {solution.title}
              </h3>

              <p className="pointer-events-none text-sm leading-relaxed text-text-muted-custom">
                {solution.description}
              </p>

              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-electric/5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Animated bottom authority line ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 max-w-4xl"
        >
          <p className="pointer-events-none text-lg font-medium leading-relaxed text-text-heading">
            This is not another SaaS tool — it’s a fully customized AI
            infrastructure built specifically for your agency’s workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
