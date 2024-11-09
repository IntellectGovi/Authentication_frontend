import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate = useNavigate();
  return (
    <div className="gap-3 ">
      <div className="main-div bg-white">
        {/* Heading Div */}
        <div className="flex flex-col mb-8">
          <h1 className="font-medium mb-2 text-4xl">Welcome to Crypto App</h1>
          <p className="text-gray-500">
            Create a free account by filling data below.
          </p>
        </div>

        {/* Form Div */}
        <div className="w-full">
          <div  className="flex flex-col mb-4 gap-2">
            <label>Email</label>
            <input placeholder="govind123@gmail.com" />
          </div>

          <div  className="flex flex-col mb-4 gap-2">
            <label>Password</label>
            <input placeholder="........" />
          </div>

          <div  className="flex items-center mb-4 justify-between gap-2">
            <div className='flex items-center justify-center gap-1'>
            <input type="checkbox"></input>
            <label>
              Remember Me
            </label>
            </div>
            <div className='text-purple-800'>
              <button onClick={() => navigate("/forgetPassword")}>Forget Password?</button>
            </div>
          </div>

          <button className="w-full bg-purple-500 text-white mb-4 p-3 rounded-md">
            Login
          </button>
          <button className="w-full bg-gray-300 mb-4 p-3 rounded-md">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login