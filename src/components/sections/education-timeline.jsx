"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { educationData } from "@/data/education";
import { SectionHeading } from "@/components/motion/primitives";

export function EducationTimeline() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          className="mb-12"
        />

        <div className="mx-auto grid max-w-3xl gap-4">
          {educationData.map((item, index) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex gap-4 rounded-2xl border bg-card p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">{item.type}</h3>
                  <span className="text-xs text-muted-foreground">· {item.time}</span>
                </div>
                <p className="mt-1 text-sm text-primary">{item.place}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.info}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
