import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginHandler() {
    try {
      const userData = { email, password };
      const response = await axios.post(
        "http://localhost:4000/api/v1/existingAccount/login",
        userData
      );

      if(response.data.success){
        toast.success("Logged in successfully");
        navigate("/home");
      }
    } catch (error) {
      toast.error("Error while logging in")
      console.log(error);
    }
  }

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
          <div className="flex flex-col mb-4 gap-2">
            <label>Email</label>
            <input
              placeholder="govind123@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4 gap-2">
            <label>Password</label>
            <input
              placeholder="........"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center mb-4 justify-between gap-2">
            <div className="flex items-center justify-center gap-1">
              <input type="checkbox"></input>
              <label>Remember Me</label>
            </div>
            <div className="text-purple-800">
              <button onClick={() => navigate("/forgetPassword")}>
                Forget Password?
              </button>
            </div>
          </div>

          <button
            className="w-full bg-purple-500 text-white mb-4 p-3 rounded-md"
            onClick={loginHandler}
          >
            Login
          </button>
          <button
            className="w-full bg-gray-300 mb-4 p-3 rounded-md"
            onClick={() => navigate("/")}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
