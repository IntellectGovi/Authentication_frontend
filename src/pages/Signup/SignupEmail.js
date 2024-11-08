import React from 'react'
import { IoMdMail } from "react-icons/io";
const SignupEmail = () => {
  return (
    <div className=''>
      <div className='main-div2 bg-white'>
      <div><IoMdMail className='text-7xl text-purple-500'/></div>
      <div className='text-4xl font-bold mt-6'>Email Verification</div>
      <div className='text-gray-400 mt-6'>We have sent you an email verification to  jenny.wilson@gmail.com. If you didn’t receive it, click the button below.</div>
      <button  className="w-full bg-gray-300 mt-6 mb-4 p-3 rounded-md">Re-Send the Email</button>
    </div>
    </div>
  )
}

export default SignupEmail