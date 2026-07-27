"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";

import type { Project } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "@/components/project-modal";
import { GithubIcon } from "@/components/icons";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: "easeOut" }}
        className="group overflow-hidden rounded-[20px] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 600px, 100vw"
          />
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {project.liveUrl && (
              <Button asChild size="sm">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  View Live Demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="sm" variant="secondary">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  View GitHub
                  <GithubIcon className="h-3.5 w-3.5" />
                </a>
              </Button>
            )}
            {project.caseStudy && (
              <Button size="sm" variant="ghost" onClick={() => setModalOpen(true)}>
                Read Case Study
                <FileText className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
      </motion.article>

      {project.caseStudy && (
        <ProjectModal project={project} open={modalOpen} onOpenChange={setModalOpen} />
      )}
    </>
  );
}
