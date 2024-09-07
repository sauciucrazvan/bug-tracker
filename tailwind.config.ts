import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#155D94",
          secondary: "#38bdf8",
          success: "#22c55e",
          "base-200": "#e3e3e3",
          neutral: "#c3c3c3",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#155D94",
          secondary: "#38bdf8",
          success: "#22c55e",
        },
      },
    ],
  },
};
export default config;
