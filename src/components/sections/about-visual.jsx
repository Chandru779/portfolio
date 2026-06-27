"use client";

import { motion } from "framer-motion";
import { Binary, Cpu, GitBranch, GraduationCap } from "lucide-react";
import { siteConfig } from "@/data/site";

const csTopics = [
  { label: "Algorithms", value: "DSA" },
  { label: "Systems", value: "OS & Networks" },
  { label: "Engineering", value: "Software Design" },
];

export function AboutVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border bg-card shadow-xl shadow-primary/10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/5" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
          <span className="h-2 w-2 rounded-full bg-green-400/80" />
          <span className="ml-2 font-mono text-[10px] text-muted-foreground">
            cs-profile.json
          </span>
        </div>
      </div>

      <div className="relative space-y-5 p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/30">
            <span className="text-lg font-bold text-primary">CA</span>
          </div>
          <div>
            <p className="font-semibold">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="mb-3 flex items-center gap-2 text-primary">
            <GraduationCap className="h-4 w-4" />
            <span className="text-xs font-mono uppercase tracking-wider">
              Computer Science
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            B.E in Computer Science Engineering — building on strong foundations
            in algorithms, systems, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {csTopics.map((topic, index) => (
            <motion.div
              key={topic.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-center"
            >
              <p className="font-mono text-[9px] uppercase text-muted-foreground">
                {topic.label}
              </p>
              <p className="mt-1 text-[11px] font-semibold">{topic.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-primary" />
            <GitBranch className="h-4 w-4 text-primary/70" />
            <Binary className="h-4 w-4 text-primary/50" />
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-primary">{siteConfig.experienceYears}</p>
            <p className="text-[10px] text-muted-foreground">Years building</p>
          </div>
        </div>
      </div>
    </div>
  );
}
