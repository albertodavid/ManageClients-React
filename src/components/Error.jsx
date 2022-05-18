import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className=' bg-red-900 text-white p-2 my-5 text-center uppercase font-bold'>
        <p>{mensaje}</p>
    </div>
  )
}

export default Error