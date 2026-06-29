"use client";

import { projectsData } from "@/data/projects";
import {
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/primitives";
import { ProjectCard } from "@/components/sections/project-card";

export function ProjectsGrid() {
  return (
    <section className="py-12">
      <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard
              project={project}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

export function ProjectsHeader() {
  return (
    <SectionHeading
      eyebrow="Portfolio"
      title="Every project tells a story — I write mine in code"
      description="From nutrition apps to map-based travel platforms — production work with full previews and polished UI."
      className="mb-12 pt-28"
    />
  );
}
