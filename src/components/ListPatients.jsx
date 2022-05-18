import React from 'react'
import Card from './Card'

const ListPatients = ({clientes}) => {

  console.log(clientes);
  return (
    <div className='md:w-1/2 lg:w-3/5'>
      {clientes && clientes.length ? (
        <>
        <h2 className='font-black text-3xl text-center'>Lista de clientes</h2>
        <p className='text-center font-bold text-md mt-5'>Administra tus 
          <span className="text-red-500"> clientes</span>
        </p>
        </>
      ) : (
        <>
        <h2 className='font-black text-3xl text-center'>No hay clientes 😥 </h2>
        <p className='text-center font-bold text-md mt-5'>Agrege nuevos 
          <span className="text-red-500"> clientes</span>
        </p>
        </>
      )}



        {clientes.map((cliente) => {
          return <Card key={cliente.id} cliente={cliente} />}
        )}
    </div>
  )
}

export default ListPatients