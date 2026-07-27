"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/hero-background";
import { RotatingText } from "@/components/rotating-text";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <HeroBackground />

      <div className="container-app relative z-10 py-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.16em] text-accent"
        >
          {siteConfig.role} &middot; {siteConfig.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          {siteConfig.heroDescriptionPrefix}
          <RotatingText
            words={siteConfig.heroRotatingPhrases}
            className="font-medium text-accent"
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg">
            <a href={siteConfig.resumeUrl} download>
              Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
