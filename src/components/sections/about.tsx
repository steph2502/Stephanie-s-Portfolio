"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Brain, Users } from "lucide-react";

import { aboutHighlights, aboutStory, siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

const icons = [Code2, Brain, Users];

export function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-app">
        <SectionHeading eyebrow="About" title="About Me" />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-border bg-surface">
              <Image
                src={siteConfig.portraitSrc}
                alt={`Portrait of ${siteConfig.name}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 380px, 90vw"
                priority={false}
              />
            </div>
            <div className="animate-pill-float absolute -bottom-5 -right-5 hidden rounded-2xl border border-border bg-surface px-5 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.3)] sm:block">
              <p className="text-2xl font-semibold text-foreground">2+ yrs</p>
              <p className="text-xs text-muted-foreground">building software</p>
            </div>
          </motion.div>

          <div>
            <div className="space-y-5">
              {aboutStory.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className="text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {aboutHighlights.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                    className="rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-md"
                  >
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                    <h3 className="mt-4 text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
