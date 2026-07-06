export function RaceConditionDiagram() {
  return (
    <svg
      viewBox="0 0 680 480"
      className="my-8 w-full"
      role="img"
      aria-label="Diagram comparing a shared-counter race condition to a coordinator-based fix"
    >
      <defs>
        <marker id="rc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      <text x="40" y="34" fontSize="11" className="[font-family:var(--font-mono),_monospace]" fill="var(--faint)">01 — before</text>

      <rect x="40" y="55" width="130" height="40" rx="4" fill="none" stroke="var(--muted)" strokeWidth="0.75" />
      <text x="105" y="79" textAnchor="middle" fontSize="13" fill="var(--text)">worker a</text>

      <rect x="40" y="125" width="130" height="40" rx="4" fill="none" stroke="var(--muted)" strokeWidth="0.75" />
      <text x="105" y="149" textAnchor="middle" fontSize="13" fill="var(--text)">worker b</text>

      <rect x="290" y="90" width="170" height="40" rx="4" fill="none" stroke="var(--faint)" strokeWidth="0.75" strokeDasharray="3 3" />
      <text x="375" y="114" textAnchor="middle" fontSize="12" fill="var(--muted)">completed = 8</text>

      <line x1="170" y1="75" x2="288" y2="100" stroke="var(--faint)" strokeWidth="0.75" markerEnd="url(#rc-arrow)" className="text-(--faint)" />
      <line x1="170" y1="145" x2="288" y2="120" stroke="var(--faint)" strokeWidth="0.75" markerEnd="url(#rc-arrow)" className="text-(--faint)" />

      <rect x="220" y="190" width="240" height="46" rx="4" fill="none" stroke="var(--accent)" strokeWidth="1" />
      <text x="340" y="211" textAnchor="middle" fontSize="13" fill="var(--accent)">both write completed = 9</text>
      <text x="340" y="228" textAnchor="middle" fontSize="11" fill="var(--accent)">one increment lost</text>

      <line x1="105" y1="95" x2="300" y2="188" stroke="var(--accent)" strokeWidth="0.75" markerEnd="url(#rc-arrow)" className="text-(--accent)" />
      <line x1="105" y1="165" x2="340" y2="188" stroke="var(--accent)" strokeWidth="0.75" markerEnd="url(#rc-arrow)" className="text-(--accent)" />

      <text x="40" y="270" fontSize="12" fill="var(--muted)">
        the flush fires one file early. results that hadn&apos;t finished writing never reach the map.
      </text>

      <line x1="40" y1="300" x2="640" y2="300" stroke="var(--line)" strokeWidth="0.75" />

      <text x="40" y="332" fontSize="11" className="[font-family:var(--font-mono),_monospace]" fill="var(--faint)">02 — after</text>

      <rect x="40" y="352" width="130" height="40" rx="4" fill="none" stroke="var(--muted)" strokeWidth="0.75" />
      <text x="105" y="376" textAnchor="middle" fontSize="13" fill="var(--text)">worker a</text>

      <rect x="40" y="410" width="130" height="40" rx="4" fill="none" stroke="var(--muted)" strokeWidth="0.75" />
      <text x="105" y="434" textAnchor="middle" fontSize="13" fill="var(--text)">worker b</text>

      <rect x="330" y="373" width="200" height="46" rx="4" fill="none" stroke="var(--accent)" strokeWidth="1" />
      <text x="430" y="393" textAnchor="middle" fontSize="13" fill="var(--accent)">coordinator</text>
      <text x="430" y="410" textAnchor="middle" fontSize="11" fill="var(--accent)">only one that increments</text>

      <line x1="170" y1="368" x2="328" y2="385" stroke="var(--muted)" strokeWidth="0.75" markerEnd="url(#rc-arrow)" />
      <line x1="170" y1="424" x2="328" y2="405" stroke="var(--muted)" strokeWidth="0.75" markerEnd="url(#rc-arrow)" />

      <text x="40" y="460" fontSize="12" fill="var(--muted)">
        workers only report completion. increments can never collide.
      </text>
    </svg>
  );
}