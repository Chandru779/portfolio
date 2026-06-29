import dynamic from "next/dynamic";
import {
  ProjectsGrid,
  ProjectsHeader,
} from "@/components/sections/projects-grid";

const ContactCTA = dynamic(() =>
  import("@/components/sections/contact-cta").then((mod) => mod.ContactCTA)
);

export const metadata = {
  title: "Projects",
  description:
    "Explore projects by Chandrashekar Angadi — Portfolio, MovieMentum, MapTag, VidVerse, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="container pb-12">
      <ProjectsHeader />
      <ProjectsGrid />
      <ContactCTA />
    </div>
  );
}
