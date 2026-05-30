"use client";

import { motion } from "framer-motion";
import { Compass, Hammer, Network, TrendingUp } from "lucide-react";
import { drawLineX, drawLineY, fadeUp, springSoft, stagger, viewport } from "@/lib/motion";

const steps = [
  {
    icon: Compass,
    title: "Architect",
    body: "Use-case prioritization and a reference architecture mapped to the stack you already run.",
  },
  {
    icon: Hammer,
    title: "Build",
    body: "Hands-on implementation of agentic workflows, conversational and voice agents, and the glue between them.",
  },
  {
    icon: Network,
    title: "Integrate",
    body: "Wiring agents into the identity, security, and network layers already governing your enterprise.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    body: "Observability, hardening, and the path from a working pilot to production at enterprise scale.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-24 md:py-40" aria-labelledby="approach-heading">
      <motion.div
        className="container-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
      >
        <motion.div className="max-w-3xl" variants={fadeUp}>
          <p className="eyebrow mb-5">Engagement Model</p>
          <h2 id="approach-heading" className="display text-4xl md:text-6xl">
            From architecture to production, in four moves.
          </h2>
        </motion.div>

        <div className="relative mt-16 md:mt-20">
          {/* Desktop horizontal rail — spans the centers of the first and last nodes. */}
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px md:block"
            aria-hidden="true"
          >
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-accent/70 via-border to-border"
              variants={drawLineX}
            />
          </div>
          {/* Mobile vertical rail. */}
          <div
            className="pointer-events-none absolute bottom-7 left-7 top-7 w-px md:hidden"
            aria-hidden="true"
          >
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-accent/70 via-border to-transparent"
              variants={drawLineY}
            />
          </div>

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="group relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={springSoft}
                >
                  <div className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border border-border bg-surface text-accent transition-colors duration-300 group-hover:border-accent/70 md:mb-7">
                    <Icon size={22} aria-hidden="true" />
                    <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full border border-border bg-bg-primary font-serif text-[0.65rem] text-text-secondary">
                      {index + 1}
                    </span>
                  </div>
                  <div className="md:mx-auto md:max-w-[15rem]">
                    <h3 className="text-xl font-medium leading-tight md:text-2xl">{step.title}</h3>
                    <p className="mt-3 text-sm leading-[1.7] text-text-secondary md:text-base">{step.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
