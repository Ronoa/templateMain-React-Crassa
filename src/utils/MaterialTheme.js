import { blue } from '@material-ui/core/colors'

const configDefault = {
  typography: {
    useNextVariants: true,
  },
  button: {
    textTransform: 'none',
  },
}

const themeDefault = {
  dark: {
    ...configDefault,
    palette: {
      primary: {
        dark: blue[800],
        light: blue[500],
        main: blue[600],
      },
      type: 'dark',
    },
  },
  ligth: {
    ...configDefault,
    palette: {
      primary: {
        dark: blue[800],
        light: blue[500],
        main: blue[600],
      },
      type: 'light',
    },
  },
}

export default themeDefault
