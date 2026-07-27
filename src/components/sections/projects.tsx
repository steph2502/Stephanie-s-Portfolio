import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projects" className="section-y bg-surface/60">
      <div className="container-app">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects I've designed, built, and shipped."
          description="A selection of backend-heavy systems, from AI-driven optimization engines to production-ready platforms."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
