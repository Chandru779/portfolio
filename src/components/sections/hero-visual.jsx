"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/site";

const snippets = [
  {
    file: "developer.ts",
    lines: [
      { parts: [{ t: "const", c: "text-violet-400" }, { t: " dev", c: "text-sky-300" }, { t: " = {", c: "text-foreground/90" }] },
      { indent: 1, parts: [{ t: "name", c: "text-primary" }, { t: ': "', c: "text-foreground/90" }, { t: siteConfig.shortName, c: "text-amber-300" }, { t: '",', c: "text-foreground/90" }] },
      { indent: 1, parts: [{ t: "role", c: "text-primary" }, { t: ': "', c: "text-foreground/90" }, { t: siteConfig.title, c: "text-amber-300" }, { t: '",', c: "text-foreground/90" }] },
      { indent: 0, parts: [{ t: "};", c: "text-foreground/90" }] },
    ],
    output: "✓ Profile loaded",
  },
  {
    file: "stack.ts",
    lines: [
      { parts: [{ t: "const", c: "text-violet-400" }, { t: " stack", c: "text-sky-300" }, { t: " = [", c: "text-foreground/90" }] },
      { indent: 1, parts: [{ t: '"React", "Next.js", "Vue", "TS"', c: "text-amber-300" }] },
      { indent: 0, parts: [{ t: "];", c: "text-foreground/90" }] },
      { parts: [{ t: "stack.map", c: "text-sky-300" }, { t: "(s => ", c: "text-foreground/90" }, { t: "master", c: "text-violet-400" }, { t: "(s));", c: "text-foreground/90" }] },
    ],
    output: "✓ 4 skills verified",
  },
  {
    file: "build.sh",
    lines: [
      { parts: [{ t: "$ ", c: "text-primary" }, { t: "npm run build", c: "text-foreground/90" }] },
      { parts: [{ t: "→ ", c: "text-muted-foreground" }, { t: "Compiling components...", c: "text-sky-300" }] },
      { parts: [{ t: "→ ", c: "text-muted-foreground" }, { t: "Optimizing bundle...", c: "text-sky-300" }] },
      { parts: [{ t: "→ ", c: "text-muted-foreground" }, { t: "Deploy ready 🚀", c: "text-amber-300" }] },
    ],
    output: "✓ Build succeeded in 2.4s",
  },
  {
    file: "contact.ts",
    lines: [
      { parts: [{ t: "await", c: "text-violet-400" }, { t: " connect", c: "text-sky-300" }, { t: "({", c: "text-foreground/90" }] },
      { indent: 1, parts: [{ t: "email", c: "text-primary" }, { t: ': "', c: "text-foreground/90" }, { t: siteConfig.email.split("@")[0] + "@...", c: "text-amber-300" }, { t: '",', c: "text-foreground/90" }] },
      { indent: 1, parts: [{ t: "status", c: "text-primary" }, { t: ': "', c: "text-foreground/90" }, { t: "open to work", c: "text-amber-300" }, { t: '"', c: "text-foreground/90" }] },
      { indent: 0, parts: [{ t: "});", c: "text-foreground/90" }] },
    ],
    output: "✓ Ready for opportunities",
  },
];

const TYPE_MS = 28;
const LINE_PAUSE_MS = 320;
const SNIPPET_PAUSE_MS = 2400;

function CodeLine({ line, visibleChars }) {
  const fullText = line.parts.map((p) => p.t).join("");
  let charCount = 0;

  return (
    <div
      className="flex min-h-[1.35rem] flex-wrap gap-x-0 leading-relaxed"
      style={{ paddingLeft: `${line.indent || 0}rem` }}
    >
      {line.parts.map((part, i) => {
        const partStart = charCount;
        charCount += part.t.length;
        const shown = Math.max(0, Math.min(part.t.length, visibleChars - partStart));
        if (shown <= 0) return null;
        return (
          <span key={i} className={part.c}>
            {part.t.slice(0, shown)}
          </span>
        );
      })}
      {visibleChars < fullText.length && (
        <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-primary" />
      )}
    </div>
  );
}

export function HeroVisual() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  const snippet = snippets[snippetIndex];
  const currentLine = snippet.lines[lineIndex];
  const currentLineLength = currentLine
    ? currentLine.parts.map((p) => p.t).join("").length
    : 0;

  useEffect(() => {
    if (lineIndex >= snippet.lines.length) {
      setShowOutput(true);
      const timer = setTimeout(() => {
        setShowOutput(false);
        setLineIndex(0);
        setCharIndex(0);
        setSnippetIndex((i) => (i + 1) % snippets.length);
      }, SNIPPET_PAUSE_MS);
      return () => clearTimeout(timer);
    }

    if (charIndex >= currentLineLength) {
      const timer = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, LINE_PAUSE_MS);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCharIndex((c) => c + 1);
    }, TYPE_MS);
    return () => clearTimeout(timer);
  }, [snippetIndex, lineIndex, charIndex, currentLineLength, snippet.lines.length]);

  return (
    <div className="relative flex aspect-square w-full flex-col overflow-hidden bg-card">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/5" />
      <div className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">
          {snippet.file}
        </span>
        <span className="ml-auto rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">
          {siteConfig.title}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-5 pb-6">
        <div className="min-h-[148px] space-y-1.5 font-mono text-[11px] sm:text-xs">
          {snippet.lines.map((line, index) => {
            const lineLength = line.parts.map((p) => p.t).join("").length;
            const visible =
              index < lineIndex
                ? lineLength
                : index === lineIndex
                  ? charIndex
                  : 0;
            if (visible === 0 && index > lineIndex) return null;
            return (
              <CodeLine
                key={`${snippetIndex}-${index}`}
                line={line}
                visibleChars={visible}
              />
            );
          })}
        </div>

        <div className="mt-auto min-h-[2rem] border-t border-white/10 pt-3">
          <AnimatePresence mode="wait">
            {showOutput && (
              <motion.p
                key={snippet.output}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="font-mono text-[11px] text-primary sm:text-xs"
              >
                {snippet.output}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Focus
            </p>
            <p className="mt-0.5 text-sm font-semibold">UI & Frontend</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Based in
            </p>
            <p className="mt-0.5 text-sm font-semibold">Bengaluru</p>
          </div>
        </div>
      </div>
    </div>
  );
}
