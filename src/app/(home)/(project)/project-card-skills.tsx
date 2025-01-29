"use client";
import React from "react";
import { AnimatedTooltip } from "../../../components/ui/animated-tooltip";

interface ProjectCardSkillsProps {
  names: string[];
  images: string[];
}

export function ProjectCardSkills({ names, images }: ProjectCardSkillsProps) {
  const people = names.map((name, index) => ({
    id: index + 1,
    name: name,
    image: images[index],
  }));

  return (
    <div className="flex flex-row items-center justify-center mb-5 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
