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
      colors: {
        "custom-blue-1": "rgba(10, 31, 85, 0.4)",
        "custom-blue-2": "rgba(16, 44, 115, 0.4)",
        "custom-blue-3": "rgba(12, 26, 76, 0.4)",
      },
    },
  },
  plugins: [],
};
