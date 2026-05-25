"use client";

import { motion } from "framer-motion";
import { Blocks, BrainCircuit, Workflow } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const services = [
  {
    icon: BrainCircuit,
    title: "Agentic AI Strategy & Architecture",
    body: "Use-case prioritization, reference architectures, vendor and model evaluation, and deployment plans designed against your existing stack - not a greenfield ideal.",
  },
  {
    icon: Workflow,
    title: "Build & Deploy",
    body: "Hands-on implementation of agentic workflows, conversational and voice agents, and the integration work that connects them to identity, security, and network layers.",
  },
  {
    icon: Blocks,
    title: "Custom Software",
    body: "When the right tool does not exist, we build it. RevenueIQ is one example of boutique software developed for a specific enterprise need.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-40" aria-labelledby="services-heading">
      <motion.div
        className="container-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
      >
        <motion.div className="max-w-3xl" variants={fadeUp}>
          <p className="eyebrow mb-5">Services</p>
          <h2 id="services-heading" className="display text-4xl md:text-6xl">
            A focused practice, end to end.
          </h2>
        </motion.div>
        <motion.div className="mt-14 grid gap-5 md:grid-cols-3" variants={stagger}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="group min-h-[310px] rounded-lg border border-border bg-surface/55 p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/70"
                variants={fadeUp}
              >
                <div className="mb-10 flex items-center justify-between">
                  <Icon className="text-accent" size={26} aria-hidden="true" />
                  <span className="font-serif text-4xl text-text-primary/10">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-2xl font-medium leading-tight">{service.title}</h3>
                <p className="mt-5 text-base leading-[1.7] text-text-secondary">{service.body}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
