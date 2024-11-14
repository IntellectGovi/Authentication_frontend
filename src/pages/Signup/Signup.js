import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // Use named import for toast
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [surname, setsurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();


  const createHandler = async () => {
    if (!name || !surname || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }
  
    try {
      const userData = { name, email, surname, password, confirmPassword };
  
      const response = await axios.post(
        "http://localhost:4000/api/v1/newAccount/signup",
        userData
      );
  
      if (response.data.success) {
        toast.success("Signup Successful");
        navigate("/verifiedMail");
      } else {
        toast.error(response.data.message || "User already exists. Please log in.");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        // Log the message if it exists in the error response
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        // Handle any unexpected errors
        console.error("Unexpected error:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  

  
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
              <input
                placeholder="Govind"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Surname</label>
              <input
                placeholder="Upadhyay"
                onChange={(e) => setsurname(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              placeholder="govind123@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label>Password</label>
            <input
              placeholder="........"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label>Confirm Password</label>
            <input
              placeholder="........"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center mb-4 justify-start gap-2">
            <input
              type="checkbox"
              onClick={() => setIsChecked((prev) => !prev)}
            ></input>
            <label>
              I agree with
              <Link to={""} className="text-purple-600 ml-1">
                <span>Terms and conditions</span>
              </Link>
            </label>
          </div>

          {isChecked ? (
            <button
              className="w-full bg-blue-600 text-white mb-4 p-3 rounded-md"
              onClick={createHandler}
            >
              Create Account
            </button>
          ) : (
            <button disabled className="w-full bg-gray-400 mb-4 p-3 rounded-md">
              Create Account
            </button>
          )}

          <p>
            Already have an account?
            <button
              className="text-purple-600 ml-1"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
