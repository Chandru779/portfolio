import { siteConfig } from "./site";

export const projectsData = [
  {
    slug: "macrosfy",
    title: "Macrosfy",
    type: "Nutrition & Meal Tracking App",
    summary:
      "Mobile-first diet and macro tracking app with a community meal feed, smart filters, and automatic macro calculation from ingredients. Built with Next.js, TypeScript, shadcn/ui, Node.js, PostgreSQL, and Clerk auth.",
    link: "https://macrosfy.vercel.app/feed",
    github: "https://github.com/Chandru779/diet-app-frontend",
    image: "/images/projects/macrosfy.png",
    imageFit: "contain",
    tags: ["Next.js", "shadcn/ui", "TypeScript", "Node.js", "PostgreSQL", "Clerk"],
    featured: true,
  },
  {
    slug: "maptag",
    title: "mapTag",
    type: "Map-First Travel Platform",
    summary:
      "Map-first travel storytelling app where explorers stamp places, plan multi-stop routes, and share interactive travel portfolios. Built with Next.js, MapLibre GL, and Supabase — the map is the interface, not a form on the side.",
    link: "https://maptags.vercel.app/",
    github: "https://github.com/Chandru779/MapTags",
    image: "/images/projects/maptag.png",
    imageDark: "/images/projects/maptag.png",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "MapLibre GL", "Supabase"],
    featured: true,
  },
  {
    slug: "moviementum",
    title: "MovieMentum",
    type: "Movie Discovery App",
    summary:
      "Movie browsing app with advanced filtering, lazy-loaded images, skeleton loaders, and smooth page-transition animations. Built with React, TypeScript, and the TMDb API — achieving a 35% bundle reduction via optimised image loading.",
    link: "https://moviementum.vercel.app/",
    github: "https://github.com/Chandru779/moviementum",
    image: "/images/projects/moviementum-light.png",
    imageLight: "/images/projects/moviementum-light.png",
    imageDark: "/images/projects/moviementum-dark.png",
    tags: ["React", "TypeScript", "TMDb API", "Framer Motion"],
    featured: true,
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    type: "Development Portfolio",
    summary:
      "Modern software engineer portfolio with App Router, dark/light themes, animated hero, project showcase, and optimized performance — built with Next.js, Tailwind CSS, Framer Motion, and Zustand.",
    link: siteConfig.siteUrl,
    github: "https://github.com/Chandru779/portfolio",
    image: "/images/projects/portfolio-light.png",
    imageLight: "/images/projects/portfolio-light.png",
    imageDark: "/images/projects/portfolio-dark.png",
    tags: ["Next.js", "Framer Motion", "Zustand", "Tailwind CSS"],
    featured: false,
  },
  {
    slug: "vidverse",
    title: "VidVerse",
    type: "Video Discovery Platform",
    summary:
      "Video discovery platform with Next.js SSR for SEO-optimised pages. Features debounced search (60% fewer API calls), drag-and-drop playlist UI with optimistic updates, and sub-200 ms interactions — plus a sleek built-in media player for effortless content discovery.",
    link: "https://vidverse.vercel.app/",
    github: "https://github.com/Chandru779/vidverse",
    image: "/images/projects/vidverse.png",
    imageFit: "cover",
    tags: ["Next.js", "TypeScript", "React Query", "Tailwind CSS"],
    featured: false,
  },
];

export const featuredProjects = projectsData.filter((p) => p.featured);
