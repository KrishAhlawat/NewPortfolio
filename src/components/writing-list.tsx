import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function WritingList({
  limit,
  showViewAll = true,
  compact = false,
  hideLabel = false,
}: {
  limit?: number;
  showViewAll?: boolean;
  compact?: boolean;
  hideLabel?: boolean;
}) {
  const posts = getAllPosts();
  const items = limit ? posts.slice(0, limit) : posts;

  return (
    <section id="writing" className="pt-11">
      {!hideLabel && (
        <div className="mb-4 text-[12px] lowercase tracking-[0.03em] text-(--muted) [font-family:var(--font-mono),monospace]">
          writing
        </div>
      )}
      {items.map((post) => (
        <Link
          key={post.slug}
          href={`/writing/${post.slug}`}
          className={`group block border-b border-(--line) first:pt-0 last:border-b-0 ${
            compact ? "py-3" : "py-4"
          }`}
        >
          <div className="flex items-baseline justify-between gap-3">
            <div className="inline-block w-fit bg-[linear-gradient(var(--accent-soft),var(--accent-soft))] bg-position-[0_100%] bg-size-[0%_100%] bg-no-repeat text-[15.5px] font-bold">
              {post.title}
            </div>
            <div className="shrink-0 whitespace-nowrap text-[12px] uppercase tracking-[0.03em] text-(--faint) [font-family:var(--font-mono),monospace]">
              {post.readTime}
            </div>
          </div>

          {!compact && (
            <>
              <div className="mt-1.5 flex items-baseline gap-3">
                <span className="text-[12px] text-(--faint) [font-family:var(--font-mono),monospace]">
                  {formatDate(post.date)}
                </span>
              </div>
              <div className="mt-2 max-w-125 text-[14.5px] leading-[1.65] text-(--muted)">
                {post.excerpt}
              </div>
            </>
          )}
        </Link>
      ))}
      {showViewAll && (
        <Link
          href="/writing"
          className="mt-3.5 inline-block text-[13.5px] text-(--faint) transition-colors hover:text-(--accent) [font-family:var(--font-mono),monospace]"
        >
          View all →
        </Link>
      )}
    </section>
  );
}
