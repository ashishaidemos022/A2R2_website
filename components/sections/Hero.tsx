"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ease } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="absolute inset-0 opacity-70"
        aria-hidden="true"
        animate={{
          backgroundPosition: ["35% 35%, 70% 30%", "42% 44%, 62% 40%", "35% 35%, 70% 30%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 35% 35%, rgba(201,169,97,0.23), transparent 24rem), radial-gradient(circle at 70% 30%, rgba(245,245,240,0.08), transparent 22rem)",
          backgroundSize: "120% 120%, 110% 110%",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg-primary" />
      <div className="container-grid relative z-10 flex items-center py-24">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.p
            className="eyebrow mb-6"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }}
          >
            Agentic AI adoption
          </motion.p>
          <AnimatedHeading
            as="h1"
            text="Agentic AI, architected for the enterprise."
            className="display max-w-5xl text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.12]"
          />
          <motion.p
            className="mt-8 max-w-2xl text-lg leading-[1.65] text-text-secondary md:text-xl"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease, delay: 0.45 } },
            }}
          >
            We guide enterprises adopting agentic AI workflows - from architecture to production.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease, delay: 0.55 } },
            }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg-primary transition hover:bg-text-primary active:scale-[0.99]"
            >
              Start a conversation
              <ArrowDownRight size={17} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent active:scale-[0.99]"
            >
              See our work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
