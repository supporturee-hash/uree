import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#20251f", sage: "#73816b", cream: "#f7f6f1", sand: "#e9e5db" }, fontFamily: { sans: ["Arial", "sans-serif"] } } },
  plugins: []
};
export default config;
