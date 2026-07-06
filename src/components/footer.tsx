"use client";

import { toast } from "sonner";
import { Check, Copy } from "lucide-react";
import { links } from "@/lib/data";

function EmailToast({ email, success }: { email: string; success: boolean }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-(--line) bg-(--bg) px-4 py-3 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.15)]">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-(--accent-soft)">
        {success ? (
          <Check size={14} strokeWidth={2.5} className="text-(--accent)" />
        ) : (
          <Copy size={13} strokeWidth={2} className="text-(--accent)" />
        )}
      </div>
      <div>
        <div className="text-[15px] font-bold text-(--text)">
          {success ? "Email copied" : "Couldn't copy"}
        </div>
        <div className="text-[12px] text-(--faint) [font-family:var(--font-mono),monospace]">
          {email}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const email = links.email.replace("mailto:", "");
    try {
      await navigator.clipboard.writeText(email);
      toast.custom(() => <EmailToast email={email} success />);
    } catch {
      toast.custom(() => <EmailToast email={email} success={false} />);
    }
  };

  const linkClass =
    "inline-block cursor-pointer border-b border-[rgba(52,84,209,0.45)] text-[18px] italic transition-[border-color,color] [font-family:var(--font-serif),serif] hover:border-(--accent) hover:text-(--accent) dark:border-[rgba(144,168,255,0.45)]";

  return (
    <footer className="pt-14 pb-10">
      <div className="mb-4 text-[12px] lowercase tracking-[0.03em] text-(--muted) [font-family:var(--font-mono),monospace]">
        get in touch
      </div>
      <div className="mt-5 flex flex-wrap gap-4">
        <button onClick={handleEmailClick} className={linkClass}>
          Email
        </button>
        <a href={links.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
          LinkedIn
        </a>
        <a href={links.github} target="_blank" rel="noreferrer" className={linkClass}>
          GitHub
        </a>
        <a href={links.resume} download="Krish-Ahlawat-Resume.pdf" className={linkClass}>
          Resume
        </a>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-2 text-[12px] text-(--faint) [font-family:var(--font-mono),monospace]">
        <span>© 2026 Krish Ahlawat</span>
        <span>Faridabad, India</span>
      </div>
    </footer>
  );
}