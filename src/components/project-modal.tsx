"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

import type { Project } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { caseStudy } = project;
  if (!caseStudy) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="relative aspect-video w-full overflow-hidden rounded-t-[20px] border-b border-border bg-background">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 720px, 100vw"
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <DialogTitle className="mt-4">{project.title}</DialogTitle>
          <DialogDescription className="mt-2 text-base">
            {caseStudy.overview}
          </DialogDescription>

          <div className="mt-8 space-y-7">
            <CaseStudyBlock title="Problem" text={caseStudy.problem} />
            <CaseStudyBlock title="Solution" text={caseStudy.solution} />
            <CaseStudyBlock title="Architecture" text={caseStudy.architecture} />

            <div>
              <h4 className="text-sm font-semibold text-foreground">Key Features</h4>
              <ul className="mt-3 space-y-2">
                {caseStudy.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <CaseStudyBlock title="Challenges" text={caseStudy.challenges} />
            <CaseStudyBlock title="Lessons Learned" text={caseStudy.lessons} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CaseStudyBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
