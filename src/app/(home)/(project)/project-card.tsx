"use client";

import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";
import { ProjectCardSkills } from "./project-card-skills";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  skills: {
    names: string[];
    images: string[];
  };
  link: string;
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  skills,
  link,
}: ProjectCardProps) {
  return (
    <CardContainer className="inter-var mx-6 md:mx-10">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-base md:text-xl font-bold text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`${imageSrc}`}
            height="1000"
            width="1000"
            className="h-30 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={`${imageAlt}`}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5 md:mt-12">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl text-xs flex items-center justify-center font-normal text-white"
          >
            <ProjectCardSkills names={skills.names} images={skills.images} />
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={`${link}`}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
          >
            Check live site
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
