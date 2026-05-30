"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ease } from "@/lib/motion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  // Pointer-reactive parallax. Motion values are direct bindings (not
  // animations), so we gate them on reduced-motion manually.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20 });

  const gradientX = useTransform(springX, (v) => v * -26);
  const gradientY = useTransform(springY, (v) => v * -26);
  const orbitX = useTransform(springX, (v) => v * 46);
  const orbitY = useTransform(springY, (v) => v * 46);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    pointerX.set(event.clientX / window.innerWidth - 0.5);
    pointerY.set(event.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen overflow-hidden pt-20"
      aria-labelledby="hero-heading"
      onPointerMove={handlePointerMove}
    >
      <motion.div
        className="absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          x: gradientX,
          y: gradientY,
          backgroundImage:
            "radial-gradient(circle at 35% 35%, rgba(201,169,97,0.23), transparent 24rem), radial-gradient(circle at 70% 30%, rgba(245,245,240,0.08), transparent 22rem)",
          backgroundSize: "120% 120%, 110% 110%",
        }}
        animate={{
          backgroundPosition: ["35% 35%, 70% 30%", "42% 44%, 62% 40%", "35% 35%, 70% 30%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* On-brand orbit motif — echoes the logo mark. Decorative only. */}
      <motion.div
        className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 lg:block"
        style={{ x: orbitX, y: orbitY }}
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.4, ease, delay: 0.3 }}
      >
        <div className="relative size-[34rem]">
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 rounded-full border"
              style={{
                inset: `${ring * 4.5}rem`,
                borderColor: ring === 1 ? "rgba(201,169,97,0.32)" : "var(--border)",
              }}
              animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 48 - ring * 9, repeat: Infinity, ease: "linear" }}
            >
              <span
                className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ background: ring === 1 ? "var(--accent)" : "rgba(239,234,224,0.7)" }}
              />
            </motion.div>
          ))}
          <motion.div
            className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
            animate={{ scale: [1, 1.5, 1], opacity: [0.85, 0.4, 0.85] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

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
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg-primary transition-colors hover:bg-text-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a conversation
              <ArrowDownRight size={17} />
            </motion.a>
            <motion.a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              See our work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#videos"
        className="absolute inset-x-0 bottom-8 z-10 mx-auto hidden w-fit flex-col items-center gap-2 text-text-secondary transition-colors hover:text-text-primary sm:flex"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownRight size={16} className="rotate-45" />
        </motion.span>
      </motion.a>
    </section>
  );
}
