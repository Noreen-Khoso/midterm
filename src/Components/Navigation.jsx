import React from 'react'
import icon from "../Assets/Storefront.png"
import logo from "../Assets/NFT Marketplace.png"
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


const Navigation = () => {
 
  
  return (
    <>
    
    <div className='  max-w-[1240px] h-full bg-[#2B2B2B] '>
      <div className=' px-10  bg-[#2B2B2B] py-2 m-auto '>
        <div className=' flex items-center justify-between  py-2 gap-10  '>
          <div className=' flex gap-1 items-center'>

          <img src={icon} alt="logo"  className=' h-[1.5rem] w-[1.5rem]'/>
          <img src={logo} alt="heading" className='w-[9.3475rem] h-[0.92813rem] md:w-[12.46338rem] md:h-[1.2375rem] ' />
          </div>
          <button className=' md:hidden '>
              <RiMenu2Fill size={20} className=''/>
             
              
            </button>

          <ul className=' hidden md:flex items-center '>
            <li className=' cursor-pointer hover:text-purple-600 hover:border-b-2 border-purple-600'>Marketplace</li>
            <li className='cursor-pointer hover:text-purple-600 hover:border-b-2 border-purple-600'>Rankings</li>
            <li className='cursor-pointer hover:text-purple-600 hover:border-b-2 border-purple-600'>Connect a wallet</li>
          <button className='  hover:text-purple-400 hover:bg-transparent hover:boder-2 border-purple-600'>Sign Up</button>
          </ul>
          </div>
          
           

           

         

        

      </div>

    </div>
    </>
  )
}

export default Navigation