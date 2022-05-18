import React from 'react'
import Card from './Card'

const ListPatients = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
        <h2 className='font-black text-3xl text-center'>ListPatients</h2>
        <p className='text-center font-bold text-md mt-5'>Administra tus 
          <span className="text-red-500"> clientes</span>
        </p>

        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default ListPatients