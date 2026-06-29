import dynamic from "next/dynamic";
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
  description:
    "Learn about Chandrashekar Angadi — software engineer, skills, experience, and education.",
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
