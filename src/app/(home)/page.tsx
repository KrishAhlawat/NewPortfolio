"use client";

import { ExperienceSection } from "./experience-section";
import { HeroHighlightDemo } from "./hero-section";
import { NavbarDemo } from "./navbar";
import { ProjectsSection } from "./(project)/projects-section";
import { SkillsSection } from "./(skills)/skills-section";

export default function Home() {
  return (
    <div className="h-screen">
      <NavbarDemo />
      <HeroHighlightDemo />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}
