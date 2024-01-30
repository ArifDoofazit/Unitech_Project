/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#eb9843' ,
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(215, 215, 218)',
        '4xl': [
            '0 35px 35px rgba(215, 215, 218)',
            '0 45px 65px rgba(215, 215, 218)'
        ]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

