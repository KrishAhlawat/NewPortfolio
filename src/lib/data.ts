export const workLog = [
  { role: "Software Developer Intern", org: "JCB India Ltd., Ballabgarh", date: "May 2025 - Jul 2026" },
  { role: "Managing Director", org: "VITrendz", date: "Feb 2025 - Feb 2026" },
  { role: "Frontend Development Intern", org: "Valsco Technologies", date: "July 2024 - Sep 2025" },
] as const;

export const projects = [
  {
    title: "ECU Data Dashboard",
    tag: "Electron · React",
    desc: "A Windows desktop app that parses and visualizes 48,500+ engine test files, replacing a manual review process that couldn't keep pace.",
    note: "Internal tool — JCB India",
  },
  {
    title: "SOP Management System",
    tag: "Next.js · NestJS",
    desc: "Internal tool for JCB Operations to manage, translate, and export SOPs — deployed across Vercel, Railway, and a local Python worker.",
    note: "Internal tool — JCB India",
  },
  {
    title: "Collaborative Docs",
    tag: "Next.js · TypeScript · Node.js",
    desc: "A real-time collaborative document editor — built the full frontend layer including live sync, optimistic updates, and multi-user editing.",
    href: "https://collaborative-docs-rho.vercel.app/",
    repo: "https://github.com/KrishAhlawat/CollaborativeDocs",
  },
] as const;

export const writing = [
  { title: "What actually broke during my JCB internship", meta: "38K views", href: "#" },
  { title: "Debugging a race condition nobody warned me about", meta: "LinkedIn ↗", href: "#" },
  { title: "Parsing 48,500 XML files without freezing the UI", meta: "LinkedIn ↗", href: "#" },
  { title: "What deploying to Railway, Vercel, and ngrok taught me", meta: "LinkedIn ↗", href: "#" },
] as const;

export const links = {
  email: "mailto:hellokrishahlawat@gmail.com",
  linkedin: "https://linkedin.com/in/krishahlawat",
  github: "https://github.com/krishahlawat",
  resume: "/KrishAhlawatResume.pdf",
  bookCall: "https://cal.com/krishahlawat/chat",
};