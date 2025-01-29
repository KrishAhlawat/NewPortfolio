"use client";
import { motion } from "framer-motion";
import { HeroHighlightComp, Highlight } from "../../components/ui/hero-highlight";

export function HeroHighlight() {
  return (
    <HeroHighlightComp>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-6xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Hi, I'm Krish, a{" "}
        <Highlight className="text-black">Full Stack</Highlight> and{" "}
        <Highlight className="text-black">Next JS Developer</Highlight>
      </motion.h1>
    </HeroHighlightComp>
  );
}
