import React, { useState } from 'react'

import ClienteListado from './ClienteListado'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const Clientes = () => {
  const { register, handleSubmit } = useForm()
  const [clientes, setClientes] = useState(null)

  const onSubmit = async (data) => {
    try {
      const res = await axios.get(`http://localhost:4000/api/clientes`, {
        params: {
          ApellidoYNombre: data.ApellidoYNombre
        }
      })
      console.log({ res })
      setClientes(res.data)
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <>
      <div className='card mb-3'>
        <div className='card-body'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <label className='form-label'>Apellido y Nombre:</label>
              <input
                type='text'
                className='form-control'
                {...register('ApellidoYNombre')}
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary'>
              Buscar
            </button>
          </form>
        </div>
      </div>
      {clientes && <ClienteListado clientes={clientes} />}
    </>
  )
}

export default Clientes
