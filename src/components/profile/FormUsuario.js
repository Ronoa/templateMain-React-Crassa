import { Avatar, Button, Typography } from '@mui/material'
import * as React from 'react'
import { useAuth } from '../context/authContext'

export default function FormUsuario() {
  const { user } = useAuth()

  return (
    <div>
      <div>
        <Typography className='pb-8'>
          Edite la información de su cuenta:
        </Typography>
        <div className='flex justify-between	pb-8'>
          <div className='flex items-center	'>
            <Avatar
              alt={user.displayName}
              src={user.photoURL}
              sx={{ width: 90, height: 90, marginRight: 2 }}
            ></Avatar>
            <Typography variant='subtitle1'>
              {user.displayName || user.email}
            </Typography>
          </div>
          <div className='flex items-center	'>
            <Button
              sx={{
                marginRight: 2,
              }}
              variant='outlined'
              size='small'
              className='h-10 '
            >
              cancelar
            </Button>
            <Button variant='contained' size='small' className='h-10'>
              Guardar
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <label className='text-lg font-medium'>Nombre</label>
          <input
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Ingrese su nombre'
            type='text'
          />
        </div>
        <div>
          <label className='text-lg font-medium'>Apellido</label>
          <input
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Ingrese su apellido'
            type='text'
          />
        </div>
        <div>
          <label className='text-lg font-medium'>Correo</label>
          <input
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Ingrese su correo'
            type='email'
          />
        </div>
        <div>
          <label className='text-lg font-medium'>Celular</label>
          <input
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Ingrese su celular'
            type='number'
          />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
