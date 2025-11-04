import type { Config } from "tailwindcss";

export default {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F0EDE5',
          medium: '#22D3A6',
          dark: '#060D0C',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;


// yellow #D4AF37
