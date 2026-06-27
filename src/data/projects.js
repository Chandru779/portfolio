export const projectsData = [
  {
    slug: "portfolio",
    title: "Portfolio",
    type: "Development Portfolio",
    summary:
      "A high-performance portfolio built with Next.js, Tailwind CSS, and Framer Motion — featuring image and font optimization for a super responsive experience.",
    link: "https://moengage-app.vercel.app/",
    github: "https://github.com/Chandru779/Portfolio",
    image: "/images/projects/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
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
    image: "/images/projects/moviementum.png",
    tags: ["React", "TypeScript", "TMDb API", "Framer Motion"],
    featured: true,
  },
  {
    slug: "maptag",
    title: "MapTag",
    type: "Location-Based Service",
    summary:
      "A map app where users mark favorite spots. The more tags in an area, the hotter it looks on the map — helping people discover busy places and businesses boost visibility.",
    link: "https://maptag-app.vercel.app/",
    github: "https://github.com/zakriti-official/maptag",
    image: "/images/projects/maptag.jpg",
    tags: ["Leaflet", "Maps", "Full Stack"],
    featured: true,
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
    tags: ["Next.js", "TypeScript", "React Query", "Tailwind CSS"],
    featured: false,
  },
];

export const featuredProjects = projectsData.filter((p) => p.featured);
