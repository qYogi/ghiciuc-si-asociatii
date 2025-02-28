import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navyblue: "#0d1738",
        lightgray: "#f5f5f5",
        charcoal: "#333333",
        lightCharcoal: "#7E7E7E",
      },
      fontFamily: {
        serif: ["Times New Roman", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
