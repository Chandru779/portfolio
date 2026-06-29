"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProjectPreviewImage } from "@/components/sections/project-preview-image";
import { ProjectTags } from "@/components/sections/project-tags";

function ProjectImageFrame({ project, className, imageClassName, sizes }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        project.imageFit === "contain"
          ? "aspect-[4/5] max-h-[360px] sm:max-h-[400px]"
          : "aspect-video",
        className
      )}
    >
      <ProjectPreviewImage
        project={project}
        sizes={sizes}
        className={cn(
          project.imageFit === "cover"
            ? "object-cover transition-transform duration-500 group-hover:scale-105"
            : "object-contain p-3 sm:p-4",
          imageClassName
        )}
      />
    </div>
  );
}

function ProjectActions({ project, visitLabel = "Visit" }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm" asChild>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {visitLabel}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </Button>
      <Button size="sm" variant="ghost" asChild>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}

export function ProjectCard({ project, className, sizes }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      <ProjectImageFrame project={project} sizes={sizes} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <ProjectTags tags={project.tags} className="mb-3" />
        <h3 className="text-lg font-semibold sm:text-xl">{project.title}</h3>
        <p className="mt-1 text-sm text-primary">{project.type}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.summary}
        </p>
        <div className="mt-5">
          <ProjectActions project={project} />
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectWideCard({ project, className, sizes }) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/5",
        className
      )}
    >
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <ProjectImageFrame
          project={project}
          sizes={sizes}
          className="max-h-none lg:min-h-[340px] lg:aspect-auto"
          imageClassName="p-4 sm:p-6"
        />
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Featured build
          </p>
          <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
          <p className="mt-2 text-sm font-medium text-muted-foreground">{project.type}</p>
          <ProjectTags tags={project.tags} className="mt-4" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.summary}
          </p>
          <div className="mt-6">
            <ProjectActions project={project} visitLabel="View live site" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
