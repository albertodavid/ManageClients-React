import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import ListPatients from "./components/ListPatients"

function App() {

  const [clientes, setClientes] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header  />
      <div className="mt-12 md:flex">
        <Form
        clientes={clientes}
        setClientes={setClientes}
        />
        <ListPatients
        clientes={clientes}/>
      </div>
    </div>
  )
}

export default App
