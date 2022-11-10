module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    screens: {
      xs: '614px',
      sm: '1002px',
      md: '1022px',
      lg: '1092px',
      xl: '1280px',
    },
    extend: {
      colors: {
        light: {
          primary: '#2D495E',
          onPrimary: '#FFFFFF',
          primaryContainer: '#C0C8CF',
          onPrimaryContainer: '#2D495E',

          secondary: '#4A708B',
          onSecondary: '#FFFFFF',
          secondaryContainer: '#C9D4DC',
          onSecondaryContainer: '#4A708B',

          tertiary: '#EE8449',
          onTertiary: '#FFFFFF',
          tertiaryContainer: '#FADAC8',
          onTertiaryContainer: '#EE8449',

          background: '#E6E9EC',
          onBackground: '2D495E', //primary

          surface: '#E6E9EC',
          onSurface: '#2D495E', //primary

          outline: '#2D495E', //primary

          textColor: '#000000',
        },
        dark: {
          primary: '#2D495E',
          onPrimary: '#192734',
          primaryContainer: '#38444d',
          onPrimaryContainer: '#2D495E',

          secondary: '#4A708B',
          onSecondary: '#FFFFFF',
          secondaryContainer: '#C9D4DC',
          onSecondaryContainer: '#4A708B',

          tertiary: '#EE8449',
          onTertiary: '#FFFFFF',
          tertiaryContainer: '#FADAC8',
          onTertiaryContainer: '#EE8449',

          background: '#15202B',
          onBackground: '2D495E', //primary

          surface: '#E6E9EC',
          onSurface: '#2D495E', //primary

          outline: '#2D495E', //primary

          textColor: '#FFFFFF',
        },
        dim: {
          50: '#5F99F7',
          100: '#5F99F7',
          200: '#38444d',
          300: '#202e3a',
          400: '#253341',
          500: '#5F99F7',
          600: '#5F99F7',
          700: '#192734',
          800: '#162d40',
          900: '#15202b',
        },
      },
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
