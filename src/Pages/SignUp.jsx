import React, { useState } from 'react'
import validator from 'validator';
import { Link } from 'react-router-dom';
import Input from '../Components/Input';
import Password from '../Components/Password';
import Button from '../Components/Button'


const SignUp = () => {
  const [ErrorMessage, SetErrorMessage] = useState("");
  const [name, setName] = useState( "")
  const [email, setEmail] = useState( "")
  const [password, setPassword] = useState( "")
  const [confirmPassword, setConfirmPassword] = useState( "")
   const handleNameChange =(e)=>{
    setName(e.target.value)
   }
   const handleEmailChange =(e)=>{
    setEmail(e.target.value)
   }
   const handlePasswordChange =(e)=>{
    setPassword(e.target.value)
   }
   const handleConfirmPasswordChange =(e)=>{
    setConfirmPassword(e.target.value)
   }
   const isDataValid=()=>{

   }

   const handleSubmit=(e)=>{
    e.prevent.default()
    isDataValid()
    

   }
   
  //  console.log(name);
  //  console.log(email);
  //  console.log(password);
  //  console.log(confirmPassword);



  return (

    <>


      <div className='h-screen w-screen flex justify-center items-center gap-4 '>

        <div className=' flex flex-col items-center justify-center gap-3 rounded-xl py-5  bg-slate-300 shadow-lg'>
          <h1 className=' text-2xl  text-slate-900 '>SignUp</h1>
          <div className='flex flex-col gap-4 border-zinc-500 p-6 rounded-xl '>
            <Input inputType="text" placeHolder="Name" val={name} handleChange={handleNameChange} />
            <Input inputType="email" placeHolder="Email" val={email} handleChange={handleEmailChange} />
            <Password placeHolder="Password" val={password} handleChange={handlePasswordChange} />
            <Password placeHolder=" confirm Password" val={confirmPassword}  handleChange={handleConfirmPasswordChange}/>
            <Button handleSubmitChange={handleSubmit} text="Create Account" />
            {ErrorMessage ? <h1 className=' text-red-500 font-sm'>Invalid Email</h1> : null}
            <Link to='/login' className=' text-gray-700 text-center pt-4 cursor-pointer hover:text-blue-700'> Already have Account? </Link>


          </div>
        </div>

      </div>






    </>

  )
}

export default SignUp