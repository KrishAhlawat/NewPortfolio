import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

export function ExperienceSection() {
  const data = [
    {
      title: "June 2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Started learning{" "}
            <span className="font-bold underline">MERN Stack</span> from
            scratch.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/mern-image.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "July 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-xl font-normal mb-8">
            Secured my first internship as a{" "}
            <span className="font-bold underline">Frontend Development Intern</span>{" "}
            at Valsco Technologies, where I had the opportunity to create my
            first personal{" "}
            <Link
              href="https://krishahlawat.vercel.app"
              className="hover:underline text-gray-500 hover:text-white"
              target="_blank"
            >
              portfolio
            </Link>{" "}
            website using React and 3D Elements.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/portfolio-image.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/react-logo.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Completed a successful internship in September as a{" "}
            <span className="font-bold underline">Team Lead</span> managing a
            team of <span className="font-bold underline">8 members</span> and
            transitioned to a{" "}
            <span className="font-bold underline">Full Stack Developer</span>{" "}
            role at{" "}
            <Link
              href="https://www.vitrendz.com/"
              className="hover:underline text-gray-500 hover:text-white"
              target="_blank"
            >
              VITrendz
            </Link>{" "}
            .
            <br />
            Gained hands-on experience by working on several projects and
            acquired proficiency in various new technologies.
          </p>
          {/* <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div> */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/docs-project.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/wanderlust-project.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/simon-game-project.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2025 - Present",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Became the{" "}
            <span className="font-bold underline">Technical Head</span> of{" "}
            <Link
              href="https://www.instagram.com/matrix.vit/?utm_source=qr&igsh=ZXhkZWc0N2Fjbmsy#"
              className="hover:underline text-gray-500 hover:text-white"
              target="_blank"
            >
              Matrix - The Multimedia Club
            </Link>{" "}
            of VIT.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/matrix-logo.png"
              alt="matrix logo"
              width={500}
              height={500}
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
