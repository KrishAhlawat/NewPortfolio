import { Nav } from "@/components/nav";
import { WritingList } from "@/components/writing-list";
import { Footer } from "@/components/footer";

export default function WritingPage() {
  return (
    <>
      <Nav />
      <div className="pt-9">
        <p className="mt-4 max-w-130 text-[16px] leading-[1.65] text-(--muted)">
          Mostly notes on what broke, why, and what I'd do differently written
          down so the next debugging session starts a little further ahead.
        </p>
        <WritingList showViewAll={false} hideLabel/>
      </div>
      <Footer />
    </>
  );
}