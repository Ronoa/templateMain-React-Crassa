import React from 'react'
import { styled  } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'

import { Badge, IconButton, Typography,  Menu,
  MenuItem,
  Toolbar } from '@mui/material'
// import DrawerCustom from './Drawer'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex    : theme.zIndex.drawer + 1,
  transition: theme.transitions.create([ 'width', 'margin' ], {
    easing  : theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width     : `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create([ 'width', 'margin' ], {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const NavBar = ({ isOpenDrawer, toggleDrawer }) => {
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
    <AppBar open={isOpenDrawer} position='absolute'>
      <Toolbar
        sx={{
          pr: '24px' // keep right padding when drawer closed
        }}>
        <IconButton
          aria-label='open drawer'
          color='inherit'
          edge='start'
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' })
          }}>
          <MenuIcon />
        </IconButton>

        <Typography
          color='inherit'
          component='h1'
          noWrap
          sx={{ flexGrow: 1 }}
          variant='h6'>
              Dashboard
        </Typography>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color='inherit' onClick={handleClick}>
          <PersonIcon />
            Login
        </IconButton>
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

  )
}

export default NavBar
