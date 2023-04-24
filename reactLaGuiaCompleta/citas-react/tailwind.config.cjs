/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}

//para produccion es necesario usar este segmento de codigo y comentar el anterior
// module.exports = {
//   content: ["index.html", "./src/**/*.jsx"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }