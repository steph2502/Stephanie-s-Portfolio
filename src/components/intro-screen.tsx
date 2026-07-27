"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Full-screen terminal "boot sequence" that plays on every page load before
 * the hero is revealed. Ties into the terminal widget already used in the
 * hero background, so it reads as part of the same visual language rather
 * than a bolted-on splash screen.
 */

const SEQUENCE = [
  { command: "whoami", output: "stephanie_onwuagbaizu" },
  { command: "cat role.txt", output: "Backend Engineer, AI Enthusiast" },
  { command: "./init_portfolio.sh", output: "Ready." },
] as const;

const TYPE_SPEED_MS = 45;

export function IntroScreen() {
  const prefersReduced = useReducedMotion();
  const [shouldRender, setShouldRender] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (prefersReduced) return;
    setShouldRender(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [prefersReduced]);

  const finish = () => {
    setExiting(true);
  };

  useEffect(() => {
    if (!shouldRender || exiting) return;
    const current = SEQUENCE[lineIndex];

    if (!current) {
      const t = setTimeout(finish, 500);
      timeouts.current.push(t);
      return;
    }

    setTyped("");
    setShowOutput(false);
    let i = 0;
    const typeInterval = setInterval(() => {
      i += 1;
      setTyped(current.command.slice(0, i));
      if (i >= current.command.length) {
        clearInterval(typeInterval);
        const t1 = setTimeout(() => setShowOutput(true), 200);
        const t2 = setTimeout(() => setLineIndex((idx) => idx + 1), 700);
        timeouts.current.push(t1, t2);
      }
    }, TYPE_SPEED_MS);

    return () => clearInterval(typeInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex, shouldRender, exiting]);

  useEffect(() => {
    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background px-4"
      initial={{ opacity: 1 }}
      animate={exiting ? { opacity: 0, scale: 1.03 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (exiting) {
          setShouldRender(false);
          document.body.style.overflow = "";
        }
      }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="w-[300px] rounded-xl border border-border bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.3)] sm:w-[360px]">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
          <span className="ml-2 text-[11px] font-medium text-muted-foreground">
            zsh
          </span>
        </div>
        <div className="min-h-[132px] px-4 py-4 font-mono text-[13px] leading-relaxed">
          {SEQUENCE.slice(0, lineIndex).map((line) => (
            <div key={line.command} className="mb-2">
              <p className="text-foreground/80">
                <span className="text-success">$</span> {line.command}
              </p>
              <p className="text-muted-foreground">{line.output}</p>
            </div>
          ))}
          {lineIndex < SEQUENCE.length && (
            <div>
              <p className="text-foreground/80">
                <span className="text-success">$</span> {typed}
                <span className="animate-caret text-foreground">|</span>
              </p>
              {showOutput && (
                <p className="text-muted-foreground">
                  {SEQUENCE[lineIndex].output}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
