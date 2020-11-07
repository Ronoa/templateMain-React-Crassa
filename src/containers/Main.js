import React from 'react'
import { useSelector } from 'react-redux'
// import Cookies from 'js-cookie'

import {  createMuiTheme, CssBaseline } from '@material-ui/core'

import { ThemeProvider } from '@material-ui/styles'

import MaterialTheme from 'utils/MaterialTheme'

import Loading from 'components/Common/Loading'
import NavBar from './Header/NavBar'

const Main = ({ children }) => {
  const style = useSelector(({ theme }) => theme.style)

  const theme = React.useMemo(() => createMuiTheme(MaterialTheme[style]), [ style ])

  return (
    <div >
      {
        true ? (
          <ThemeProvider theme={theme}>
            <div style={styles.root}>
              <CssBaseline />
              <NavBar />
              <main style={styles.container} >
                <div style={styles.toolbar} />
                {children}
              </main>
            </div>
          </ThemeProvider>
        ) : <Loading />
      }
    </div>
  )
}
const styles = {
  root: {
    display: 'flex'
  },
  toolbar: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'flex-end',
    padding       : '0 8px'
  },
  container: {
    flexGrow: 1,
    padding : '77px 14px'
  }
}

export default Main
