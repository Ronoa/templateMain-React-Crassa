import React from 'react'
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import DrawerCustom from './Drawer'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  offset: theme.mixins.toolbar,
  root  : {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}))
const NavBar = () => {
  const classes = useStyles()

  const [ openDrawer, setOpenDrawer ] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
      return

    setOpenDrawer(open)
  }

  return (
    <div className={classes.root}>
      <AppBar color='primary' position='fixed'>
        <Toolbar>
          <IconButton
            aria-label='menu' className={classes.menuButton} color='inherit'
            edge='start' onClick={toggleDrawer(true)}>

            <MenuIcon  />

          </IconButton>
          <Typography className={classes.title}  variant='h6'>
           UGEL 016 - Seleccion de Personal
          </Typography>
          <Button color='inherit'> Login </Button>
        </Toolbar>
      </AppBar>
      {openDrawer && <DrawerCustom
        isOpenDrawer={openDrawer}
        toggleDrawer={toggleDrawer} />}
      <div className={classes.offset}></div>
    </div>
  )
}

export default NavBar
