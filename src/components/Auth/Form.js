import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'components/context/authContext'
import { makeStyles } from '@material-ui/core'
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material'

export default function FormCustom({ stateCurrent }) {
  const classes = useStyles()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState()

  const { signup, signin, signinWithGoogle, resetPassword } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      if (email !== null && password !== null) {
        await signin(email, password)
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  const handleLoginGoogle = async () => {
    try {
      await signinWithGoogle()
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  const onSignUpHandle = async () => {
    try {
      if (email !== null && password !== null) {
        await signup(email, password)
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  const handleResetPassword = async () => {
    if (!email) return setError('Por favor ingrese su correo')
    try {
      await resetPassword(email)
      return setError(
        'Se envio un correo con el link para resetear su contraseña'
      )
    } catch (error) {
      setError(error.message)
    }
  }

  const formForStateType = {
    login: {
      title: 'Bienvenido de nuevo',
      titleButtonPrimary: 'Iniciar sesión',
      eventclickPrimary: handleLogin,
      infoReturn: '¿No tienes una cuenta?',
      titleReturn: 'Registrarse',
      eventclickReturn: () => navigate('/register'),
    },
    register: {
      title: 'Registar',
      titleButtonPrimary: 'Registrase',
      eventclickPrimary: onSignUpHandle,
      infoReturn: '¿Ya tienes una cuenta?',
      titleReturn: 'Inicia sesión',
      eventclickReturn: () => navigate('/login'),
    },
  }

  const formForState = formForStateType[stateCurrent]

  return (
    <div className={classes.formAuth}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '3rem',
          lineHeight: 1,
        }}
        variant='h1'
      >
        {formForState.title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          marginTop: '1rem',
          color: 'rgb(107 114 128)',
        }}
        variant='body1'
      >
        ¡bienvenido de nuevo! por favor ingrese sus datos.
      </Typography>

      <div className={classes.sectionInput}>
        {error ? <div className='mb-4 text-red-500'>{error}</div> : null}
        <div>
          <label className={classes.labelInput}>Correo</label>
          <TextField
            variant='outlined'
            value={email}
            fullWidth
            sx={{
              borderRadius: '0.75rem',
              marginTop: '0.25rem',
            }}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Ingrese su correo'
            type='email'
          />
        </div>
        <div>
          <label className={classes.labelInput}>Contraseña</label>
          <TextField
            variant='outlined'
            value={password}
            fullWidth
            sx={{
              borderRadius: '0.75rem',
              marginTop: '0.25rem',
            }}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Ingrese su contraseña'
            type='password'
          />
        </div>
        {stateCurrent === 'login' ? (
          <div className={classes.sectionButtons}>
            <FormGroup>
              <FormControlLabel
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  lineHeight: '1.5rem',
                }}
                control={<Checkbox />}
                label='recuerda por 30 dias'
              />
            </FormGroup>
            <Button
              onClick={handleResetPassword}
              className='font-medium text-base text-violet-500'
            >
              Se te olvidó tu contraseña
            </Button>
          </div>
        ) : null}

        <div className={classes.sectionButtonsColumn}>
          <Button
            variant='contained'
            onClick={formForState.eventclickPrimary}
            className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-3 rounded-xl bg-violet-500 text-white text-lg font-medium'
          >
            {formForState.titleButtonPrimary}
          </Button>
          <Button
            variant='outlined'
            onClick={handleLoginGoogle}
            className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 '
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z'
                fill='#EA4335'
              />
              <path
                d='M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z'
                fill='#34A853'
              />
              <path
                d='M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z'
                fill='#4A90E2'
              />
              <path
                d='M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z'
                fill='#FBBC05'
              />
            </svg>
            Iniciar sesión con Google
          </Button>
        </div>
        <div className={classes.sectionButtonsCenter}>
          <p className='font-medium text-base'>{formForState.infoReturn}</p>
          <Button
            sx={{
              textTransform: 'uppercase',
            }}
            onClick={formForState.eventclickReturn}
            className='ml-2 font-medium text-base text-violet-500'
          >
            {formForState.titleReturn}
          </Button>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(
  ({ spacing }) => ({
    formAuth: {
      background: 'white',
      paddingLeft: spacing(5),
      paddingRight: spacing(5),
      paddingTop: spacing(10),
      paddingBottom: spacing(10),
      borderRadius: '1.5rem',
    },
    sectionInput: {
      marginTop: '2rem',
    },
    labelInput: {
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
    },
    sectionButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: spacing(4),
    },
    sectionButtonsColumn: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: spacing(4),
      rowGap: '1rem',
    },
    sectionButtonsCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: spacing(4),
    },
  }),
  { name: 'FormCustom' }
)
