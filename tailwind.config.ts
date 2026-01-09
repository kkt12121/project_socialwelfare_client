import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",  
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandMint: "#E9F5F1",
        mint:{
          50: "#ECFDF5",
          100: "#D1FAE5",
          600: "#10B981",
          700: "#059669",
        }
      },
    },
  },
  plugins: [],
};

export default config;