"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/primitives";

export function ContactCTA() {
  return (
    <section className="py-24">
      <div className="container">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/10 via-card to-card px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
            <div className="relative">
              <p className="mb-3 font-mono text-sm uppercase tracking-widest text-primary">
                Let&apos;s connect
              </p>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Have a role or project in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                I&apos;m open to software engineering roles, freelance work,
                or interesting collaborations. Drop me a line — I typically respond
                within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" asChild>
                  <a href={`mailto:${siteConfig.email}`}>
                    <Mail className="h-4 w-4" />
                    {siteConfig.email}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer">
                    Download resume
                  </a>
                </Button>
              </div>
              <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {siteConfig.location} · Open to remote
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
