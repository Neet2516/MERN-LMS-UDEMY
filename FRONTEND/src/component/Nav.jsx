import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { CgCross, CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { serverUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import { toast } from 'react-toastify';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Nav = () => {
    const navigate = useNavigate();
    const { userData } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [showhem, setshowhem] = useState(false);
    const handlelogout = async () => {
        try {
            const result = await axios.get(serverUrl + '/api/auth/logout', { withCredentials: true })

            dispatch(setUserData(null));
            toast.success("logout Successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div>
            <div className='w-full h-[70px] fixed top-0 px-[20px] py-[10px] flex items-center justify-between bg-[#00000047] z-10'>
                <div className='lg:w-[20%] w-[40%] lg:pl-[50px]'><img src={logo} className='w-[60px] rounded-[5px] border-2 border-white' alt="" /></div>
                <div className='w-[30%]  lg:flex items-center justify-center gap-4 hidden'>
                    {!userData && <CgProfile className='w-[50px] h-[50px] fill-black cursor-pointer' onClick={() => setShow(!show)} />}
                    {userData && (
                        <div
                            className='w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black border-white cursor-pointer'
                            onClick={() => setShow(!show)}
                        >
                            {userData?.name?.slice(0, 1).toUpperCase()}
                        </div>
                    )}

                    {userData?.role === 'educator' && <div className='px-[20px]  py-[10px] border-2 border-white  text-white bg-black rounded-[10px] text-[18px] font-light  cursor-pointer'>Dashboard</div>}
                    {(!userData) ? <span className='px-[20px] py-[10px] border-2 border-whie text-white rounded-[10px] text-[18px] font-light cursor-pointer bg-[#000000d5] ' onClick={() => { navigate('/login') }}>Login </span> :
                        <span className='px-[20px] py-[10px] border-2 border-whie text-black  text-[18px] font-light cursor-pointer rounded-[10px] shadow-sm shadow-black bg-white' onClick={handlelogout}>LogOut </span>}
                    {show && <div className='absolute top-[110%] right-[15%] flex items-center flex-col justify-center gap-2 text-[16px] rounded-md bg-white px-[15px] py-[10px] border-[2px] border-black hover:border-black  hover:text-white hover:text-cursor-pointer hover:bg-black'>
                        <span className='bg-black text-white px-[30px] py-10px] rounded-2xl hover:bg-gray-600 '>My Profile</span>
                        <span className='bg-black text-white px-[30px] py-10px] rounded-2xl hover:bg-gray-600 ' >My Course</span>
                    </div>}
                </div>
                <GiHamburgerMenu className='w-[35px] h-[35px] lg:hidden fill-black cursor-pointer' onClick={() => setshowhem(!showhem)} />
                <div className={` fixed top-0 left-0  w-[100vw] h-[100vh] bg-[#000000d6] flex items-center justify-center flex-col gap-5 z-10 lg:hidden  ${showhem ? 'translate-x-[0] transition duration-500' : 'translate-x-[-100%] transition duration-500'}`}>
                    <ImCross className='w-[25px] h-[25px] fill-white absolute top-5 right-[4%]' onClick={() => setshowhem(!showhem)} />
                    {userData && (
                        <div
                            className='w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black border-white cursor-pointer'
                            
                        >
                            {userData?.name?.slice(0, 1).toUpperCase()}
                        </div>
                    )}
                    {(!userData) ? <span className='flex items-center justify-center px-[20px] py-[10px] border-2 border-whie text-white rounded-[10px] text-[18px] font-light cursor-pointer bg-[#000000d5] ' onClick={() => { navigate('/login') }}>Login </span> :
                        <span className='flex items-center justify-center px-[20px] w-[200px] h-[80px] py-[10px] border-2 border-white text-center text-white bg-black rounded-[10px] text-[18px] font-light  cursor-pointer' onClick={handlelogout}>LogOut </span>}
                    <div className='flex items-center justify-center px-[20px] w-[200px] h-[80px] py-[10px] border-2 border-white  text-white bg-black rounded-[10px] text-[18px] font-light  cursor-pointer' onClick={()=>{navigate("/profile")}}>My Profile</div>
                    {userData?.role === 'educator' && <div className='flex items-center justify-center px-[20px] w-[200px] h-[80px]   py-[10px] border-2 border-white  text-white bg-black rounded-[10px] text-[18px] font-light  cursor-pointer'>My Courses</div>}
                    {userData?.role === 'educator' && <div className='flex items-center justify-center px-[20px] w-[200px] h-[80px]   py-[10px] border-2 border-white  text-white bg-black rounded-[10px] text-[18px] font-light  cursor-pointer'>Dashboard</div>}
                </div>
            </div>
        </div>
    )
}

export default Nav
