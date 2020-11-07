import React from 'react'
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography

} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import DrawerCustom from './Drawer'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  offset: theme.mixins.toolbar,
  title : {
    flexGrow: 1
  },
  appBar: {
    zIndex    : theme.zIndex.drawer + 1,
    transition: theme.transitions.create([ 'width', 'margin' ], {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }

}))
const NavBar = () => {
  const classes = useStyles()

  const [ openDrawer, setOpenDrawer ] = React.useState(true)

  const toggleDrawer = () => {
    setOpenDrawer(prev=>!prev)
  }

  return (
    <div>
      <AppBar
        className={classes.appBar}
        color='primary' position='fixed'>
        <Toolbar>
          <IconButton
            aria-label='menu' className={classes.menuButton} color='inherit'
            edge='start' onClick={toggleDrawer}>
            <MenuIcon  />
          </IconButton>
          <Typography className={classes.title}  variant='h6'>
           UGEL 016 - Seleccion de Personal
          </Typography>
          <Button color='inherit'> Login </Button>
        </Toolbar>
      </AppBar>
      <DrawerCustom
        isOpenDrawer={openDrawer}
        toggleDrawer={toggleDrawer} />
      <div className={classes.offset}></div>
    </div>
  )
}

export default NavBar
