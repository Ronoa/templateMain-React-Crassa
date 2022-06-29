import React from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add'
import { NavLink as RouterLink } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

const TitleSectionBody = ({ infoSection }) => {
  const classes = useStyles()

  return (
    <div className={classes.contentSectionTitleBody}>
      <div>
        <div className={classes.infotitleSectionBody}>
          <Typography align='left' color='primary' variant='h5'>
            {infoSection.title}
          </Typography>
        </div>
        <div className={classes.groupTitleSectionBody}>
          <Typography align='left' variant='subtitle2'>
            {infoSection.description}
          </Typography>
        </div>
        <div>asdasd</div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  contentSectionTitleBody: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  contentTitleEnterprice: {
    // background: 'red',
    // maxWidth          : 960,
    // color             : '#fff',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: theme.spacing(6.875, 7.125),
    backgroundSize: '100% 100%',
  },
  boxService: {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    '& > div': {
      marginRight: theme.spacing(1.875),
    },
  },
  infotitleSectionBody: {
    textAlign: 'center',
    marginBottom: 15,
  },
  //
  groupTitleSectionBody: {
    marginBottom: theme.spacing(3),
    // background: 'blue'
    // display       : 'flex',
    textAlign: 'center',
    '& > h5': {
      // color: '#fff'
    },
  },
}))

export default TitleSectionBody
