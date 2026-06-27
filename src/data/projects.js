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
      "A captivating movies app with optimized search, seamless navigation, and dynamic content display — built with React and meticulous attention to performance.",
    link: "https://moviementum.vercel.app/",
    github: "https://github.com/Chandru779/moviementum",
    image: "/images/projects/moviementum.png",
    tags: ["React", "API Integration", "Search"],
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
    type: "Video Playlist",
    summary:
      "A video listing application similar to a YouTube playlist with a sleek UI. Swipe to shuffle, built-in media player, and intuitive design for effortless content discovery.",
    link: "https://vidverse.vercel.app/",
    github: "https://github.com/Chandru779/vidverse",
    image: "/images/projects/vidverse.png",
    tags: ["React", "Media Player", "UI/UX"],
    featured: false,
  },
];

export const featuredProjects = projectsData.filter((p) => p.featured);
