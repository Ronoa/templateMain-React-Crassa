import React from 'react'
import clsx from 'clsx'

import { useTheme, makeStyles, Drawer, List, ListItem, ListItemText, IconButton, Divider, ListItemIcon } from '@material-ui/core'

import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows'
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
          {[ 'Job', 'Starred', 'Send email', 'Drafts' ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default DrawerCustom
