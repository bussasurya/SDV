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
        ayurveda: {
          green: {
            DEFAULT: "#1B3B2B",
            dark: "#11261B",
            light: "#2C5B43",
            sage: "#4A7C59",
            mint: "#E8F0EA",
          },
          cream: {
            DEFAULT: "#FDFBF7",
            light: "#FFFFFF",
            dark: "#F4F0E8",
            sand: "#EAE3D2",
          },
          gold: {
            DEFAULT: "#D4AF37",
            light: "#F3E5AB",
            dark: "#AA8C2C",
          },
          terracotta: {
            DEFAULT: "#C86D51",
            light: "#E59882",
          },
          charcoal: "#2B2D2F",
          textMuted: "#5A6B5D",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ayurveda: "0 10px 30px -10px rgba(27, 59, 43, 0.08)",
        card: "0 4px 20px rgba(0, 0, 0, 0.04)",
        elevated: "0 20px 40px -15px rgba(27, 59, 43, 0.12)",
      },
      borderRadius: {
        ayurveda: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
