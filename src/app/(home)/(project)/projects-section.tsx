import { ProjectCard } from "./project-card";

export const ProjectsSection = () => {
  return (
    <>
      <div className="bg-black text-white text-7xl font-bold text-center py-10">
        Projects
        <div className="bg-black text-muted-foreground text-xl font-normal text-center py-5 border-none">
          I've worked on
        </div>
      </div>
      <div className="w-full md:flex flex-wrap justify-center items-center text-5xl bg-black">
        <ProjectCard
          title="Real-time Collaborative Docs"
          description="A real-time collaborative document editor that allows multiple users to edit a document simultaneously."
          imageSrc="/docs-project.png"
          imageAlt="Docs project"
          skills={{
            names: ["NextJS", "ReactJS", "typescript", "Shadcn"],
            images: [
              "/nextjs-logo.png",
              "/react-logo.png",
              "/typescript-logo.png",
              "/shadcn-logo.png",
            ],
          }}
          link="https://collaborative-docs-rho.vercel.app/"
        />

        <ProjectCard
          title="Wanderlust"
          description="A travel listing platform where users can list their properties, explore others' listings, and view reviews."
          imageSrc="/wanderlust-project.png"
          imageAlt="Wanderlust project"
          skills={{
            names: ["MongoDB", "Node JS", "Express JS", "Bootstrap"],
            images: [
              "/mongodb-logo.png",
              "/nodejs-logo.png",
              "/expressjs-logo.png",
              "/bootstrap-logo.png",
            ],
          }}
          link="https://wanderlust-project-8gn6.onrender.com/"
        />

        <ProjectCard
          title="Portfolio website using 3D elements"
          description="A portfolio website built to highlight skills, using interactive 3D elements to provide a unique experience for visitors."
          imageSrc="/portfolio-image.png"
          imageAlt="Portfolio project"
          skills={{
            names: ["ReactJS", "TailwindCSS", "Spline"],
            images: [
              "/react-logo.png",
              "/tailwind-logo.png",
              "/Spline-logo.png",
            ],
          }}
          link="/"
        />
      </div>
    </>
  );
};
