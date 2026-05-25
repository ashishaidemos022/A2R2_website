"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export function Opportunity() {
  return (
    <section className="bg-bridge py-24 md:py-36" aria-labelledby="opportunity-heading">
      <motion.div
        className="container-grid grid gap-12 md:grid-cols-12"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
      >
        <motion.div className="md:col-span-5" variants={fadeUp}>
          <p className="eyebrow mb-5">The Shift</p>
          <h2 id="opportunity-heading" className="display text-4xl md:text-6xl">
            The agentic shift is real. The path to production isn&apos;t obvious.
          </h2>
        </motion.div>
        <motion.div
          className="space-y-6 text-lg leading-[1.7] text-text-secondary md:col-span-6 md:col-start-7"
          variants={stagger}
        >
          <motion.p variants={fadeUp}>
            Most enterprises are no longer asking whether to deploy agentic AI. The question is how to do it inside
            the architecture, identity, and compliance constraints they already operate under - and how to do it
            without accumulating technical debt that will need to be unwound in eighteen months.
          </motion.p>
          <motion.p className="text-text-primary" variants={fadeUp}>
            That is an architecture problem before it is an AI problem. It is the problem we solve.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
