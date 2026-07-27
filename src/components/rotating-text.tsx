"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * Cycles through a list of phrases with a quiet fade/slide transition.
 * Renders only the first phrase (no animation, no timer) when the user
 * prefers reduced motion.
 */
export function RotatingText({
  words,
  interval = 2800,
  className,
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReduced || words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [prefersReduced, words.length, interval]);

  if (prefersReduced) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={cn("inline-block", className)}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}
