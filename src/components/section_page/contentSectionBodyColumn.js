import React from 'react'
import { Box, makeStyles  } from '@material-ui/core'
import { Grid } from '@mui/material'

export default function ContentSectionBodyColumn({
  sectionRenderLeft,
  sectionRenderRight

}) {
  const classes = useStyles()

  return (
    <Box className={classes.contentSectionBody} sx={{ flexGrow: 1 }}>
      <Grid alignItems='stretch' container spacing={2}>
        <Grid className={classes.bodyLeft} item md={8} xs={6}>
          {sectionRenderLeft}
        </Grid>
        <Grid className={classes.bodyRight} item md={4} xs={6}>
          {sectionRenderRight}
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  contentSectionBody: {
    // background: 'red',
    // padding: theme.spacing(3.5)
  },
  bodyLeft: {
    // background: 'blue',
    // 'with': '70%'
  },
  bodyRight: {
    // 'with': '30%'
  },

  sectionBody: {
    // minWidth: '50%',
    // maxWidth: '100%',
    // width       : 'calc(100% - 40px)',
    position: 'relative',

    // marginLeft  : 'auto',
    // marginRight : 'auto'
  },
  '@media (max-width: 45.75em)': {
    sectionBody: {
      // padding    : theme.spacing(0,2.5),
      textjustify: 'distribute',
    },
  },
}))
