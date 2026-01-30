import React, { useState } from 'react'
import logo from  '../assets/logo.jpg'
import google from  '../assets/google.jpg'
import { FaEye } from "react-icons/fa";
import { ClipLoader } from 'react-spinners';
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate }  from "react-router-dom"
import axios from 'axios';
import { serverUrl } from '../App';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
const Login = () => {
  const [show,setShow]= useState(false);
  const navigate = useNavigate() ;
  const [email,setEmail]= useState("");
  const [password , setPassword]=useState("");
  const [loading,setLoading]=useState(false); 
  const  dispatch = useDispatch();

  const handleLogin  = async  ()=>{
    setLoading(true)
    try{
      const result  = await axios.post(serverUrl+"/api/auth/login",{email,password},{withCredentials:true});
      dispatch(setUserData(result.data));
      console.log(result.data);
      toast.success("Login Successfully")
      setLoading(false)
      navigate("/")
    }catch(error){
      console.log(`error is  ${error}`) ;
      toast.error(error.response.data.message);
      setLoading(false);
    }
  }

    return (
      <div className='bg-[#dddddb] w-screen h-screen flex items-center justify-center'>
        <form className='w-[90%] md:w-200 h-150 bg-white shadow-xl rounded-2xl flex' onSubmit={(e)=>{
          e.preventDefault() ;
        }} >
          {/* leftdiv */}
          <div className=' mmd:w-[50%] w-full h-full flex flex-col items-center justify-center gap-3'>
            <div>
              <h1 className=' text-black text-2xl font-semibold'> Welcome Back</h1>
              <h2 className='text-[#999797] text-[18px]   '> Login your account</h2>
            </div>
            
            <div className=' flex  flex-col gap-1 w-[80%] items-start justify-center  px-3'>
              <label htmlFor='email'  className='font-semibold'>Email</label>
              <input id="email" type="text" className='border w-full h-8.75 border-[#e7e6e6] text-[15px]  px-5' placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}/>
  
            </div>
            <div className=' relative flex  flex-col gap-1 w-[80%] items-start justify-center  px-3'>
              <label htmlFor='password'  className='font-semibold'>Password</label>
              <input id="password" type={show?"text": "password"} className='border w-full h-[35px] border-[#e7e6e6] text-[15px]  px-[20px]' onChange={(e) => setPassword(e.target.value)} placeholder="Your Password"/>
              {show ?<FaEye className=' absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onChange={(e) => setPassword(e.target.value)}
              onClick={()=>{
                setShow(prev=>!prev)
              }}/>:
              <FaEyeSlash className=' absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]'onClick={()=>{
                setShow(prev=>!prev)
              }}/>}
            </div>
            
            <button className='w-[80%]  h-[40px]  text-white bg-black  cursor-pointer items-center justify-center rounded-[5px]' disabled={loading} onClick={handleLogin}>{loading?<ClipLoader size={30} color = "white" />:"Login"}</button>
            <span className='text-[13px] cursor-pointer text-[#585787] '>Forget your password</span>
            <div className='w-[80%] flex items-center gap-2 '>
              <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'>
              </div>
              <div className='w-[50%] text-gray-400 flex items-center justify-center'>
                OR continue
              </div>
              <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
            </div>
            <div className='w-[80%] h-10 border border-black rounded-[5px] flex items-center justify-center'>
              <img src={google} alt="google" className='w-[25px]' />
              <span className='text-[18px] text-gray-500'>oogle</span>
            </div>
            <div className='text-[#6f6f6f]'>Doesn't have an account ? <span className='underline underline-offset-1 text-black  cursor-pointer ' onClick={()=>navigate("/signup")}> Sign Up</span></div>
          </div>
          {/* Right div */}
          <div className='w-[50%] h-full  rounded-r-2xl bg-black  md:flex items-center justify-center flex-col hidden'>
            <img src={logo} alt="logo" className='w-30 shadow-2xl ' />
            <span className='text-2xl text-white'>Virtual Courses</span>
  
          </div>
        </form>
      </div>
    )
}

export default Login
