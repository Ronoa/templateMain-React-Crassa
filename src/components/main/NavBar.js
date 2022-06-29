import React from 'react'
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'

import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
// import PersonIcon from '@mui/icons-material/Person'

import {
  Badge,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Toolbar,
  Stack,
} from '@mui/material'
import { useAuth } from 'components/context/authContext'
import { useNavigate } from 'react-router-dom'
import { stringAvatar } from 'utils/'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const NavBar = ({ isOpenDrawer, toggleDrawer }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const { user, signout } = useAuth()
  const navigate = useNavigate()

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const signOutHandler = async () => {
    try {
      await signout()
      navigate('/login')
    } catch (error) {}
  }
  const myprofileHandler = async () => {
    setAnchorEl(null)
    navigate('/myprofile')
  }

  return (
    <AppBar open={isOpenDrawer} position='absolute'>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
          aria-label='open drawer'
          color='inherit'
          edge='start'
          onClick={toggleDrawer}
          sx={{
            marginRight: '30px',
            ...(isOpenDrawer && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Avatar
          lt='Atena Apps'
          src='https://firebasestorage.googleapis.com/v0/b/logintemplate-88cf7.appspot.com/o/atenaAppsLogo.ico?alt=media&token=0744b8d6-de27-49d7-9c5e-02d76b2fba02'
        />
        <Typography
          color='inherit'
          component='h1'
          noWrap
          sx={{ marginLeft: 2, flexGrow: 1 }}
          variant='h6'
        >
          Atena Apps
        </Typography>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color='inherit' onClick={handleClick}>
          {/* <PersonIcon /> */}
          <Avatar {...stringAvatar(user.displayName || user.email)} />
        </IconButton>
        Login
        <Menu
          anchorEl={anchorEl}
          id='simple-menu'
          keepMounted
          onClose={handleClose}
          open={Boolean(anchorEl)}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={myprofileHandler}>My account</MenuItem>
          <MenuItem onClick={signOutHandler}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
