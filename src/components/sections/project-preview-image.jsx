"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function ProjectPreviewImage({ project, className, sizes }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const src =
    mounted && project.imageLight && project.imageDark
      ? resolvedTheme === "dark"
        ? project.imageLight
        : project.imageDark
      : project.imageLight || project.image;

  return (
    <Image
      src={src}
      alt={project.title}
      fill
      sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      className={className}
    />
  );
}
