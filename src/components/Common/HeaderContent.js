import React, { Fragment } from 'react'
import { useDebounceText } from 'lib/hooks'
import { useNavigate, useParams } from 'react-router-dom'
import {
  AppBar,
  Divider,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core'

import {
  Search as SearchIcon,
  ArrowBack as ArrowBackIcon,
  GroupAdd as GroupAddIcon,
  Assessment as AssessmentIcon,
} from '@material-ui/icons'

const HeaderContent = ({
  title,
  history,
  actionSecond,
  handleChangeSearch,
  backPage,
  //  jobId,
  filterPage,
  buttonTitle = false,
  actionButtonTitle,
}) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { jobId } = useParams()

  const [searchLocal, setSearchLocal] = React.useState(null)
  // const navigate = useNavigate();
  const searchDebounce = useDebounceText(searchLocal, 600)

  React.useEffect(() => {
    if (searchLocal !== null) handleChangeSearch(searchLocal)
  }, [searchDebounce])

  const _handleChangeSearch = (ev) => {
    setSearchLocal(ev.target.value)
  }

  return (
    <Fragment>
      <AppBar
        className={classes.appBar}
        color='inherit'
        component='div'
        elevation={0}
        position='static'
      >
        <Toolbar className={classes.toolbar} disableGutters>
          <div className={classes.subHeaderContent}>
            <div className={classes.subHeaderTitle}>
              {backPage ? (
                <div>
                  <IconButton
                    aria-label='backPage'
                    className={classes.margin}
                    // onClick={() => history.back()}
                    onClick={() => navigate(-1)}
                  >
                    <ArrowBackIcon color='action' size='small' />
                  </IconButton>
                </div>
              ) : null}
              <div className={classes.subHeaderActions}>
                <Typography variant='h6'>{title}</Typography>
                {buttonTitle ? (
                  <Tooltip
                    aria-label='Configurar Evaluadores'
                    title='Configurar Evaluadores'
                  >
                    <IconButton
                      aria-label='backPage'
                      className={classes.margin}
                      onClick={actionButtonTitle}
                    >
                      <GroupAddIcon color='action' />
                    </IconButton>
                  </Tooltip>
                ) : null}
                {buttonTitle ? (
                  <Tooltip aria-label='Ver reporte' title='Ver reporte'>
                    <IconButton
                      aria-label='backPage'
                      className={classes.margin}
                      // onClick={() => history.push(`/job/${jobId}/report`)}
                      onClick={() => navigate(`/job/${jobId}/report`)}
                    >
                      <AssessmentIcon color='action' />
                    </IconButton>
                  </Tooltip>
                ) : null}
              </div>
            </div>
            <div className={classes.subHeaderActions}>
              {filterPage ? (
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={_handleChangeSearch}
                  size='small'
                  value={searchLocal || ''}
                  variant='outlined'
                />
              ) : null}
              {actionSecond}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Divider />
    </Fragment>
  )
}

const useStyles = makeStyles(
  ({ palette, spacing }) => ({
    appBar: {
      boxShadow: `inset 0px -1px 0px ${palette.grey[300]}`,
      zIndex: 1,
    },
    subHeaderActions: {
      '& > *': {
        marginLeft: spacing(1.5),
      },
      alignItems: 'center',
      display: 'flex',
    },
    subHeaderTitle: {
      '& > *': {
        marginLeft: spacing(1.5),
      },
      display: 'flex',
    },
    subHeaderContent: {
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
    },
    taskContent: {
      flex: 1,
    },
    toolbar: {
      paddingLeft: spacing(1.5),
      paddingRight: spacing(1.5),
    },
  }),
  { name: 'HeaderContent' }
)

export default React.memo(HeaderContent)
