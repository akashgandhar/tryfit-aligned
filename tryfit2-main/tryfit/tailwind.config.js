/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C0C0C',
        btn_border: '#CDFFC5',
        btn_hover: '#86FF73',
        faq_background:"#003800",
        faq_background2: "#002D00",
        light_background: "#E1FFC7",
        light_pink_packground: "#FBFBFB",
        dark_green: "#255323",
        underline: "#9EC978",
        dive_color: "#2F2F2F",
        pinkish: "#CB0049",
        bad_yellow: "#EED145",
        grey1:"#5D5D5D",
        pop_green: "#04544B",
        whites: "#FFFFE7",
        gray_border: "#CACACA",
        black_shade: "#868686",
        white_yellow:"#FFFFE7",
      },
      dropShadow: {
        'custom-green' : '0 4px 3px rgba(130, 255, 111, 0.4)',
      },
      boxShadow: {
        'custom-green': '0 0 0 2px #86FF73, 0 2px 4px rgba(130, 255, 111, 0.10)', // Customize colors as needed
      },
      fontFamily: {
        'aventa_bold' : ['Aventa Extra' , 'sans-serif'],
        'aventa': ['Aventa', 'sans-serif'], 
        'heavitas': ['Heavitas', 'sans-serif'],
        'maven_pro' : ["Maven Pro", 'sans-serif'],
        'lato' : ['Lato', 'sans-serif'],
        'abessinica' : [ "Abyssinica SIL", 'serif'],
        'gilroy': ['Gilroy', 'sans-serif'],
        'ABeeZee':["ABeeZee", 'sans-serif'],
        'Rogue':["Rogue_Sans", 'sans-serif'],
      },
    },
  },
  plugins: [],
};