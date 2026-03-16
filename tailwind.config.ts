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
        brand: {
          darkGreen: "#136026",
          lightGreen: "#99FFA7",
          green: "#18A03A",
          deepGreen: "#018B24",
          brightGreen: "#52D85A",
          veryLightGreen: "#CAFDDC",
          black: "#131312",
          yellow: "#FFD101",
          orange: "#F49100",
        },
      },
    },
  },
  plugins: [],
};
export default config;
