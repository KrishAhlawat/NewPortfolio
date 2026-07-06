import Link from "next/link";

export function Intro() {
  return (
    <div className="pt-8 pb-2">
      <div className="mb-0.75 text-[26px] font-bold tracking-[-0.01em]">
        Krish Ahlawat
      </div>
      <div className="mt-1 text-[18px] font-normal italic text-(--muted) [font-family:var(--font-serif),serif]">
        software engineer · M.Tech @ VIT Vellore
      </div>
      <p className="mt-5 max-w-130 text-[18px] text-(--text)">
        I just wrapped an internship at <strong>JCB India</strong>, building internal tools
        that engineering &amp; operations teams actually rely on, a desktop diagnostics app
        and an SOP system, both from scratch.
      </p>
      <p className="mt-3.5 max-w-130 text-[18px] text-(--text)">
        Mostly I like the unglamorous middle: race conditions, Windows file-system quirks,
        and deploys that need to survive a reboot. Before this I ran{" "}
        <Link
          href="https://vitrendz.in"
          target="_blank"
          className="inline-block border-b border-[rgba(52,84,209,0.45)] text-[1.02em] italic transition-[border-color,color] [font-family:var(--font-serif),serif] hover:border-(--accent) hover:text-(--accent) dark:border-[rgba(144,168,255,0.45)]"
        >
          VITrendz
        </Link>, a 30-member student media org.
      </p>
    </div>
  );
}