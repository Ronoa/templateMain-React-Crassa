import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import DevicesIcon from '@mui/icons-material/Devices'
import PasswordIcon from '@mui/icons-material/Password'
import { Grid, Paper } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import FormUsuario from './FormUsuario'
import FormPassword from './FormPassword'
import BuildSection from '../section_page/BuildSection'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: '1.5rem 1.5rem 4rem' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    sx: {
      justifyContent: 'flex-start',
    },
  }
}

export default function MenuProfile() {
  const classes = useStyle()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const listOptions = [
    {
      position: 0,
      icon: <PersonOutlineIcon />,
      label: 'Información de usuario',
    },
    { position: 1, icon: <PasswordIcon />, label: 'Contraseña' },
    { position: 2, icon: <DevicesIcon />, label: 'Dispositivos recientes' },
    { position: 3, icon: <NotificationsNoneIcon />, label: 'Notificaciones' },
  ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={6} md={4}>
          <Paper>
            <div className={classes.titleTab}>
              <Typography variant='h3'>Perfil del usuario</Typography>
            </div>
            <Tabs
              orientation='vertical'
              variant='scrollable'
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                sx: {
                  width: 4,
                  height: '10px',
                },
              }}
              aria-label='Vertical tabs example'
            >
              {listOptions.map((item, index) => (
                <Tab
                  key={`vertical-tab-${index}`}
                  icon={item.icon}
                  iconPosition='start'
                  label={item.label}
                  {...a11yProps(item.position)}
                />
              ))}
            </Tabs>
          </Paper>
        </Grid>
        <Grid item xs={6} md={8}>
          <Paper>
            <TabPanel value={value} index={0}>
              <FormUsuario />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <FormPassword />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <BuildSection />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <BuildSection />
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyle = makeStyles((theme) => ({
  titleTab: {
    padding: '1.5rem 0px',
    '& > h3': {
      paddingLeft: theme.spacing(1.875),
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.5,
    },
  },
}))
