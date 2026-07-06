import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { generalSans, plexMono, instrumentSerif } from "../lib/fonts";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Krish Ahlawat",
  description: "Krish Ahlawat — Software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${generalSans.variable} ${plexMono.variable} ${instrumentSerif.variable}`}
    >
      <body
        cz-shortcut-listen="true"
        className="bg-(--bg) text-(--text) [--bg:#FBFBFA] [--text:#17181A] [--muted:#54555A] [--faint:#85868C] [--line:#E4E4E1] [--accent:#3454D1] [--accent-soft:#E4E9FA] [font-family:var(--font-inter),-apple-system,sans-serif] text-[17px] leading-[1.65] antialiased transition-colors duration-200 selection:bg-(--accent) selection:text-(--bg) dark:[--bg:#111113] dark:[--text:#F3F3F2] dark:[--muted:#B7B8BC] dark:[--faint:#86878C] dark:[--line:#262628] dark:[--accent:#90A8FF] dark:[--accent-soft:#232A45]"
      >
        <Toaster
          position="bottom-center"
          toastOptions={{
            unstyled: true,
            classNames: {
              toast: "!bg-transparent !shadow-none !border-none !p-0",
            },
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="mx-auto max-w-150 px-6">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
