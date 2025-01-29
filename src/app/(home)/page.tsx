"use client";

import { ExperienceSection } from "./experience-section";
import { HeroHighlight } from "./hero-section";
import { Navbar } from "./navbar";
import { ProjectsSection } from "./(project)/projects-section";
import { SkillsSection } from "./(skills)/skills-section";
import { ContactSection } from "./(contact)/contact-section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroHighlight />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
