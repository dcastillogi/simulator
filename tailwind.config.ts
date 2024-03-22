import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            "primary": "white",
            "secondary": "#ececec",
            "placeholder": "#a5a5a6",
            "background": "#171717",
            "background-accent": "#2A2B2B",
            "background-dimmed": "#1C1C1C",
            "background-hover": "#242424",
            "background-toggle": "#3a3a3a",
            "border": "#3A3A3A",
            "accent": "#2866DF"
        }
    },
  },
  plugins: [],
};
export default config;
