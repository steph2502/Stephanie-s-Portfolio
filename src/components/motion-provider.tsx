"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app so that framer-motion automatically respects the user's OS
 * level "prefers-reduced-motion" setting everywhere, without having to
 * thread useReducedMotion() through every individual component.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
