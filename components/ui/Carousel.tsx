"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { springSnappy } from "@/lib/motion";

type CarouselProps = {
  children: ReactNode[];
  label: string;
  className?: string;
};

export function Carousel({ children, label, className }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={className} aria-label={label}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-5 md:gap-6">{children}</div>
      </div>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-2" aria-label={`${label} slide controls`}>
          {children.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-1.5 rounded-full transition-all ${
                selectedIndex === index ? "w-8 bg-accent" : "w-3 bg-text-secondary/35"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={selectedIndex === index}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <motion.button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-border bg-surface/70 text-text-primary transition-colors hover:border-accent hover:text-accent"
            aria-label={`Previous ${label} slide`}
            onClick={scrollPrev}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={springSnappy}
          >
            <ArrowLeft size={18} />
          </motion.button>
          <motion.button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-border bg-surface/70 text-text-primary transition-colors hover:border-accent hover:text-accent"
            aria-label={`Next ${label} slide`}
            onClick={scrollNext}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={springSnappy}
          >
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
