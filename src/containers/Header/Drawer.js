import React from 'react'
import clsx from 'clsx'
import { NavLink as RouterLink } from 'react-router-dom'
import { useTheme, makeStyles, Drawer, List, ListItem, ListItemText, IconButton, Divider, ListItemIcon, Button } from '@material-ui/core'

import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
// import InboxIcon from '@material-ui/icons/MoveToInbox'
// import MailIcon from '@material-ui/icons/Mail'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows'
import { menuOptions } from './constants'
const drawerWidth = 240
const useStyles = makeStyles((theme)=>({
  fullList: {
    width: 'auto'
  },
  list: {
    width: 250
  },
  drawer: {
    width     : drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width     : drawerWidth,
    transition: theme.transitions.create('width', {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX                   : 'hidden',
    width                       : theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  button: {
    color         : theme.palette.text.secondary,
    fontWeight    : theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing : 0,
    padding       : '10px 8px',
    textTransform : 'none',
    width         : '100%'
  },
  active: {
    color     : theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  item: {
    display      : 'flex',
    paddingTop   : 0,
    paddingBottom: 0
  }
}))

const DrawerCustom = ({ isOpenDrawer, toggleDrawer }) => {
  const classes = useStyles()
  const theme = useTheme()
  const _handleOpen = () => {
    toggleDrawer()
  }

  return (
    <div key='a'>
      <Drawer
        className={clsx(classes.drawer, {
          [classes.drawerOpen] : isOpenDrawer,
          [classes.drawerClose]: !isOpenDrawer
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen] : isOpenDrawer,
            [classes.drawerClose]: !isOpenDrawer
          })
        }}
        variant='permanent'>
        <div  >
          <IconButton onClick={_handleOpen}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List  >
          <ListItem button key='abcd'>
            <ListItemIcon><DesktopWindowsIcon /></ListItemIcon>
            <ListItemText primary={'Mi Escritorio'} />
          </ListItem>
        </List>
        <List>
          {menuOptions.map(({ text, iconMenu:Icon, href },index) => (
            <ListItem
              // button
              className={clsx(classes.item,)}
              disableGutters key={text}  >
              <Button
                activeClassName={classes.active}
                className={classes.button} component={RouterLink}  to={href}>
                <ListItemIcon key={index}><Icon /></ListItemIcon>
                <ListItemText primary={text} />

              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default DrawerCustom
