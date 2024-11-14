import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");


  async function submitHandler() {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/v1/existingAccount/resetPassword", {
        email,
        password: newPassword,
        confirmPassword
      });
      toast.success("Password Reset Successful, Please login");
      navigate("/resetStatus");
    } catch (error) {
      toast.error("Error while resetting password!");
    }
  }

  

  return (
    <div className="gap-3">
      <div className="main-div bg-white w-[1080px]">
        {/* Heading Div */}
        <div className="flex flex-col mb-8">
          <h1 className="font-medium mb-2 text-4xl">Reset Password</h1>
          <p className="text-gray-500">Enter new password</p>
        </div>

        {/* Form Div */}
        <div className="w-full">
          <div className="flex flex-col mb-4">
            <label>Enter Email</label>
            <input
              placeholder="xyz@gmail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>New Password</label>
            <input
              placeholder="........"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label>Confirm Password</label>
            <input
              placeholder="........"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-gray-400 mb-4 p-3 rounded-md"
            onClick={submitHandler}
          >
            Reset Password
          </button>

          <p>
            Already have an account?
            <Link className="text-purple-600 ml-1" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
