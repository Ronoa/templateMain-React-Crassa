import React from 'react'
import { Link, Typography } from '@mui/material'

export default function Copyright(props) {
  return (
    <Typography
      align='center'
      color='text.secondary'
      variant='body2'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Atena Apps
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
