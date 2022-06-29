import React from 'react'
import clsx from 'clsx'
import { makeStyles, Paper } from '@material-ui/core'

export default function ContentSectionBody({
  sectionRender,
  isSectionShadowBottom = false,
  isSectionWhith = true,
  isSectionBlack = false,
  isSectionTransparent = false,
  colorSecction = '',
  iscontentBgImage = false,
  isTopDivider = false,
  iscontentBgImageTwo = false,
}) {
  const classes = useStyles()

  const backgroumdSectioncustom = `backgroundSection${colorSecction}Body`

  return (
    <Paper
      className={clsx(classes.contentSectionBody, {
        [classes.backgroundSectionShadowBottom]:
          isSectionShadowBottom && colorSecction.length <= 0,
        [classes.backgroundSectionTransparent]:
          isSectionTransparent && !isSectionBlack && colorSecction.length <= 0,
        [classes.backgroundSectionWhiteBody]:
          isSectionWhith &&
          !isSectionTransparent &&
          !isSectionBlack &&
          colorSecction.length <= 0,
        [classes.backgroundSectionBlackBody]: isSectionBlack,
        [classes[backgroumdSectioncustom]]: colorSecction.length > 0,
      })}
    >
      {isTopDivider ? <div className={classes.top_divider} /> : null}
      {iscontentBgImage ? (
        <div className={classes.contentbgImages}>
          <div
            className={clsx(classes.backgroundObjects, {
              [classes.backgroundImageObjects]: !iscontentBgImageTwo,
              [classes.backgroundImageObjects_two]: iscontentBgImageTwo,
            })}
          />
        </div>
      ) : null}
      <div className={classes.contentSectionWhitebody}>
        <div className={classes.sectionBody}>{sectionRender}</div>
      </div>
    </Paper>
  )
}

const useStyles = makeStyles((theme) => ({
  contentSectionBody: {
    // overflow: 'hidden',
    // position: 'relative'
  },
  contentbgImages: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  backgroundSectionShadowBottom: {
    backgroundImage:
      'linear-gradient(180deg,#ffffff 0%,#1976d257 100%)!important',
  },
  backgroundSectionWhiteBody: {
    background: '#fff',
  },
  backgroundSectionBlackBody: {
    background: 'radial-gradient(ellipse at center,#585858 0,#232323 100%)',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: '#343434',
    background: '#fff',
    color: '#fff',
  },
  backgroundSectionTransparent: {
    background: 'radial-gradient(ellipse at center,#585858 0,#232323 100%)',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    background: 'transparent',
    boxShadow: 'none',
  },
  backgroundObjects: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'block',
  },
  backgroundImageObjects: {
    backgroundImage:
      'url(https://educaperu.org/wp-content/uploads/2020/11/fondo-objetos-01-min.png)',
  },
  backgroundImageObjects_two: {
    backgroundImage:
      'url(https://educaperu.org/wp-content/uploads/2021/01/fondo-objetos-02-min.png)',
    height: 1005.14,
  },

  backgroundSectionBlueGradientBody: {
    backgroundImage:
      'linear-gradient(167deg,#00e2d7 0%,#0055af 100%)!important',
  },
  top_divider: {
    backgroundImage:
      'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI3MHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNmMmJjMiI+PHBhdGggZD0iTTAgOTAuNzJsMTQwLTI4LjI4IDMxNS41MiAyNC4xNEw3OTYuNDggNjUuOCAxMTQwIDEwNC44OWwxNDAtMTQuMTdWMEgwdjkwLjcyeiIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0wIDB2NDcuNDRMMTcwIDBsNjI2LjQ4IDk0Ljg5TDExMTAgODcuMTFsMTcwLTM5LjY3VjBIMHoiLz48L2c+PC9zdmc+)',
    backgroundSize: '100% 70px',
    position: 'relative',
    top: 0,
    height: 70,
    zIndex: 1,
  },
  contentSectionWhitebody: {
    paddingTop: theme.spacing(4.5),
    paddingBottom: theme.spacing(3.375),
    backgroundSize: 'cover',
    backgroundPosition: '50%',
  },
  sectionBody: {
    // minWidth: '50%',
    // maxWidth: '100%',
    // width       : 'calc(100% - 40px)',
    position: 'relative',
    padding: theme.spacing(0, 4.5),
    // marginLeft  : 'auto',
    // marginRight : 'auto'
  },
  '@media (max-width: 45.75em)': {
    sectionBody: {
      padding: theme.spacing(0, 2.5),
      textjustify: 'distribute',
    },
  },
}))
