/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BeViet: ["Be Vietnam Pro", "system-ui"],
        Corm: ["Cormorant Garamond", "system-ui"],
      },

      colors: {
        yellow: "#FFFFB9",
        purple: "#27143D",
        dark: "#391D59",
        orange: "#F8F7F2",
        navy: "#1620AA"
      },
    }

  },
  plugins: [],
};

// export const dark = "#27143D"
// export const purple = "#391D59";
// export const orange =; "#E3D894"
// export const yellow = "#F8F7F2";
// export const white = "#FFFFFF";
