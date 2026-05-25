"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2";
};

export function AnimatedHeading({
  text,
  className,
  as = "h2",
}: AnimatedHeadingProps) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as];
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.055, delayChildren: 0.12 },
        },
      }}
    >
      {words.map((word, index) => (
        <span className="inline-block overflow-hidden pb-[0.26em] align-bottom" key={`${word}-${index}`}>
          <motion.span
            className="inline-block pr-[0.18em]"
            aria-hidden="true"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.8, ease },
              },
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
