import React from 'react'
import { makeStyles } from '@material-ui/core'
import FormCustom from 'components/Auth/Form'

function Authentication({ stateCurrent }) {
  const classes = useStyles()

  return (
    <div className={classes.screenLogin}>
      <div className={classes.sectionLeft}>
        <FormCustom stateCurrent={stateCurrent} />
      </div>
      <div className={classes.sectionRight}>
        <div className={classes.roundedBall} />
      </div>
    </div>
  )
}

const useStyles = makeStyles(
  ({ palette, spacing }) => ({
    screenLogin: {
      display: 'flex',
      width: '100%',
      height: '100vh',
      //'w-full flex items-center justify-center lg:w-1/2'
    },
    sectionLeft: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '@media (min-width: 1024px)': {
        width: '50%',
      },
    },
    sectionRight: {
      '@media (min-width: 1024px)': {
        display: 'flex',
        backgroundColor: palette.grey[200],
      },
      display: 'none',
      width: '100%',

      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      //'hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200'
    },
    roundedBall: {
      width: '100%',
      height: '64vh',
      backgroundImage:
        'url(https://firebasestorage.googleapis.com/v0/b/logintemplate-88cf7.appspot.com/o/Illustration%2021.svg?alt=media&token=627d85ca-8ed0-4b7f-9695-0ff6670f3c87)',
      backgroundPosition: '2cm 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      // '  bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce'
    },
  }),
  { name: 'Authentication' }
)

export default React.memo(Authentication)
