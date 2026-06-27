"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/primitives";

export function ProjectsGrid() {
  return (
    <section className="py-12">
      <StaggerContainer className="grid gap-8 lg:grid-cols-2">
        {projectsData.map((project, index) => (
          <StaggerItem key={project.slug}>
            <motion.article
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto md:min-h-[220px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <p className="text-sm font-medium text-primary">{project.type}</p>
                  <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Button size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Live demo
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-4 w-4" />
                        Source
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
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
      description="From movie discovery apps to map-based services, here's a collection of work that reflects my approach to building thoughtful web experiences."
      className="mb-12 pt-28"
    />
  );
}
