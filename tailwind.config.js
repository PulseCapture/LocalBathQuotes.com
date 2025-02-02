// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this path matches your project structure
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#89B8F6',
        'custom-hover-blue': '#6faedb',
        'overlay-gray': '#4a5568', // Equivalent to bg-gray-700
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
