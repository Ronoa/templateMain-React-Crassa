import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useComponentWillMount } from 'lib/hooks'

import counterDucks from 'reducers/counter'
import { Button, Typography } from '@material-ui/core'

const { addCount, removeCount, addCountFromServer } = counterDucks.creators

export default () => {
  const dispatch = useDispatch()
  const count = useSelector(({ counter: { count } }) => count)

  useComponentWillMount(() => {
    dispatch(addCountFromServer())
  })

  return (
    <div data-testid='counter'>

      <Typography variant='h1'>Counter </Typography>
      <Typography variant='h2'>{count} </Typography>
      <Button color='primary' onClick={() => dispatch(addCount())}>Add</Button>
      <Button color='primary' onClick={() => dispatch(removeCount())}>remove</Button>
      <Button color='primary' onClick={() => dispatch(addCountFromServer(true))}>Add 5 From Server</Button>
    </div>
  )
}
