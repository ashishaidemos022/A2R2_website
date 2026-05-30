"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { ease } from "@/lib/motion";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-0 bg-bridge" aria-hidden="true" />
      <div className="container-grid relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            Contact
          </motion.p>
          <motion.h2
            className="display text-[clamp(2rem,5vw,3.25rem)]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            Let&apos;s build your agentic advantage.
          </motion.h2>
          <motion.p
            className="mt-5 text-lg text-text-secondary"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            Tell us where you are on your AI journey. We will respond within two
            business days.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            <motion.a
              href="mailto:sales@a2r2labs.ai"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-base font-semibold text-bg-primary transition-colors hover:bg-text-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} />
              sales@a2r2labs.ai
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
