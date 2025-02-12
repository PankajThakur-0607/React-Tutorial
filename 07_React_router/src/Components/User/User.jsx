import React from 'react'
import { useParams } from 'react-router'
function User() {

    const {userid} = useParams();
  return (
    <div className='text-3xl text-white bg-gray-700 p-4'>User :{userid} </div>
  )
}

export default User