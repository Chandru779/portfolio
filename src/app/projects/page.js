import {
  ProjectsGrid,
  ProjectsHeader,
} from "@/components/sections/projects-grid";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata = {
  title: "Projects",
  description:
    "Explore projects by Chandru Angadi — portfolio, MovieMentum, MapTag, VidVerse, and more.",
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
