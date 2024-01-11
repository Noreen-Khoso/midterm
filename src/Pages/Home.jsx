import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className=' h-screen w-screen flex flex-col justify-center items-center gap-4'>
        <h1>Hello! This is my Home Page</h1>
        <button onClick={()=>{navigate("/login")}}className=' hover:text-purple-700 hover:bg-transparent hover:border-2 border-purple-600 duration-200'>Login</button>
        <button onClick={()=>{navigate("/signup")}} className=' hover:text-purple-700 hover:bg-transparent hover:border-2 border-purple-600 duration-200'>Signup</button>
    </div>
    </>
  )
}

export default Home