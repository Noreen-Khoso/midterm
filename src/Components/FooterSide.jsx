import React from 'react'
import icon from "../Assets/Storefront.png"
import logo from "../Assets/NFT Marketplace.png"
import { FaDiscord, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const FooterSide = () => {
  return (
    <>
    <div className=' container h-full max-w-[1240px] bg-[#2B2B2B] px-10'>
        <div className=' flex flex-col items-center justify-center py-5 px-20'>
   


        <div className='  container flex md:flex-row flex-col gap-20  bg-[#2B2B2B] '>
                <div className=' flex flex-col gap-4  justify-start'>

                    <div className=' flex  gap-1 items-center text-[#CCC]'>

                        <img src={icon} alt="logo" className=' h-10' />
                        <img src={logo} alt="heading" className=' h-[0.92813rem] w-[12.46338rem] md:h-[1.2375rem]' />
                    </div>
                    <p className=' text-[#CCC]'>NFT marketplace UI created with Anima for Figma.</p>
                    <p className=' text-[#CCC]'>Join our community</p>
                    <div className=' flex flex-1 gap-2 text-[#CCC]'>
                        <FaDiscord size={20} />
                        <FaYoutube size={20} />
                        <FaTwitter size={20} />
                        <FaFacebook size={20} />

                    </div>
                </div>
                <div className=' flex flex-col text-[#CCC]  gap-5 '>
                    <h1 className=' font-bold text-[1.375rem]'>Explore</h1>
                    <p className=' font-normal'>Marketplace</p>
                    <p className='font-normal'>Rankings</p>
                    <p className='font-normal'>Connect a wallet</p>

                </div>
                <div className=' flex flex-col text-[#ccc] gap-2 '>
                    <h1 className='font-bold text-[1.375rem]'>Join our weekly digest</h1>
                    <p className=' font-normal'>
                    Get exclusive promotions & updates <br /> straight to your inbox
                    </p>
                         <div className=' flex flex-col mt-10 sm:flex-row  gap-3 sm:gap-0'>

                        <input type="text" placeholder='Enter Your Email Address' className='px-10 bg-white py-2 rounded-xl' />
                        <button>Subscribe</button>
                         </div>
                         

                    

                </div>
                </div>
                <div className=' flex w-screen  justify-start  px-10 text-[#ccc] bg-[#2B2B2B] border-t-2 border-[#CCC] mt-5 sm:mt-2'>

           
                
<p className=' flex  font-normal mt-2 '>
Ⓒ NFT Market. Use this template freely
</p>
</div>




        </div>




    </div>
    </>
  )
}

export default FooterSide