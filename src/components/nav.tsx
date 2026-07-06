"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle as ThemeToggleClient } from "./theme-toggle";

export function Nav() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname === href
      ? "text-[var(--text)] font-semibold"
      : "text-[var(--muted)] hover:text-[var(--text)]";

  return (
    <>
      <div className="flex items-center justify-between gap-4 pt-7">
        <span className="flex items-center gap-2 text-[12.5px] text-(--muted) [font-family:var(--font-mono),monospace]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4CAF6D] animate-pulse" />
          <span className="text-[14.5px] font-normal italic text-(--text) [font-family:var(--font-serif),serif]">open to full-time roles</span>
        </span>
        <ThemeToggleClient />
      </div>

      <nav className="mt-9 flex flex-wrap items-center gap-4 text-[14.5px] sm:gap-5 [font-family:var(--font-mono),monospace]">
        <Link href="/" className={linkClass("/")} aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
        <Link href="/writing" className={linkClass("/writing")} aria-current={pathname === "/writing" ? "page" : undefined}>Writing</Link>
        {/* <a href="#work-with-me" className="text-(--muted) transition-colors hover:text-(--text)">Work with me</a> */}
      </nav>
    </>
  );
}