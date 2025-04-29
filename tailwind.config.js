/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#0C1825",
        "text-secondary": "#353535",
      },
      width: {
        logo: "597.87px",
        "sign-in": "185px",
        "create-account": "318px",
        "main-container": "1719px",
      },
      height: {
        "header-button": "87px",
        "main-container": "1055px",
      },
      borderRadius: {
        custom: "12px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
