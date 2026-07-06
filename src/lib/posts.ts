import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content/writing");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
};

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
    const { data, content } = matter(source);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      readTime: `${Math.max(1, Math.round(stats.minutes))} min`,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    readTime: `${Math.max(1, Math.round(stats.minutes))} min`,
    content,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}