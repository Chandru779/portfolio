"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  SectionHeading,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/primitives";

export function SkillsPreview() {
  return (
    <section className="border-y bg-muted/30 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with daily"
          description="From modern JavaScript frameworks to mapping libraries — here's my toolkit."
          className="mb-12"
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-semibold">{category.title}</h3>
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

        <div className="mt-10 text-center">
          <Button variant="ghost" asChild>
            <Link href="/about">
              Learn more about me
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
