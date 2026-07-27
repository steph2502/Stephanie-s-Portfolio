"use client";

import { motion } from "framer-motion";

import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

// Slight vertical stagger per pill so the cloud reads as loosely scattered
// rather than a strict grid, without needing category labels or cards.
const OFFSETS = ["mt-0", "mt-4", "mt-2", "mt-6", "mt-1", "mt-5"];

export function Skills() {
  return (
    <section id="skills" className="section-y">
      <div className="container-app">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I build with"
          description="A focused stack for shipping reliable backends and practical AI, chosen for maturity and clarity over hype."
        />

        <div className="mt-16 flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
              style={{ animationDelay: `${(i % 6) * 0.4}s` }}
              className={`animate-pill-float ${OFFSETS[i % OFFSETS.length]} inline-flex items-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
