const Card = () => {
  return (
    <div className='bg-white shadow-md rounded-lg ml-5 py-10 px-10 my-10'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:
      <span className='font-normal normal-case'> Hook</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Dirección:
      <span className='font-normal normal-case'> C/Random213</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Email:
      <span className='font-normal normal-case'> Email@email.com</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Alta:
      <span className='font-normal normal-case'> 18/4/2022</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Info:
      <span className='font-normal normal-case'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ratione odit, facere doloribus a fugit perspiciatis soluta, nulla commodi eligendi voluptas, nesciunt dolores autem iste est dolorum minus cupiditate architecto.</span>
    </p>

  </div>
  )
}

export default Card