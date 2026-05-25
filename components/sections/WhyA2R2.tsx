"use client";

import { motion } from "framer-motion";
import { ease, fadeUp, stagger, viewport } from "@/lib/motion";

const rows = [
  {
    title: "Architecture depth across the full enterprise stack.",
    body: "Agentic AI is only as reliable as the systems beneath it. The practice is built on nearly twenty years of combined architecture experience across agentic and conversational AI, identity and access management, cybersecurity, voice over IP, data networking, Wi-Fi, and 5G. When an agentic workflow needs to authenticate a user, traverse a security boundary, or hand off to a contact center, it is designed by people who have built those systems before.",
  },
  {
    title: "Senior practitioners, throughout the engagement.",
    body: "Clients work directly with the architects responsible for the outcome. There is no layered delivery model, no rotation of junior consultants, and no separation between the people who design the solution and the people who deploy it.",
  },
  {
    title: "Vertical fluency where it matters.",
    body: "Engagements span HLS, BFSI, retail, automotive, utilities, and mixed-industry environments. Each carries distinct data, compliance, and integration realities, and engagements are shaped by that context from the first conversation.",
  },
];

export function WhyA2R2() {
  return (
    <section id="why-a2r2" className="py-24 md:py-40" aria-labelledby="why-heading">
      <motion.div
        className="container-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
      >
        <motion.div className="max-w-3xl" variants={fadeUp}>
          <p className="eyebrow mb-5">Why A2R2</p>
          <h2 id="why-heading" className="display text-4xl md:text-6xl">
            Built for the full enterprise stack.
          </h2>
        </motion.div>
        <div className="mt-14">
          {rows.map((row) => (
            <motion.article
              key={row.title}
              className="relative grid gap-6 py-10 md:grid-cols-12 md:gap-12 md:py-12"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.div
                className="absolute inset-x-0 top-0 h-px origin-left bg-border"
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1, transition: { duration: 0.85, ease } },
                }}
              />
              <motion.h3
                className="text-2xl font-medium leading-tight md:col-span-5 md:text-[1.75rem]"
                variants={fadeUp}
              >
                {row.title}
              </motion.h3>
              <motion.p className="text-base leading-[1.75] text-text-secondary md:col-span-7" variants={fadeUp}>
                {row.body}
              </motion.p>
            </motion.article>
          ))}
          <div className="h-px bg-border" />
        </div>
      </motion.div>
    </section>
  );
}
