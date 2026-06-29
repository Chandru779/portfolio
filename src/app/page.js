import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero";

const FeaturedProjects = dynamic(() =>
  import("@/components/sections/featured-projects").then(
    (mod) => mod.FeaturedProjects
  )
);

const SkillsPreview = dynamic(() =>
  import("@/components/sections/skills-preview").then(
    (mod) => mod.SkillsPreview
  )
);

const ContactCTA = dynamic(() =>
  import("@/components/sections/contact-cta").then((mod) => mod.ContactCTA)
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <SkillsPreview />
      <ContactCTA />
    </>
  );
}
