import type { Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

export const viewport = {
  once: true,
  margin: "-100px",
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const reduceMotionTransition = {
  duration: 0,
};
