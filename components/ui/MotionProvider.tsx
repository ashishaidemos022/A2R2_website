"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Makes every Framer Motion animation on the site honor the user's
 * prefers-reduced-motion setting. `reducedMotion="user"` disables transform
 * and layout animations (the motion-sickness triggers) while keeping opacity
 * and color transitions, so the site still feels finished for those users.
 * The global CSS rule in globals.css only neutralizes CSS animations — this
 * covers the JS-driven Framer animations the CSS rule can't reach.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
