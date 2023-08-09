module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      xl: { max: '1140px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '576px' },
    },
    extend: {
      colors: {
        'midnight': '#10101A',
        'darkBlue':'#2a2b3880',
        'magenta':'#cf59e6',
        'lightGray':'#c4c4c4',
        'seafoam':'#6b9796',
        'charcoal':'#20222e',
        'gray':'#8B8B8B',
        'lightOrange':'#E6972F',
        'lightBlue':'#57A3C7',
        'lightPurple':'#C08AF1',
        'darkNavy':"#171e2f",
        'darkGray':'#585E6E'
      },
      fontFamily: {
        dDin: ["D-din", "sans-serif"],
        circular: ["Circular", "sans-serif"],
        mark: ["Mark-pro", "sans-serif"],
      },
      fontSize: {
        'xxl': '7px',
        '8xl':'83.52px',
        '5.5xl':'54px',
        '4.5xl':'45px'
    },
    },
  },
  plugins: [],
}
