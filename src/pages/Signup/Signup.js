import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
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
        <div className="">

          <div className="flex gap-3 mb-4">
            <div className="flex flex-col">
              <label>Name</label>
              <input placeholder="Govind" />
            </div>
            <div className="flex flex-col">
              <label>Surname</label>
              <input placeholder="Upadhyay" />
            </div>
          </div>

          <div  className="flex flex-col mb-4">
            <label>Email</label>
            <input placeholder="govind123@gmail.com" />
          </div>

          <div  className="flex flex-col mb-4">
            <label>Password</label>
            <input placeholder="........" />
          </div>

          <div  className="flex flex-col mb-4">
            <label>Reset Password</label>
            <input placeholder="........" />
          </div>

          <div  className="flex items-center mb-4 justify-start gap-2">
            <input type="checkbox"></input>
            <label>
              I agree with
              <Link to={""} className="text-purple-600 ml-1">
                <span>Terms and conditions</span>
              </Link>
            </label>
          </div>

          <button className="w-full bg-gray-400 mb-4 p-3 rounded-md">
            Create Account
          </button>

          <p>Already have an account?<Link className="text-purple-600 ml-1">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
