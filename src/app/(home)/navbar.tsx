"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarComp className="top-5" />
    </div>
  );
}

function NavbarComp({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    window.scrollTo({
      top: document.getElementById(sectionId)?.offsetTop || 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 w-fit mx-auto z-50 glass ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div onClick={() => scrollToSection("Home")}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </div>
        <div onClick={() => scrollToSection("Experience")}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Experience"
          ></MenuItem>
        </div>
        <div onClick={() => scrollToSection("Projects")}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
        </div>
        <div onClick={() => scrollToSection("Skills")}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Skills"
          ></MenuItem>
        </div>
        <div onClick={() => scrollToSection("Contact")}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </div>
      </Menu>
    </div>
  );
}
