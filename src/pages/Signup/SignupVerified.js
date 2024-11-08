import React from 'react'
import { TiTick } from "react-icons/ti";
const SignupVerified = () => {
  return (
    <div>
      <div className='main-div2 bg-white border-none'>
        <div><TiTick className='text-white bg-green-400 rounded-full text-6xl'/></div>
        <div className='text-3xl font-semibold mt-9 w-full'>Successful Registration</div>
        <div className='w-full mt-4 text-gray-400'>Hurray! You have successfully created your account. Enter the app to explore all it’s features.</div>
        <button className='w-full bg-purple-600 text-white p-4 rounded-lg mt-9'>Enter the App</button>
      </div>
    </div>
  )
}

export default SignupVerified