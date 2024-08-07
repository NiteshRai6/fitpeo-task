const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'body-bg': '#141316',
      'primary': '#1f2029',
      'secondary': '#45474e',
      'bar': '#7395ff',
      'deliver': '#155448',
      'cancel': '#613337'
    },
  },
  plugins: [],
});
