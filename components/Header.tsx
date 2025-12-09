"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Results", href: "#results" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-bg-main/80 backdrop-blur-xl border-b border-border-soft isolate">
      {/* ✅ STATIC LAYOUT WRAPPER */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* LEFT — BRAND */}
        <div className="flex items-center gap-2">
          <span className="pointer-events-none text-sm font-bold tracking-wide text-text-heading">
            AI Real Estate
          </span>
        </div>

        {/* CENTER — NAV (DESKTOP) */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="cursor-pointer text-sm font-medium text-text-body transition-colors hover:text-text-heading"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* RIGHT — CTA */}
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="cursor-pointer bg-gold text-black hover:bg-gold/90"
          >
            Book Call
          </Button>
        </div>
      </div>
    </header>
  );
}
