"use client";

import { motion } from "framer-motion";

export default function BookCallPage() {
  return (
    <main className="bg-bg-main w-full overflow-hidden">
      {/* =========================
          HERO / INTRO SECTION
      ========================= */}
      <section className="relative w-full py-32 bg-bg-main overflow-hidden isolate">
        {/* Background Glow (STATIC) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-electric/10 blur-[160px]" />
          <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-gold/10 blur-[160px]" />
        </div>

        {/* ✅ STATIC LAYOUT WRAPPER */}
        <div className="mx-auto max-w-4xl px-6">
          {/* ✅ ONLY THIS BLOCK IS ANIMATED */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <h1 className="pointer-events-none text-4xl font-bold md:text-5xl text-text-heading">
              Book Your Free AI Strategy Call
            </h1>

            <p className="pointer-events-none max-w-2xl text-lg leading-relaxed text-text-body">
              This 30-minute call is a focused strategy session where we analyze
              your agency’s workflow and map out exactly how AI automation can
              increase your deal flow and remove manual work.
            </p>

            <div className="pointer-events-none flex items-center gap-2 text-sm text-text-muted-custom">
              <div className="h-2 w-2 rounded-full bg-success" />
              Limited weekly slots available
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          EMBEDDED CALENDAR (REAL BOOKING)
      ========================= */}
      <section className="relative w-full py-28 bg-bg-section isolate overflow-hidden border-t border-border-soft">
        {/* ✅ STATIC LAYOUT WRAPPER */}
        <div className="mx-auto max-w-5xl px-6">
          {/* ✅ ONLY THIS BLOCK IS ANIMATED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl border border-border-soft bg-bg-card-dark p-6 shadow-xl"
          >
            {/* ✅ REAL EMBED SLOT — YOU ONLY REPLACE THE LINK */}
            <iframe
              src="https://calendly.com/YOUR-LINK-HERE"
              className="h-[700px] w-full rounded-xl border border-border-soft bg-bg-section"
              allow="camera; microphone; fullscreen"
            />

            {/* ✅ Small trust line below calendar */}
            <p className="pointer-events-none mt-4 text-center text-xs text-text-muted-custom">
              Secure booking • No obligation • Takes less than 60 seconds
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          EXPECTATIONS SECTION
      ========================= */}
      <section className="relative w-full py-28 bg-bg-main isolate overflow-hidden border-t border-border-soft">
        {/* ✅ STATIC LAYOUT WRAPPER */}
        <div className="mx-auto max-w-6xl px-6">
          {/* ✅ ONLY THIS BLOCK IS ANIMATED */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-16 flex flex-col items-center gap-4 text-center"
          >
            <h2 className="pointer-events-none text-3xl font-bold text-text-heading">
              What You’ll Get From This Call
            </h2>

            <p className="pointer-events-none max-w-3xl text-lg text-text-body">
              This is not a sales pitch. You’ll leave with clarity, numbers, and
              a realistic automation roadmap tailored to your agency.
            </p>
          </motion.div>

          {/* ✅ STATIC GRID */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                title: "AI Automation Roadmap",
                desc: "A personalized breakdown of which AI systems will generate results fastest for your agency.",
              },
              {
                title: "Operational Bottleneck Audit",
                desc: "We identify exactly where leads are being lost and where time is being wasted.",
              },
              {
                title: "Clear ROI Projection",
                desc: "You get realistic expectations for increased deal flow, saved hours, and revenue.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-border-soft bg-bg-card-dark p-8 shadow-lg transition-all hover:-translate-y-2 hover:border-gold"
              >
                <h3 className="pointer-events-none mb-3 text-lg font-semibold text-text-heading">
                  {item.title}
                </h3>

                <p className="pointer-events-none text-sm leading-relaxed text-text-muted-custom">
                  {item.desc}
                </p>

                {/* Hover Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 rounded-2xl bg-electric/5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
