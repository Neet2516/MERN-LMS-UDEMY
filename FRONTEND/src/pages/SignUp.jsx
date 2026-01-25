import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.jpg";
import google from "../assets/google.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {ClipLoader} from 'react-spinners'
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../App";
import { toast } from "react-toastify";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading ,setLoading] = useState(false);
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios
        .post(serverUrl+"/api/auth/signup",{name,email,password,role},{withCredentials:true})
      setLoading(false);  
      console.log(result.data);
      navigate("/") ;
      toast.success("Sign Up successfully")
       
    }
    catch(error){
      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong");

    }
  };

  return (
    <div className="bg-[#dddddb] w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignup}
        className="w-[90%] md:w-[800px] h-[600px] bg-white shadow-xl rounded-2xl flex" 
      >
        {/* Left div */}
        <div className="md:w-[50%] w-full h-full flex flex-col items-center justify-center gap-3">
          <div>
            <h1 className="text-black text-2xl font-semibold">
              Let's get started
            </h1>
            <h2 className="text-[#999797] text-[18px]">
              Create your account
            </h2>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-1 w-[80%] px-3">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="border w-full h-[35px] border-[#e7e6e6] text-[15px] px-[20px]"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 w-[80%] px-3">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border w-full h-[35px] border-[#e7e6e6] text-[15px] px-[20px]"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
          </div>

          {/* Password */}
          <div className="relative flex flex-col gap-1 w-[80%] px-3">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              id="password"
              type={show ? "text" : "password"}
              className="border w-full h-[35px] border-[#e7e6e6] text-[15px] px-[20px]"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
            />

            {show ? (
              <FaEye
                className="absolute w-[20px] h-[20px] cursor-pointer right-[8%] bottom-[8px]"
                onClick={() => setShow(false)}
              />
            ) : (
              <FaEyeSlash
                className="absolute w-[20px] h-[20px] cursor-pointer right-[8%] bottom-[8px]"
                onClick={() => setShow(true)}
              />
            )}
          </div>

          {/* Role */}
          <div className="flex md:w-[50%] w-[70%] items-center justify-between">
            <span
              className={`px-[10px] py-[5px] border-[2px] rounded-xl cursor-pointer ${
                role === "student"
                  ? "border-black"
                  : "border-[#767676]"
              }`}
              onClick={() => setRole("student")}
            >
              Student
            </span>

            <span
              className={`px-[10px] py-[5px] border-[2px] rounded-xl cursor-pointer ${
                role === "educator"
                  ? "border-black"
                  : "border-[#767676]"
              }`}
              onClick={() => setRole("educator")}
            >
              Educator
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-[80%] h-[40px] text-white bg-black rounded-[5px]"  disabled ={loading}> {loading?<ClipLoader size={30} color='white'/>:"SignUp"}</button>
          {/* Divider */}
          <div className="w-[80%] flex items-center gap-2">
            <div className="w-[25%] h-[1px] bg-[#c4c4c4]" />
            <div className="w-[50%] text-gray-400 text-center">
              OR continue
            </div>
            <div className="w-[25%] h-[1px] bg-[#c4c4c4]" />
          </div>

          {/* Google */}
          <div className="w-[80%] h-10 border border-black rounded-[5px] flex items-center justify-center gap-2 cursor-pointer">
            <img src={google} alt="google" className="w-[25px]" />
            <span className="text-[18px] text-gray-500">Google</span>
          </div>

          {/* Login */}
          <div className="text-[#6f6f6f]">
            Already have an account?{" "}
            <span
              className="underline text-black cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </div>
        </div>

        {/* Right div */}
        <div className="w-[50%] h-full rounded-r-2xl bg-black md:flex hidden items-center justify-center flex-col">
          <img src={logo} alt="logo" className="w-[120px] shadow-2xl" />
          <span className="text-2xl text-white mt-3">
            Virtual Courses
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
