"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const VISIBLE_COUNT = 4;

export function ProjectTags({ tags, className }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = tags.length > VISIBLE_COUNT;
  const visibleTags = expanded ? tags : tags.slice(0, VISIBLE_COUNT);
  const hiddenCount = tags.length - VISIBLE_COUNT;

  if (!hasMore) {
    return (
      <div className={cn("flex flex-wrap gap-2", className)}>
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-[10px]">
            {tag}
          </Badge>
        ))}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setExpanded((open) => !open)}
      className={cn(
        "flex w-full flex-wrap gap-2 rounded-lg text-left transition-colors hover:bg-muted/40 -mx-1 px-1 py-0.5",
        className
      )}
      aria-expanded={expanded}
      aria-label={expanded ? "Show fewer technologies" : "Show all technologies"}
    >
      {visibleTags.map((tag) => (
        <Badge key={tag} variant="outline" className="text-[10px]">
          {tag}
        </Badge>
      ))}
      {!expanded && (
        <Badge variant="muted" className="text-[10px]">
          +{hiddenCount} more
        </Badge>
      )}
    </button>
  );
}
