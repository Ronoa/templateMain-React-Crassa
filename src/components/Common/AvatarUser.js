import React from 'react'
// import clsx from 'clsx'
import { Avatar, makeStyles, Typography } from '@material-ui/core'

const AvatarUser = ({ photo, name }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} id='avatar'>
      {photo ? (
        <Avatar alt='Remy Sharp' className={classes.small} src={photo} />
      ) : (
        <Avatar className={classes.small}>
          <Typography variant='subtitle2'>{name}</Typography>
        </Avatar>
      )}
    </div>
  )
}

//

const useStyles = makeStyles(
  ({ spacing, palette }) => ({
    root: {
      margin: spacing(0, 1),
      backgroundColor: palette.secondary[10],
      borderColor: palette.grey[400],
      color: palette.grey[600],
      fontSize: 10,
    },
    small: {
      width: spacing(3),
      height: spacing(3),
    },
  }),
  { name: 'AvatarUser' }
)

export default React.memo(AvatarUser)
