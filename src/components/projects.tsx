"use client";

import { Github } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="pt-11">
      <div className="mb-4 text-[12px] lowercase tracking-[0.03em] text-(--muted) [font-family:var(--font-mono),monospace]">
        things I&apos;ve built
      </div>
      {projects.map((p) => {
        const hasLink = "href" in p && p.href;

        return (
          <div
            key={p.title}
            className="group block border-b border-(--line) py-4 first:pt-0 last:border-b-0"
          >
            <div className="flex items-baseline justify-between gap-3">
              {hasLink ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-fit bg-[linear-gradient(var(--accent-soft),var(--accent-soft))] bg-position-[0_100%] bg-size-[0%_100%] bg-no-repeat text-[16px] font-bold"
                >
                  {p.title} ↗
                </a>
              ) : (
                <div className="inline-block w-fit text-[16px] font-bold">
                  {p.title}
                </div>
              )}
              <div className="shrink-0 whitespace-nowrap text-[12.5px] uppercase tracking-[0.03em] text-(--faint) [font-family:var(--font-mono),monospace]">
                {p.tag}
              </div>
            </div>
            <div className="mt-2 max-w-125 text-[14.5px] leading-[1.65] text-(--muted)">
              {p.desc}
            </div>
            {"note" in p && p.note && (
              <div className="mt-2 text-[14px] italic text-(--faint) [font-family:var(--font-serif),serif]">
                {p.note}
              </div>
            )}
            {"repo" in p && p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-[14px] text-(--faint) underline decoration-(--line) underline-offset-2 transition-colors hover:text-(--accent)"
              >
                <Github size={15} strokeWidth={1.75} />
                View source
              </a>
            )}
          </div>
        );
      })}
    </section>
  );
}