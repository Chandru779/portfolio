"use client";

import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import {
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/primitives";

export function SkillsGrid() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & technologies"
          description="Organized by domain — the tools I use to ship polished, performant applications."
          className="mb-12"
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="h-full rounded-2xl border bg-card p-6 transition-colors hover:border-primary/30">
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
