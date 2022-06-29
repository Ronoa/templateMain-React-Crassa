import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const BuildSection = ({}) => {
  const classes = useStyles()

  return (
    <div className={classes.contentSectionTitle}>
      <div className={classes.contentTitleSection}>
        <div className={classes.infotitleSection}>
          <Typography align='left' color='primary' variant='h3'>
            En construccion
          </Typography>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  contentSectionTitle: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  infotitleSection: {
    textAlign: 'center',
    marginBottom: 15,
  },
}))

export default BuildSection
