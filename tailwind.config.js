/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'subtitles':'#606060',
        'titles':'#0D0D0D',
        'content':'#0D0D0D',
        'primary':'#FF3131',
        'negative':'#FF3131',
        'positive':'#44FB6C',
        'card-bg':'#FFFFFF',
      },
      fontFamily:{
        'title':'Poppins',
        'content':'Nunito'
      }
    },
  },
  plugins: [
    daisyui
  ],
}

