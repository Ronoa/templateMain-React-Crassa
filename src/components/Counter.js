import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useComponentWillMount } from 'lib/hooks'

import counterDucks from 'reducers/counter'
import { Button, makeStyles, Paper, Typography } from '@material-ui/core'

const { addCount, removeCount, addCountFromServer } = counterDucks.creators

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow  : 1,
    padding   : theme.spacing(0,9.5),
    backGround: 'red'
  },
  toolbarChildren: {
    display       : 'flex',
    alignItems    : 'center',
    justifyContent: 'flex-end',
    padding       : theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  }
}))

export default () => {
  const classes = useStyles()
  console.log('JOSE: classes', classes)
  const dispatch = useDispatch()
  const count = useSelector(({ counter: { count } }) => count)

  useComponentWillMount(() => {
    dispatch(addCountFromServer())
  })

  return (

    <Paper data-testid='counter'>
      <Typography paragraph>
        1 addCountFromServer
      </Typography>
      <Typography variant='h1'>Counter 2</Typography>
      <Typography variant='h2'>{count} </Typography>
      <Button color='primary' onClick={() => dispatch(addCount())}>Add</Button>
      <Button color='primary' onClick={() => dispatch(removeCount())}>remove</Button>
      <Button color='primary' onClick={() => dispatch(addCountFromServer(true))}>Add 5 From Server</Button>
    </Paper>

  )
}
