module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'martinique': '#272343',
        'milkyway': '#E3F6F5',
        'jaggedice': '#BAE8E8',
        'fauxbeige': '#f6f6d6',
        'black': '#000000',
        'white': '#ffffff',
      },
      backgroundImage: {
        'hero-test': "url('https://imgur.com/aBc27BW.jpg')",
      },
    },
  },
  plugins: [],
}