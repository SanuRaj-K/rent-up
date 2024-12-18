/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#27ae60",
      },
      fontFamily: {
        poppins: ["poppins"],
      },
      backgroundImage: {
        landing: "url(/assets/images/banner.png)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
