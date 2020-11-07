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
              src={'https://react-material-dashboard.devias.io/static/images/avatars/avatar_6.png'}
              to='/app/account' />
            <div
              className={clsx(classes.infoUser, {
                [classes.drawerOpenInfoUser] : isOpenDrawer,
                [classes.drawerCloseInfoUser]: !isOpenDrawer
              })}>
              <Typography
                color='textPrimary'
                variant='h5'>
            Nombre y apellido
              </Typography>
              <Typography
                color='textSecondary'
                variant='body2'>
            Puesto
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
