"use client";

import { siteConfig } from "@/data/site";
import { FadeIn } from "@/components/motion/primitives";
import { AboutVisual } from "@/components/sections/about-visual";

export function AboutHero() {
  return (
    <section className="pt-28 pb-16">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
            About
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {siteConfig.aboutHeadline}
          </h1>
          <div className="mt-8 space-y-4 text-muted-foreground">
            {siteConfig.aboutBio.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
          <AboutVisual />
        </FadeIn>
      </div>
    </section>
  );
}
