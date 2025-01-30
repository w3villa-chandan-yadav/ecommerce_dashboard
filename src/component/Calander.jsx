import React from 'react'
import { useParams } from 'react-router-dom'

const Calander = () => {

  const {name} = useParams();

  return (
    <div className='h-full w-full   grid place-items-center'>
      <h3 className='bg-gray-400 rounded-2xl animate-bounce' style={{padding:"20px 20px"}}> {name}</h3>
  

    </div>
  )
}

export default Calander