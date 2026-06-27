"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/motion/primitives";

function ExperienceItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
        <Briefcase className="h-3 w-3 text-primary" />
      </div>
      <div className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold">{item.position}</h3>
            <a
              href={item.companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              {item.company}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {item.time}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{item.address}</p>
        {item.summary && (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {item.summary}
          </p>
        )}
        {item.highlights?.length > 0 && (
          <ul className="mt-4 space-y-2 border-t pt-4">
            {item.highlights.map((point) => (
              <li
                key={point.slice(0, 48)}
                className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
        {!item.summary && !item.highlights && item.work && (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {item.work}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="border-t bg-muted/20 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Career"
          title="Work experience"
          description="Roles where I've grown as a developer and contributed to real products."
          className="mb-12"
        />

        <div ref={ref} className="relative mx-auto max-w-2xl">
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-border" />
          <motion.div
            style={{ height }}
            className="absolute left-[11px] top-0 w-px origin-top bg-primary"
          />
          {experienceData.map((item, index) => (
            <ExperienceItem key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
