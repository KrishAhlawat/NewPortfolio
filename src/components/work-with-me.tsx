import { ArrowUpRight } from "lucide-react";
import { links } from "@/lib/data";

export function WorkWithMe() {
  return (
    <section id="work-with-me" className="pt-11">
      <div className="mb-4 text-[12px] lowercase tracking-[0.03em] text-(--muted) [font-family:var(--font-mono),_monospace]">
        work with me
      </div>
      <p className="max-w-130 text-[17px] leading-[1.65] text-(--text)">
        For engineering talk, referrals, or roles. No pitch decks required, just show up.
      </p>
      <a
        href={links.bookCall}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 border-b border-[rgba(52,84,209,0.45)] text-[18px] italic transition-[border-color,color] [font-family:var(--font-serif),serif] hover:border-(--accent) hover:text-(--accent) dark:border-[rgba(144,168,255,0.45)]"
      >
        Book a call
        <ArrowUpRight size={15} strokeWidth={2} className="not-italic" />
      </a>
    </section>
  );
}
