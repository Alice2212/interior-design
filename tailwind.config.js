/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'blue': '#2C3878',
      secondary: '#ecc94b'
    },
    extend: {
      extend: {
      width: {
        '128': '32rem',
       
      }
    },
  }
},
plugins: [require("daisyui")]
}