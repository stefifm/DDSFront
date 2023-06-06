import React from 'react'

const ClienteListado = ({ clientes }) => {
  return (
    <div className='container mt-3'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Apellido y Nombre</th>
            <th>DNI</th>
          </tr>
        </thead>
        <tbody>
          {clientes?.map((item) => (
            <tr key={item.IdCliente}>
              <td>{item.IdCliente}</td>
              <td>{item.ApellidoYNombre}</td>
              <td>{item.DNI}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClienteListado
