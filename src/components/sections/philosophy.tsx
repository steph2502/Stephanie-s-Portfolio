"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { engineeringQuotes } from "@/lib/data";

export function Philosophy() {
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReduced || engineeringQuotes.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % engineeringQuotes.length);
    }, 6000);
    return () => clearInterval(id);
  }, [prefersReduced]);

  const current = engineeringQuotes[prefersReduced ? 0 : index];

  return (
    <section className="section-y">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            How I Think
          </p>

          <div className="mt-6 min-h-[8rem] sm:min-h-[7rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.quote}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="text-balance text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {current.author}
                  {current.source ? `, ${current.source}` : ""}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
