"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 55%"],
  });

  return (
    <section id="experience" className="section-y bg-surface/60">
      <div className="container-app">
        <SectionHeading
          eyebrow="Experience"
          title="Where I have worked"
          description="A chronological path through roles where I shipped products to production, led teams, and delivered client work across Nigeria and beyond."
        />

        <div ref={timelineRef} className="relative mt-14 pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-border sm:left-[9px]" />
          {!prefersReduced && (
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px origin-top bg-accent sm:left-[9px]"
            />
          )}

          <ol className="space-y-12">
            {experience.map((item, i) => {
              const isCurrent = item.date.toLowerCase().includes("present");
              return (
                <motion.li
                  key={item.company}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className="relative"
                >
                  <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background sm:-left-10">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {isCurrent && (
                      <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-accent/50" />
                    )}
                  </span>

                  <div className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-border bg-white p-1.5 transition-transform duration-300 group-hover:scale-105">
                          <Image
                            src={item.logo}
                            alt={`${item.company} logo`}
                            fill
                            sizes="64px"
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-foreground">
                            {item.role}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.company}
                            {item.location ? ` · ${item.location}` : ""}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        {isCurrent && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                          </span>
                        )}
                        {item.date}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {item.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-1 inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-hover"
                        >
                          View project
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
