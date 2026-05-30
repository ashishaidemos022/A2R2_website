"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { YouTubePlaylistEmbed } from "@/components/ui/YouTubePlaylistEmbed";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const playlistId = "PLzGSTV_ZN--GFRCejUUGDnONKsBrFRzB-";

export function Videos() {
  return (
    <section id="videos" className="py-24 md:py-40" aria-labelledby="videos-heading">
      <motion.div
        className="container-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-end">
          <motion.div className="max-w-2xl" variants={fadeUp}>
            <p className="eyebrow mb-5">Videos</p>
            <h2 id="videos-heading" className="display text-4xl md:text-6xl">
              Key conversations and demos.
            </h2>
            <p className="mt-6 text-lg leading-[1.75] text-text-secondary">
              A curated set of videos from the A2R2 channel covering applied AI, product thinking, and deployed systems.
            </p>
            <motion.a
              href={`https://www.youtube.com/playlist?list=${playlistId}`}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={16} aria-hidden="true" />
              Open playlist
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </motion.div>
          <motion.div variants={fadeUp}>
            <YouTubePlaylistEmbed playlistId={playlistId} title="A2R2 key videos playlist" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
