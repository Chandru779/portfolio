import dynamic from "next/dynamic";
import { siteConfig } from "@/data/site";
import {
  ProjectsGrid,
  ProjectsHeader,
} from "@/components/sections/projects-grid";

const ContactCTA = dynamic(() =>
  import("@/components/sections/contact-cta").then((mod) => mod.ContactCTA)
);

export const metadata = {
  title: "Projects",
  description: `Projects by ${siteConfig.name} — production web apps including geospatial platforms, SaaS tools, and full-stack applications built with React, Next.js, and Node.js.`,
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
