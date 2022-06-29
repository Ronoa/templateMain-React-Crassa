import React from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add'
import { NavLink as RouterLink } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

const TitleSection = ({ infoSection, isbuttonAction = false }) => {
  const classes = useStyles()

  return (
    <div className={classes.contentSectionTitle}>
      <div className={classes.contentTitleSection}>
        <div className={classes.infotitleSection}>
          <Typography align='left' color='primary' variant='h3'>
            {infoSection.title}
          </Typography>
        </div>
        <div className={classes.groupTitleSection}>
          <Typography align='left' variant='subtitle2'>
            {infoSection.description}
          </Typography>
        </div>
      </div>
      {isbuttonAction ? (
        <div>
          {infoSection.iscreated ? (
            <Button
              color='primary'
              component={RouterLink}
              startIcon={<KeyboardBackspaceIcon />}
              to='/produts'
              variant='contained'
            >
              Volver a todos los productos
            </Button>
          ) : (
            <Button
              color='primary'
              component={RouterLink}
              startIcon={<AddIcon />}
              to='/produts/create'
              variant='outlined'
            >
              Crear prodcuto
            </Button>
          )}
        </div>
      ) : null}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  contentSectionTitle: {
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
  infotitleSection: {
    textAlign: 'center',
    marginBottom: 15,
  },
  //
  groupTitleSection: {
    marginBottom: theme.spacing(3),
    // background: 'blue'
    // display       : 'flex',
    textAlign: 'center',
    '& > h5': {
      // color: '#fff'
    },
  },
}))

export default TitleSection
