import { AboutHero } from "@/components/sections/about-hero";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { EducationTimeline } from "@/components/sections/education-timeline";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata = {
  title: "About",
  description:
    "Learn about Chandru Angadi — frontend developer, skills, experience, and education.",
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
