import React from 'react'
import { useSelector } from 'react-redux'
// import Cookies from 'js-cookie'

import {  createMuiTheme, makeStyles } from '@material-ui/core'

import { ThemeProvider } from '@material-ui/styles'
// import { TopAppBar } from '@material-ui/views'

// import { Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@material-ui/icons'

// import ThemeDucks from 'reducers/theme'
// import UserDucks from 'reducers/user'

import MaterialTheme from 'utils/MaterialTheme'

import Loading from 'components/Common/Loading'
import NavBar from './Header/NavBar'

const Main = ({ children }) => {
  const style = useSelector(({ theme }) => theme.style)
  const classes = useStyles()
  console.log('Jose: Main -> classes', classes)

  const theme = React.useMemo(() => createMuiTheme(MaterialTheme[style]), [ style ])

  return (
    <div>
      {
        true ? (
          <ThemeProvider theme={theme}>
            <NavBar />
            <main>{children}</main>
          </ThemeProvider>
        ) : <Loading />
      }
    </div>
  )
}

const useStyles = makeStyles(() => ({

}, { name: 'Main' }))
export default Main
