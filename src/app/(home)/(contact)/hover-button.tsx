"use client";
import React from "react";
import { HoverBorderGradient } from "../../../components/ui/hover-border-gradient";

interface HoverButtonProps {
    icon: React.ReactNode,
    title: string,
}

export function HoverButton({icon, title}: HoverButtonProps) {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full hover:transition hover:duration-500 hover:ease-in-out hover:border-blue-500"
        as="button"
        className="bg-black text-white flex items-center space-x-2"
      >
        {icon}
        <span>{title}</span>
      </HoverBorderGradient>
    </div>
  );
}
