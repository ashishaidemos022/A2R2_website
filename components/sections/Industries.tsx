"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel } from "@/components/ui/Carousel";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const industries = [
  {
    name: "Healthcare & Life Sciences",
    description: "Agentic workflows designed around PHI, HIPAA, and the operational realities of clinical and payer systems.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Banking, Financial Services & Insurance",
    description: "AI deployed inside the risk, compliance, and identity controls financial institutions already operate.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Retail",
    description: "Agentic workflows connecting commerce, inventory, customer experience, and the systems behind them.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Automotive",
    description: "AI across connected vehicle, dealer, and aftersales ecosystems.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Utilities",
    description: "Operational and customer-facing AI for regulated, mission-critical environments.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mixed Industries",
    description: "A single architecture partner for enterprises whose problems span more than one vertical.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
];

export function Industries() {
  return (
    <section id="industries" className="bg-bg-secondary/55 py-24 md:py-40" aria-labelledby="industries-heading">
      <motion.div
        className="container-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
      >
        <motion.div className="max-w-3xl" variants={fadeUp}>
          <p className="eyebrow mb-5">Industries</p>
          <h2 id="industries-heading" className="display text-4xl md:text-6xl">
            Built for regulated, mission-critical environments.
          </h2>
        </motion.div>
        <motion.div className="mt-14" variants={fadeUp}>
          <Carousel label="Industries">
            {industries.map((industry) => (
              <article
                key={industry.name}
                className="relative h-[430px] min-w-0 flex-[0_0_88%] overflow-hidden rounded-lg border border-border bg-surface md:flex-[0_0_calc((100%-48px)/2.5)]"
              >
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 42vw, 88vw"
                  className="object-cover saturate-[.7] transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/25 to-black/75" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="max-w-[18rem] text-2xl font-medium leading-tight">{industry.name}</h3>
                  <p className="mt-4 text-sm leading-[1.65] text-text-primary/78">{industry.description}</p>
                </div>
              </article>
            ))}
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
}
