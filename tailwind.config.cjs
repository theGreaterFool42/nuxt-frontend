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
          primary: '#016d38',
          onPrimary: '#FFFFFF',
          primaryContainer: '#9bf6b2',
          onPrimaryContainer: '#00210d',

          secondary: '#506352',
          onSecondary: '#FFFFFF',
          secondaryContainer: '#d2e8d3',
          onSecondaryContainer: '#0d1f12',

          tertiary: '#3a656e',
          onTertiary: '#FFFFFF',
          tertiaryContainer: '#beeaf5',
          onTertiaryContainer: '#001f25',

          error: '#ba1a1a',
          errorContainer: '#ffdad6',
          onError: '#ffffff',
          onErrorContainer: '#410002',

          background: '#fbfdf7',
          onBackground: '191c19',

          surface: '#fbfdf7',
          onSurface: '#191c19',
          surfaceVariant: '#dde5da',
          onSurfaceVariant: '#414941',

          outline: '#717971',

          inverseOnSurface: '#f0f1ec',
          inverseSurface: '#2e312e',
          inversePrimary: '#80d998',

          shadow: '#000000',

          surfaceTint: '#016d38',

          outlineVariant: '#c1c9bf',

          scrim: '#000000',

          textColor: '#000000',
        },
        dark: {
          primary: '#80d998',
          onPrimary: '#00391a',
          primaryContainer: '#005228',
          onPrimaryContainer: '#9bf6b2',

          secondary: '#b7ccb8',
          onSecondary: '#223526',
          secondaryContainer: '#384b3c',
          onSecondaryContainer: '#d2e8d3',

          tertiary: '#a2ced9',
          onTertiary: '#01363f',
          tertiaryContainer: '#204d56',
          onTertiaryContainer: '#beeaf5',

          error: '#ffb4ab',
          errorContainer: '#93000a',
          onError: '#690005',
          onErrorContainer: '#ffdad6',

          background: '#191c19',
          onBackground: 'e1e3de',

          surface: '#191c19',
          onSurface: '#e1e3de',
          surfaceVariant: '#414941',
          onSurfaceVariant: '#c1c9bf',

          outline: '#8b938a',

          inverseOnSurface: '#191c19',
          inverseSurface: '#e1e3de',
          inversePrimary: '#016d38',

          shadow: '#000000',

          surfaceTint: '#80d998',

          outlineVariant: '#414941',

          scrim: '#000000',

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
