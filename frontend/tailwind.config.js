/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // eslint-desable-next-line no-undef
  plugins: [
    require("daisyui"),
  ],
  
  // added by me as terminal indicates
  //daisyui: {
  //  themes: ["light", "dark", "cupcake"],
  //},

  /*module.exports = {
  //...
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  }*/
}
