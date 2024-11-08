import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="gap-3 ">
      <div className="main-div bg-white w-[1080px]">
        {/* Heading Div */}
        <div className="flex flex-col mb-8">
          <h1 className="font-medium mb-2 text-4xl">Reset Password</h1>
          <p className="text-gray-500">
            Enter new password
          </p>
        </div>

        {/* Form Div */}
        <div className="w-full">
          <div  className="flex flex-col mb-4">
            <label>New Password</label>
            <input placeholder="........" />
          </div>

          <div  className="flex flex-col mb-4">
            <label>Reset Password</label>
            <input placeholder="........" />
          </div>

          <button className="w-full bg-gray-400 mb-4 p-3 rounded-md">
            Reset Password
          </button>

          <p>Already have an account?<Link className="text-purple-600 ml-1">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
