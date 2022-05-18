const Card = ({cliente}) => {
  return (

    <div className='bg-white shadow-md rounded-lg ml-5 py-10 px-10 my-10'>
    


    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:
      <span className='font-normal normal-case'> {cliente.nombre}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Dirección:
      <span className='font-normal normal-case'> {cliente.direccion}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Email:
      <span className='font-normal normal-case'> {cliente.email}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Alta:
      <span className='font-normal normal-case'> {cliente.alta}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Info:
      <span className='font-normal normal-case'> {cliente.info}</span>
    </p>
    
    <div className="flex justify-end">
      <button 
      type="button"
      className="py-1 px-5 bg-red-500 hover:bg-red-600 border-2 rounded-md text-white">
      Edit
      </button>

      <button 
      type="button"
      className="py-1 px-5 bg-gray-500 hover:bg-gray-600 border-2 rounded-md text-white">
      Delete
      </button>
    </div>

  </div>
  )
}

export default Card