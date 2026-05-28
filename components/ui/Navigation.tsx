"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/ui/LogoMark";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why A2R2", href: "#why-a2r2" },
  { label: "Industries", href: "#industries" },
  { label: "Videos", href: "#videos" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border/90 bg-bg-primary/78 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="container-grid flex h-20 items-center justify-between"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 font-serif text-xl tracking-[-0.02em]"
          aria-label="A2R2 Labs — home"
        >
          <LogoMark size={32} className="shrink-0" />
          A2R2 Labs
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              className="link-underline text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="grid size-11 place-items-center rounded-full border border-border text-text-primary md:hidden"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open ? (
        <div className="container-grid grid gap-1 pb-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              className="rounded-md px-2 py-3 text-base text-text-secondary transition-colors hover:text-text-primary"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
