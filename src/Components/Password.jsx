
import React, { useState } from 'react';
import { FaRegEyeSlash,FaRegEye} from "react-icons/fa";


const Password = ({placeHolder,val,handleChange}) => {
    const [IsPasswordVisible, setIsPasswordVisible] = useState(false)
    const togglePassword =()=>{
        setIsPasswordVisible(!IsPasswordVisible)

    }
  return (
    <>
    <div className=' flex justify-center items-center rounded-lg border-2  border-purple-400 bg-white px-4 shadow-lg '>
    <input type= {IsPasswordVisible ? "password" : "text"} name="" placeholder={placeHolder}  value={val} onChange={handleChange} className=' py-2 px-4 text-slate-700  focus:outline-none'/>
                { IsPasswordVisible ?
                <FaRegEye onClick={togglePassword}/> : 
                <FaRegEyeSlash onClick={togglePassword}/> }
                </div>
    
    
    
    </>
  )
}

export default Password