import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const ForgetPassword = () => {
    const [step, useStep] = useState(3);
    const navigate  = useNavigate();

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4 '>
        {/* STep 01 */}
        {step === 1 &&<div className='bg-white shadow-md rounded-xl p-8 max-w-md w-full'>
            <h2 className  = " text-2xl font-bold mb-6 text-center text-gray-800 "> Forget Your Password</h2>
            <form className='space-y-4'>
                <div>
                    <label htmlFor='' className='block text-sm font-medium text-gray-700'>Enter your password</label>
                    <input id="email" type="email" className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-black ' required placeholder='you@email.com'/>

                </div>
                <button type="submit" className='w-full bg-black hover:bg-[#4b4b4b] text-white py-2 px-4 rounded-md font-medium cursor-pointer '>SEND OTP</button>
            </form>
            <div className='text-sm underline  text-center mt-4' onClick={()=> navigate("/login")}>Back to login</div>
            
        </div>}
        {/* STep 02 */}
        {step === 2 &&<div className='bg-white shadow-md rounded-xl p-8 max-w-md w-full'>
            <h2 className  = " text-2xl font-bold mb-6 text-center text-gray-800 "> Enter OTP </h2>
            <form className='space-y-4'>
                <div>
                    <label htmlFor='OTP' className='block text-sm font-medium text-gray-700'>Please enter the 4-digit code sent to your email </label>
                    <input id="OTP" type="text" className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-black ' required placeholder='X   X   X   X'/>

                </div>
                <button type="submit" className='w-full bg-black hover:bg-[#4b4b4b] text-white py-2 px-4 rounded-md font-medium cursor-pointer '>VERIFY OTP</button>
            </form>
            <div className='text-sm underline  text-center mt-4' onClick={()=> navigate("/login")}>Back to login</div>
            
        </div>}
        {/* STep 03 */}
        {step === 3 &&<div className='bg-white shadow-md rounded-xl p-8 max-w-md w-full'>
            <h2 className  = " text-2xl font-bold mb-6 text-center text-gray-800 "> Reset Your Password</h2>
            <p className='text-sm text-gray-500 text-center mb-6'> Enter a new password to regain access to your account</p>
            <form className='space-y-4'>
                <div>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>NEW PASSWORD</label>
                    <input id="password" type="text" className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-black ' required placeholder='******'/>

                </div>
                <div>
                    <label htmlFor='confpassword' className='block text-sm font-medium text-gray-700'>Confirm PASSWORD</label>
                    <input id="password" type="text" className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-black ' required placeholder='******'/>

                </div>
                <button type="submit" className='w-full bg-black hover:bg-[#4b4b4b] text-white py-2 px-4 rounded-md font-medium cursor-pointer '>RESET PASSWORD</button>
            </form>
            <div className='text-sm underline  text-center mt-4' onClick={()=> navigate("/login")}>Back to login</div>
            
        </div>}
    </div>
  )
}

export default ForgetPassword
