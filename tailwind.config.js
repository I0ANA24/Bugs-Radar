// /** @type {import('tailwindcss').Config} */
export default {
  // Aceasta este partea cea mai importantă!
  // Îi spune lui Tailwind să scaneze toate fișierele .js, .jsx, etc. din folderul 'src'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}