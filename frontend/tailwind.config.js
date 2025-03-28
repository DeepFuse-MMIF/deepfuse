/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "480px", // Extra small screens
        sm: "640px", // Small screens (phones in portrait mode)
        md: "768px", // Medium screens (tablets and small devices in landscape mode)
        slg: "860px",
        lg: "1024px", // Large screens (laptops and larger tablets)
        xl: "1280px", // Extra large screens (larger desktops and wide screens)
        "2xl": "1536px", // 2x extra large screens (very large screens)
        "3xl": "1600px", // Extra extra large screens
      },
      animation: {
        fadeInUpShort: "fadeInUp 1.3s ease-in-out",
        fadeInLeftShort: "fadeInLeft 1.3s ease-in-out",
        fadeInRightShort: "fadeInRight 1.3s ease-in-out",
        fadeInDownShort: "fadeInDown 1.3s ease-in-out",
        fadeInUpMedium: "fadeInUp 1.6s ease-in-out",
        fadeInUpLong: "fadeInUp 1.8s ease-in-out",
        fadeInFormView: "fadeInFormView 2s ease-in-out",
        spinner: "spin 2s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInFormView: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities }) {
      addComponents({
        ".link_hover_effect": {
          //class used at every link in Navbar and Footer
          position: "relative",
          "&:after": {
            content: '""',
            display: "block",
            height: "2.5px",
            backgroundColor: "#000000",
            position: "absolute",
            bottom: "1",
            left: "50%",
            width: "0",
            transition: "width 0.3s ease, left 0.3s ease",
          },
          "&:hover:after": {
            width: "100%",
            left: "0",
          },
        },
        // Adding custom scrollbar hiding styles
        ".hide-scrollbar": {
          overflow: "hidden",
          scrollbarWidth: "none" /* Firefox */,
          "-ms-overflow-style": "none" /* Internet Explorer and Edge */,
          "&::-webkit-scrollbar": {
            display: "none" /* Safari and Chrome */,
          },
        },
      });
      addUtilities(
        {
          ".scrollbar-custom": {
            "scroll-behavior": "smooth",
            "scrollbar-width": "thin", //for firefox
            "scrollbar-color": "rgb(191, 191, 191) rgb(255, 255, 255)", // For Firefox
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgb(191, 191, 191)",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgb(255, 255, 255)",
            },
          },
        },
        ["responsive"]
      );
    }),
  ],
};
