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
        'background-nav': '#d5b990',
        'background': '#ece3d4', //checkout input box 
        'background-categories': '#d4c3aa', //also checkout background
        'product-card-one': '#e6d5bc',
        'product-card-two': '#f7f0e6',
        'button-color': '#d5b990',
        'checkout-background': '#ffffff',
        'fn-color': '#483b24',
        'fn-color-2': ''


      }
    },
  },
  plugins: [],
};
export default config;
