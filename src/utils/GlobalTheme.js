// import { blue   } from '@mui/material/colors'

export const Globaltheme = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem'
        }
      }
    }

  },
  palette: {
    primary: {
      dark : '#1976d2',
      light: '#1976d2' ,
      main : '#1976d2'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f'
    },
    mode: 'light'
  }

}
