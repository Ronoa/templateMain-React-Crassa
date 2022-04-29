import React from 'react'

import MuiDrawer from '@mui/material/Drawer'
import { styled  } from '@mui/material/styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
// import { menuOptions } from './constants'
import { Divider, IconButton, List, Toolbar } from '@mui/material'
import { mainListItems, secondaryListItems } from './listItems'

// const userInfo = {
//   avatar: 'https://scontent.flim7-1.fna.fbcdn.net/v/t1.0-1/p200x200/56158185_2159547367469554_3541765126182928384_n.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=lRoaHENp18UAX9fFqFX&_nc_ht=scontent.flim7-1.fna&tp=6&oh=5736a82e40f96ddeca6049f0c7d3cf3e&oe=5FCD1EA5',
//   name  : 'Jose Luis',
//   job   : 'Enginer'
// }

const DrawerCustom = ({ isOpenDrawer,toggleDrawer }) => {
  const drawerWidth = 240
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position  : 'relative',
        whiteSpace: 'nowrap',
        width     : drawerWidth,
        transition: theme.transitions.create('width', {
          easing  : theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX : 'hidden',
          transition: theme.transitions.create('width', {
            easing  : theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          }),
          width                       : theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9)
          }
        })
      }
    }),
  )

  return (
    <Drawer
      open={isOpenDrawer}
      variant='permanent'>
      <Toolbar
        sx={{
          display       : 'flex',
          alignItems    : 'center',
          justifyContent: 'flex-end',
          px            : [ 1 ]
        }}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component='nav'>
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
      {/* <Box
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
          <Divider />

          <List>
            {menuOptions.map(({ text, iconMenu:Icon, href },index) => (
              <ListItem
                className={clsx(classes.item)}
                disableGutters key={text}  >
                <Tooltip aria-label={text}  title={text}>
                  <Button
                    activeClassName={classes.active}
                    className={classes.button} component={RouterLink}  to={href}>
                    <ListItemIcon key={index}><Icon /></ListItemIcon>
                    <ListItemText primary={text} />
                  </Button>
                </Tooltip>
              </ListItem>
            ))}
          </List>
        </Box> */}
    </Drawer>

  )
}

export default DrawerCustom
