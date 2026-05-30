import type { Transition, Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

/** Soft spring for interactive micro-motion (hover, tap, draggable feedback). */
export const springSoft: Transition = {
  type: "spring",
  stiffness: 210,
  damping: 24,
  mass: 0.9,
};

/** Snappier spring for press/tap feedback. */
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 28,
};

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

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease },
  },
};

/** Entrance with a touch of scale — slightly livelier than fadeUp. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
};

/** Draws a horizontal rule/connector from the left as it enters view. */
export const drawLineX: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease },
  },
};

/** Draws a vertical connector from the top as it enters view. */
export const drawLineY: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.9, ease },
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

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const reduceMotionTransition = {
  duration: 0,
};
