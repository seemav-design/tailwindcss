const plugin = require('tailwindcss/plugin')
module.exports = {
    content: [
      './public/*.html',
      './src/*.{html,js}',
  ],
    theme: {
      container: {
        padding: '2rem',
      },
      extend: {
        
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
          serif: ['Lora', 'serif'],
        },
        colors: {
          'primary': '#86BC42',
          'secondary': '#394363',
          'tertiary':'#1A2546',
          'light-gray' : '#F3F3F3',
        },
        backgroundImage: {
          'heroimg-bg': "url('../public/images/banner_1\ \(1\).png')",
          'chooseus-bg': "url('../public/images/chooseusimg.png')",
        
        }
      }
      
    },
    plugins: [
      plugin(function ({ addBase, addComponents, addUtilities, theme }) {
        addBase({
          'h1': {
            fontSize: theme('fontSize.6xl'),
            color: theme('colors.white'),
            fontFamily: theme('fontFamily.serif'),
            fontWeight: theme('fontWeight.medium'),
           
          },
          'h2': {
            fontSize: theme('fontSize.4xl'),
            color: theme('colors.tertiary'),
            fontFamily: theme('fontFamily.serif'),
            fontWeight: theme('fontWeight.medium'),
            
           
          },
          'h3': {
            fontSize: theme('fontSize.2xl'),
           
          },
          'h4': {
            fontSize: theme('fontSize.xl'),
            color: theme('colors.tertiary'),
            fontFamily: theme('fontFamily.serif'),
            fontWeight: theme('fontWeight.medium'),
           
          },
          
        })
        
        
      })
    ]
    
}
  