import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useComponentWillMount } from 'lib/hooks'

import counterDucks from 'reducers/counter'
import { Button, Paper, Typography } from '@mui/material'

const { addCount, removeCount, addCountFromServer } = counterDucks.creators

export default () => {
  const dispatch = useDispatch()
  const count = useSelector(({ counter: { count } }) => count)

  useComponentWillMount(() => {
    dispatch(addCountFromServer())
  })

  return (
    <div>
      <Paper data-testid='counter'>
        <Typography paragraph>
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography variant='h1'>Counter </Typography>
        <Typography variant='h2'>{count} </Typography>
        <Button color='primary' onClick={() => dispatch(addCount())}>
          Add
        </Button>
        <Button color='primary' onClick={() => dispatch(removeCount())}>
          remove
        </Button>
        <Button
          color='primary'
          onClick={() => dispatch(addCountFromServer(true))}
        >
          Add 5 From Server
        </Button>
      </Paper>
    </div>
  )
}
