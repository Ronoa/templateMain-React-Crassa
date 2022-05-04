import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box, Toolbar, Typography } from '@mui/material'
import Link from '@mui/material/Link'
import NavBar from './Header/NavBar'
import DrawerCustom from './Header/Drawer'

import { Globaltheme } from 'utils/GlobalTheme'

function Copyright(props) {
  return (
    <Typography
      align='center' color='text.secondary' variant='body2'
      {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const mdTheme = createTheme(Globaltheme)

const Main = ({ children }) => {
  const [ openDrawer, setOpenDrawer ] = React.useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(prev=>!prev)
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavBar isOpenDrawer={openDrawer} toggleDrawer={toggleDrawer} />
        <DrawerCustom
          isOpenDrawer={openDrawer}
          toggleDrawer={toggleDrawer} />
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ?
                theme.palette.grey[100] :
                theme.palette.grey[900],
            flexGrow: 1,
            padding : '18px',
            height  : '100vh',
            overflow: 'auto'
          }}>
          <Toolbar />
          {children}
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Main
