import React from 'react'
import clsx from 'clsx'
import { NavLink as RouterLink } from 'react-router-dom'
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  Button,
  Box,
  Avatar,
  Typography } from '@material-ui/core'

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
    paddingBottom: 0,
    marginLeft   : 16
  },
  avatar: {
    cursor: 'pointer',
    width : 64,
    height: 64
  },
  cardBox: {
    marginTop: 64
  },
  infoUser: {
    textAlign: 'center'
  },
  drawerOpenInfoUser: {
    display: 'block'
  },
  drawerCloseInfoUser: {
    display: 'none'
  }
}))
const userInfo = {
  avatar: 'https://scontent.flim7-1.fna.fbcdn.net/v/t1.0-1/p200x200/56158185_2159547367469554_3541765126182928384_n.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=lRoaHENp18UAX9fFqFX&_nc_ht=scontent.flim7-1.fna&tp=6&oh=5736a82e40f96ddeca6049f0c7d3cf3e&oe=5FCD1EA5',
  name  : 'Jose Luis',
  job   : 'Enginer'
}

const DrawerCustom = ({ isOpenDrawer }) => {
  const classes = useStyles()

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
        <Box
          className={classes.cardBox}
          display='flex'
          flexDirection='column'
          height={`${isOpenDrawer ? '13%' : '8%' }`}>
          <Box
            alignItems='center'
            display='flex'
            flexDirection='column'
            p={2}>
            <Avatar
              className={classes.avatar}
              component={RouterLink}
              src={userInfo.avatar}
              to='/app/account' />
            <div
              className={clsx(classes.infoUser, {
                [classes.drawerOpenInfoUser] : isOpenDrawer,
                [classes.drawerCloseInfoUser]: !isOpenDrawer
              })}>
              <Typography
                color='textPrimary'
                variant='h5'>
                {userInfo.name}
              </Typography>
              <Typography
                color='textSecondary'
                variant='body2'>
                {userInfo.job}
              </Typography>

            </div>
          </Box>
        </Box>

        <Divider />
        <List>
          {menuOptions.map(({ text, iconMenu:Icon, href },index) => (
            <ListItem
              // button
              className={clsx(classes.item)}
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
