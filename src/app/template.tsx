"use client";

import { PageTransition, FadeUp } from "@/components/page-transition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition>
      <FadeUp>{children}</FadeUp>
    </PageTransition>
  );
}