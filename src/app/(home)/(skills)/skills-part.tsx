import { OrbitingCircles } from "@/components/ui/OrbitingCircles";

export function SkillsPart() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg mt-10 bg-black md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl md:text-9xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        My Skillset
      </span>
      
      <OrbitingCircles iconSize={40}>
        <Icons.mongodb />
        <Icons.expressjs />
        <Icons.react />
        <Icons.nodejs />
        <Icons.tailwind />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={120} reverse speed={2}>
        <Icons.typescript />
        <Icons.nextjs />
        <Icons.javascript />
        <Icons.bootstrap />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  typescript: () => (
    <img src="/typescript-logo.png" alt="typescript" className="object-fill" />
  ),
  nextjs: () => (
    <img src="/nextjs-logo.png" alt="typescript" className="object-fill" />
  ),
  mongodb: () => (
    <img src="/mongodb-logo.png" alt="typescript" className="object-fill" />
  ),
  react: () => (
    <img src="/react-logo.png" alt="typescript" className="object-fill" />
  ),
  expressjs: () => (
    <img src="/expressjs-logo.png" alt="typescript" className="object-fill" />
  ),
  nodejs: () => (
    <img src="/nodejs-logo.png" alt="typescript" className="object-fill" />
  ),
  tailwind: () => (
    <img src="/tailwind-logo.png" alt="typescript" className="object-fill" />
  ),
  bootstrap: () => (
    <img src="/bootstrap-logo.png" alt="typescript" className="object-fill" />
  ),
  javascript: () => (
    <img src="/javascript-logo.png" alt="typescript" className="object-fill" />
  ),
};
