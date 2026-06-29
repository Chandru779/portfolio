import dynamic from "next/dynamic";
import { siteConfig } from "@/data/site";
import { AboutHero } from "@/components/sections/about-hero";

const SkillsGrid = dynamic(() =>
  import("@/components/sections/skills-grid").then((mod) => mod.SkillsGrid)
);

const ExperienceTimeline = dynamic(() =>
  import("@/components/sections/experience-timeline").then(
    (mod) => mod.ExperienceTimeline
  )
);

const EducationTimeline = dynamic(() =>
  import("@/components/sections/education-timeline").then(
    (mod) => mod.EducationTimeline
  )
);

const ContactCTA = dynamic(() =>
  import("@/components/sections/contact-cta").then((mod) => mod.ContactCTA)
);

export const metadata = {
  title: "About",
  description: `About ${siteConfig.name} — ${siteConfig.title} in ${siteConfig.location}. Skills, ${siteConfig.experienceYears} years of experience, education, and career journey.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SkillsGrid />
      <ExperienceTimeline />
      <EducationTimeline />
      <ContactCTA />
    </>
  );
}
