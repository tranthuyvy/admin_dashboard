/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RobotoMedium: ["RobotoMedium"],
        RobotoSemibold: ["RobotoSemibold"],
      },
      colors: {
        'main': '#b22830',
        'red': '#E32526',
        'hoverRed': '#880E0E',
        'borderRed': '#FF5256',
        'primary': '#53382c',
        'hoverPrimary': '#3A241B',
        'bgPrimary': '#FFF4F0',
        'grayWhite': '#E4E7EB',
        'borderGray': '#dddddd',
        'borderDarkGray': '#6A717C',
        'sub': '#7B7F84',
        'textNoneActive': '#cccc',
        'whiteYellow': '#faebd7',
        'lightYellow': '#f1bc7a',
        'darkYellow': '#bd945d',
        'matcha': '#d1d385',
        'green': '#006400',
      }
    },
  },
  plugins: [],
}