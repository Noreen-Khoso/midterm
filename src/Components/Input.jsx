import React from 'react'

const Input = ({inputType, placeHolder,val,handleChange}) => {
  return (
    <>

<div className=' flex justify-center items-center rounded-lg border-2  border-purple-400 bg-white px-4 shadow-lg '>
   <input type={inputType} placeholder={placeHolder} value={val} onChange={handleChange} className=' px-4 py-2  text-slate-500 focus:outline-none'/>
   </div>
    </>
  )
}

export default Input
