import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "serif"],
      },
      maxWidth: {
        125: "500px",
        130: "520px",
        150: "600px",
      },
    },
  },
} satisfies Config;