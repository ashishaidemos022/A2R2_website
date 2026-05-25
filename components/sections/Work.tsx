"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Carousel } from "@/components/ui/Carousel";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const projects = [
  {
    name: "RevenueIQ",
    description: "Custom Boutique Software for Revenue Intelligence with an Agentic Layer (Headless).",
    url: "https://revenueiq-demo.vercel.app/pipeline",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Frevenueiq-demo.vercel.app%2Fpipeline&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    name: "AI Voice Agent",
    description: "Production-grade conversational voice agent.",
    url: "https://ai-voice-agent-sage.vercel.app/",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fai-voice-agent-sage.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    name: "Vigyaan",
    description:
      "viGYAAN - A modern testing platform for young learners, with AI agents that surface insights and drive score improvement.",
    url: "https://vigyaan-site.vercel.app/",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fvigyaan-site.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url",
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-40" aria-labelledby="work-heading">
      <motion.div
        className="container-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
      >
        <motion.div className="max-w-3xl" variants={fadeUp}>
          <p className="eyebrow mb-5">Work</p>
          <h2 id="work-heading" className="display text-4xl md:text-6xl">
            A portfolio of deployed systems.
          </h2>
        </motion.div>
        <motion.div className="mt-14" variants={fadeUp}>
          <Carousel label="Selected work">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group min-w-0 flex-[0_0_92%] rounded-lg border border-border bg-surface/70 p-4 transition hover:border-accent/70 md:flex-[0_0_82%] md:p-6"
              >
                <a href={project.url} target="_blank" rel="noreferrer" className="block">
                  <div className="overflow-hidden rounded-md border border-border bg-bg-primary">
                    <div className="flex h-9 items-center gap-2 border-b border-border px-4">
                      <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="size-2.5 rounded-full bg-[#febc2e]" />
                      <span className="size-2.5 rounded-full bg-[#28c840]" />
                      <span className="ml-3 truncate text-xs text-text-secondary">{project.url.replace("https://", "")}</span>
                    </div>
                    <div className="relative aspect-[16/8.6] overflow-hidden bg-bg-secondary">
                      <Image
                        src={project.image}
                        alt={`${project.name} website screenshot`}
                        fill
                        sizes="(min-width: 768px) 82vw, 92vw"
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/20 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-6 pt-6 md:flex-row md:items-end">
                    <div>
                      <h3 className="text-2xl font-medium">{project.name}</h3>
                      <p className="mt-2 text-text-secondary">{project.description}</p>
                    </div>
                    <span className="inline-flex size-11 items-center justify-center rounded-full border border-border text-text-primary transition group-hover:border-accent">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
}
