import React from 'react'
import { useSelector } from 'react-redux'
// import Cookies from 'js-cookie'

import {  createMuiTheme, CssBaseline, makeStyles } from '@material-ui/core'

import { ThemeProvider } from '@material-ui/styles'

import MaterialTheme from 'utils/MaterialTheme'

import Loading from 'components/Common/Loading'
import NavBar from './Header/NavBar'
import DrawerCustom from './Header/Drawer'

const Main = ({ children }) => {
  const style = useSelector(({ theme }) => theme.style)
  const classes = useStyles()
  const [ openDrawer, setOpenDrawer ] = React.useState(true)

  const theme = React.useMemo(() => createMuiTheme(MaterialTheme[style]), [ style ])

  const toggleDrawer = () => {
    setOpenDrawer(prev=>!prev)
  }

  return (
    <div >
      {
        true ? (
          <ThemeProvider theme={theme}>
            <div className={classes.root}  >
              <CssBaseline />
              <NavBar toggleDrawer={toggleDrawer} />
              <main>
                <DrawerCustom
                  isOpenDrawer={openDrawer}
                  toggleDrawer={toggleDrawer} />
                {children}
              </main>
            </div>
          </ThemeProvider>
        ) : <Loading />
      }
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    display      : 'flex',
    flexDirection: 'column',
    height       : '100vh',
    '& > main'   : {
      flexGrow      : 1,
      justifyContent: 'stretch',
      display       : 'flex',
      '& > div'     : {
        width      : '100%',
        margin     : '0 auto',
        padding    : 12,
        '& #Drawer': {
          padding: 0,
          width  : 'auto'
        }
      },
      '& > div#Drawer': {
        padding: 0,
        width  : 'auto'
      }
    }
  }
})

export default Main
