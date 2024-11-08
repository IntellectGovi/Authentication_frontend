import React from 'react'
import { TiTick } from 'react-icons/ti'
const ResetEmail = () => {
  return (
    <div className=''>
      <div className='main-div2 bg-white'>
      <div><TiTick className='text-white bg-green-400 rounded-full text-6xl'/></div>
      <div className='text-4xl font-bold mt-6'>Sent successfully</div>
      <div className='text-gray-400 mt-6'>We have sent instructions on how to reset your password to jenny.wilson@gmail.com. Please follow the instructions from the email.</div> 
    </div>
    </div>
  )
}

export default ResetEmail