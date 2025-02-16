/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Ensures all JSX/TSX files are processed
    "./public/index.html", // ✅ Ensures Tailwind applies to the HTML file
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#89B8F6',
        'custom-hover-blue': '#6faedb',
        'overlay-gray': '#4a5568',
      },
      width: {
        '25rem': '25rem',
      },
      height: {
        '40rem': '40rem',
        '44rem': '44rem',
        '50rem': '50rem',
      },
    },
  },
  plugins: [],
};
