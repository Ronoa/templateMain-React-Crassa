import React from 'react'
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
// import DrawerCustom from './Drawer'

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
const NavBar = ({ toggleDrawer }) => {
  const classes = useStyles()
  // const [ openDrawer, setOpenDrawer ] = React.useState(true)
  const [ anchorEl, setAnchorEl ] = React.useState(null)

  // const toggleDrawer = () => {
  //   setOpenDrawer(prev=>!prev)
  // }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
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
           Template Main
          </Typography>
          <Button color='inherit'  onClick={handleClick}> Login </Button>
          <Menu
            anchorEl={anchorEl}
            id='simple-menu'
            keepMounted
            onClose={handleClose}
            open={Boolean(anchorEl)}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      {/* <DrawerCustom
        isOpenDrawer={openDrawer}
        toggleDrawer={toggleDrawer} /> */}
      <div className={classes.offset}></div>
    </div>
  )
}

export default NavBar
