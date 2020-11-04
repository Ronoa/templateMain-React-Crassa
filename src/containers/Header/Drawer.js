import React from 'react'

import { makeStyles, Drawer, List, ListItem, ListItemText } from '@material-ui/core'

const useStyles = makeStyles({

  fullList: {
    width: 'auto'
  },
  list: {
    width: 250
  }
})

const DrawerCustom = ({ isOpenDrawer, toggleDrawer }) => {
  const classes = useStyles()

  const _handleOpen = (ev) => {
    toggleDrawer(false)(ev)
  }

  return (
    <div key='a'>
      <Drawer
        anchor={'left'} key='ab' onClose={_handleOpen}
        open={isOpenDrawer}>
        <List  className={classes.list} key='abc'>
          <ListItem  key='abcd'>
            <ListItemText primary={'text'} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default DrawerCustom
