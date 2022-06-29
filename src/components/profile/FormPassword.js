import { Avatar, Button, Typography } from '@mui/material'
import * as React from 'react'

export default function FormPassword() {
  return (
    <div>
      <div>
        <Typography>Cambia tu contraseña</Typography>
      </div>
      <div>
        <div>
          <input
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Ingrese su contraseña actual'
            type='text'
          />
        </div>
        <div>
          <input
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Ingrese su nueva contraseña'
            type='text'
          />
        </div>
        <div>
          <input
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Confirme su nueva contraseña'
            type='email'
          />
        </div>
        <div>
          <Typography>Requisitos de contraseña:</Typography>
          <Typography variant='caption'>
            Ensure that these requirements are met:
          </Typography>
          <Typography variant='body2' typ>
            Mínimo 8 caracteres - cuantos más, mejor Al menos uno
          </Typography>
          <Typography variant='body2'>
            carácter en minúscula Al menos un carácter en mayúscula Al menos uno
          </Typography>
          <Typography variant='body2'>
            número, símbolo o carácter de espacio en blanco
          </Typography>

          <Button>Guardar Cambios</Button>
        </div>
      </div>
    </div>
  )
}
