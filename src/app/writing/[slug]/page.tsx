import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { RaceConditionDiagram } from "@/components/mdx/race-condition-diagram";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const mdxComponents = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-9 mb-3 text-[19px] font-bold tracking-[-0.01em] text-(--text)"
      {...props}
    />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-4 text-[16.5px] leading-[1.75] text-(--text)" {...props} />
  ),
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded-sm bg-(--accent-soft) px-[0.4em] py-[0.15em] text-[0.9em] [font-family:var(--font-mono),monospace]"
      {...props}
    />
  ),
  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-5 overflow-x-auto rounded-lg bg-(--line) p-4 text-[13.5px] leading-[1.6] [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="my-4 list-disc space-y-1.5 pl-5 text-[16.5px] leading-[1.75] text-(--text)"
      {...props}
    />
  ),
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="border-b border-(--line) text-(--text) transition-colors hover:border-(--accent) hover:text-(--accent)"
      {...props}
    />
  ),
  RaceConditionDiagram,
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <Nav />
      <article className="pt-10 pb-16">
        <Link
          href="/writing"
          className="mb-8 inline-block text-[12.5px] text-(--faint) transition-colors hover:text-(--accent) [font-family:var(--font-mono),monospace]"
        >
          ← back to writing
        </Link>

        <h1 className="text-[26px] font-bold leading-tight tracking-[-0.01em] text-(--text)">
          {post.title}
        </h1>

        <div className="mt-3 flex items-baseline gap-3 text-[13px] text-(--faint) [font-family:var(--font-mono),monospace]">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
        </div>

        <div className="mt-8">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
      <Footer />
    </>
  );
}
