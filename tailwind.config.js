/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(264.06deg, #091557 4.35%, #122690 59.76%, #203397 95.98%)",
      },
    },
  },
  plugins: [],
};
