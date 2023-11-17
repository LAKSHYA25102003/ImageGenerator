/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/Images/bg1.jpg')",
        ai1:"url('/src/Images/ai1.jpg')",
        ai2:"url('/src/Images/ai2.jpg')",
        ai3:"url('/src/Images/ai3.jpg')",
        ai4:"url('/src/Images/ai4.jpg')",
        ai5:"url('/src/Images/ai5.jpg')",
        ai6:"url('/src/Images/ai6.jpg')",
        ai7:"url('/src/Images/ai7.jpg')"
      },
    },
  },
  plugins: [],
};