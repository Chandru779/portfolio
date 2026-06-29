"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { featuredProjects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/primitives";

export function FeaturedProjects() {
  return (
    <section id="featured-work" className="pt-10 pb-24">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects built for production"
          description="Real applications I've shipped — from geospatial platforms to polished web experiences."
          className="mb-12"
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.slug}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm text-primary">{project.type}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Button size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
