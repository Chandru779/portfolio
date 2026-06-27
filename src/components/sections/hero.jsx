"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/primitives";
import { HeroVisual } from "@/components/sections/hero-visual";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] overflow-hidden pt-28 pb-16">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <FadeIn delay={0.1}>
            <Badge variant="outline" className="mb-6 font-mono text-xs">
              Available for work
            </Badge>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mb-4 text-lg text-muted-foreground">
              Hey, I&apos;m {siteConfig.shortName} 👋
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {siteConfig.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {siteConfig.bio}
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link href="/projects">
                  View my work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="mt-10 flex flex-wrap gap-2">
              {siteConfig.highlightSkills.map((skill) => (
                <Badge key={skill} variant="muted">
                  {skill}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-square max-w-md pb-2">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-3xl border bg-card shadow-2xl shadow-primary/10"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </FadeIn>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="container mt-12 flex justify-center"
      >
        <a
          href="#featured-work"
          className="flex flex-col items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
