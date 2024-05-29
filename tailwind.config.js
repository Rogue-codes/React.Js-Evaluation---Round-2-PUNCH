/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.375rem",
        "5xl": "3rem",
        "6xl": "3.375rem",
        "7xl": "64px",
      },
      colors: {
        "PUNCH/Purple": "#AF7CFF",
        "PUNCH/Dark": "#202229",
        "PUNCH/Nav": "#525AA0",
        "PUNCH/Yellow": "#FFBE2E",
        "PUNCH/Grey": "#F8F8F8",
        "PUNCH/Light-Green": "#C7F4C2",
        "PUNCH/Light": "#EDEFFF",
      },
      borderRadius: {
        primary: "15px",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(to right, #0C0C0C 0%, #202229 100%)",
      },
    },
  },
  plugins: [],
};
