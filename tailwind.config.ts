import type { Config } from "tailwindcss";

export default {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "shrink-0",
    "transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F0EDE5',
          medium: '#0082CB',
          dark: '#000000',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;


// yellow #D4AF37
