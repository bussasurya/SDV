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
        sdv: {
          primary: "#11222B",      // Official Primary Dark Navy Charcoal
          green: "#1F4D3A",        // Official Secondary Forest Green
          cream: "#F4EEDD",        // Official Warm Cream / Ivory Background
          gold: "#E1B12C",         // Official Gold Accent
          goldSecondary: "#C9A24D",// Official Secondary Gold
          surface: "#FFFFFF",      // Clean Surface Card Background
          surfaceCream: "#EFE7D3", // Secondary Card Surface
          muted: "#5B6B6D",        // Muted Secondary Text
          border: "#DED6C4",       // Subtle Border Neutral
        },
        ayurveda: {
          green: {
            DEFAULT: "#11222B",
            dark: "#0B161C",
            light: "#1F4D3A",
            sage: "#6E8B6B",
            mint: "#E8F0EA",
          },
          cream: {
            DEFAULT: "#F4EEDD",
            light: "#FFFFFF",
            dark: "#EFE7D3",
            sand: "#E4DBC7",
          },
          gold: {
            DEFAULT: "#E1B12C",
            light: "#FFF7D6",
            dark: "#C9A24D",
          },
          terracotta: {
            DEFAULT: "#9C3F2E",
            light: "#D8A48F",
          },
          charcoal: "#11222B",
          textMuted: "#5B6B6D",
        },
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        akshar: ["var(--font-akshar)", "sans-serif"],
        serif: ["var(--font-oswald)", "sans-serif"],
        sans: ["var(--font-akshar)", "sans-serif"],
      },
      boxShadow: {
        ayurveda: "0 10px 30px -10px rgba(17, 34, 43, 0.08)",
        card: "0 4px 20px rgba(17, 34, 43, 0.04)",
        elevated: "0 20px 40px -15px rgba(17, 34, 43, 0.12)",
      },
      borderRadius: {
        ayurveda: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
