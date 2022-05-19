import { useState, useEffect } from "react"

import Form from "./components/Form"
import Header from "./components/Header"
import ListPatients from "./components/ListPatients"

function App() {

  const [clientes, setClientes] = useState([])
  const [cliente, setCliente] = useState({})

  useEffect(()=>{
    const obtenerLS = () => {
      const clienteLS = JSON.parse(localStorage.getItem('clientes')) ?? [] 
      setClientes(clienteLS)
    }

    obtenerLS();
  }, [])

  useEffect(()=>{
    localStorage.setItem('clientes', JSON.stringify(clientes))
  }, [clientes])

  const eliminarCliente = (id) => {
    const clientesActualizados = clientes.filter( paciente => paciente.id !== id)

    setClientes(clientesActualizados)
  }



  return (
    <div className="container mx-auto mt-20">
      <Header  />
      <div className="mt-12 md:flex">
        <Form
        clientes={clientes}
        cliente={cliente}
        setClientes={setClientes}
        setCliente={setCliente}
        />
        <ListPatients
        clientes={clientes}
        setCliente={setCliente}
        eliminarCliente={eliminarCliente}/>
        
      </div>
      <p className=" my-10 text-center md:w-4/5 mx-auto">Atención, los datos se guardan en la memoria del navegador, no borre los datos de navegación o se perderán</p>
      <p className=" my-10 text-center md:w-4/5 mx-auto">Hecho por: <a className=" text-red-500" href="http://twitter.com/scthch">Scthch</a></p>
    </div>
  )
}

export default App
