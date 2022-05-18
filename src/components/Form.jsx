import React from 'react'
import Error from './Error';

import { useState, useEffect } from 'react'

const Form = ({clientes, setClientes}) => {

  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [info, setInfo] = useState("");

  const [error, setError] = useState(false)

  const generateID = () => {
    return Math.random().toString(36).substring(2)+Date.now().toString(36)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validación del usuario
    if([nombre, direccion, email, alta, info].includes('')){
      console.log("Hay al menos un campo vacío");
      setError(true)
    } else {
      console.log("Todos llenos");

      const objetoCliente = {
        nombre,
        direccion,
        email,
        alta,
        info,
        id:generateID()
      }

      setClientes([...clientes, objetoCliente])

      //reiniciar el formulario


      setNombre("")
      setAlta("")
      setDireccion("")
      setEmail("")
      setInfo("")
      setError(false)
    }
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'> 
        <h2 className='font-black text-3xl text-center'>Form</h2>
        <p className='text-center font-bold text-md mt-5'>Añade usurios y 
          <span className="text-red-500"> administralos</span>
        </p>

      <form 
      onSubmit={handleSubmit}
      className='bg-white shadow-md rounded-lg py-10 px-10 my-10'>

        <div >
          <label htmlFor="nombre" className='block text-gray-700 uppercase font-bold '>
            Nombre
            </label>
          <input 
            id="nombre"
            type="text"
            placeholder='Nombre' 
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}/>
        </div>

        <div className='mt-3'>
          <label htmlFor="direccion" className='block text-gray-700 uppercase font-bold '>
            Direccion
            </label>
          <input 
            id="direccion"
            type="text"
            placeholder='Direccion' 
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={direccion}
            onChange={(e)=>setDireccion(e.target.value)}/>
        </div>

        <div className='mt-3'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold '>
            Email
            </label>
          <input 
            id="email"
            type="email"
            placeholder='Email' 
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className='mt-3'>
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold '>
            Alta
            </label>
          <input 
            id="alta"
            type="date"
            placeholder='Email' 
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={alta}
            onChange={(e)=>setAlta(e.target.value)}/>
        </div>

        <div className='mt-3'>
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold '>
            Información
            </label>
          <textarea
          id="info"
          className="border-2 w-full p-2 mt-2 rounded-md"
          placeholder='Información'
          value={info}
          onChange={(e)=>setInfo(e.target.value)}
          />
        </div>


        {error && <Error mensaje="todos los campos son obligatorios"/>}

        <input type="submit" value="AGREGAR CLIENTE"
        className="bg-red-500 w-full p-3 mt-2 rounded-md text-white font-bold hover:bg-red-600 transition-all cursor-pointer" />

      </form>

    </div>
  )
}

export default Form