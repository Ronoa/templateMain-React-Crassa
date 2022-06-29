import React from 'react'
import { useSelector } from 'react-redux'
import { createTheme, CssBaseline, makeStyles } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'

import MaterialTheme from 'utils/MaterialTheme'
import Loading from 'components/Common/Loading'
import NavBar from 'components/main/NavBar'
import DrawerCustom from 'components/main/Drawer'
import Copyright from 'components/main/Copyright'

const Main = ({ children }) => {
  const style = useSelector(({ theme }) => theme.style)
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = React.useState(false)

  const theme = React.useMemo(() => createTheme(MaterialTheme[style]), [style])

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev)
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <NavBar isOpenDrawer={openDrawer} toggleDrawer={toggleDrawer} />
          <DrawerCustom isOpenDrawer={openDrawer} toggleDrawer={toggleDrawer} />

          <Box
            component='main'
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              padding: '18px',
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            {children}
            <div>
              <Outlet />
            </div>
            <Copyright sx={{ pt: 4 }} />
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  )
}

const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.4em',
      },
      '*::-webkit-scrollbar-track': {
        background: palette.grey[100],
      },
      '*::-webkit-scrollbar-thumb': {
        background: palette.grey[400],
      },
      '*::-webkit-scrollbar-thumb:hover': {
        background: palette.grey[600],
      },
    },
    '& > main': {
      flexGrow: 1,
      overflow: 'hidden',
      justifyContent: 'stretch',
      display: 'flex',
      '& > div': {
        width: '100%',
        margin: '0 auto',
        padding: 12,
        '& #Drawer': {
          padding: 0,
          width: 'auto',
        },
      },
      '& > div#Drawer': {
        padding: 0,
        width: 'auto',
      },
    },
  },
}))

export default Main
