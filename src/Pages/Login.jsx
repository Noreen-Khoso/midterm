import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaRegEyeSlash, FaRegEye, FaUserAlt } from "react-icons/fa";
import Input from '../Components/Input';
import Password from '../Components/Password';
import Button from '../Components/Button';


const Login = () => {
    const [IsPasswordVisible, setIsPasswordVisible] = useState(false)
    const navigate = useNavigate();
    const togglePassword = () => {
        setIsPasswordVisible(!IsPasswordVisible)

    }
    return (

        <>
            <div className='h-screen w-screen flex justify-center items-center gap-4 '>
                <div className=' flex flex-col items-center justify-center gap-3 rounded-xl py-5  bg-slate-300 shadow-lg'>
                    <h1 className=' text-2xl  text-slate-900 '>Login</h1>
                    <div className='flex flex-col gap-4 border-zinc-500 p-6 rounded-xl '>
                        <Input inputType="email" placeHolder="email" />
                        <Password placeHolder="Password" />
                        <Button text="Login" />
                        <Link to='/signup' className=' text-gray-700 text-center pt-4 cursor-pointer hover:text-blue-700'> Create a New account </Link>


                    </div>

                </div>

                <button onClick={() => { navigate(-1) }}>Back</button>


            </div>
        </>

    )
}

export default Login;