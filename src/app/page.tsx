import { Nav } from "@/components/nav";
import { Intro } from "@/components/intro";
import { WorkLog } from "@/components/work-log";
import { Projects } from "@/components/projects";
import { WritingList } from "@/components/writing-list";
import { WorkWithMe } from "@/components/work-with-me";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Intro />
      <WorkLog />
      <Projects />
      <WritingList limit={4} showViewAll compact />
      <WorkWithMe />
      <Footer />
    </>
  );
}