import Link from "next/link";
import { HoverButton } from "./hover-button";
import { CopyIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { toast } from "sonner";

export const Footer = () => {
  return (
    <div className="w-full bg-black my-10 md:my-20">
      <div className="text-white text-2xl md:text-4xl font-bold text-center">
        Let's Connect
      </div>
      <div className="md:flex items-center justify-center my-10 gap-x-5">
        <div className="my-5 md:my-0 flex items-center justify-center">
          <Link href={"https://github.com/KrishAhlawat"} className="mx-2">
            <HoverButton
              title="Github"
              icon={<GithubIcon className="mr-2" color="white" />}
            />
          </Link>
          <Link href={"https://linkedin.com/in/KrishAhlawat"} className="mx-2">
            <HoverButton
              title="Linkedin"
              icon={<LinkedinIcon className="mr-2" color="white" />}
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-black text-white flex items-center border-2 border-white rounded-full px-4 py-2">
            <MailIcon className="mr-2" />
            <span>hellokrishahlawat@gmail.com</span>
            <CopyIcon
              className="ml-4 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("hellokrishahlawat@gmail.com");
                toast.success("Copied to clipboard!");
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
