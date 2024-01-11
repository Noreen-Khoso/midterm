import React from 'react'

const Button = ({text,handleSubmitChange}) => {
  return (
    <>

<button onClick={handleSubmitChange} className=' px-10 py-2 text-white rounded-xl'>{text}</button>

    </>
  )
}

export default Button