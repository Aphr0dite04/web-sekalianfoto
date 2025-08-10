import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],                 // penting: dark mode pakai class
  content: ["./src/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
