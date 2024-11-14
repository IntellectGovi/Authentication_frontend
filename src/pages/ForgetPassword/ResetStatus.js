import React from 'react'
import { TiTick } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
const ResetStatus = () => {

  const navigate = useNavigate();
  return (
    <div className=''>
      <div className='main-div2 bg-white'>
      <div><TiTick className='text-white bg-green-400 rounded-full text-6xl'/></div>
      <div className='text-4xl font-bold mt-6'>Reset successfully</div>
      <div className='text-gray-400 mt-6'>Now you can access your account</div> 
      <button className="w-full bg-purple-700 text-white mt-5 mb-4 p-3 rounded-md" onClick={() => navigate("/")}>
            Sign up
          </button>
    </div>
    </div>
  )
}

export default ResetStatus