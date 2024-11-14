import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  
  const navigate = useNavigate();

  const [email ,setEmail] = useState("");


  async function sentHandler () {
    try {
      const lowercaseEmail = email.toLocaleLowerCase();
      console.log(lowercaseEmail);
      const response = await axios.post("http://localhost:4000/api/v1/existingAccount/forgetPassword" , {email: lowercaseEmail});
      toast.success("Mail sent successfully");
      navigate('/resetEmail');
    } catch (error) {
      console.log("eRROR WHILE SENDING MAIL" ,error);
    }
  }
  return (
    <div className="gap-3 ">
      <div className="main-div bg-white">
        {/* Heading Div */}
        <div className="flex flex-col mb-8">
          <h1 className="font-medium mb-2 text-4xl">Forget Password</h1>
          <p className="text-gray-500 w-[24rem] mt-4">
            Enter your email address for which account you want to reset your
            password.
          </p>
        </div>

        {/* Form Div */}
        <div className="w-full">
          <div className="flex flex-col mb-4 gap-2">
            <label>Email</label>
            <input placeholder="govind123@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <button className="w-full bg-gray-300 mt-4 mb-4 p-3 rounded-md" onClick={sentHandler}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
