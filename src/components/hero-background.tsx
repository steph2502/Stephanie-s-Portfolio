"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Subtle, engineering-inspired hero backdrop: a blueprint grid, a handful of
 * API connection nodes, a soft glow, and a tiny animated terminal + git graph.
 * Everything is intentionally quiet -- this sits behind editorial type, it
 * should never compete with it. The decorative elements stay neutral (sand,
 * not gold) so the accent colour stays reserved for buttons, links and icons.
 */

const NODES = [
  { x: 82, y: 18 },
  { x: 92, y: 42 },
  { x: 74, y: 58 },
  { x: 95, y: 72 },
  { x: 68, y: 30 },
  { x: 88, y: 88 },
];

const EDGES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [0, 4],
  [2, 3],
  [3, 5],
  [4, 2],
];

const COMMAND = 'git commit -m "feat: hybrid ACO+PSO scheduler"';

function TerminalWidget() {
  const prefersReduced = useReducedMotion();
  const [typed, setTyped] = useState(prefersReduced ? COMMAND : "");

  useEffect(() => {
    if (prefersReduced) return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, [prefersReduced]);

  return (
    <div className="w-[300px] rounded-xl border border-border bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.3)] sm:w-[340px]">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-2 text-[11px] font-medium text-muted-foreground">
          zsh
        </span>
      </div>
      <div className="px-3 py-3 font-mono text-[12px] leading-relaxed text-foreground/80">
        <p className="text-muted-foreground">
          <span className="text-accent">➜</span> ~/timetabling-system
        </p>
        <p className="mt-1">
          <span className="text-success">$</span> {typed}
          <span className="animate-caret text-foreground">|</span>
        </p>
        <p className="mt-1 text-muted-foreground">
          3 files changed, 128 insertions(+)
        </p>
      </div>
    </div>
  );
}

export function HeroBackground() {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #d4c5b0 1px, transparent 1px), linear-gradient(to bottom, #d4c5b0 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 70% 30%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 70% 30%, black 0%, transparent 75%)",
        }}
      />

      {/* Soft glow */}
      <div className="absolute right-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-sand/10 blur-3xl" />
      <div className="absolute right-[20%] top-[40%] h-[260px] w-[260px] rounded-full bg-sand/[0.07] blur-3xl" />

      {/* API connection nodes */}
      <svg
        className="absolute right-0 top-0 hidden h-full w-full lg:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {EDGES.map(([a, b], i) => {
          const from = NODES[a];
          const to = NODES[b];
          return (
            <motion.line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#d4c5b0"
              strokeOpacity={0.16}
              strokeWidth={0.15}
              initial={prefersReduced ? undefined : { pathLength: 0, opacity: 0 }}
              animate={prefersReduced ? undefined : { pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.3 + i * 0.12, ease: "easeOut" }}
            />
          );
        })}
        {NODES.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={0.9}
            fill="#d4c5b0"
            fillOpacity={0.4}
            initial={prefersReduced ? undefined : { scale: 0, opacity: 0 }}
            animate={
              prefersReduced
                ? undefined
                : { scale: [0, 1.4, 1], opacity: [0, 0.6, 0.4] }
            }
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: "easeOut" }}
          />
        ))}
        {!prefersReduced &&
          NODES.map((node, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={node.x}
              cy={node.y}
              r={0.9}
              fill="none"
              stroke="#d4c5b0"
              strokeWidth={0.2}
              strokeOpacity={0.3}
              animate={{ r: [0.9, 3], opacity: [0.3, 0] }}
              transition={{
                duration: 2.6,
                delay: 1 + i * 0.4,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
      </svg>

      {/* Terminal + git graph cluster */}
      <div className="absolute bottom-10 right-6 hidden flex-col gap-4 md:right-10 md:flex lg:right-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <TerminalWidget />
        </motion.div>
      </div>
    </div>
  );
}
