import { workLog } from "@/lib/data";

export function WorkLog() {
  return (
    <>
      <hr className="mt-11 border-0 border-t border-(--line)" />
      <section id="work-log" className="pt-11">
        <div className="mb-4 text-[14px] lowercase tracking-[0.03em] text-(--muted) [font-family:var(--font-mono),_monospace]">
          work log
        </div>
        {workLog.map((item, i) => (
          <div
            key={item.role}
            className="group flex items-baseline justify-between gap-4 py-2.75"
          >
            <div className="flex flex-col">
              <div className="inline-block w-fit bg-[linear-gradient(var(--accent-soft),var(--accent-soft))] bg-position-[0_100%] bg-size-[0%_100%] bg-no-repeat text-[16px] font-semibold">
                {item.role}
              </div>
              <div className="mt-0.5 text-[14px] text-(--muted)">{item.org}</div>
            </div>
            <div className="shrink-0 whitespace-nowrap text-[13px] text-(--faint) [font-family:var(--font-mono),_monospace]">{item.date}</div>
          </div>
        ))}
      </section>
    </>
  );
}